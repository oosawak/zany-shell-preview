// ==========================================
// 0. INDEXEDDB HELPERS (Workshop Storage)
// ==========================================
const DB_NAME = 'zany-shell-workshop';
const DB_VERSION = 1;

function openWorkshopDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('files')) {
        db.createObjectStore('files', { keyPath: 'id' });
      }
    };
  });
}

async function saveFileToDB(category, id, filename, data) {
  const db = await openWorkshopDB();
  const tx = db.transaction('files', 'readwrite');
  const store = tx.objectStore('files');
  const key = `${category}/${id}/${filename}`;
  store.put({ id: key, category, itemId: id, filename, data });
  return new Promise((resolve, reject) => {
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
}

async function readFileFromDB(category, id, filename) {
  const db = await openWorkshopDB();
  const tx = db.transaction('files', 'readonly');
  const store = tx.objectStore('files');
  const key = `${category}/${id}/${filename}`;
  return new Promise((resolve, reject) => {
    const request = store.get(key);
    request.onsuccess = () => resolve(request.result ? request.result.data : null);
    request.onerror = () => reject(request.error);
  });
}

async function listFilesFromDB(category, id) {
  const db = await openWorkshopDB();
  const tx = db.transaction('files', 'readonly');
  const store = tx.objectStore('files');
  const prefix = `${category}/${id}/`;
  return new Promise((resolve, reject) => {
    const request = store.getAll();
    request.onsuccess = () => {
      const files = request.result
        .filter(f => f.id.startsWith(prefix))
        .map(f => f.filename);
      resolve(files);
    };
    request.onerror = () => reject(request.error);
  });
}

async function deleteFilesFromDB(category, id) {
  const db = await openWorkshopDB();
  const tx = db.transaction('files', 'readwrite');
  const store = tx.objectStore('files');
  const prefix = `${category}/${id}/`;
  return new Promise((resolve, reject) => {
    const request = store.getAll();
    request.onsuccess = () => {
      const toDelete = request.result.filter(f => f.id.startsWith(prefix));
      toDelete.forEach(f => store.delete(f.id));
    };
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
}

// ==========================================
// 1. CLOCK WIDGET (Live Time & Date)
// ==========================================
function updateClock() {
  const now = new Date();

  // Time: HH:MM
  let hh = now.getHours();
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ampm = hh >= 12 ? "PM" : "AM";
  hh = hh % 12;
  hh = hh ? hh : 12; // 0 -> 12
  const hhStr = String(hh).padStart(2, "0");

  document.getElementById("time-text").textContent = `${hhStr}:${mm}`;
  document.getElementById("ampm-text").textContent = ampm;

  // Date: YYYY/MM/DD(Day)
  const yyyy = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
  const day = weekdays[now.getDay()];

  document.getElementById("date-text").textContent = `${yyyy}/${month}/${date}(${day})`;
}
setInterval(updateClock, 1000);
updateClock();

// ==========================================
// 2. POMODORO TIMER ENGINE
// ==========================================
let pomoState = 'idle'; // 'idle', 'working', 'breaking', 'paused'
let loopCount = 2;
let workDuration = 25; // minutes
let breakDuration = 5; // minutes
let timeRemaining = 0; // seconds
let totalSessionTime = 0; // seconds
let pomoInterval = null;
let currentLoop = 1;
const pomoProgress = document.getElementById('pomo-progress');
const pomoPlayBtn = document.getElementById('pomo-play-btn');
const pomoConfigView = document.getElementById('pomo-config-view');
const pomoActiveView = document.getElementById('pomo-active-view');
const pomoStateLabel = document.getElementById('pomo-state-label');
const pomoTimeDisplay = document.getElementById('pomo-time-display');
const pomoStopBtn = document.getElementById('pomo-stop-btn');

const loopVal = document.getElementById('loop-val');
const workVal = document.getElementById('work-val');
const breakVal = document.getElementById('break-val');

// Configure progress ring length (2 * PI * 76 = ~477.5)
const RING_CIRCUMFERENCE = 477.5;
pomoProgress.style.strokeDasharray = RING_CIRCUMFERENCE;
pomoProgress.style.strokeDashoffset = RING_CIRCUMFERENCE;

function setProgress(percent) {
  const offset = RING_CIRCUMFERENCE - (percent / 100) * RING_CIRCUMFERENCE;
  pomoProgress.style.strokeDashoffset = offset;
}

// Controls configuration buttons
document.getElementById('loop-dec').addEventListener('click', () => { if (loopCount > 1) { loopCount--; loopVal.textContent = loopCount; } });
document.getElementById('loop-inc').addEventListener('click', () => { loopCount++; loopVal.textContent = loopCount; });
document.getElementById('work-dec').addEventListener('click', () => { if (workDuration > 1) { workDuration--; workVal.textContent = workDuration; } });
document.getElementById('work-inc').addEventListener('click', () => { workDuration++; workVal.textContent = workDuration; });
document.getElementById('break-dec').addEventListener('click', () => { if (breakDuration > 1) { breakDuration--; breakVal.textContent = breakDuration; } });
document.getElementById('break-inc').addEventListener('click', () => { breakDuration++; breakVal.textContent = breakDuration; });

pomoPlayBtn.addEventListener('click', togglePomo);
pomoStopBtn.addEventListener('click', stopPomo);

function togglePomo() {
  if (pomoState === 'idle') {
    // Start session
    currentLoop = 1;
    startInterval('working');
  } else if (pomoState === 'working' || pomoState === 'breaking') {
    // Pause session
    pomoState = 'paused';
    clearInterval(pomoInterval);
    showPlayIcon();
  } else if (pomoState === 'paused') {
    // Resume session
    const resumeState = pomoStateLabel.textContent === '作業中' ? 'working' : 'breaking';
    startInterval(resumeState, true);
  }
}

function startInterval(state, isResume = false) {
  pomoState = state;
  pomoStateLabel.textContent = state === 'working' ? '作業中' : '休憩中';
  pomoStateLabel.style.color = state === 'working' ? 'var(--warm-2)' : 'var(--accent-2)';

  if (!isResume) {
    timeRemaining = (state === 'working' ? workDuration : breakDuration) * 60;
    totalSessionTime = timeRemaining;
  }

  pomoConfigView.classList.add('hidden');
  pomoActiveView.classList.remove('hidden');
  showPauseIcon();
  updateTimerDisplay();

  pomoInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();

    // Update progress bar
    const percent = (timeRemaining / totalSessionTime) * 100;
    setProgress(percent);

    if (timeRemaining <= 0) {
      clearInterval(pomoInterval);
      playAlarmSound();

      if (pomoState === 'working') {
        // Switch to Break
        startInterval('breaking');
      } else if (pomoState === 'breaking') {
        if (currentLoop < loopCount) {
          // Next loop
          currentLoop++;
          startInterval('working');
        } else {
          // Finished all loops
          stopPomo();
        }
      }
    }
  }, 1000);
}

function stopPomo() {
  pomoState = 'idle';
  clearInterval(pomoInterval);
  setProgress(0);
  pomoConfigView.classList.remove('hidden');
  pomoActiveView.classList.add('hidden');
  showPlayIcon();
}

function updateTimerDisplay() {
  const m = String(Math.floor(timeRemaining / 60)).padStart(2, "0");
  const s = String(timeRemaining % 60).padStart(2, "0");
  pomoTimeDisplay.textContent = `${m}:${s}`;
}

function showPlayIcon() {
  pomoPlayBtn.querySelector('.play-icon').classList.remove('hidden');
  pomoPlayBtn.querySelector('.pause-icon').classList.add('hidden');
}

function showPauseIcon() {
  pomoPlayBtn.querySelector('.play-icon').classList.add('hidden');
  pomoPlayBtn.querySelector('.pause-icon').classList.remove('hidden');
}

function playAlarmSound() {
  // Beep or play brief sound
  const audio = document.getElementById('bgm');
  if (audio) {
    // Temporarily trigger flash sound or chime
    console.log('Chime sound alert!');
  }
}

// ==========================================
// 3. BGM MUSIC PLAYER CONTROL
// ==========================================
const playlist = [
  { title: "Lofi Smooth", artist: "PulseBox" },
  { title: "Late Night Coding", artist: "Lo-Fi Beats" },
  { title: "Rainy Window", artist: "Cozy Chill" }
];
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;

const bgm = document.getElementById('bgm');
const playBtn = document.getElementById('player-play');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');
const volumeSlider = document.getElementById('volume-slider');
const muteBtn = document.getElementById('player-mute');
const seekSlider = document.getElementById('seek-slider');
const progressBarFill = document.getElementById('progress-bar-fill');
const currentTimeLabel = document.getElementById('current-time');
const totalTimeLabel = document.getElementById('total-time');

// Load track metadata
function loadTrack(index) {
  currentTrackIndex = index;
  trackTitle.textContent = playlist[index].title;
  trackArtist.textContent = playlist[index].artist;
  // In a real app we might load dynamic files: bgm.src = `./assets/${playlist[index].file}`;
}
loadTrack(currentTrackIndex);

playBtn.addEventListener('click', togglePlay);
function togglePlay() {
  if (isPlaying) {
    bgm.pause();
    isPlaying = false;
    playBtn.querySelector('.play-icon').classList.remove('hidden');
    playBtn.querySelector('.pause-icon').classList.add('hidden');
  } else {
    bgm.play().catch(e => console.log('BGM playback failed due to user-gesture requirements:', e));
    isPlaying = true;
    playBtn.querySelector('.play-icon').classList.add('hidden');
    playBtn.querySelector('.pause-icon').classList.remove('hidden');
  }
}

// Play/pause key listener or gesture triggers play
window.addEventListener('click', () => {
  // Trigger audio context if user clicked anywhere (normal browser requirement)
}, { once: true });

// Volume control
volumeSlider.addEventListener('input', (e) => {
  const vol = e.target.value / 100;
  bgm.volume = vol;
  if (vol === 0) {
    showMuteIcon();
  } else {
    showVolumeIcon();
  }
});

muteBtn.addEventListener('click', () => {
  if (bgm.muted) {
    bgm.muted = false;
    showVolumeIcon();
  } else {
    bgm.muted = true;
    showMuteIcon();
  }
});

function showVolumeIcon() {
  muteBtn.querySelector('.vol-icon').classList.remove('hidden');
  muteBtn.querySelector('.mute-icon').classList.add('hidden');
}

function showMuteIcon() {
  muteBtn.querySelector('.vol-icon').classList.add('hidden');
  muteBtn.querySelector('.mute-icon').classList.remove('hidden');
}

// Timeline progress updates
bgm.addEventListener('timeupdate', () => {
  if (bgm.duration) {
    const progress = (bgm.currentTime / bgm.duration) * 100;
    seekSlider.value = progress;
    progressBarFill.style.width = `${progress}%`;

    // Update labels
    currentTimeLabel.textContent = formatTime(bgm.currentTime);
    totalTimeLabel.textContent = formatTime(bgm.duration);
  }
});

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = String(Math.floor(seconds % 60)).padStart(2, "0");
  return `${m}:${s}`;
}

seekSlider.addEventListener('input', (e) => {
  if (bgm.duration) {
    const seekTo = (e.target.value / 100) * bgm.duration;
    bgm.currentTime = seekTo;
  }
});

// Previous/Next
document.getElementById('player-prev').addEventListener('click', () => {
  let prevIndex = currentTrackIndex - 1;
  if (prevIndex < 0) prevIndex = playlist.length - 1;
  loadTrack(prevIndex);
  if (isPlaying) bgm.play();
});

document.getElementById('player-next').addEventListener('click', () => {
  nextTrack();
});

function nextTrack() {
  let nextIndex = currentTrackIndex + 1;
  if (isShuffle) {
    nextIndex = Math.floor(Math.random() * playlist.length);
  } else if (nextIndex >= playlist.length) {
    nextIndex = 0;
  }
  loadTrack(nextIndex);
  if (isPlaying) bgm.play();
}

bgm.addEventListener('ended', () => {
  if (isRepeat) {
    bgm.currentTime = 0;
    bgm.play();
  } else {
    nextTrack();
  }
});

// Shuffle/Repeat buttons toggle
const shuffleBtn = document.getElementById('player-shuffle');
const repeatBtn = document.getElementById('player-repeat');

shuffleBtn.addEventListener('click', () => {
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle('active', isShuffle);
});

repeatBtn.addEventListener('click', () => {
  isRepeat = !isRepeat;
  repeatBtn.classList.toggle('active', isRepeat);
});

// ==========================================
// 4. PERSISTENT TODO LIST (localStorage)
// ==========================================
let todos = JSON.parse(localStorage.getItem('todos')) || [];

const todoPanel = document.getElementById('todo-panel');
const btnTodo = document.getElementById('btn-todo');
const todoCloseBtn = document.getElementById('todo-close-btn');
const todoInput = document.getElementById('todo-input');
const todoAddBtn = document.getElementById('todo-add-btn');
const todoList = document.getElementById('todo-list');

btnTodo.addEventListener('click', () => {
  todoPanel.classList.toggle('active');
  btnTodo.classList.toggle('active', todoPanel.classList.contains('active'));
});

todoCloseBtn.addEventListener('click', () => {
  todoPanel.classList.remove('active');
  btnTodo.classList.remove('active');
});

todoAddBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') addTodo(); });

function addTodo() {
  const text = todoInput.value.trim();
  if (text) {
    const todo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    todos.push(todo);
    saveTodos();
    renderTodos();
    todoInput.value = '';
  }
}

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const left = document.createElement('div');
    left.className = 'todo-item-left';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
      todo.completed = checkbox.checked;
      saveTodos();
      renderTodos();
    });

    const span = document.createElement('span');
    span.className = `todo-text ${todo.completed ? 'completed' : ''}`;
    span.textContent = todo.text;

    left.appendChild(checkbox);
    left.appendChild(span);

    const delBtn = document.createElement('button');
    delBtn.className = 'todo-del-btn';
    delBtn.textContent = '削除';
    delBtn.addEventListener('click', () => {
      todos = todos.filter(t => t.id !== todo.id);
      saveTodos();
      renderTodos();
    });

    li.appendChild(left);
    li.appendChild(delBtn);
    todoList.appendChild(li);
  });
}
renderTodos();

// ==========================================
// 5. RAIN PARTICLES ANIMATION
// ==========================================
let rainActive = true;
const rainCanvas = document.getElementById("rain");
const rainCtx = rainCanvas.getContext("2d");
rainCanvas.width = window.innerWidth;
rainCanvas.height = window.innerHeight;

const drops = [];
for (let i = 0; i < 200; i++) {
  drops.push({
    x: Math.random() * rainCanvas.width,
    y: Math.random() * rainCanvas.height,
    len: Math.random() * 20 + 10,
    speed: Math.random() * 4 + 4
  });
}

function drawRain() {
  if (rainActive) {
    rainCtx.clearRect(0, 0, rainCanvas.width, rainCanvas.height);
    rainCtx.strokeStyle = "rgba(255,255,255,0.22)";
    rainCtx.lineWidth = 1;

    drops.forEach(d => {
      rainCtx.beginPath();
      rainCtx.moveTo(d.x, d.y);
      rainCtx.lineTo(d.x, d.y + d.len);
      rainCtx.stroke();

      d.y += d.speed;
      if (d.y > rainCanvas.height) {
        d.y = -20;
        d.x = Math.random() * rainCanvas.width;
      }
    });
  } else {
    rainCtx.clearRect(0, 0, rainCanvas.width, rainCanvas.height);
  }
  requestAnimationFrame(drawRain);
}
drawRain();

// Window Resize handler for canvas
window.addEventListener('resize', () => {
  rainCanvas.width = window.innerWidth;
  rainCanvas.height = window.innerHeight;
});

// Rain toggle toolbar button
const btnRain = document.getElementById('btn-rain');
btnRain.addEventListener('click', () => {
  rainActive = !rainActive;
  btnRain.classList.toggle('active', rainActive);
  if (rainActive) {
    rainCanvas.classList.remove('hidden');
  } else {
    rainCanvas.classList.add('hidden');
  }
});

// ==========================================
// 6. AMBIENT SOUND & VOLUME POPOVER
// ==========================================
const btnSound = document.getElementById('btn-sound');
const ambientPopover = document.getElementById('ambient-popover');
const ambientSlider = document.getElementById('ambient-slider');
const ambientRain = document.getElementById('ambient-rain');

btnSound.addEventListener('click', (e) => {
  // Prevent immediate closing by clicking slider
  e.stopPropagation();
  ambientPopover.classList.toggle('active');
  btnSound.classList.toggle('active', ambientPopover.classList.contains('active'));
});

// Close popover when clicking anywhere else
window.addEventListener('click', () => {
  ambientPopover.classList.remove('active');
  btnSound.classList.remove('active');
});
ambientPopover.addEventListener('click', (e) => e.stopPropagation());

ambientSlider.addEventListener('input', (e) => {
  const vol = e.target.value / 100;
  ambientRain.volume = vol;
  if (vol > 0) {
    ambientRain.play().catch(err => console.log(err));
  } else {
    ambientRain.pause();
  }
});

// ==========================================
// 7. SCENE CHANGE / THEME SWITCHER
// ==========================================
const SCENES = ['night', 'sunset', 'ambient'];
let currentScene = localStorage.getItem('scene') || 'night';
if (!SCENES.includes(currentScene)) currentScene = 'night';
const btnScene = document.getElementById('btn-scene');
const sceneBgs = {
  night: document.getElementById('bg-night'),
  sunset: document.getElementById('bg-sunset'),
  ambient: document.getElementById('bg-ambient')
};

function applyScene() {
  SCENES.forEach(name => sceneBgs[name].classList.toggle('active', name === currentScene));
  document.body.classList.toggle('theme-ambient', currentScene === 'ambient');
  localStorage.setItem('scene', currentScene);
  update3DLights();
}

btnScene.addEventListener('click', () => {
  currentScene = SCENES[(SCENES.indexOf(currentScene) + 1) % SCENES.length];
  applyScene();
});
// NOTE: 起動時の applyScene() はファイル末尾で呼ぶ。
// ここで呼ぶと update3DLights() が宣言前の THREE_Lib (TDZ) に触れて落ちる。

// ==========================================
// 8. DISTRACTION-FREE & SETTINGS
// ==========================================
const btnDistraction = document.getElementById('btn-distraction');
let distractionMode = false;

btnDistraction.addEventListener('click', () => {
  distractionMode = !distractionMode;
  document.body.classList.toggle('hide-ui', distractionMode);
  btnDistraction.classList.toggle('active', distractionMode);
});

// Settings panel with feature on/off toggles (persisted to localStorage)
const settingsPanel = document.getElementById('settings-panel');
const btnSettings = document.getElementById('btn-settings');
const settingsCloseBtn = document.getElementById('settings-close-btn');

const FEATURE_DEFAULTS = {
  clock: true,
  pomodoro: true,
  music: true,
  rain: true,
  vrm: true,
  ssh: true
};
let features = { ...FEATURE_DEFAULTS, ...JSON.parse(localStorage.getItem('features') || '{}') };

function applyFeatures() {
  document.querySelector('.clock-widget').classList.toggle('hidden', !features.clock);
  document.querySelector('.top-right-panel').classList.toggle('hidden', !features.pomodoro);
  document.querySelector('.music-player').classList.toggle('hidden', !features.music);
  document.getElementById('vrm-canvas').classList.toggle('hidden', !features.vrm);
  document.getElementById('btn-ssh').classList.toggle('hidden', !features.ssh);

  // Rain: reuse the existing toolbar toggle state
  rainActive = features.rain;
  btnRain.classList.toggle('active', rainActive);
  rainCanvas.classList.toggle('hidden', !rainActive);

  // Music off also pauses playback; SSH off also closes its panel
  if (!features.music) document.getElementById('bgm').pause();
  if (!features.ssh) {
    sshPanel.classList.remove('active');
    btnSsh.classList.remove('active');
  }
}

Object.keys(FEATURE_DEFAULTS).forEach(key => {
  const checkbox = document.getElementById(`feat-${key}`);
  checkbox.checked = features[key];
  checkbox.addEventListener('change', () => {
    features[key] = checkbox.checked;
    localStorage.setItem('features', JSON.stringify(features));
    applyFeatures();
  });
});

// UI color theme (independent from the background scene)
const UI_THEMES = ['default', 'zany'];
const uiThemeSelect = document.getElementById('ui-theme-select');
let uiTheme = localStorage.getItem('uiTheme') || 'zany';
if (!UI_THEMES.includes(uiTheme)) uiTheme = 'zany';

function applyUiTheme() {
  UI_THEMES.forEach(name => document.body.classList.toggle(`ui-theme-${name}`, name === uiTheme));
  localStorage.setItem('uiTheme', uiTheme);
}

uiThemeSelect.value = uiTheme;
uiThemeSelect.addEventListener('change', () => {
  uiTheme = uiThemeSelect.value;
  applyUiTheme();
});
applyUiTheme();

// Drawers share the same slot, so opening one closes the others
function closeOtherDrawers(except) {
  [[todoPanel, btnTodo], [settingsPanel, btnSettings], [sshPanel, btnSsh], [workshopPanel, btnWorkshopEl]].forEach(([panel, btn]) => {
    if (panel !== except) {
      panel.classList.remove('active');
      if (btn) btn.classList.remove('active');
    }
  });
}

btnTodo.addEventListener('click', () => closeOtherDrawers(todoPanel));

btnSettings.addEventListener('click', () => {
  closeOtherDrawers(settingsPanel);
  settingsPanel.classList.toggle('active');
  btnSettings.classList.toggle('active', settingsPanel.classList.contains('active'));
});

settingsCloseBtn.addEventListener('click', () => {
  settingsPanel.classList.remove('active');
  btnSettings.classList.remove('active');
});

// ==========================================
// 8.5 SSH TERMINAL PANEL
// ==========================================
const sshPanel = document.getElementById('ssh-panel');
const btnSsh = document.getElementById('btn-ssh');
const sshCloseBtn = document.getElementById('ssh-close-btn');
const sshConnectForm = document.getElementById('ssh-connect-form');
const sshTerminal = document.getElementById('ssh-terminal');
const sshAuthMethod = document.getElementById('ssh-auth-method');
const sshPasswordInput = document.getElementById('ssh-password');
const sshKeypathInput = document.getElementById('ssh-keypath');
const sshConnectBtn = document.getElementById('ssh-connect-btn');
const sshDisconnectBtn = document.getElementById('ssh-disconnect-btn');
const sshStatus = document.getElementById('ssh-status');
const sshOutput = document.getElementById('ssh-output');
const sshCommandInput = document.getElementById('ssh-command');
const sshHostInput = document.getElementById('ssh-host');
const sshUserInput = document.getElementById('ssh-user');
const sshSavePassword = document.getElementById('ssh-save-password');

// Restore saved connection info (password only if the user opted in)
const savedSshConn = JSON.parse(localStorage.getItem('sshConn') || 'null');
if (savedSshConn) {
  sshHostInput.value = savedSshConn.host || '';
  sshUserInput.value = savedSshConn.user || '';
  sshAuthMethod.value = savedSshConn.authMethod || 'password';
  sshKeypathInput.value = savedSshConn.keyPath || '';
  sshSavePassword.checked = !!savedSshConn.savePassword;
  if (savedSshConn.savePassword && savedSshConn.password) {
    sshPasswordInput.value = savedSshConn.password;
  }
  const useKey = sshAuthMethod.value === 'key';
  sshPasswordInput.classList.toggle('hidden', useKey);
  sshKeypathInput.classList.toggle('hidden', !useKey);
}

function saveSshConn() {
  localStorage.setItem('sshConn', JSON.stringify({
    host: sshHostInput.value.trim(),
    user: sshUserInput.value.trim(),
    authMethod: sshAuthMethod.value,
    keyPath: sshKeypathInput.value.trim(),
    savePassword: sshSavePassword.checked,
    password: sshSavePassword.checked ? sshPasswordInput.value : ''
  }));
}

btnSsh.addEventListener('click', () => {
  closeOtherDrawers(sshPanel);
  sshPanel.classList.toggle('active');
  btnSsh.classList.toggle('active', sshPanel.classList.contains('active'));
});

sshCloseBtn.addEventListener('click', () => {
  sshPanel.classList.remove('active');
  btnSsh.classList.remove('active');
});

sshAuthMethod.addEventListener('change', () => {
  const useKey = sshAuthMethod.value === 'key';
  sshPasswordInput.classList.toggle('hidden', useKey);
  sshKeypathInput.classList.toggle('hidden', !useKey);
});

function sshInvoke(cmd, args) {
  if (!window.__TAURI__) return Promise.reject('Tauri 環境ではありません');
  return window.__TAURI__.core.invoke(cmd, args);
}

function appendSshOutput(text) {
  sshOutput.textContent += text;
  sshOutput.scrollTop = sshOutput.scrollHeight;
}

sshConnectBtn.addEventListener('click', async () => {
  const host = sshHostInput.value.trim();
  const user = sshUserInput.value.trim();
  if (!host || !user) return;

  sshConnectBtn.disabled = true;
  sshConnectBtn.textContent = '接続中...';
  try {
    let message;
    if (sshAuthMethod.value === 'key') {
      message = await sshInvoke('ssh_connect_with_key', {
        host, user,
        keyPath: sshKeypathInput.value.trim() || '~/.ssh/id_ed25519'
      });
    } else {
      message = await sshInvoke('ssh_connect', {
        host, user,
        password: sshPasswordInput.value
      });
    }
    saveSshConn();
    sshStatus.textContent = `${user}@${host}`;
    sshOutput.textContent = `${message}\n`;
    sshConnectForm.classList.add('hidden');
    sshTerminal.classList.remove('hidden');
    sshCommandInput.focus();
  } catch (err) {
    alert(`SSH 接続エラー: ${err}`);
  } finally {
    sshConnectBtn.disabled = false;
    sshConnectBtn.textContent = '接続';
  }
});

sshCommandInput.addEventListener('keypress', async (e) => {
  if (e.key !== 'Enter') return;
  const command = sshCommandInput.value.trim();
  if (!command) return;
  sshCommandInput.value = '';
  appendSshOutput(`$ ${command}\n`);
  try {
    const output = await sshInvoke('ssh_exec', { command });
    appendSshOutput(output.endsWith('\n') || output === '' ? output : output + '\n');
  } catch (err) {
    appendSshOutput(`[エラー] ${err}\n`);
  }
});

sshDisconnectBtn.addEventListener('click', async () => {
  try {
    await sshInvoke('ssh_disconnect');
  } catch (err) {
    console.error('SSH disconnect error:', err);
  }
  sshTerminal.classList.add('hidden');
  sshConnectForm.classList.remove('hidden');
  sshOutput.textContent = '';
});

applyFeatures();

// Close widget command using Tauri API
const btnClose = document.getElementById('btn-close');
btnClose.addEventListener('click', () => {
  if (window.__TAURI__) {
    try {
      window.__TAURI__.window.getCurrentWindow().close();
    } catch (err) {
      console.error('Error closing Tauri window:', err);
    }
  } else {
    // Normal browser alert fallback
    if (confirm('ウィジェットを終了しますか？ (ブラウザ環境のためタブを閉じます)')) {
      window.close();
    }
  }
});

// ==========================================
// 9. 3D MODEL INTEGRATION (Three.js)
// ==========================================
let THREE_Lib = null;
let GLTFLoader_Lib = null;
let VRMLoaderPlugin_Lib = null;

let vrmRenderer3D = null;
let vrmScene3D = null;
let vrmCamera3D = null;
let vrmDirectionalLight3D = null;
let vrmAmbientLight3D = null;
let currentVrm = null;
let currentVrmRoot = null;
let vrmLookTargetObj = null;

let glbRenderer3D = null;
let glbScene3D = null;
let glbCamera3D = null;
let glbDirectionalLight3D = null;
let glbAmbientLight3D = null;
let currentGlbRoot = null;
let currentGlbChairNode = null;
let currentGlbNodeSummary = 'GLB: 読み込み待ち';
let currentGlbChairCandidateSummary = '椅子候補: 読み込み待ち';

const lookAtTarget = { position: { x: 0, y: 1.0, z: 2.0 } }; // Look target fallback
const vrmCanvas = document.getElementById('vrm-canvas');
const glbCanvas = document.getElementById('glb-canvas');
const vrmUpload = document.getElementById('vrm-upload');
const glbUpload = document.getElementById('glb-upload');
const btnVrm = document.getElementById('btn-vrm');
const btnGlb = document.getElementById('btn-glb');
const DEFAULT_VRM_URL = './assets/AvatarSample_A.vrm';
const DEFAULT_GLB_URL = './assets/gaming_setup_v2_low-poly.glb';
const btnSaveWorkshop = document.getElementById('btn-save-workshop');
const workshopSaveModal = document.getElementById('workshop-save-modal');
const workshopSaveClose = document.getElementById('workshop-save-close');
const workshopSaveType = document.getElementById('workshop-save-type');
const workshopSaveId = document.getElementById('workshop-save-id');
const workshopSaveName = document.getElementById('workshop-save-name');
const workshopSaveDesc = document.getElementById('workshop-save-desc');
const workshopSaveAuthor = document.getElementById('workshop-save-author');
const workshopSaveConfirm = document.getElementById('workshop-save-confirm');
const workshopSaveCancel = document.getElementById('workshop-save-cancel');

let pendingSaveFile = null;
let pendingSaveCategory = null;

btnVrm.addEventListener('click', () => vrmUpload.click());
btnGlb.addEventListener('click', () => glbUpload.click());
btnVrm.title = 'VRMアバターを読み込む';
btnGlb.title = 'GLBモデルを読み込む';
vrmUpload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    loadVrmModel(url);
    pendingSaveFile = file;
    pendingSaveCategory = 'vrm_sets';
    if (btnSaveWorkshop) btnSaveWorkshop.classList.remove('hidden');
  }
});
glbUpload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    loadGlbModel(url);
    pendingSaveFile = file;
    pendingSaveCategory = 'glb_characters';
    if (btnSaveWorkshop) btnSaveWorkshop.classList.remove('hidden');
  }
});

if (btnSaveWorkshop) {
  btnSaveWorkshop.addEventListener('click', () => {
    if (!pendingSaveFile) return;
    workshopSaveType.textContent = pendingSaveCategory === 'vrm_sets' ? 'VRM' : 'GLB';
    workshopSaveId.value = '';
    workshopSaveName.value = pendingSaveFile.name.replace(/\.[^.]+$/, '');
    workshopSaveDesc.value = '';
    workshopSaveAuthor.value = '';
    workshopSaveModal.classList.remove('hidden');
  });
}

if (workshopSaveClose) {
  workshopSaveClose.addEventListener('click', () => {
    workshopSaveModal.classList.add('hidden');
  });
}

if (workshopSaveCancel) {
  workshopSaveCancel.addEventListener('click', () => {
    workshopSaveModal.classList.add('hidden');
  });
}

if (workshopSaveConfirm) {
  workshopSaveConfirm.addEventListener('click', async () => {
    const id = workshopSaveId.value.trim();
    const name = workshopSaveName.value.trim();
    const desc = workshopSaveDesc.value.trim();
    const author = workshopSaveAuthor.value.trim();

    if (!id || !name) {
      alert('IDと名前は必須です');
      return;
    }

    try {
      const ext = pendingSaveFile.name.split('.').pop();
      const filename = `model.${ext}`;
      const arrayBuffer = await pendingSaveFile.arrayBuffer();
      const data = Array.from(new Uint8Array(arrayBuffer));

      if (window.__TAURI__) {
        await workshopInvoke('workshop_create_item', {
          category: pendingSaveCategory,
          id,
          name,
          description: desc,
          author
        });
        await workshopInvoke('workshop_save_file', {
          category: pendingSaveCategory,
          id,
          filename,
          data
        });
      } else {
        const meta = {
          id,
          name,
          description: desc,
          author,
          version: '1.0.0',
          item_type: pendingSaveCategory,
          created_at: String(Date.now())
        };
        localStorage.setItem(`workshop_meta_${pendingSaveCategory}_${id}`, JSON.stringify(meta));
        await saveFileToDB(pendingSaveCategory, id, filename, data);
      }

      workshopSaveModal.classList.add('hidden');
      if (btnSaveWorkshop) btnSaveWorkshop.classList.add('hidden');
      alert('Workshopに保存しました');
    } catch (err) {
      alert('保存エラー: ' + err);
    }
  });
}

function create3DContext(canvas) {
  const THREE = THREE_Lib;
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true
  });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, canvas.clientWidth / canvas.clientHeight, 0.1, 20.0);
  camera.position.set(0.0, 1.0, 1.6);
  camera.lookAt(0.0, 0.88, 0.0);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
  scene.add(directionalLight);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  return { renderer, scene, camera, directionalLight, ambientLight };
}

// Lazy load Three.js via CDNs
async function checkAndInitVRM() {
  try {
    const threeMod = await import('three');
    THREE_Lib = threeMod;

    const loaderMod = await import('three/addons/loaders/GLTFLoader.js');
    GLTFLoader_Lib = loaderMod.GLTFLoader;

    const vrmMod = await import('@pixiv/three-vrm');
    VRMLoaderPlugin_Lib = vrmMod.VRMLoaderPlugin;

    initThreeScenes();
    loadVrmModel(DEFAULT_VRM_URL);
    loadGlbModel(DEFAULT_GLB_URL);
  } catch (err) {
    console.warn('Three.js / VRM modules failed to load via import map. 3D models disabled.', err);
    btnVrm.style.display = 'none';
    btnGlb.style.display = 'none';
  }
}
checkAndInitVRM();

function initThreeScenes() {
  const THREE = THREE_Lib;

  const vrmContext = create3DContext(vrmCanvas);
  vrmRenderer3D = vrmContext.renderer;
  vrmScene3D = vrmContext.scene;
  vrmCamera3D = vrmContext.camera;
  vrmDirectionalLight3D = vrmContext.directionalLight;
  vrmAmbientLight3D = vrmContext.ambientLight;

  const glbContext = create3DContext(glbCanvas);
  glbRenderer3D = glbContext.renderer;
  glbScene3D = glbContext.scene;
  glbCamera3D = glbContext.camera;
  glbDirectionalLight3D = glbContext.directionalLight;
  glbAmbientLight3D = glbContext.ambientLight;

  update3DLights();

  vrmLookTargetObj = new THREE.Object3D();
  vrmLookTargetObj.position.set(0, 0.9, 1.5);
  vrmScene3D.add(vrmLookTargetObj);
  lookAtTarget.position = vrmLookTargetObj.position;

  // Sleepy eyes logic state
  let eyeState = 'closed';
  let eyeTimer = Math.random() * 5.0 + 5.0;
  let blinkWeight = 1.0;

  function updateSleepyEyes(vrm, deltaTime) {
    if (!vrm.expressionManager) return;

    eyeTimer -= deltaTime;
    const transitionSpeed = 5.0;

    if (eyeState === 'closed') {
      blinkWeight = 1.0;
      if (eyeTimer <= 0) {
        eyeState = 'opening';
      }
    } else if (eyeState === 'opening') {
      blinkWeight -= deltaTime * transitionSpeed;
      if (blinkWeight <= 0.0) {
        blinkWeight = 0.0;
        eyeState = 'open';
        eyeTimer = Math.random() * 2.0 + 1.0;
      }
    } else if (eyeState === 'open') {
      blinkWeight = 0.0;
      if (eyeTimer <= 0) {
        eyeState = 'closing';
      }
    } else if (eyeState === 'closing') {
      blinkWeight += deltaTime * transitionSpeed;
      if (blinkWeight >= 1.0) {
        blinkWeight = 1.0;
        eyeState = 'closed';
        eyeTimer = Math.random() * 7.0 + 6.0;
      }
    }

    vrm.expressionManager.setValue('blink', blinkWeight);
  }

  const clock = new THREE.Clock();
  function tick() {
    requestAnimationFrame(tick);

    const deltaTime = clock.getDelta();
    const elapsedTime = clock.getElapsedTime();

    if (currentVrm) {
      const chest = currentVrm.humanoid.getNormalizedBoneNode('chest');
      if (chest) {
        chest.rotation.z = Math.sin(elapsedTime * 1.5) * 0.012;
        chest.rotation.x = (Math.sin(elapsedTime * 1.5) + 1.0) * 0.005;
      }

      const head = currentVrm.humanoid.getNormalizedBoneNode('head');
      if (head) {
        head.rotation.y = Math.sin(elapsedTime * 0.4) * 0.03;
      }

      updateSleepyEyes(currentVrm, deltaTime);
      currentVrm.update(deltaTime);
    }

    if (vrmRenderer3D && vrmScene3D && vrmCamera3D) {
      vrmRenderer3D.render(vrmScene3D, vrmCamera3D);
    }
    if (glbRenderer3D && glbScene3D && glbCamera3D) {
      glbRenderer3D.render(glbScene3D, glbCamera3D);
    }
  }
  tick();

  window.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    lookAtTarget.position.set(x * 1.8, y * 1.2 + 0.9, 1.5);
  });

  window.addEventListener('resize', () => {
    if (vrmRenderer3D && vrmCamera3D) {
      vrmRenderer3D.setSize(vrmCanvas.clientWidth, vrmCanvas.clientHeight);
      vrmCamera3D.aspect = vrmCanvas.clientWidth / vrmCanvas.clientHeight;
      vrmCamera3D.updateProjectionMatrix();
    }
    if (glbRenderer3D && glbCamera3D) {
      glbRenderer3D.setSize(glbCanvas.clientWidth, glbCanvas.clientHeight);
      glbCamera3D.aspect = glbCanvas.clientWidth / glbCanvas.clientHeight;
      glbCamera3D.updateProjectionMatrix();
    }
  });
}

function update3DLights() {
  if (!THREE_Lib) return;

  const applyThemeLights = (directionalLight, ambientLight) => {
    if (!directionalLight || !ambientLight) return;

    if (currentScene === 'night') {
      ambientLight.color.setHex(0x2d2d4c);
      ambientLight.intensity = 0.5;
      directionalLight.color.setHex(0xffaa66);
      directionalLight.intensity = 0.85;
      directionalLight.position.set(1.2, 0.4, 0.8).normalize();
    } else if (currentScene === 'ambient') {
      ambientLight.color.setHex(0x1e3a52);
      ambientLight.intensity = 0.6;
      directionalLight.color.setHex(0x7fe6ff);
      directionalLight.intensity = 0.9;
      directionalLight.position.set(-0.8, 0.8, 1.0).normalize();
    } else {
      ambientLight.color.setHex(0x543b3b);
      ambientLight.intensity = 0.55;
      directionalLight.color.setHex(0xff6633);
      directionalLight.intensity = 1.25;
      directionalLight.position.set(-1.6, 0.6, 0.6).normalize();
    }
  };

  applyThemeLights(vrmDirectionalLight3D, vrmAmbientLight3D);
  applyThemeLights(glbDirectionalLight3D, glbAmbientLight3D);
}

function disposeCurrentModel(scene, root) {
  if (!scene || !root) return;
  scene.remove(root);
  root.traverse((object) => {
    if (object.geometry) object.geometry.dispose();
    if (object.material) {
      if (Array.isArray(object.material)) {
        object.material.forEach((material) => material.dispose());
      } else {
        object.material.dispose();
      }
    }
  });
}

function frameGenericModel(modelRoot, camera) {
  const THREE = THREE_Lib;
  const box = new THREE.Box3().setFromObject(modelRoot);
  const size = new THREE.Vector3();
  const center = new THREE.Vector3();
  box.getSize(size);
  box.getCenter(center);

  modelRoot.position.x -= center.x;
  modelRoot.position.y -= center.y;
  modelRoot.position.z -= center.z;

  const maxDim = Math.max(size.x, size.y, size.z) || 1;
  const distance = Math.max(1.8, (maxDim / 2) / Math.tan((camera.fov * Math.PI / 180) / 2) * 1.3);
  camera.position.set(0.0, Math.max(0.4, size.y * 0.15), distance);
  camera.lookAt(0.0, 0.0, 0.0);
}

function frameVrmModel(modelRoot, camera) {
  const THREE = THREE_Lib;
  const box = new THREE.Box3().setFromObject(modelRoot);
  const size = new THREE.Vector3();
  const center = new THREE.Vector3();
  box.getSize(size);
  box.getCenter(center);

  modelRoot.position.x -= center.x;
  modelRoot.position.y -= center.y;
  modelRoot.position.z -= center.z;

  const maxDim = Math.max(size.x, size.y, size.z) || 1;
  const distance = Math.max(2.8, (maxDim / 2) / Math.tan((camera.fov * Math.PI / 180) / 2) * 1.75);
  camera.position.set(0.0, Math.max(0.55, size.y * 0.18), distance);
  camera.lookAt(0.0, Math.max(0.0, size.y * 0.02), 0.0);
}

function loadVrmModel(url) {
  if (!vrmScene3D || !GLTFLoader_Lib || !VRMLoaderPlugin_Lib) return;

  const THREE = THREE_Lib;
  const loader = new GLTFLoader_Lib();

  disposeCurrentModel(vrmScene3D, currentVrmRoot);
  currentVrm = null;
  currentVrmRoot = null;

  btnVrm.classList.add('active');
  vrmCanvas.classList.remove('hidden');

  loader.register((parser) => new VRMLoaderPlugin_Lib(parser));
  loader.load(
    url,
    (gltf) => {
      const vrm = gltf.userData.vrm;
      currentVrm = vrm;
      currentVrmRoot = vrm.scene;
      vrmScene3D.add(vrm.scene);

      vrm.scene.rotation.y = (vrmSettings.rotation * Math.PI) / 180;
      vrm.scene.position.set(0.0, -0.18, 0.0);

      if (vrm.humanoid) {
        const leftUpperLeg = vrm.humanoid.getNormalizedBoneNode('leftUpperLeg');
        const rightUpperLeg = vrm.humanoid.getNormalizedBoneNode('rightUpperLeg');
        const leftLowerLeg = vrm.humanoid.getNormalizedBoneNode('leftLowerLeg');
        const rightLowerLeg = vrm.humanoid.getNormalizedBoneNode('rightLowerLeg');

        if (leftUpperLeg) leftUpperLeg.rotation.x = -1.25;
        if (rightUpperLeg) rightUpperLeg.rotation.x = -1.25;
        if (leftLowerLeg) leftLowerLeg.rotation.x = 1.35;
        if (rightLowerLeg) rightLowerLeg.rotation.x = 1.35;

        const leftUpperArm = vrm.humanoid.getNormalizedBoneNode('leftUpperArm');
        const rightUpperArm = vrm.humanoid.getNormalizedBoneNode('rightUpperArm');
        const leftLowerArm = vrm.humanoid.getNormalizedBoneNode('leftLowerArm');
        const rightLowerArm = vrm.humanoid.getNormalizedBoneNode('rightLowerArm');

        if (leftUpperArm) {
          leftUpperArm.rotation.z = -1.15;
          leftUpperArm.rotation.x = 0.2;
        }
        if (rightUpperArm) {
          rightUpperArm.rotation.z = 1.15;
          rightUpperArm.rotation.x = 0.2;
        }
        if (leftLowerArm) leftLowerArm.rotation.y = -0.25;
        if (rightLowerArm) rightLowerArm.rotation.y = 0.25;
      }

      if (vrm.lookAt && vrmLookTargetObj) {
        vrm.lookAt.target = vrmLookTargetObj;
      }

      vrm.scene.updateMatrixWorld(true);
      frameVrmModel(vrm.scene, vrmCamera3D);

      console.log('VRM avatar loaded successfully.');
    },
    (progress) => {
      console.log('VRM loading progress...', (progress.loaded / progress.total * 100).toFixed(2) + '%');
    },
    (error) => {
      console.error('Failed to load VRM model:', error);
      alert('VRMモデルのロードに失敗しました。ファイル形式が正しいかご確認ください。');
      btnVrm.classList.remove('active');
    }
  );
}

function loadGlbModel(url) {
  if (!glbScene3D || !GLTFLoader_Lib) return;

  const loader = new GLTFLoader_Lib();

  disposeCurrentModel(glbScene3D, currentGlbRoot);
  currentGlbRoot = null;

  btnGlb.classList.add('active');
  glbCanvas.classList.remove('hidden');

  loader.load(
    url,
    (gltf) => {
      currentGlbRoot = gltf.scene;
      glbScene3D.add(gltf.scene);
      glbScene3D.updateMatrixWorld(true);

      const glbNodeNames = [];
      const glbChairCandidates = [];
      gltf.scene.traverse((node) => {
        if (!node || !node.name) return;
        glbNodeNames.push(node.name);
        const lowerName = node.name.toLowerCase();
        if (
          lowerName.includes('chair') ||
          lowerName.includes('seat') ||
          lowerName.includes('boundary') ||
          lowerName.includes('desk')
        ) {
          glbChairCandidates.push(node.name);
        }
      });
      currentGlbNodeSummary = 'GLBノード(' + glbNodeNames.length + '): ' + glbNodeNames.slice(0, 12).join(' / ') + (glbNodeNames.length > 12 ? ' ...' : '');
      currentGlbChairCandidateSummary = '椅子候補: ' + (glbChairCandidates.length ? glbChairCandidates.join(' / ') : 'なし');
      console.log('GLB node names:', glbNodeNames);
      console.log('GLB chair candidates:', glbChairCandidates);

      const chairSourceNode =
        gltf.scene.getObjectByName('whole_boundary_Plane004_chair_material_0') ||
        gltf.scene.getObjectByName('whole_boundary_Plane004') ||
        gltf.scene.getObjectByName('chair_material') ||
        gltf.scene.getObjectByName('whole_boundary_Plane004_plastic_0') ||
        gltf.scene.getObjectByName('desk') ||
        gltf.scene.getObjectByName('root') ||
        gltf.scene.getObjectByName('RootNode') ||
        null;

      if (chairSourceNode && chairSourceNode.parent) {
        const THREE = THREE_Lib;
        const chairPivot = new THREE.Group();
        chairPivot.name = 'glb-chair-pivot';
        chairSourceNode.parent.add(chairPivot);
        chairPivot.position.copy(chairSourceNode.position);
        chairPivot.rotation.copy(chairSourceNode.rotation);
        chairPivot.scale.copy(chairSourceNode.scale);
        chairSourceNode.position.set(0, 0, 0);
        chairSourceNode.rotation.set(0, 0, 0);
        chairSourceNode.scale.set(1, 1, 1);
        chairSourceNode.parent.remove(chairSourceNode);
        chairPivot.add(chairSourceNode);
        chairPivot.userData.baseTransform = {
          position: chairPivot.position.clone(),
          rotation: chairPivot.rotation.clone(),
          scale: chairPivot.scale.clone()
        };
        chairPivot.userData.sourceName = chairSourceNode.name;
        currentGlbChairNode = chairPivot;
      } else {
        currentGlbChairNode = null;
      }

      updateGlbChairDebug();
      updateGlbNodeDebug();
      frameGenericModel(gltf.scene, glbCamera3D);
      if (currentGlbRoot) {
        currentGlbRoot.rotation.y = (glbSettings.rotation * Math.PI) / 180;
      }
      applyGlbChairSettings();

      console.log('GLB/GLTF model loaded successfully.');
    },
    (progress) => {
      console.log('GLB loading progress...', (progress.loaded / progress.total * 100).toFixed(2) + '%');
    },
    (error) => {
      console.error('Failed to load GLB model:', error);
      alert('GLBモデルのロードに失敗しました。ファイル形式が正しいかご確認ください。');
      btnGlb.classList.remove('active');
    }
  );
}

// ==========================================
// 10. MODEL SETTINGS (position / size / facing)
// ==========================================
const MODEL_POSITION_MODE = 'center';
const VRM_DEFAULTS = { posX: 344, posY: -658, scale: 214, rotation: -22 };
const GLB_DEFAULTS = { posX: 270, posY: -829, scale: 285, rotation: -22 };
const GLB_CHAIR_DEFAULTS = { posX: 5, posY: 0, posZ: 5, scale: 109, rotation: 41 };
const VRM_BASE_WIDTH = 500;
const VRM_BASE_HEIGHT = 600;
const GLB_BASE_WIDTH = 500;
const GLB_BASE_HEIGHT = 600;
const VIEWPORT_BASE_WIDTH = 1920;
const VIEWPORT_BASE_HEIGHT = 1080;

function convertLegacyLeftXToCenter(value, modelWidth) {
  return value + (modelWidth / 2) - (VIEWPORT_BASE_WIDTH / 2);
}

function convertLegacyRightXToCenter(value, modelWidth) {
  return (VIEWPORT_BASE_WIDTH / 2) - value - (modelWidth / 2);
}

function loadModelSettings(storageKey, defaults, legacyMode, modelWidth) {
  const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
  const settings = { ...defaults, ...saved };
  if (localStorage.getItem('modelPositionMode') !== MODEL_POSITION_MODE && typeof saved.posX === 'number') {
    settings.posX = legacyMode === 'left'
      ? convertLegacyLeftXToCenter(saved.posX, modelWidth)
      : convertLegacyRightXToCenter(saved.posX, modelWidth);
  }
  return settings;
}

var vrmSettings = loadModelSettings('vrmSettings', VRM_DEFAULTS, 'left', VRM_BASE_WIDTH);
var glbSettings = loadModelSettings('glbSettings', GLB_DEFAULTS, 'right', GLB_BASE_WIDTH);
var glbChairSettings = { ...GLB_CHAIR_DEFAULTS, ...JSON.parse(localStorage.getItem('glbChairSettings') || '{}') };
localStorage.setItem('modelPositionMode', MODEL_POSITION_MODE);

const vrmPosXSlider = document.getElementById('vrm-pos-x');
const vrmPosYSlider = document.getElementById('vrm-pos-y');
const vrmScaleSlider = document.getElementById('vrm-scale');
const vrmRotationSlider = document.getElementById('vrm-rotation');
const vrmResetBtn = document.getElementById('vrm-reset-btn');
const vrmCopyBtn = document.getElementById('vrm-copy-btn');
const glbPosXSlider = document.getElementById('glb-pos-x');
const glbPosYSlider = document.getElementById('glb-pos-y');
const glbScaleSlider = document.getElementById('glb-scale');
const glbRotationSlider = document.getElementById('glb-rotation');
const glbResetBtn = document.getElementById('glb-reset-btn');
const glbCopyBtn = document.getElementById('glb-copy-btn');
const glbChairPosXSlider = document.getElementById('glb-chair-pos-x');
const glbChairPosZSlider = document.getElementById('glb-chair-pos-z');
const glbChairPosYSlider = document.getElementById('glb-chair-pos-y');
const glbChairScaleSlider = document.getElementById('glb-chair-scale');
const glbChairRotationSlider = document.getElementById('glb-chair-rotation');
const glbChairResetBtn = document.getElementById('glb-chair-reset-btn');
const glbChairDebug = document.getElementById('glb-chair-debug');
const glbNodeDebug = document.getElementById('glb-node-debug');

function getViewportScale() {
  return Math.min(window.innerWidth / VIEWPORT_BASE_WIDTH, window.innerHeight / VIEWPORT_BASE_HEIGHT);
}

function scaleViewportX(value) {
  return value * (window.innerWidth / VIEWPORT_BASE_WIDTH);
}

function scaleViewportY(value) {
  return value * (window.innerHeight / VIEWPORT_BASE_HEIGHT);
}

function scaleViewportSize(value) {
  return value * getViewportScale();
}

function applyVrmSettings() {
  vrmCanvas.style.left = `calc(50% + ${scaleViewportX(vrmSettings.posX)}px)`;
  vrmCanvas.style.bottom = `${scaleViewportY(vrmSettings.posY)}px`;
  vrmCanvas.style.width = `${scaleViewportSize((VRM_BASE_WIDTH * vrmSettings.scale) / 100)}px`;
  vrmCanvas.style.height = `${scaleViewportSize((VRM_BASE_HEIGHT * vrmSettings.scale) / 100)}px`;

  if (vrmRenderer3D && vrmCamera3D) {
    vrmRenderer3D.setSize(vrmCanvas.clientWidth, vrmCanvas.clientHeight);
    vrmCamera3D.aspect = vrmCanvas.clientWidth / vrmCanvas.clientHeight;
    vrmCamera3D.updateProjectionMatrix();
  }
  if (currentVrmRoot) {
    currentVrmRoot.rotation.y = (vrmSettings.rotation * Math.PI) / 180;
  }
}

function applyGlbSettings() {
  glbCanvas.style.left = `calc(50% + ${scaleViewportX(glbSettings.posX)}px)`;
  glbCanvas.style.right = 'auto';
  glbCanvas.style.bottom = `${scaleViewportY(glbSettings.posY)}px`;
  glbCanvas.style.width = `${scaleViewportSize((GLB_BASE_WIDTH * glbSettings.scale) / 100)}px`;
  glbCanvas.style.height = `${scaleViewportSize((GLB_BASE_HEIGHT * glbSettings.scale) / 100)}px`;

  if (glbRenderer3D && glbCamera3D) {
    glbRenderer3D.setSize(glbCanvas.clientWidth, glbCanvas.clientHeight);
    glbCamera3D.aspect = glbCanvas.clientWidth / glbCanvas.clientHeight;
    glbCamera3D.updateProjectionMatrix();
  }
  if (currentGlbRoot) {
    currentGlbRoot.rotation.y = (glbSettings.rotation * Math.PI) / 180;
  }
  applyGlbChairSettings();
}

function updateGlbChairDebug() {
  if (!glbChairDebug) return;
  if (!currentGlbChairNode) {
    glbChairDebug.textContent = '椅子: 未検出 / ' + currentGlbChairCandidateSummary;
    return;
  }
  const sourceName = currentGlbChairNode.userData.sourceName || currentGlbChairNode.name || 'unknown';
  glbChairDebug.textContent = '椅子: ' + sourceName + ' / 左右 ' + glbChairSettings.posX + ' / 縦位置 ' + glbChairSettings.posY + ' / 前後 ' + glbChairSettings.posZ + ' / 大きさ ' + glbChairSettings.scale + '% / 向き ' + glbChairSettings.rotation + '°';
}

function updateGlbNodeDebug() {
  if (!glbNodeDebug) return;
  glbNodeDebug.textContent = currentGlbNodeSummary + '\n' + currentGlbChairCandidateSummary;
}

function applyGlbChairSettings() {
  if (!currentGlbChairNode) {
    updateGlbChairDebug();
    return;
  }
  const base = currentGlbChairNode.userData.baseTransform;
  if (!base) {
    updateGlbChairDebug();
    return;
  }

  currentGlbChairNode.position.set(
    base.position.x + (glbChairSettings.posX / 10),
    base.position.y + (glbChairSettings.posY / 10),
    base.position.z + (glbChairSettings.posZ / 10)
  );
  currentGlbChairNode.scale.set(
    base.scale.x * (glbChairSettings.scale / 100),
    base.scale.y * (glbChairSettings.scale / 100),
    base.scale.z * (glbChairSettings.scale / 100)
  );
  currentGlbChairNode.rotation.set(
    base.rotation.x,
    base.rotation.y + (glbChairSettings.rotation * Math.PI) / 180,
    base.rotation.z
  );
  updateGlbChairDebug();
}

function syncVrmSliders() {
  vrmPosXSlider.value = vrmSettings.posX;
  vrmPosYSlider.value = vrmSettings.posY;
  vrmScaleSlider.value = vrmSettings.scale;
  vrmRotationSlider.value = vrmSettings.rotation;
}

function syncGlbSliders() {
  glbPosXSlider.value = glbSettings.posX;
  glbPosYSlider.value = glbSettings.posY;
  glbScaleSlider.value = glbSettings.scale;
  glbRotationSlider.value = glbSettings.rotation;
}

function syncGlbChairSliders() {
  glbChairPosXSlider.value = glbChairSettings.posX;
  glbChairPosYSlider.value = glbChairSettings.posY;
  glbChairPosZSlider.value = glbChairSettings.posZ;
  glbChairScaleSlider.value = glbChairSettings.scale;
  glbChairRotationSlider.value = glbChairSettings.rotation;
}

function saveVrmSettings() {
  localStorage.setItem('vrmSettings', JSON.stringify(vrmSettings));
}

function saveGlbSettings() {
  localStorage.setItem('glbSettings', JSON.stringify(glbSettings));
}

function saveGlbChairSettings() {
  localStorage.setItem('glbChairSettings', JSON.stringify(glbChairSettings));
}

async function copySettingsToClipboard(label, settings, button) {
  const text = JSON.stringify(settings, null, 2);
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', 'true');
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }

    if (button) {
      const original = button.textContent;
      button.textContent = 'コピー済み';
      setTimeout(() => {
        button.textContent = original;
      }, 1200);
    }
  } catch (err) {
    console.error(`Failed to copy ${label} settings:`, err);
    alert(`${label}の設定コピーに失敗しました。`);
  }
}

vrmPosXSlider.addEventListener('input', () => {
  vrmSettings.posX = Number(vrmPosXSlider.value);
  saveVrmSettings();
  applyVrmSettings();
});

vrmPosYSlider.addEventListener('input', () => {
  vrmSettings.posY = Number(vrmPosYSlider.value);
  saveVrmSettings();
  applyVrmSettings();
});

vrmScaleSlider.addEventListener('input', () => {
  vrmSettings.scale = Number(vrmScaleSlider.value);
  saveVrmSettings();
  applyVrmSettings();
});

vrmRotationSlider.addEventListener('input', () => {
  vrmSettings.rotation = Number(vrmRotationSlider.value);
  saveVrmSettings();
  applyVrmSettings();
});

vrmResetBtn.addEventListener('click', () => {
  vrmSettings = { ...VRM_DEFAULTS };
  saveVrmSettings();
  syncVrmSliders();
  applyVrmSettings();
});

vrmCopyBtn.addEventListener('click', () => {
  copySettingsToClipboard('VRM', vrmSettings, vrmCopyBtn);
});

glbPosXSlider.addEventListener('input', () => {
  glbSettings.posX = Number(glbPosXSlider.value);
  saveGlbSettings();
  applyGlbSettings();
});

glbPosYSlider.addEventListener('input', () => {
  glbSettings.posY = Number(glbPosYSlider.value);
  saveGlbSettings();
  applyGlbSettings();
});

glbScaleSlider.addEventListener('input', () => {
  glbSettings.scale = Number(glbScaleSlider.value);
  saveGlbSettings();
  applyGlbSettings();
});

glbRotationSlider.addEventListener('input', () => {
  glbSettings.rotation = Number(glbRotationSlider.value);
  saveGlbSettings();
  applyGlbSettings();
});

glbResetBtn.addEventListener('click', () => {
  glbSettings = { ...GLB_DEFAULTS };
  saveGlbSettings();
  syncGlbSliders();
  applyGlbSettings();
});

glbCopyBtn.addEventListener('click', () => {
  copySettingsToClipboard('GLB', {
    model: glbSettings,
    chair: glbChairSettings
  }, glbCopyBtn);
});

glbChairPosXSlider.addEventListener('input', () => {
  glbChairSettings.posX = Number(glbChairPosXSlider.value);
  saveGlbChairSettings();
  applyGlbChairSettings();
});

glbChairPosZSlider.addEventListener('input', () => {
  glbChairSettings.posZ = Number(glbChairPosZSlider.value);
  saveGlbChairSettings();
  applyGlbChairSettings();
});

glbChairPosYSlider.addEventListener('input', () => {
  glbChairSettings.posY = Number(glbChairPosYSlider.value);
  saveGlbChairSettings();
  applyGlbChairSettings();
});

glbChairScaleSlider.addEventListener('input', () => {
  glbChairSettings.scale = Number(glbChairScaleSlider.value);
  saveGlbChairSettings();
  applyGlbChairSettings();
});

glbChairRotationSlider.addEventListener('input', () => {
  glbChairSettings.rotation = Number(glbChairRotationSlider.value);
  saveGlbChairSettings();
  applyGlbChairSettings();
});

glbChairResetBtn.addEventListener('click', () => {
  glbChairSettings = { ...GLB_CHAIR_DEFAULTS };
  saveGlbChairSettings();
  syncGlbChairSliders();
  applyGlbChairSettings();
});

syncVrmSliders();
syncGlbSliders();
syncGlbChairSliders();
updateGlbChairDebug();
updateGlbNodeDebug();
applyVrmSettings();
applyGlbSettings();

// Startup scene apply: deferred to here so update3DLights() can see the
// (still-null) THREE_Lib bindings instead of hitting the TDZ.
applyScene();

// ==========================================
// 11. WORKSHOP PANEL (Tauri only)
// ==========================================
if (window.__TAURI__) {
  const btnWorkshop = document.getElementById('btn-workshop');
  if (btnWorkshop) btnWorkshop.style.display = '';
}

const workshopPanel = document.getElementById('workshop-panel');
const btnWorkshopEl = document.getElementById('btn-workshop');
const workshopCloseBtn = document.getElementById('workshop-close-btn');
const workshopItems = document.getElementById('workshop-items');
const workshopCreateBtn = document.getElementById('workshop-create-btn');
const workshopForm = document.getElementById('workshop-form');
const workshopFormClose = document.getElementById('workshop-form-close');
const workshopFormSave = document.getElementById('workshop-form-save');
const workshopFormCancel = document.getElementById('workshop-form-cancel');
const workshopFormTitle = document.getElementById('workshop-form-title');
const workshopItemId = document.getElementById('workshop-item-id');
const workshopItemName = document.getElementById('workshop-item-name');
const workshopItemDesc = document.getElementById('workshop-item-desc');
const workshopItemAuthor = document.getElementById('workshop-item-author');
const workshopDetail = document.getElementById('workshop-detail');
const workshopDetailClose = document.getElementById('workshop-detail-close');
const workshopDetailName = document.getElementById('workshop-detail-name');
const workshopDetailId = document.getElementById('workshop-detail-id');
const workshopDetailAuthor = document.getElementById('workshop-detail-author');
const workshopDetailVersion = document.getElementById('workshop-detail-version');
const workshopDetailDesc = document.getElementById('workshop-detail-desc');
const workshopDetailApply = document.getElementById('workshop-detail-toggle');
const workshopDetailApplyLabel = document.getElementById('workshop-detail-toggle-label');
const workshopDetailDelete = document.getElementById('workshop-detail-delete');
const workshopDetailFilelist = document.getElementById('workshop-detail-filelist');
const workshopTabs = document.querySelectorAll('.workshop-tab');

let workshopCurrentCategory = 'themes';
let workshopCurrentItem = null;
let workshopEditingId = null;

const WORKSHOP_CATEGORY_ICONS = {
  themes: '🎨',
  vrm_sets: '👤',
  glb_characters: '📦',
  apps: '📱',
  plugins_rust: '⚙️',
  plugins_wasm: '🔧'
};

function workshopInvoke(cmd, args) {
  if (!window.__TAURI__) return Promise.reject('Tauri 環境ではありません');
  return window.__TAURI__.core.invoke(cmd, args);
}

if (btnWorkshopEl) {
  btnWorkshopEl.addEventListener('click', () => {
    closeOtherDrawers(workshopPanel);
    workshopPanel.classList.toggle('active');
    btnWorkshopEl.classList.toggle('active', workshopPanel.classList.contains('active'));
    if (workshopPanel.classList.contains('active')) {
      loadWorkshopItems();
    }
  });
}

if (workshopCloseBtn) {
  workshopCloseBtn.addEventListener('click', () => {
    workshopPanel.classList.remove('active');
    if (btnWorkshopEl) btnWorkshopEl.classList.remove('active');
  });
}

workshopTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    workshopTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    workshopCurrentCategory = tab.dataset.category;
    loadWorkshopItems();
  });
});

async function loadWorkshopItems() {
  try {
    if (window.__TAURI__) {
      const items = await workshopInvoke('workshop_list_items', { category: workshopCurrentCategory });
      renderWorkshopItems(items);
    } else {
      const items = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith(`workshop_meta_${workshopCurrentCategory}_`)) {
          try {
            const meta = JSON.parse(localStorage.getItem(key));
            items.push(meta);
          } catch (e) {}
        }
      }
      items.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
      renderWorkshopItems(items);
    }
  } catch (err) {
    console.error('Workshop load error:', err);
    workshopItems.innerHTML = '<div class="workshop-empty">読み込みエラー</div>';
  }
}

function renderWorkshopItems(items) {
  if (items.length === 0) {
    workshopItems.innerHTML = '<div class="workshop-empty">アイテムがありません</div>';
    return;
  }

  workshopItems.innerHTML = items.map(item => `
    <div class="workshop-item" data-id="${item.id}">
      <div class="workshop-item-preview">${WORKSHOP_CATEGORY_ICONS[item.item_type] || '📁'}</div>
      <div class="workshop-item-info">
        <div class="workshop-item-name">${escapeHtml(item.name)}</div>
        <div class="workshop-item-meta">${escapeHtml(item.author || '不明')} · v${escapeHtml(item.version || '1.0.0')}</div>
      </div>
    </div>
  `).join('');

  workshopItems.querySelectorAll('.workshop-item').forEach(el => {
    el.addEventListener('click', () => showWorkshopDetail(el.dataset.id));
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

if (workshopCreateBtn) {
  workshopCreateBtn.addEventListener('click', () => {
    workshopEditingId = null;
    workshopFormTitle.textContent = '新規作成';
    workshopItemId.value = '';
    workshopItemName.value = '';
    workshopItemDesc.value = '';
    workshopItemAuthor.value = '';
    workshopItemId.disabled = false;
    workshopForm.classList.remove('hidden');
    workshopDetail.classList.add('hidden');
  });
}

if (workshopFormClose) {
  workshopFormClose.addEventListener('click', () => {
    workshopForm.classList.add('hidden');
  });
}

if (workshopFormCancel) {
  workshopFormCancel.addEventListener('click', () => {
    workshopForm.classList.add('hidden');
  });
}

if (workshopFormSave) {
  workshopFormSave.addEventListener('click', async () => {
    const id = workshopItemId.value.trim();
    const name = workshopItemName.value.trim();
    const desc = workshopItemDesc.value.trim();
    const author = workshopItemAuthor.value.trim();

    if (!id || !name) {
      alert('ID と名前は必須です');
      return;
    }

    try {
      if (window.__TAURI__) {
        if (workshopEditingId) {
          await workshopInvoke('workshop_update_meta', {
            category: workshopCurrentCategory,
            id: workshopEditingId,
            name,
            description: desc,
            author
          });
        } else {
          await workshopInvoke('workshop_create_item', {
            category: workshopCurrentCategory,
            id,
            name,
            description: desc,
            author
          });
        }
      } else {
        const meta = {
          id,
          name,
          description: desc,
          author,
          version: '1.0.0',
          item_type: workshopCurrentCategory,
          created_at: String(Date.now())
        };
        localStorage.setItem(`workshop_meta_${workshopCurrentCategory}_${id}`, JSON.stringify(meta));
      }
      workshopForm.classList.add('hidden');
      loadWorkshopItems();
    } catch (err) {
      alert('保存エラー: ' + err);
    }
  });
}

async function showWorkshopDetail(id) {
  try {
    let item;
    let files;

    if (window.__TAURI__) {
      item = await workshopInvoke('workshop_read_meta', {
        category: workshopCurrentCategory,
        id
      });
      files = await workshopInvoke('workshop_list_files', {
        category: workshopCurrentCategory,
        id
      });
    } else {
      const metaStr = localStorage.getItem(`workshop_meta_${workshopCurrentCategory}_${id}`);
      if (!metaStr) throw new Error('Item not found');
      item = JSON.parse(metaStr);
      files = await listFilesFromDB(workshopCurrentCategory, id);
    }

    workshopCurrentItem = item;

    workshopDetailName.textContent = item.name;
    workshopDetailId.textContent = item.id;
    workshopDetailAuthor.textContent = item.author || '不明';
    workshopDetailVersion.textContent = item.version || '1.0.0';
    workshopDetailDesc.textContent = item.description || '説明なし';

    workshopDetailFilelist.innerHTML = files.length
      ? files.map(f => `<li>${escapeHtml(f)}</li>`).join('')
      : '<li style="color: rgba(255,255,255,0.3)">ファイルなし</li>';

    const activeKey = `workshop_active_${item.item_type}`;
    const activeId = localStorage.getItem(activeKey);
    workshopDetailApply.checked = activeId === item.id;
    workshopDetailApplyLabel.textContent = workshopDetailApply.checked ? '利用中' : '利用する';

    workshopForm.classList.add('hidden');
    workshopDetail.classList.remove('hidden');
  } catch (err) {
    alert('読み込みエラー: ' + err);
  }
}

if (workshopDetailClose) {
  workshopDetailClose.addEventListener('click', () => {
    workshopDetail.classList.add('hidden');
  });
}

if (workshopDetailApply) {
  workshopDetailApply.addEventListener('change', async () => {
    if (!workshopCurrentItem) return;
    const item = workshopCurrentItem;
    const activeKey = `workshop_active_${item.item_type}`;

    if (workshopDetailApply.checked) {
      try {
        if (item.item_type === 'themes') {
          await applyWorkshopTheme(item);
        } else if (item.item_type === 'vrm_sets') {
          await applyWorkshopVrm(item);
        } else if (item.item_type === 'glb_characters') {
          await applyWorkshopGlb(item);
        }
        localStorage.setItem(activeKey, item.id);
        workshopDetailApplyLabel.textContent = '利用中';
      } catch (err) {
        workshopDetailApply.checked = false;
        workshopDetailApplyLabel.textContent = '利用する';
        alert('適用エラー: ' + err);
      }
    } else {
      localStorage.removeItem(activeKey);
      workshopDetailApplyLabel.textContent = '利用する';
      if (item.item_type === 'themes') {
        removeWorkshopTheme();
      } else if (item.item_type === 'vrm_sets') {
        loadVrmModel(DEFAULT_VRM_URL);
      } else if (item.item_type === 'glb_characters') {
        loadGlbModel(DEFAULT_GLB_URL);
      }
    }
  });
}

async function applyWorkshopTheme(item) {
  let files;

  if (window.__TAURI__) {
    files = await workshopInvoke('workshop_list_files', {
      category: 'themes',
      id: item.id
    });
  } else {
    files = await listFilesFromDB('themes', item.id);
  }

  for (const filename of files) {
    if (filename === 'meta.json') continue;
    if (filename.endsWith('.css')) {
      let data;
      if (window.__TAURI__) {
        data = await workshopInvoke('workshop_read_file', {
          category: 'themes',
          id: item.id,
          filename
        });
      } else {
        data = await readFileFromDB('themes', item.id, filename);
      }
      if (data) {
        applyThemeCss(new TextDecoder().decode(new Uint8Array(data)));
      }
    }
  }
}

function applyThemeCss(cssText) {
  let styleEl = document.getElementById('workshop-theme-style');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'workshop-theme-style';
    document.head.appendChild(styleEl);
  }
  styleEl.textContent = cssText;
}

function removeWorkshopTheme() {
  const styleEl = document.getElementById('workshop-theme-style');
  if (styleEl) styleEl.remove();
}

async function applyWorkshopVrm(item) {
  let files;
  let data;

  if (window.__TAURI__) {
    files = await workshopInvoke('workshop_list_files', {
      category: 'vrm_sets',
      id: item.id
    });
    const vrmFile = files.find(f => f.endsWith('.vrm'));
    if (!vrmFile) {
      alert('VRMファイルが見つかりません');
      return;
    }
    data = await workshopInvoke('workshop_read_file', {
      category: 'vrm_sets',
      id: item.id,
      filename: vrmFile
    });
  } else {
    files = await listFilesFromDB('vrm_sets', item.id);
    const vrmFile = files.find(f => f.endsWith('.vrm'));
    if (!vrmFile) {
      alert('VRMファイルが見つかりません');
      return;
    }
    data = await readFileFromDB('vrm_sets', item.id, vrmFile);
    if (!data) {
      alert('VRMファイルの読み込みに失敗しました');
      return;
    }
  }

  const blob = new Blob([data], { type: 'model/vrm' });
  const url = URL.createObjectURL(blob);
  loadVrmModel(url);
}

async function applyWorkshopGlb(item) {
  let files;
  let data;

  if (window.__TAURI__) {
    files = await workshopInvoke('workshop_list_files', {
      category: 'glb_characters',
      id: item.id
    });
    const glbFile = files.find(f => f.endsWith('.glb') || f.endsWith('.gltf'));
    if (!glbFile) {
      alert('GLBファイルが見つかりません');
      return;
    }
    data = await workshopInvoke('workshop_read_file', {
      category: 'glb_characters',
      id: item.id,
      filename: glbFile
    });
  } else {
    files = await listFilesFromDB('glb_characters', item.id);
    const glbFile = files.find(f => f.endsWith('.glb') || f.endsWith('.gltf'));
    if (!glbFile) {
      alert('GLBファイルが見つかりません');
      return;
    }
    data = await readFileFromDB('glb_characters', item.id, glbFile);
    if (!data) {
      alert('GLBファイルの読み込みに失敗しました');
      return;
    }
  }

  const blob = new Blob([data], { type: 'model/gltf-binary' });
  const url = URL.createObjectURL(blob);
  loadGlbModel(url);
}

if (workshopDetailDelete) {
  workshopDetailDelete.addEventListener('click', async () => {
    if (!workshopCurrentItem) return;
    if (!confirm(`「${workshopCurrentItem.name}」を削除しますか？`)) return;

    try {
      if (window.__TAURI__) {
        await workshopInvoke('workshop_delete_item', {
          category: workshopCurrentCategory,
          id: workshopCurrentItem.id
        });
      } else {
        localStorage.removeItem(`workshop_meta_${workshopCurrentCategory}_${workshopCurrentItem.id}`);
        await deleteFilesFromDB(workshopCurrentCategory, workshopCurrentItem.id);
      }
      workshopDetail.classList.add('hidden');
      loadWorkshopItems();
    } catch (err) {
      alert('削除エラー: ' + err);
    }
  });
}

async function loadWorkshopOnStartup() {
  const activeTheme = localStorage.getItem('workshop_active_themes');
  if (activeTheme) {
    try {
      let item;
      if (window.__TAURI__) {
        item = await workshopInvoke('workshop_read_meta', {
          category: 'themes',
          id: activeTheme
        });
      } else {
        const metaStr = localStorage.getItem(`workshop_meta_themes_${activeTheme}`);
        if (metaStr) item = JSON.parse(metaStr);
      }
      if (item) await applyWorkshopTheme(item);
    } catch (e) {
      console.warn('Workshop theme load failed:', e);
    }
  }

  const activeVrm = localStorage.getItem('workshop_active_vrm_sets');
  if (activeVrm) {
    try {
      let item;
      if (window.__TAURI__) {
        item = await workshopInvoke('workshop_read_meta', {
          category: 'vrm_sets',
          id: activeVrm
        });
      } else {
        const metaStr = localStorage.getItem(`workshop_meta_vrm_sets_${activeVrm}`);
        if (metaStr) item = JSON.parse(metaStr);
      }
      if (item) await applyWorkshopVrm(item);
    } catch (e) {
      console.warn('Workshop VRM load failed:', e);
    }
  }

  const activeGlb = localStorage.getItem('workshop_active_glb_characters');
  if (activeGlb) {
    try {
      let item;
      if (window.__TAURI__) {
        item = await workshopInvoke('workshop_read_meta', {
          category: 'glb_characters',
          id: activeGlb
        });
      } else {
        const metaStr = localStorage.getItem(`workshop_meta_glb_characters_${activeGlb}`);
        if (metaStr) item = JSON.parse(metaStr);
      }
      if (item) await applyWorkshopGlb(item);
    } catch (e) {
      console.warn('Workshop GLB load failed:', e);
    }
  }
}

loadWorkshopOnStartup();
