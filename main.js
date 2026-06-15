// ==========================================
// 0. I18N (多言語 UI サポート) #38
// ==========================================
const LANGUAGES = {
  ja: {
    // Clock
    time_period_am: 'AM',
    time_period_pm: 'PM',
    weekdays: ['日', '月', '火', '水', '木', '金', '土'],

    // Pomodoro
    pomodoro_work: '作業',
    pomodoro_break: '休憩',

    // Settings
    settings_title: '設定',
    settings_theme: 'テーマ',
    settings_ui_theme: 'UI テーマ',
    settings_ui_language: 'UI 言語',
    theme_ui_zany: 'Zany',
    theme_ui_default: 'デフォルト',
    language_japanese: '日本語',
    language_english: 'English',
    settings_vrm_default: 'デフォルト VRM',
    settings_glb_default: 'デフォルト GLB',
    settings_tab_theme: 'テーマ',
    settings_tab_media: 'メディア',
    settings_tab_features: '機能',
    settings_tab_3d: '3D',
    settings_theme_general: '全体テーマ',
    settings_theme_customization: 'テーマカスタマイズ',
    settings_media_bgm: 'BGM',
    settings_features_title: '機能のオン / オフ',
    settings_3d_vrm_title: 'VRMアバター',
    settings_3d_glb_title: 'GLBモデル',
    settings_3d_chair_title: 'GLBの椅子',
    settings_media_add_bgm: 'BGMを追加',
    settings_media_add_url: 'URL を追加',
    settings_media_playlist: '再生リスト',
    settings_feature_clock: '時計',
    settings_feature_pomodoro: 'ポモドーロタイマー',
    settings_feature_music: '音楽プレイヤー',
    settings_feature_rain: '雨アニメーション',
    settings_feature_vrm: 'VRMアバター',
    settings_feature_mascot: 'デスクトップマスコット',
    settings_feature_ssh: 'SSHターミナル',
    settings_left_right: '左右',
    settings_vertical: '縦位置',
    settings_scale: '大きさ',
    settings_rotation: '向き',
    settings_reset: '位置・向きをリセット',
    settings_copy: '設定をコピー',

    // Workshop
    workshop_title: 'Workshop',
    workshop_search: '検索',
    workshop_create: '新規作成',
    workshop_loading: 'ロード中...',
    workshop_subscribe: 'Subscribe',
    workshop_unsubscribe: 'Unsubscribe',
    workshop_delete: '削除',
    workshop_apply: '適用',
    workshop_save_title: 'Workshopに保存',
    workshop_search_placeholder: '検索...',
    workshop_tab_theme: 'テーマ',
    workshop_tab_vrm: 'VRM',
    workshop_tab_glb: 'GLB',
    workshop_tab_apps: 'アプリ',
    workshop_empty: 'アイテムがありません',
    workshop_create_new: '+ 新規作成',
    workshop_form_title: '新規作成',
    workshop_field_id: 'ID (英数字とハイフン)',
    workshop_field_name: '名前',
    workshop_field_desc: '説明',
    workshop_field_author: '作者',
    workshop_detail_id: 'ID',
    workshop_detail_author: '作者',
    workshop_detail_version: 'バージョン',
    workshop_detail_files: 'ファイル',
    workshop_detail_use: '利用する',
    workshop_detail_in_use: '利用中',
    workshop_detail_delete: '削除',

    // Theme Editor
    theme_editor_title: 'テーマエディタ',
    theme_color: 'カラー',
    theme_background: '背景',
    theme_character: 'キャラクター',
    theme_environment: '環境',
    theme_save: '保存',
    theme_color_accent: 'アクセント',
    theme_color_secondary: 'セカンダリ',
    theme_color_accent2: 'アクセント2',
    theme_color_text: 'テキスト',
    theme_bg_upload: '背景画像',
    theme_bg_clear: 'クリア',
    theme_bg_preview: '背景プレビュー',
    theme_vrm_set: 'VRM セット',
    theme_glb_character: 'Animated GLB キャラクター',
    theme_behavior_profile: 'behavior_profile',
    theme_behavior_neutral: 'ニュートラル',
    theme_behavior_focused: '集中',
    theme_behavior_relaxed: 'リラックス',
    theme_behavior_tired: '疲れ',
    theme_glb_environment: 'Static GLB / Scene',
    theme_environment_note: '環境スロットに配置するオブジェクト',
    theme_save_id: 'テーマ ID',
    theme_save_id_placeholder: '英数字とハイフン',
    theme_save_name: 'テーマ名',
    theme_save_name_placeholder: 'テーマの表示名',
    theme_save_desc: '説明',
    theme_save_desc_placeholder: 'このテーマについての説明',
    theme_save_author: '作者',
    theme_save_author_placeholder: '作者名',
    theme_save_btn: 'テーマを保存',
    theme_publish_btn: 'Workshop に投稿',
    theme_saved_alert: 'テーマを保存しました',
    theme_save_error_required: 'テーマ ID と名前は必須です',
    theme_save_error: '保存エラー:',
    theme_tab_colors: 'カラー',
    theme_tab_background: '背景',
    theme_tab_character: 'キャラクター',
    theme_tab_environment: '環境',
    theme_tab_save: '保存',
    theme_color_accent_label: 'アクセント',
    theme_color_secondary_label: 'セカンダリ',
    theme_color_accent2_label: 'アクセント2',
    theme_color_text_label: 'テキスト',
    theme_bg_clear_btn: 'クリア',
    theme_select_none: '選択なし',
    theme_saved_to_workshop: 'Workshop に投稿',

    // Launcher
    launcher_title: 'ランチャー',
    launcher_terminal: 'ターミナル',
    launcher_browser: 'ブラウザ',
    launcher_editor: 'エディタ',
    launcher_filemanager: 'ファイル',
    launcher_calculator: '計算機',
    todo_title: 'タスクリスト',
    todo_placeholder: 'タスクを入力...',
    todo_add: '追加',
    ssh_title: 'SSHターミナル',
    ssh_connecting: '接続中',
    ssh_connect: '接続',
    ssh_disconnect: '切断',
    bgm_add_button: 'URLを追加',
    player_mute: '消音 / 音声有効',
    player_shuffle: 'シャッフル',
    player_prev: '前の曲',
    player_play: '再生 / 一時停止',
    player_next: '次の曲',
    player_repeat: '曲をループ再生',
    player_volume: 'BGMの音量',
    pomo_loop: 'ループ',
    pomo_play: '開始 / 一時停止',
    pomo_cancel: 'キャンセル',

    // Common
    none: 'なし',
    close: '閉じる',
    apply: '適用',
    delete: '削除',
    save: '保存',
    cancel: 'キャンセル',
  },
  en: {
    // Clock
    time_period_am: 'AM',
    time_period_pm: 'PM',
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

    // Pomodoro
    pomodoro_work: 'Work',
    pomodoro_break: 'Break',

    // Settings
    settings_title: 'Settings',
    settings_theme: 'Theme',
    settings_ui_theme: 'UI Theme',
    settings_ui_language: 'UI Language',
    settings_vrm_default: 'Default VRM',
    settings_glb_default: 'Default GLB',
    settings_tab_theme: 'Theme',
    settings_tab_media: 'Media',
    settings_tab_features: 'Features',
    settings_tab_3d: '3D',
    settings_theme_general: 'Global Theme',
    settings_theme_customization: 'Theme Customization',
    settings_media_bgm: 'BGM',
    settings_features_title: 'Feature Toggles',
    settings_3d_vrm_title: 'VRM Avatar',
    settings_3d_glb_title: 'GLB Model',
    settings_3d_chair_title: 'GLB Chair',
    settings_media_add_bgm: 'Add BGM',
    settings_media_add_url: 'Add URL',
    settings_media_playlist: 'Playlist',
    settings_feature_clock: 'Clock',
    settings_feature_pomodoro: 'Pomodoro Timer',
    settings_feature_music: 'Music Player',
    settings_feature_rain: 'Rain Animation',
    settings_feature_vrm: 'VRM Avatar',
    settings_feature_mascot: 'Desktop Mascot',
    settings_feature_ssh: 'SSH Terminal',
    settings_left_right: 'Horizontal',
    settings_vertical: 'Vertical',
    settings_scale: 'Scale',
    settings_rotation: 'Rotation',
    settings_reset: 'Reset Position / Rotation',
    settings_copy: 'Copy Settings',

    // Workshop
    workshop_title: 'Workshop',
    workshop_search: 'Search',
    workshop_create: 'Create New',
    workshop_loading: 'Loading...',
    workshop_subscribe: 'Subscribe',
    workshop_unsubscribe: 'Unsubscribe',
    workshop_delete: 'Delete',
    workshop_apply: 'Apply',
    workshop_save_title: 'Save to Workshop',
    workshop_search_placeholder: 'Search...',
    workshop_tab_theme: 'Themes',
    workshop_tab_vrm: 'VRM',
    workshop_tab_glb: 'GLB',
    workshop_tab_apps: 'Apps',
    workshop_empty: 'No items yet',
    workshop_create_new: '+ Create New',
    workshop_form_title: 'Create New',
    workshop_field_id: 'ID (alphanumeric and hyphens)',
    workshop_field_name: 'Name',
    workshop_field_desc: 'Description',
    workshop_field_author: 'Author',
    workshop_detail_id: 'ID',
    workshop_detail_author: 'Author',
    workshop_detail_version: 'Version',
    workshop_detail_files: 'Files',
    workshop_detail_use: 'Use',
    workshop_detail_in_use: 'In Use',
    workshop_detail_delete: 'Delete',

    // Theme Editor
    theme_editor_title: 'Theme Editor',
    theme_color: 'Colors',
    theme_background: 'Background',
    theme_character: 'Character',
    theme_environment: 'Environment',
    theme_save: 'Save',
    theme_color_accent: 'Accent',
    theme_color_secondary: 'Secondary',
    theme_color_accent2: 'Accent 2',
    theme_color_text: 'Text',
    theme_bg_upload: 'Background Image',
    theme_bg_clear: 'Clear',
    theme_bg_preview: 'Preview',
    theme_vrm_set: 'VRM Set',
    theme_glb_character: 'Animated GLB Character',
    theme_behavior_profile: 'Behavior Profile',
    theme_behavior_neutral: 'Neutral',
    theme_behavior_focused: 'Focused',
    theme_behavior_relaxed: 'Relaxed',
    theme_behavior_tired: 'Tired',
    theme_glb_environment: 'Static GLB / Scene',
    theme_environment_note: 'Objects placed in the environment slot',
    theme_save_id: 'Theme ID',
    theme_save_id_placeholder: 'Alphanumeric and hyphens',
    theme_save_name: 'Theme Name',
    theme_save_name_placeholder: 'Display name',
    theme_save_desc: 'Description',
    theme_save_desc_placeholder: 'Description of this theme',
    theme_save_author: 'Author',
    theme_save_author_placeholder: 'Author name',
    theme_save_btn: 'Save Theme',
    theme_publish_btn: 'Publish to Workshop',
    theme_saved_alert: 'Theme saved successfully',
    theme_save_error_required: 'Theme ID and name are required',
    theme_save_error: 'Save error:',
    theme_tab_colors: 'Colors',
    theme_tab_background: 'Background',
    theme_tab_character: 'Character',
    theme_tab_environment: 'Environment',
    theme_tab_save: 'Save',
    theme_color_accent_label: 'Accent',
    theme_color_secondary_label: 'Secondary',
    theme_color_accent2_label: 'Accent 2',
    theme_color_text_label: 'Text',
    theme_bg_clear_btn: 'Clear',
    theme_select_none: 'None',
    theme_saved_to_workshop: 'Publish to Workshop',

    // Launcher
    launcher_title: 'Launcher',
    launcher_terminal: 'Terminal',
    launcher_browser: 'Browser',
    launcher_editor: 'Editor',
    launcher_filemanager: 'File Manager',
    launcher_calculator: 'Calculator',
    todo_title: 'Task List',
    todo_placeholder: 'Enter a task...',
    todo_add: 'Add',
    ssh_title: 'SSH Terminal',
    ssh_connecting: 'Connecting',
    ssh_connect: 'Connect',
    ssh_disconnect: 'Disconnect',
    bgm_add_button: 'Add URL',
    player_mute: 'Mute / Enable Audio',
    player_shuffle: 'Shuffle',
    player_prev: 'Previous',
    player_play: 'Play / Pause',
    player_next: 'Next',
    player_repeat: 'Loop Track',
    player_volume: 'BGM Volume',
    pomo_loop: 'Loop',
    pomo_play: 'Start / Pause',
    pomo_cancel: 'Cancel',

    // Common
    none: 'None',
    close: 'Close',
    apply: 'Apply',
    delete: 'Delete',
    save: 'Save',
    cancel: 'Cancel',
  }
};

let currentLanguage = localStorage.getItem('ui_language') || 'ja';

function t(key) {
  return LANGUAGES[currentLanguage]?.[key] || LANGUAGES.ja[key] || key;
}

function setLanguage(lang) {
  if (!LANGUAGES[lang]) return;
  currentLanguage = lang;
  localStorage.setItem('ui_language', lang);
  updateAllUITexts();
}

function setText(selector, key) {
  const el = document.querySelector(selector);
  if (el) el.textContent = t(key);
}

function setTextAll(selector, keys) {
  document.querySelectorAll(selector).forEach((el, index) => {
    const key = typeof keys === 'function' ? keys(el, index) : keys[index];
    if (key) el.textContent = t(key);
  });
}

function setPlaceholder(selector, key) {
  const el = document.querySelector(selector);
  if (el) el.placeholder = t(key);
}

function setTitle(selector, key) {
  const el = document.querySelector(selector);
  if (el) el.title = t(key);
}

function setOptionTexts(selector, valueToKey) {
  const select = document.querySelector(selector);
  if (!select) return;
  select.querySelectorAll('option').forEach(option => {
    const key = valueToKey[option.value];
    if (key) option.textContent = t(key);
  });
}

function updateAllUITextsLegacy() {
  document.documentElement.lang = currentLanguage;

  const languageSelect = document.getElementById('ui-language-select');
  if (languageSelect) languageSelect.value = currentLanguage;

  // Clock weekday labels
  if (typeof updateClock === 'function') updateClock();

  setText('#settings-panel > .todo-header h3', 'settings_title');
  setText('#todo-panel > .todo-header h3', 'todo_title');
  setText('#ssh-panel > .todo-header h3', 'ssh_title');
  setText('#workshop-panel > .todo-header h3', 'workshop_title');
  setText('#theme-editor-panel .theme-editor-header h3', 'theme_editor_title');
  setText('#launcher-panel h3', 'launcher_title');
  setText('#workshop-save-modal .workshop-save-header h4', 'workshop_save_title');

  setTextAll('#settings-tabs .settings-tab-btn', ['settings_tab_theme', 'settings_tab_media', 'settings_tab_features', 'settings_tab_3d']);
  setTextAll('.theme-editor-tabs .theme-editor-tab', ['theme_tab_colors', 'theme_tab_background', 'theme_tab_character', 'theme_tab_environment', 'theme_tab_save']);
  setTextAll('#workshop-panel .workshop-tabs .workshop-tab', ['workshop_tab_theme', 'workshop_tab_vrm', 'workshop_tab_glb', 'workshop_tab_apps']);

  const settingsThemeLabels = document.querySelectorAll('#settings-panel .settings-tab-section[data-settings-tab="theme"] .settings-list .settings-item > span');
  if (settingsThemeLabels[0]) settingsThemeLabels[0].textContent = t('settings_ui_theme');
  if (settingsThemeLabels[1]) settingsThemeLabels[1].textContent = t('settings_ui_language');
  const settingsThemeSectionLabels = document.querySelectorAll('#settings-panel .settings-tab-section[data-settings-tab="theme"] .settings-section-label');
  if (settingsThemeSectionLabels[0]) settingsThemeSectionLabels[0].textContent = t('settings_theme_general');
  if (settingsThemeSectionLabels[1]) settingsThemeSectionLabels[1].textContent = t('settings_theme_customization');

  const settingsThemeCustomizeLabels = document.querySelectorAll('#settings-panel .settings-tab-section[data-settings-tab="theme"] .settings-list:nth-of-type(2) .settings-item > span');
  if (settingsThemeCustomizeLabels[0]) settingsThemeCustomizeLabels[0].textContent = t('theme_color_accent_label');
  if (settingsThemeCustomizeLabels[1]) settingsThemeCustomizeLabels[1].textContent = t('theme_color_secondary_label');
  if (settingsThemeCustomizeLabels[2]) settingsThemeCustomizeLabels[2].textContent = t('theme_bg_upload');
  if (settingsThemeCustomizeLabels[3]) settingsThemeCustomizeLabels[3].textContent = t('theme_bg_upload');
  setText('#settings-panel #theme-reset-btn', 'settings_reset');
  setText('#settings-panel #theme-save-btn', 'theme_save_btn');

  setText('#settings-panel .settings-tab-section[data-settings-tab="media"] .settings-section-label', 'settings_media_bgm');
  const settingsMediaLabels = document.querySelectorAll('#settings-panel .settings-tab-section[data-settings-tab="media"] .settings-list .settings-item > span');
  if (settingsMediaLabels[0]) settingsMediaLabels[0].textContent = t('settings_media_add_bgm');
  if (settingsMediaLabels[1]) settingsMediaLabels[1].textContent = t('settings_media_add_url');
  if (settingsMediaLabels[2]) settingsMediaLabels[2].textContent = t('settings_media_playlist');
  setText('#settings-panel #bgm-url-add-btn', 'bgm_add_button');

  setText('#settings-panel .settings-tab-section[data-settings-tab="features"] .settings-section-label', 'settings_features_title');
  const featureLabels = document.querySelectorAll('#settings-panel .settings-tab-section[data-settings-tab="features"] .settings-item > span');
  const featureKeys = ['settings_feature_clock', 'settings_feature_pomodoro', 'settings_feature_music', 'settings_feature_rain', 'settings_feature_mascot', 'settings_feature_vrm', 'settings_feature_ssh'];
  featureLabels.forEach((label, index) => { if (featureKeys[index]) label.textContent = t(featureKeys[index]); });

  const threeDSections = document.querySelectorAll('#settings-panel .settings-tab-section[data-settings-tab="3d"] .settings-section-label');
  if (threeDSections[0]) threeDSections[0].textContent = t('settings_3d_vrm_title');
  if (threeDSections[1]) threeDSections[1].textContent = t('settings_3d_glb_title');
  if (threeDSections[2]) threeDSections[2].textContent = t('settings_3d_chair_title');

  const vrmLabels = document.querySelectorAll('#settings-panel .settings-tab-section[data-settings-tab="3d"] .settings-list:nth-of-type(1) .settings-item > span');
  const glbLabels = document.querySelectorAll('#settings-panel .settings-tab-section[data-settings-tab="3d"] .settings-list:nth-of-type(2) .settings-item > span');
  const chairLabels = document.querySelectorAll('#settings-panel .settings-tab-section[data-settings-tab="3d"] .settings-list:nth-of-type(3) .settings-item > span');
  [vrmLabels, glbLabels, chairLabels].forEach(list => {
    if (list[0]) list[0].textContent = t('settings_left_right');
    if (list[1]) list[1].textContent = t('settings_vertical');
    if (list[2]) list[2].textContent = t('settings_scale');
    if (list[3]) list[3].textContent = t('settings_rotation');
  });
  setText('#vrm-reset-btn', 'settings_reset');
  setText('#vrm-copy-btn', 'settings_copy');
  setText('#glb-reset-btn', 'settings_reset');
  setText('#glb-copy-btn', 'settings_copy');
  setText('#glb-chair-reset-btn', 'settings_reset');

  setPlaceholder('#todo-input', 'todo_placeholder');
  setTitle('#todo-add-btn', 'todo_add');
  setPlaceholder('#workshop-search-query', 'workshop_search_placeholder');
  setTitle('#workshop-search-btn', 'workshop_search');
  setText('#workshop-items .workshop-empty', 'workshop_empty');
  setText('#workshop-create-btn', 'workshop_create_new');
  setText('#workshop-form-title', 'workshop_form_title');
  setPlaceholder('#workshop-item-id', 'workshop_field_id');
  setPlaceholder('#workshop-item-name', 'workshop_field_name');
  setPlaceholder('#workshop-item-desc', 'workshop_field_desc');
  setPlaceholder('#workshop-item-author', 'workshop_field_author');
  setText('#workshop-form-save', 'workshop_save');
  setText('#workshop-form-cancel', 'workshop_cancel');
  const workshopMeta = document.querySelectorAll('#workshop-detail .workshop-detail-meta > div');
  if (workshopMeta[0]) workshopMeta[0].childNodes[0].nodeValue = `${t('workshop_detail_id')}: `;
  if (workshopMeta[1]) workshopMeta[1].childNodes[0].nodeValue = `${t('workshop_detail_author')}: `;
  if (workshopMeta[2]) workshopMeta[2].childNodes[0].nodeValue = `${t('workshop_detail_version')}: `;
  setText('#workshop-detail-toggle-label', 'workshop_detail_use');
  setText('#workshop-detail-delete', 'workshop_detail_delete');
  setText('#workshop-detail-files h5', 'workshop_detail_files');
  setText('#workshop-detail-name', 'workshop_form_title');

  setPlaceholder('#theme-save-id', 'theme_save_id_placeholder');
  setPlaceholder('#theme-save-name', 'theme_save_name_placeholder');
  setPlaceholder('#theme-save-desc', 'theme_save_desc_placeholder');
  setPlaceholder('#theme-save-author', 'theme_save_author_placeholder');
  document.querySelectorAll('#theme-save-btn').forEach(btn => {
    btn.textContent = t('theme_save_btn');
  });
  setText('#theme-publish-btn', 'theme_publish_btn');
  setText('#theme-bg-clear-btn', 'theme_bg_clear_btn');
  setText('#theme-bg-preview', 'theme_bg_preview');
  setText('#theme-color-accent + label', 'theme_color_accent');
  setText('#theme-color-secondary + label', 'theme_color_secondary');
  setText('#theme-color-accent2 + label', 'theme_color_accent2');
  setText('#theme-color-text + label', 'theme_color_text');

  setText('#theme-vrm-select + label', 'theme_vrm_set');
  setText('#theme-glb-char-select + label', 'theme_glb_character');
  setText('#theme-behavior-select + label', 'theme_behavior_profile');
  setText('#theme-glb-env-select + label', 'theme_glb_environment');
  setText('#theme-editor-panel .theme-editor-tab-content[data-tab-content="environment"] p', 'theme_environment_note');
  setTextAll('#theme-behavior-select option', ['theme_behavior_neutral', 'theme_behavior_focused', 'theme_behavior_relaxed', 'theme_behavior_tired']);
  setOptionTexts('#ui-theme-select', { zany: 'theme_ui_zany', default: 'theme_ui_default' });
  setOptionTexts('#ui-language-select', { ja: 'settings_ui_language', en: 'launcher_browser' });

  setTitle('#btn-todo', 'todo_title');
  setTitle('#btn-stats', 'settings_features_title');
  setTitle('#btn-calendar', 'launcher_calculator');
  setTitle('#btn-distraction', 'settings_theme_customization');
  setTitle('#btn-ssh', 'ssh_title');
  setTitle('#btn-workshop', 'workshop_title');
  setTitle('#btn-theme-editor', 'theme_editor_title');
  setTitle('#btn-launcher', 'launcher_title');
  setTitle('#btn-settings', 'settings_title');
  setTitle('#btn-close', 'close');

  setTitle('#btn-scene', 'settings_theme');
  setTitle('#btn-rain', 'theme_bg_preview');
  setTitle('#btn-sound', 'theme_color_text');
  setTitle('#btn-vrm', 'settings_3d_vrm_title');
  setTitle('#btn-glb', 'settings_3d_glb_title');
  setTitle('#btn-save-workshop', 'workshop_save_title');

  setTitle('#player-mute', 'player_mute');
  setTitle('#player-shuffle', 'player_shuffle');
  setTitle('#player-prev', 'player_prev');
  setTitle('#player-play', 'player_play');
  setTitle('#player-next', 'player_next');
  setTitle('#player-repeat', 'player_repeat');
  setTitle('#volume-slider', 'player_volume');

  setText('#pomo-config-view .pomo-loop-control > span', 'pomo_loop');
  const pomoLabels = document.querySelectorAll('.pomo-time-controls .time-control-label');
  if (pomoLabels[0]) pomoLabels[0].textContent = t('pomodoro_work');
  if (pomoLabels[1]) pomoLabels[1].textContent = t('pomodoro_break');
  setTitle('#pomo-play-btn', 'pomo_play');
  setText('#pomo-stop-btn', 'pomo_cancel');
}

function updateAllUITexts() {
  document.documentElement.lang = currentLanguage;
  const languageSelect = document.getElementById('ui-language-select');
  if (languageSelect) languageSelect.value = currentLanguage;
  if (typeof updateClock === 'function') updateClock();

  setText('#settings-panel > .todo-header h3', 'settings_title');
  setText('#todo-panel > .todo-header h3', 'todo_title');
  setText('#ssh-panel > .todo-header h3', 'ssh_title');
  setText('#workshop-panel > .todo-header h3', 'workshop_title');
  setText('#theme-editor-panel .theme-editor-header h3', 'theme_editor_title');
  setText('#launcher-panel h3', 'launcher_title');
  setText('#workshop-save-modal .workshop-save-header h4', 'workshop_save_title');

  setTextAll('#settings-tabs .settings-tab-btn', ['settings_tab_theme', 'settings_tab_media', 'settings_tab_features', 'settings_tab_3d']);
  setTextAll('.theme-editor-tabs .theme-editor-tab', ['theme_tab_colors', 'theme_tab_background', 'theme_tab_character', 'theme_tab_environment', 'theme_tab_save']);
  setTextAll('#workshop-panel .workshop-tabs .workshop-tab', ['workshop_tab_theme', 'workshop_tab_vrm', 'workshop_tab_glb', 'workshop_tab_apps']);

  const settingsThemeLabels = document.querySelectorAll('#settings-panel .settings-tab-section[data-settings-tab="theme"] .settings-list .settings-item > span');
  if (settingsThemeLabels[0]) settingsThemeLabels[0].textContent = t('settings_ui_theme');
  if (settingsThemeLabels[1]) settingsThemeLabels[1].textContent = t('settings_ui_language');
  const settingsThemeSectionLabels = document.querySelectorAll('#settings-panel .settings-tab-section[data-settings-tab="theme"] .settings-section-label');
  if (settingsThemeSectionLabels[0]) settingsThemeSectionLabels[0].textContent = t('settings_theme_general');
  if (settingsThemeSectionLabels[1]) settingsThemeSectionLabels[1].textContent = t('settings_theme_customization');
  const settingsMediaSection = document.querySelector('#settings-panel .settings-tab-section[data-settings-tab="media"]');
  if (settingsMediaSection) {
    const mediaLabels = settingsMediaSection.querySelectorAll('.settings-item > span');
    if (mediaLabels[0]) mediaLabels[0].textContent = t('settings_media_add_bgm');
    if (mediaLabels[1]) mediaLabels[1].textContent = t('settings_media_add_url');
    if (mediaLabels[2]) mediaLabels[2].textContent = t('settings_media_playlist');
    const mediaSectionLabel = settingsMediaSection.querySelector('.settings-section-label');
    if (mediaSectionLabel) mediaSectionLabel.textContent = t('settings_media_bgm');
  }
  const featureSection = document.querySelector('#settings-panel .settings-tab-section[data-settings-tab="features"]');
  if (featureSection) {
    const labels = featureSection.querySelectorAll('.settings-item > span');
    ['settings_feature_clock', 'settings_feature_pomodoro', 'settings_feature_music', 'settings_feature_rain', 'settings_feature_mascot', 'settings_feature_vrm', 'settings_feature_ssh']
      .forEach((key, index) => { if (labels[index]) labels[index].textContent = t(key); });
    const featureHeader = featureSection.querySelector('.settings-section-label');
    if (featureHeader) featureHeader.textContent = t('settings_features_title');
  }
  const threeDSection = document.querySelector('#settings-panel .settings-tab-section[data-settings-tab="3d"]');
  if (threeDSection) {
    const sectionLabels = threeDSection.querySelectorAll('.settings-section-label');
    if (sectionLabels[0]) sectionLabels[0].textContent = t('settings_3d_vrm_title');
    if (sectionLabels[1]) sectionLabels[1].textContent = t('settings_3d_glb_title');
    if (sectionLabels[2]) sectionLabels[2].textContent = t('settings_3d_chair_title');
    const lists = threeDSection.querySelectorAll('.settings-list');
    const keysByList = [
      ['settings_left_right', 'settings_vertical', 'settings_scale', 'settings_rotation'],
      ['settings_left_right', 'settings_vertical', 'settings_scale', 'settings_rotation'],
      ['settings_left_right', 'settings_vertical', 'settings_scale', 'settings_rotation'],
    ];
    lists.forEach((list, listIndex) => {
      list.querySelectorAll('.settings-item > span').forEach((label, labelIndex) => {
        const key = keysByList[listIndex]?.[labelIndex];
        if (key) label.textContent = t(key);
      });
    });
  }
  setText('#vrm-reset-btn', 'settings_reset');
  setText('#vrm-copy-btn', 'settings_copy');
  setText('#glb-reset-btn', 'settings_reset');
  setText('#glb-copy-btn', 'settings_copy');
  setText('#glb-chair-reset-btn', 'settings_reset');

  setPlaceholder('#todo-input', 'todo_placeholder');
  setTitle('#todo-add-btn', 'todo_add');
  setPlaceholder('#workshop-search-query', 'workshop_search_placeholder');
  setTitle('#workshop-search-btn', 'workshop_search');
  setText('#workshop-items .workshop-empty', 'workshop_empty');
  setText('#workshop-create-btn', 'workshop_create_new');
  setText('#workshop-form-title', 'workshop_form_title');
  setPlaceholder('#workshop-item-id', 'workshop_field_id');
  setPlaceholder('#workshop-item-name', 'workshop_field_name');
  setPlaceholder('#workshop-item-desc', 'workshop_field_desc');
  setPlaceholder('#workshop-item-author', 'workshop_field_author');
  setText('#workshop-form-save', 'workshop_save');
  setText('#workshop-form-cancel', 'workshop_cancel');
  const workshopMeta = document.querySelectorAll('#workshop-detail .workshop-detail-meta > div');
  if (workshopMeta[0]?.firstChild) workshopMeta[0].firstChild.nodeValue = `${t('workshop_detail_id')}: `;
  if (workshopMeta[1]?.firstChild) workshopMeta[1].firstChild.nodeValue = `${t('workshop_detail_author')}: `;
  if (workshopMeta[2]?.firstChild) workshopMeta[2].firstChild.nodeValue = `${t('workshop_detail_version')}: `;
  setText('#workshop-detail-toggle-label', 'workshop_detail_use');
  setText('#workshop-detail-delete', 'workshop_detail_delete');
  setText('#workshop-detail-files h5', 'workshop_detail_files');

  setPlaceholder('#theme-save-id', 'theme_save_id_placeholder');
  setPlaceholder('#theme-save-name', 'theme_save_name_placeholder');
  setPlaceholder('#theme-save-desc', 'theme_save_desc_placeholder');
  setPlaceholder('#theme-save-author', 'theme_save_author_placeholder');
  setText('#theme-save-btn', 'theme_save_btn');
  setText('#theme-publish-btn', 'theme_publish_btn');
  setText('#theme-bg-clear-btn', 'theme_bg_clear_btn');
  setTextAll('#theme-editor-panel .theme-color-group label', ['theme_color_accent', 'theme_color_secondary', 'theme_color_accent2', 'theme_color_text']);
  setTextAll('#theme-editor-panel .theme-select-group label', ['theme_vrm_set', 'theme_glb_character', 'theme_behavior_profile', 'theme_glb_environment']);
  setText('#theme-editor-panel .theme-editor-tab-content[data-tab-content="environment"] p', 'theme_environment_note');
  setTextAll('#theme-behavior-select option', ['theme_behavior_neutral', 'theme_behavior_focused', 'theme_behavior_relaxed', 'theme_behavior_tired']);
  setOptionTexts('#ui-theme-select', { zany: 'theme_ui_zany', default: 'theme_ui_default' });
  setOptionTexts('#ui-language-select', { ja: 'language_japanese', en: 'language_english' });

  setTitle('#btn-todo', 'todo_title');
  setTitle('#btn-stats', 'settings_features_title');
  setTitle('#btn-calendar', 'launcher_calculator');
  setTitle('#btn-distraction', 'settings_theme_customization');
  setTitle('#btn-ssh', 'ssh_title');
  setTitle('#btn-workshop', 'workshop_title');
  setTitle('#btn-theme-editor', 'theme_editor_title');
  setTitle('#btn-launcher', 'launcher_title');
  setTitle('#btn-settings', 'settings_title');
  setTitle('#btn-close', 'close');
  setTitle('#btn-scene', 'settings_theme');
  setTitle('#btn-rain', 'theme_bg_preview');
  setTitle('#btn-sound', 'theme_color_text');
  setTitle('#btn-vrm', 'settings_3d_vrm_title');
  setTitle('#btn-glb', 'settings_3d_glb_title');
  setTitle('#btn-save-workshop', 'workshop_save_title');
  setTitle('#player-mute', 'player_mute');
  setTitle('#player-shuffle', 'player_shuffle');
  setTitle('#player-prev', 'player_prev');
  setTitle('#player-play', 'player_play');
  setTitle('#player-next', 'player_next');
  setTitle('#player-repeat', 'player_repeat');
  setTitle('#volume-slider', 'player_volume');

  setText('#pomo-config-view .pomo-loop-control > span', 'pomo_loop');
  const pomoLabels = document.querySelectorAll('.pomo-time-controls .time-control-label');
  if (pomoLabels[0]) pomoLabels[0].textContent = t('pomodoro_work');
  if (pomoLabels[1]) pomoLabels[1].textContent = t('pomodoro_break');
  setTitle('#pomo-play-btn', 'pomo_play');
  setText('#pomo-stop-btn', 'pomo_cancel');
}

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
  const ampm = hh >= 12 ? t('time_period_pm') : t('time_period_am');
  hh = hh % 12;
  hh = hh ? hh : 12; // 0 -> 12
  const hhStr = String(hh).padStart(2, "0");

  document.getElementById("time-text").textContent = `${hhStr}:${mm}`;
  document.getElementById("ampm-text").textContent = ampm;

  // Date: YYYY/MM/DD(Day)
  const yyyy = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");
  const weekdaysArray = t('weekdays').split ? t('weekdays') : LANGUAGES[currentLanguage].weekdays;
  const day = weekdaysArray[now.getDay()];

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
const BGM_PLAYLIST_STORAGE_KEY = 'bgmPlaylist';
const LEGACY_DEFAULT_BGM_URLS = [
  './assets/pulsebox-lofi-smooth-522876.mp3',
  './assets/bgm.mp3',
  './assets/rain_sound.mp3'
];
const DEFAULT_BGM_PLAYLIST = [
  {
    title: "Lofi Smooth",
    artist: "PulseBox",
    url: "./assets/mp3/pulsebox-lofi-smooth-522876.mp3",
    kind: "audio"
  },
  {
    title: "Coffee Chill",
    artist: "romanbelov",
    url: "./assets/mp3/romanbelov-coffee-chill-out-15283.mp3",
    kind: "audio"
  },
  {
    title: "Chill Background",
    artist: "sleeping signal",
    url: "./assets/mp3/chill_background-sleeping-signal-chill-lofi-background-music-14973.mp3",
    kind: "audio"
  },
  {
    title: "Bathroom Chill",
    artist: "chill background",
    url: "./assets/mp3/chill_background-bathroom-chill-background-music-14977.mp3",
    kind: "audio"
  },
  {
    title: "Waterfall Kero",
    artist: "watrfallkero",
    url: "./assets/mp3/watrfallkero-lofi-beat-chill-7373.mp3",
    kind: "audio"
  },
  {
    title: "Welcome",
    artist: "welc0mei0",
    url: "./assets/mp3/welc0mei0-190117-chill-japan-calm-simple-nostalgic-143427.mp3",
    kind: "audio"
  },
  {
    title: "Akiko Shina",
    artist: "akiko_shina",
    url: "./assets/mp3/akiko_shina-lofi-pianoquottonightquot-248623.mp3",
    kind: "audio"
  }
];

function inferTrackKind(url) {
  const normalized = String(url || '').trim().toLowerCase();
  if (!normalized) return 'audio';
  if (normalized.startsWith('data:audio/') || normalized.startsWith('blob:')) return 'audio';
  if (/\.(mp3|wav|ogg|m4a|aac|flac)(\?|#|$)/.test(normalized)) return 'audio';
  return 'audio';
}

function inferTrackNameFromUrl(url) {
  const normalized = String(url || '').trim();
  if (!normalized) return 'Untitled URL';

  try {
    if (normalized.startsWith('data:') || normalized.startsWith('blob:')) {
      return 'Uploaded media';
    }

    const parsed = new URL(normalized, window.location.href);
    const lastSegment = parsed.pathname.split('/').filter(Boolean).pop();
    if (lastSegment) {
      return decodeURIComponent(lastSegment).replace(/\.[^.]+$/, '');
    }
    return parsed.hostname.replace(/^www\./, '');
  } catch {
    const lastSegment = normalized.split('/').filter(Boolean).pop();
    return lastSegment ? lastSegment.replace(/\.[^.]+$/, '') : 'Untitled URL';
  }
}

function getTrackHostLabel(url) {
  const normalized = String(url || '').trim();
  if (!normalized) return 'URL';
  if (normalized.startsWith('data:')) return 'アップロード';
  if (normalized.startsWith('blob:')) return 'ローカルファイル';
  try {
    return new URL(normalized, window.location.href).hostname.replace(/^www\./, '');
  } catch {
    return 'URL';
  }
}

function normalizePlaylistTrack(track, index = 0) {
  const url = track?.url || track?.data || track?.src || '';
  const kind = track?.kind || inferTrackKind(url);
  const title = track?.title || track?.name || inferTrackNameFromUrl(url) || `Track ${index + 1}`;
  const artist = track?.artist || track?.sourceLabel || getTrackHostLabel(url);
  return {
    id: track?.id || `bgm-${Date.now()}-${index}`,
    title,
    artist,
    url,
    kind,
    source: track?.source || (track?.data ? 'upload' : 'url')
  };
}

function isLegacyDefaultPlaylist(parsed) {
  if (!Array.isArray(parsed) || parsed.length !== LEGACY_DEFAULT_BGM_URLS.length) {
    return false;
  }

  return parsed.every((track, index) => {
    const url = String(track?.url || track?.src || '').trim();
    return url === LEGACY_DEFAULT_BGM_URLS[index];
  });
}

function loadBgmPlaylistFromStorage() {
  const stored = localStorage.getItem(BGM_PLAYLIST_STORAGE_KEY);
  if (stored === null) {
    return DEFAULT_BGM_PLAYLIST.map((track, index) => normalizePlaylistTrack(track, index));
  }

  try {
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) {
      return DEFAULT_BGM_PLAYLIST.map((track, index) => normalizePlaylistTrack(track, index));
    }
    if (isLegacyDefaultPlaylist(parsed)) {
      const migrated = DEFAULT_BGM_PLAYLIST.map((track, index) => normalizePlaylistTrack(track, index));
      localStorage.setItem(BGM_PLAYLIST_STORAGE_KEY, JSON.stringify(migrated));
      return migrated;
    }
    return parsed.map((track, index) => normalizePlaylistTrack(track, index)).filter(track => track.url);
  } catch {
    return DEFAULT_BGM_PLAYLIST.map((track, index) => normalizePlaylistTrack(track, index));
  }
}

function saveBgmPlaylist() {
  try {
    localStorage.setItem(BGM_PLAYLIST_STORAGE_KEY, JSON.stringify(bgmPlaylist));
    return true;
  } catch (error) {
    console.warn('Failed to persist BGM playlist:', error);
    return false;
  }
}

function setPlayerPlayingState(playing) {
  isPlaying = playing;
  playBtn.querySelector('.play-icon').classList.toggle('hidden', playing);
  playBtn.querySelector('.pause-icon').classList.toggle('hidden', !playing);
}

function applyTrackSource(track) {
  if (!track || !track.url) {
    bgm.removeAttribute('src');
    bgm.load();
    return;
  }

  bgm.src = track.url;
  bgm.load();
}

const playlist = loadBgmPlaylistFromStorage();
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
  if (!playlist.length) {
    currentTrackIndex = 0;
    trackTitle.textContent = '再生リストが空です';
    trackArtist.textContent = '音声ファイルか音声URLを追加してください';
    applyTrackSource(null);
    setPlayerPlayingState(false);
    return;
  }

  const normalizedIndex = ((index % playlist.length) + playlist.length) % playlist.length;
  const track = playlist[normalizedIndex];
  if (!track) return;

  currentTrackIndex = normalizedIndex;
  trackTitle.textContent = track.title;
  trackArtist.textContent = `${track.artist} · 音声`;
  applyTrackSource(track);
}

function playCurrentTrack() {
  const track = playlist[currentTrackIndex];
  if (!track) return;

  bgm.play().then(() => {
    setPlayerPlayingState(true);
  }).catch(e => console.log('BGM playback failed due to user-gesture requirements:', e));
}

function pauseCurrentTrack() {
  bgm.pause();
  setPlayerPlayingState(false);
}

function selectTrack(index, shouldAutoplay = false) {
  currentTrackIndex = index;
  loadTrack(index);
  if (shouldAutoplay) {
    playCurrentTrack();
  }
}
loadTrack(currentTrackIndex);

playBtn.addEventListener('click', togglePlay);
function togglePlay() {
  if (isPlaying) {
    pauseCurrentTrack();
  } else {
    playCurrentTrack();
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
  selectTrack(prevIndex, isPlaying);
});

document.getElementById('player-next').addEventListener('click', () => {
  nextTrack();
});

function nextTrack() {
  if (!playlist.length) return;
  let nextIndex = currentTrackIndex + 1;
  if (isShuffle) {
    nextIndex = Math.floor(Math.random() * playlist.length);
  } else if (nextIndex >= playlist.length) {
    nextIndex = 0;
  }
  selectTrack(nextIndex, isPlaying);
}

bgm.addEventListener('ended', () => {
  if (isRepeat) {
    bgm.currentTime = 0;
    playCurrentTrack();
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

const THEME_PRESETS = {
  night: {
    vrm: {
      pose: {
        leftUpperLeg:  { x: -1.25, y: 0, z: 0 },
        rightUpperLeg: { x: -1.25, y: 0, z: 0 },
        leftLowerLeg:  { x: 1.35, y: 0, z: 0 },
        rightLowerLeg: { x: 1.35, y: 0, z: 0 },
        leftUpperArm:  { x: 0.2, y: 0, z: -1.15 },
        rightUpperArm: { x: 0.2, y: 0, z: 1.15 },
        leftLowerArm:  { x: 0, y: -0.25, z: 0 },
        rightLowerArm: { x: 0, y: 0.25, z: 0 },
        chest: { x: 0, y: 0, z: 0 },
        head:  { x: 0, y: 0, z: 0 }
      },
      expression: 'sleepy',
      eyeBlink: true,
      behavior_profile: 'tired' // theme-linked behavior state
    },
    glb: {
      animation: null,
      animationSpeed: 1.0
    }
  },
  sunset: {
    vrm: {
      pose: {
        leftUpperLeg:  { x: -1.25, y: 0, z: 0 },
        rightUpperLeg: { x: -1.25, y: 0, z: 0 },
        leftLowerLeg:  { x: 1.35, y: 0, z: 0 },
        rightLowerLeg: { x: 1.35, y: 0, z: 0 },
        leftUpperArm:  { x: 0.1, y: 0, z: -0.9 },
        rightUpperArm: { x: 0.1, y: 0, z: 0.9 },
        leftLowerArm:  { x: 0, y: -0.2, z: 0 },
        rightLowerArm: { x: 0, y: 0.2, z: 0 },
        chest: { x: 0, y: 0, z: 0 },
        head:  { x: 0, y: 0, z: 0 }
      },
      expression: 'neutral',
      eyeBlink: true,
      behavior_profile: 'relaxed'
    },
    glb: {
      animation: null,
      animationSpeed: 1.0
    }
  },
  ambient: {
    vrm: {
      pose: {
        leftUpperLeg:  { x: -1.25, y: 0, z: 0 },
        rightUpperLeg: { x: -1.25, y: 0, z: 0 },
        leftLowerLeg:  { x: 1.35, y: 0, z: 0 },
        rightLowerLeg: { x: 1.35, y: 0, z: 0 },
        leftUpperArm:  { x: 0.3, y: 0, z: -1.3 },
        rightUpperArm: { x: 0.3, y: 0, z: 1.3 },
        leftLowerArm:  { x: 0, y: -0.3, z: 0 },
        rightLowerArm: { x: 0, y: 0.3, z: 0 },
        chest: { x: 0, y: 0, z: 0 },
        head:  { x: 0, y: 0, z: 0 }
      },
      expression: 'happy',
      eyeBlink: true,
      behavior_profile: 'focused'
    },
    glb: {
      animation: null,
      animationSpeed: 1.0
    }
  }
};

function normalizeGlbBoneName(name) {
  return String(name || '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

function parseGlbRotationValue(value) {
  if (Array.isArray(value)) {
    return {
      x: Number(value[0] || 0),
      y: Number(value[1] || 0),
      z: Number(value[2] || 0)
    };
  }

  if (!value || typeof value !== 'object') return null;

  if (Array.isArray(value.rotation)) {
    return parseGlbRotationValue(value.rotation);
  }

  return {
    x: Number(value.x || 0),
    y: Number(value.y || 0),
    z: Number(value.z || 0)
  };
}

function captureGlbPoseBaseTransforms(root) {
  if (!root) return;
  root.traverse((node) => {
    if (!node || node === root || !node.rotation) return;
    node.userData.glbPoseBaseRotation = {
      x: node.rotation.x,
      y: node.rotation.y,
      z: node.rotation.z
    };
  });
}

function resetGlbPose(root = currentGlbRoot) {
  if (!root) return;
  root.traverse((node) => {
    if (node === root) return;
    const baseRotation = node?.userData?.glbPoseBaseRotation;
    if (!baseRotation || !node.rotation) return;
    node.rotation.set(baseRotation.x, baseRotation.y, baseRotation.z);
  });
}

function findGlbPoseNode(root, boneName) {
  if (!root || !boneName) return null;
  const normalizedTarget = normalizeGlbBoneName(boneName);
  let matchedNode = null;

  root.traverse((node) => {
    if (matchedNode || !node || !node.name) return;
    if (node.name === boneName || normalizeGlbBoneName(node.name) === normalizedTarget) {
      matchedNode = node;
    }
  });

  return matchedNode;
}

function resolveGlbPoseData(themeData) {
  if (!themeData) return null;

  if (themeData.glb_pose && typeof themeData.glb_pose === 'object' && Object.keys(themeData.glb_pose).length > 0) {
    return themeData.glb_pose;
  }

  const glbConfig = themeData.glb_config || {};
  if (glbConfig.pose_data && typeof glbConfig.pose_data === 'object') {
    return glbConfig.pose_data;
  }

  if (glbConfig.pose && typeof glbConfig.pose === 'object') {
    return glbConfig.pose;
  }

  return null;
}

function applyGlbPose(poseData) {
  if (!currentGlbRoot || !poseData) return false;

  const poseBones = poseData.bones && typeof poseData.bones === 'object' ? poseData.bones : poseData;
  if (!poseBones || typeof poseBones !== 'object') return false;

  resetGlbPose();

  let appliedCount = 0;
  Object.entries(poseBones).forEach(([boneName, bonePose]) => {
    const rotation = parseGlbRotationValue(bonePose);
    if (!rotation) return;

    const node = findGlbPoseNode(currentGlbRoot, boneName);
    if (!node) return;

    const baseRotation = node.userData.glbPoseBaseRotation || { x: 0, y: 0, z: 0 };
    node.rotation.set(
      baseRotation.x + rotation.x,
      baseRotation.y + rotation.y,
      baseRotation.z + rotation.z
    );
    appliedCount += 1;
  });

  if (appliedCount > 0) {
    currentGlbRoot.updateMatrixWorld(true);
  }

  return appliedCount > 0;
}

// テーマを動的に読み込んで全要素を適用
async function applyTheme(themeData) {
  if (!themeData) return;

  // 1. CSS 変数（colors）を動的に設定
  if (themeData.colors) {
    const root = document.documentElement;
    Object.entries(themeData.colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }

  // 2. 背景画像を変更
  if (themeData.background && themeData.background.trim() !== '') {
    const bgElement = document.getElementById('bg-ambient');
    if (bgElement) {
      bgElement.style.backgroundImage = `url('${themeData.background}')`;
    }
  }

  // 3. VRM 設定を適用（ポーズ・アニメーション・表情・behavior_profile）
  if (themeData.vrm_config) {
    const vrmConfig = themeData.vrm_config;

    // Apply behavior profile (integrated pose + expression + animation)
    const behaviorProfile = resolveVrmBehaviorProfile(themeData);
    if (currentVrm) {
      applyVrmBehaviorProfile(behaviorProfile);
    }

    // Override with explicit pose if provided
    if (vrmConfig.pose_data && typeof vrmConfig.pose_data === 'object' && currentVrm && currentVrm.humanoid) {
      Object.entries(vrmConfig.pose_data).forEach(([boneName, rot]) => {
        const bone = currentVrm.humanoid.getNormalizedBoneNode(boneName);
        if (bone) {
          bone.rotation.x = rot.x || 0;
          bone.rotation.y = rot.y || 0;
          bone.rotation.z = rot.z || 0;
        }
      });
    }

    // Override with explicit expression if provided
    if (vrmConfig.expression && currentVrm && currentVrm.expressionManager) {
      currentVrmExpression = vrmConfig.expression;
      const expr = currentVrmExpression;
      currentVrm.expressionManager.setValue('happy', expr === 'happy' ? 1.0 : 0.0);
      currentVrm.expressionManager.setValue('angry', expr === 'angry' ? 1.0 : 0.0);
      currentVrm.expressionManager.setValue('sad', expr === 'sad' ? 1.0 : 0.0);
      currentVrm.expressionManager.setValue('relaxed', expr === 'relaxed' ? 1.0 : 0.0);
    }
  }

  // 4. GLB 設定を適用（ポーズ・アニメーション）
  if (themeData.glb_config) {
    const glbConfig = themeData.glb_config;
    const glbPoseData = resolveGlbPoseData(themeData);
    if (glbPoseData) {
      applyGlbPose(glbPoseData);
    }
    if (glbConfig.animation && glbAnimations[glbConfig.animation]) {
      playGlbAnimation(glbConfig.animation);
    }
    if (glbConfig.pose && typeof glbConfig.pose === 'string' && !glbPoseData) {
      console.info(`GLB pose "${glbConfig.pose}" is referenced, but no pose data was loaded.`);
    }
  }
}

// Load GLB pose data from Workshop item (for #17 implementation)
async function loadGlbPoseFromWorkshop(itemId) {
  let files;
  let poseData = null;

  if (window.__TAURI__) {
    files = await workshopInvoke('workshop_list_files', {
      category: 'glb_characters',
      id: itemId
    });

    const poseFiles = files.filter(f => f.includes('pose') && f.endsWith('.json'));
    if (poseFiles.length > 0) {
      try {
        const poseFile = poseFiles[0];
        const poseRaw = await workshopInvoke('workshop_read_file', {
          category: 'glb_characters',
          id: itemId,
          filename: poseFile
        });
        if (poseRaw) {
          const poseText = new TextDecoder().decode(new Uint8Array(poseRaw));
          poseData = JSON.parse(poseText);
        }
      } catch (e) {
        console.warn('Failed to load GLB pose from Workshop:', e);
      }
    }
  } else {
    files = await listFilesFromDB('glb_characters', itemId);
    const poseFiles = files.filter(f => f.includes('pose') && f.endsWith('.json'));
    if (poseFiles.length > 0) {
      try {
        const poseFile = poseFiles[0];
        const poseRaw = await readFileFromDB('glb_characters', itemId, poseFile);
        if (poseRaw) {
          const poseText = new TextDecoder().decode(new Uint8Array(poseRaw));
          poseData = JSON.parse(poseText);
        }
      } catch (e) {
        console.warn('Failed to load GLB pose from Workshop:', e);
      }
    }
  }

  return poseData;
}

function applyVrmPose() {
  if (!currentVrm || !currentVrm.humanoid) return;
  const theme = THEME_PRESETS[currentScene];
  if (!theme || !theme.vrm || !theme.vrm.pose) return;

  const pose = theme.vrm.pose;
  Object.entries(pose).forEach(([boneName, rot]) => {
    const bone = currentVrm.humanoid.getNormalizedBoneNode(boneName);
    if (bone) {
      bone.rotation.x = rot.x;
      bone.rotation.y = rot.y;
      bone.rotation.z = rot.z;
    }
  });
}

// Apply VRM pose from current theme (integrated approach for #32)
function applyVrmPoseFromTheme() {
  if (!currentVrm) return;
  const theme = THEME_PRESETS[currentScene];
  if (!theme || !theme.vrm) return;

  // Apply behavior profile first, then override with explicit pose
  const behaviorProfile = resolveVrmBehaviorProfile(theme);
  applyVrmBehaviorProfile(behaviorProfile);

  // Override with theme's explicit pose if provided
  if (theme.vrm.pose && currentVrm.humanoid) {
    Object.entries(theme.vrm.pose).forEach(([boneName, rot]) => {
      const bone = currentVrm.humanoid.getNormalizedBoneNode(boneName);
      if (bone) {
        bone.rotation.x = rot.x || 0;
        bone.rotation.y = rot.y || 0;
        bone.rotation.z = rot.z || 0;
      }
    });
  }
}

function applyGlbPoseFromTheme() {
  if (!currentGlbRoot) return;
  const theme = THEME_PRESETS[currentScene];
  if (!theme || !theme.glb || !theme.glb.pose) return;

  // Only apply pose if asset_role supports it (for #34 implementation)
  if (currentGlbAssetRole === 'static_object' || currentGlbAssetRole === 'static_scene') {
    console.info(`GLB asset_role "${currentGlbAssetRole}" is static, skipping pose application`);
    return;
  }

  const pose = theme.glb.pose;
  applyGlbPose(pose);
}

let currentVrmExpression = 'sleepy';
let vrmEyeBlinkEnabled = true;
let currentVrmBehaviorProfile = 'neutral'; // tracking current behavior state

function applyVrmExpression() {
  if (!currentVrm || !currentVrm.expressionManager) return;
  const theme = THEME_PRESETS[currentScene];
  if (!theme || !theme.vrm) return;

  currentVrmExpression = theme.vrm.expression || 'neutral';
  vrmEyeBlinkEnabled = theme.vrm.eyeBlink !== false;

  const expr = currentVrmExpression;
  currentVrm.expressionManager.setValue('happy', expr === 'happy' ? 1.0 : 0.0);
  currentVrm.expressionManager.setValue('angry', expr === 'angry' ? 1.0 : 0.0);
  currentVrm.expressionManager.setValue('sad', expr === 'sad' ? 1.0 : 0.0);
  currentVrm.expressionManager.setValue('relaxed', expr === 'relaxed' ? 1.0 : 0.0);
}

// VRM behavior profiles: emotional/contextual states (focused, relaxed, tired, etc.)
const VRM_BEHAVIOR_PROFILES = {
  neutral: {
    label: 'ニュートラル',
    pose: null,
    expression: 'neutral',
    eyeBlink: true
  },
  focused: {
    label: '集中',
    pose: { chest: { x: 0.1, y: 0, z: 0 } },
    expression: 'neutral',
    eyeBlink: true
  },
  relaxed: {
    label: 'リラックス',
    pose: { chest: { x: -0.1, y: 0, z: 0 } },
    expression: 'relaxed',
    eyeBlink: true
  },
  tired: {
    label: '疲れ',
    pose: { chest: { x: -0.2, y: 0, z: 0 } },
    expression: 'sad',
    eyeBlink: false
  }
};

// Apply behavior profile (combining pose + expression)
function applyVrmBehaviorProfile(profileName) {
  if (!currentVrm) return false;

  const profile = VRM_BEHAVIOR_PROFILES[profileName];
  if (!profile) {
    console.warn(`VRM behavior profile "${profileName}" not found`);
    return false;
  }

  currentVrmBehaviorProfile = profileName;

  // Apply pose if defined
  if (profile.pose && currentVrm.humanoid) {
    Object.entries(profile.pose).forEach(([boneName, rot]) => {
      const bone = currentVrm.humanoid.getNormalizedBoneNode(boneName);
      if (bone) {
        bone.rotation.x = (rot.x || 0);
        bone.rotation.y = (rot.y || 0);
        bone.rotation.z = (rot.z || 0);
      }
    });
  }

  // Apply expression
  if (profile.expression && currentVrm.expressionManager) {
    currentVrmExpression = profile.expression;
    vrmEyeBlinkEnabled = profile.eyeBlink !== false;

    const expr = profile.expression;
    currentVrm.expressionManager.setValue('happy', expr === 'happy' ? 1.0 : 0.0);
    currentVrm.expressionManager.setValue('angry', expr === 'angry' ? 1.0 : 0.0);
    currentVrm.expressionManager.setValue('sad', expr === 'sad' ? 1.0 : 0.0);
    currentVrm.expressionManager.setValue('relaxed', expr === 'relaxed' ? 1.0 : 0.0);
  }

  return true;
}

// Resolve VRM behavior profile from theme/vrm config
function resolveVrmBehaviorProfile(themeData) {
  if (!themeData) return 'neutral';

  const vrmConfig = themeData.vrm_config || {};

  // Priority: explicit behavior_profile > default
  if (vrmConfig.behavior_profile && typeof vrmConfig.behavior_profile === 'string') {
    return vrmConfig.behavior_profile;
  }

  // Fallback: infer from expression
  if (vrmConfig.expression) {
    if (vrmConfig.expression === 'happy') return 'focused';
    if (vrmConfig.expression === 'relaxed') return 'relaxed';
    if (vrmConfig.expression === 'sad') return 'tired';
  }

  return 'neutral';
}

function playGlbAnimation(name, speed = 1.0) {
  if (!glbAnimationMixer || !glbAnimations[name]) return;
  stopGlbAnimation();
  const clip = glbAnimations[name];
  const action = glbAnimationMixer.clipAction(clip);
  action.setLoop(THREE_Lib ? THREE_Lib.LoopRepeat : 1);
  action.timeScale = speed;
  action.play();
  currentGlbAnimationAction = action;
}

function stopGlbAnimation() {
  if (currentGlbAnimationAction) {
    currentGlbAnimationAction.stop();
    currentGlbAnimationAction = null;
  }
}

function applyGlbAnimation() {
  const theme = THEME_PRESETS[currentScene];
  if (!theme || !theme.glb) return;
  const animName = theme.glb.animation;
  const speed = theme.glb.animationSpeed || 1.0;
  if (animName && glbAnimations[animName]) {
    playGlbAnimation(animName, speed);
  } else {
    stopGlbAnimation();
  }
}

function applyScene() {
  SCENES.forEach(name => sceneBgs[name].classList.toggle('active', name === currentScene));
  document.body.classList.toggle('theme-ambient', currentScene === 'ambient');
  localStorage.setItem('scene', currentScene);
  update3DLights();
  // Apply VRM behavior profile (pose + expression integrated) for #32
  applyVrmPoseFromTheme();
  applyGlbPoseFromTheme();
  applyGlbAnimation();
}

btnScene.addEventListener('click', () => {
  currentScene = SCENES[(SCENES.indexOf(currentScene) + 1) % SCENES.length];
  applyScene();
});
// NOTE: 起動時の applyScene() はファイル末尾で呼ぶ。
// ここで呼ぶと update3DLights() が宣言前の THREE_Lib (TDZ) に触れて落ちる。

// ==========================================
// 7.5 LAUNCHER PANEL
// ==========================================
const launcherPanel = document.getElementById('launcher-panel');
const btnLauncher = document.getElementById('btn-launcher');
const launcherCloseBtn = document.getElementById('launcher-close-btn');

btnLauncher.addEventListener('click', () => {
  closeOtherDrawers(launcherPanel);
  launcherPanel.classList.toggle('active');
  btnLauncher.classList.toggle('active', launcherPanel.classList.contains('active'));
});

launcherCloseBtn.addEventListener('click', () => {
  launcherPanel.classList.remove('active');
  btnLauncher.classList.remove('active');
});

document.querySelectorAll('.launcher-item').forEach(item => {
  item.addEventListener('click', () => {
    const app = item.dataset.app;
    launchApp(app);
  });
});

function launchApp(appName) {
  switch (appName) {
    case 'terminal':
      sshPanel.classList.add('active');
      btnSsh.classList.add('active');
      launcherPanel.classList.remove('active');
      btnLauncher.classList.remove('active');
      break;
    case 'browser':
      alert('ブラウザは準備中です');
      break;
    case 'editor':
      alert('エディタは準備中です');
      break;
    case 'filemanager':
      alert('ファイルマネージャは準備中です');
      break;
    case 'calculator':
      alert('電卓は準備中です');
      break;
    case 'settings':
      settingsPanel.classList.add('active');
      btnSettings.classList.add('active');
      launcherPanel.classList.remove('active');
      btnLauncher.classList.remove('active');
      break;
    case 'ai':
      alert('AIは準備中です');
      break;
    case 'ssh':
      sshPanel.classList.add('active');
      btnSsh.classList.add('active');
      launcherPanel.classList.remove('active');
      btnLauncher.classList.remove('active');
      break;
    default:
      alert('準備中です');
  }
}

// ==========================================
// 8. DISTRACTION-FREE & SETTINGS
// ==========================================
const btnDistraction = document.getElementById('btn-distraction');
let distractionMode = false;

btnDistraction.addEventListener('click', () => {
  distractionMode = !distractionMode;
  applyVisibilityModes();
});

function applyVisibilityModes() {
  const mascotMode = !!features.mascot;
  document.body.classList.toggle('hide-ui', distractionMode || mascotMode);
  document.body.classList.toggle('desktop-mascot-mode', mascotMode);
  btnDistraction.classList.toggle('active', distractionMode);
}

// Settings panel with feature on/off toggles (persisted to localStorage)
const settingsPanel = document.getElementById('settings-panel');
const btnSettings = document.getElementById('btn-settings');
const settingsCloseBtn = document.getElementById('settings-close-btn');
const SETTINGS_TAB_KEY = 'settingsTab';
const settingsTabButtons = Array.from(document.querySelectorAll('.settings-tab-btn'));
const settingsTabSections = Array.from(document.querySelectorAll('.settings-tab-section'));
let currentSettingsTab = localStorage.getItem(SETTINGS_TAB_KEY) || 'theme';
if (!settingsTabButtons.some(btn => btn.dataset.settingsTab === currentSettingsTab)) {
  currentSettingsTab = 'theme';
}

function applySettingsTab(tab) {
  currentSettingsTab = tab;
  localStorage.setItem(SETTINGS_TAB_KEY, tab);
  settingsTabButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.settingsTab === tab);
  });
  settingsTabSections.forEach(section => {
    section.classList.toggle('hidden', section.dataset.settingsTab !== tab);
  });
}

settingsTabButtons.forEach(btn => {
  btn.addEventListener('click', () => applySettingsTab(btn.dataset.settingsTab));
});
applySettingsTab(currentSettingsTab);

const FEATURE_DEFAULTS = {
  clock: true,
  pomodoro: true,
  music: true,
  rain: true,
  vrm: true,
  mascot: false,
  ssh: true
};
let features = { ...FEATURE_DEFAULTS, ...JSON.parse(localStorage.getItem('features') || '{}') };

function applyFeatures() {
  document.querySelector('.clock-widget').classList.toggle('hidden', !features.clock);
  document.querySelector('.top-right-panel').classList.toggle('hidden', !features.pomodoro);
  document.querySelector('.music-player').classList.toggle('hidden', !features.music);
  document.getElementById('vrm-canvas').classList.toggle('hidden', !features.vrm);
  document.getElementById('btn-ssh').classList.toggle('hidden', !features.ssh);
  applyVisibilityModes();

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

// UI Language selector (#38)
const uiLanguageSelect = document.getElementById('ui-language-select');
if (uiLanguageSelect) {
  uiLanguageSelect.value = currentLanguage;
  uiLanguageSelect.addEventListener('change', () => {
    setLanguage(uiLanguageSelect.value);
  });
}

updateAllUITexts();

// ==========================================
// 8.5 THEME CUSTOMIZATION
// ==========================================
const customAccentColor = document.getElementById('custom-accent-color');
const customAccent2Color = document.getElementById('custom-accent2-color');
const customBgNight = document.getElementById('custom-bg-night');
const customBgSunset = document.getElementById('custom-bg-sunset');
const themeResetBtn = document.getElementById('theme-reset-btn');
const themeSaveBtn = document.getElementById('theme-save-btn');

const THEME_DEFAULTS = {
  accentColor: '#ff7b54',
  accent2Color: '#4adede',
  bgNight: null,
  bgSunset: null
};

let customTheme = { ...THEME_DEFAULTS, ...JSON.parse(localStorage.getItem('customTheme') || '{}') };

function applyCustomTheme() {
  if (customTheme.accentColor) {
    document.documentElement.style.setProperty('--accent', customTheme.accentColor);
    document.documentElement.style.setProperty('--accent-rgb', hexToRgb(customTheme.accentColor));
  }
  if (customTheme.accent2Color) {
    document.documentElement.style.setProperty('--accent-2', customTheme.accent2Color);
  }
  if (customTheme.bgNight) {
    document.getElementById('bg-night').style.backgroundImage = `url(${customTheme.bgNight})`;
  }
  if (customTheme.bgSunset) {
    document.getElementById('bg-sunset').style.backgroundImage = `url(${customTheme.bgSunset})`;
  }
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '255, 123, 84';
}

function loadThemeControls() {
  customAccentColor.value = customTheme.accentColor || THEME_DEFAULTS.accentColor;
  customAccent2Color.value = customTheme.accent2Color || THEME_DEFAULTS.accent2Color;
}

customAccentColor.addEventListener('input', () => {
  customTheme.accentColor = customAccentColor.value;
  applyCustomTheme();
});

customAccent2Color.addEventListener('input', () => {
  customTheme.accent2Color = customAccent2Color.value;
  applyCustomTheme();
});

customBgNight.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (ev) => {
      customTheme.bgNight = ev.target.result;
      applyCustomTheme();
    };
    reader.readAsDataURL(file);
  }
});

customBgSunset.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (ev) => {
      customTheme.bgSunset = ev.target.result;
      applyCustomTheme();
    };
    reader.readAsDataURL(file);
  }
});

themeResetBtn.addEventListener('click', () => {
  customTheme = { ...THEME_DEFAULTS };
  localStorage.removeItem('customTheme');
  document.documentElement.style.removeProperty('--accent');
  document.documentElement.style.removeProperty('--accent-rgb');
  document.documentElement.style.removeProperty('--accent-2');
  document.getElementById('bg-night').style.backgroundImage = '';
  document.getElementById('bg-sunset').style.backgroundImage = '';
  loadThemeControls();
});

themeSaveBtn.addEventListener('click', () => {
  localStorage.setItem('customTheme', JSON.stringify(customTheme));
  alert(t('theme_saved_alert'));
});

loadThemeControls();
applyCustomTheme();

// ==========================================
// 8.6 BGM PLAYLIST
// ==========================================
const bgmUpload = document.getElementById('bgm-upload');
const bgmUrlTitle = document.getElementById('bgm-url-title');
const bgmUrlInput = document.getElementById('bgm-url-input');
const bgmUrlAddBtn = document.getElementById('bgm-url-add-btn');
const bgmPlaylistEl = document.getElementById('bgm-playlist');
let bgmPlaylist = playlist;

function renderBgmPlaylist() {
  if (!bgmPlaylistEl) return;

  if (!bgmPlaylist.length) {
    bgmPlaylistEl.innerHTML = '<li class="settings-playlist-empty">音声ファイルか音声URLを追加してください</li>';
    return;
  }

  bgmPlaylistEl.innerHTML = bgmPlaylist.map((track, i) => {
    const sourceLabel = track.source === 'upload' ? 'アップロード' : '音声URL';
    return `
    <li class="settings-playlist-item">
      <div class="settings-playlist-item-main">
        <div class="settings-playlist-item-meta">
          <span class="settings-playlist-item-name">${escapeHtml(track.title)}</span>
          <span class="settings-playlist-item-url">${escapeHtml(track.url)}</span>
        </div>
        <div class="settings-playlist-item-submeta">${escapeHtml(track.artist)} · ${escapeHtml(sourceLabel)}</div>
      </div>
      <div class="settings-playlist-item-actions">
        <button class="settings-playlist-item-play" data-index="${i}" data-action="play">再生</button>
        <button class="settings-playlist-item-remove" data-index="${i}">&times;</button>
      </div>
    </li>
  `; }).join('');

  bgmPlaylistEl.querySelectorAll('.settings-playlist-item-play').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.dataset.index);
      const track = bgmPlaylist[idx];
      if (!track) return;
      selectTrack(idx, true);
    });
  });

  bgmPlaylistEl.querySelectorAll('.settings-playlist-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index);
      bgmPlaylist.splice(idx, 1);
      saveBgmPlaylist();
      renderBgmPlaylist();
      if (!bgmPlaylist.length) {
        pauseCurrentTrack();
      } else if (currentTrackIndex >= bgmPlaylist.length) {
        selectTrack(0, false);
      } else {
        loadTrack(currentTrackIndex);
      }
    });
  });
}

bgmUpload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (ev) => {
      bgmPlaylist.push(normalizePlaylistTrack({
        title: file.name.replace(/\.[^.]+$/, ''),
        artist: 'アップロード',
        url: ev.target.result,
        kind: 'audio',
        source: 'upload'
      }, bgmPlaylist.length));
      renderBgmPlaylist();
      saveBgmPlaylist();
    };
    reader.readAsDataURL(file);
  }
});

bgmUrlAddBtn.addEventListener('click', () => {
  const url = bgmUrlInput.value.trim();
  if (!url) {
    alert('URL を入力してください');
    return;
  }

  const title = bgmUrlTitle.value.trim() || inferTrackNameFromUrl(url);
  bgmPlaylist.push(normalizePlaylistTrack({
    title,
    artist: getTrackHostLabel(url),
    url,
    kind: inferTrackKind(url),
    source: 'url'
  }, bgmPlaylist.length));
  renderBgmPlaylist();
  saveBgmPlaylist();
  bgmUrlTitle.value = '';
  bgmUrlInput.value = '';
});

renderBgmPlaylist();

// Drawers share the same slot, so opening one closes the others
function closeOtherDrawers(except) {
  [[todoPanel, btnTodo], [settingsPanel, btnSettings], [sshPanel, btnSsh], [workshopPanel, btnWorkshop], [launcherPanel, btnLauncher]].forEach(([panel, btn]) => {
    if (panel !== except) {
      panel.classList.remove('active');
      btn.classList.remove('active');
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

// xterm.js terminal (PTY 付きインタラクティブシェル)
let sshTerm = null;
let sshFitAddon = null;
let sshUnlisteners = [];

function ensureSshTerm() {
  if (sshTerm) return sshTerm;
  sshTerm = new Terminal({
    fontSize: 12,
    fontFamily: '"SF Mono", "Menlo", monospace',
    cursorBlink: true,
    theme: {
      background: '#0a0c10',
      foreground: '#d4f5e9'
    }
  });
  sshFitAddon = new FitAddon.FitAddon();
  sshTerm.loadAddon(sshFitAddon);
  sshTerm.open(document.getElementById('ssh-term'));

  sshTerm.onData((data) => {
    sshInvoke('ssh_write', { data }).catch(err => console.error('ssh_write:', err));
  });

  const resizeObserver = new ResizeObserver(() => {
    if (!sshTerminal.classList.contains('hidden')) {
      sshFitAddon.fit();
      sshInvoke('ssh_resize', { cols: sshTerm.cols, rows: sshTerm.rows }).catch(() => {});
    }
  });
  resizeObserver.observe(document.getElementById('ssh-term'));

  return sshTerm;
}

async function startSshShell() {
  const term = ensureSshTerm();
  term.reset();

  const { listen } = window.__TAURI__.event;
  sshUnlisteners.push(await listen('ssh-output', (e) => {
    term.write(new Uint8Array(e.payload));
  }));
  sshUnlisteners.push(await listen('ssh-closed', () => {
    term.write('\r\n[セッションが終了しました]\r\n');
    teardownSshShell();
  }));

  sshConnectForm.classList.add('hidden');
  sshTerminal.classList.remove('hidden');

  sshFitAddon.fit();
  await sshInvoke('ssh_open_shell', { cols: term.cols, rows: term.rows });
  term.focus();
}

function teardownSshShell() {
  sshUnlisteners.forEach(un => un());
  sshUnlisteners = [];
  sshTerminal.classList.add('hidden');
  sshConnectForm.classList.remove('hidden');
}

sshConnectBtn.addEventListener('click', async () => {
  const host = sshHostInput.value.trim();
  const user = sshUserInput.value.trim();
  if (!host || !user) return;

  sshConnectBtn.disabled = true;
  sshConnectBtn.textContent = '接続中...';
  try {
    if (sshAuthMethod.value === 'key') {
      await sshInvoke('ssh_connect_with_key', {
        host, user,
        keyPath: sshKeypathInput.value.trim() || '~/.ssh/id_ed25519'
      });
    } else {
      await sshInvoke('ssh_connect', {
        host, user,
        password: sshPasswordInput.value
      });
    }
    saveSshConn();
    sshStatus.textContent = `${user}@${host}`;
    await startSshShell();
  } catch (err) {
    alert(`SSH 接続エラー: ${err}`);
  } finally {
    sshConnectBtn.disabled = false;
    sshConnectBtn.textContent = '接続';
  }
});

sshDisconnectBtn.addEventListener('click', async () => {
  try {
    await sshInvoke('ssh_disconnect');
  } catch (err) {
    console.error('SSH disconnect error:', err);
  }
  teardownSshShell();
});

applyFeatures();

// Close widget command using Tauri API
const btnClose = document.getElementById('btn-close');
btnClose.addEventListener('click', () => {
  if (window.__TAURI__) {
    sshInvoke('app_quit').catch((err) => {
      console.error('Error quitting Tauri app:', err);
      try {
        window.__TAURI__.window.getCurrentWindow().close();
      } catch (closeErr) {
        console.error('Fallback window close failed:', closeErr);
      }
    });
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
let glbAnimationMixer = null;
let glbAnimations = {};
let currentGlbAnimationAction = null;
let currentGlbAssetRole = 'animated_character'; // static_object / animated_character / static_scene

// ==========================================
// 2-SLOT SYSTEM (#35 Implementation)
// ==========================================
const SLOT_SYSTEM = {
  // character_slot: VRM or Animated GLB (1 item)
  character_slot: {
    type: null, // 'vrm' | 'glb_character' | null
    id: null,   // loaded item ID
    displayName: null
  },
  // environment_slot: Static GLB or Scene (1 item)
  environment_slot: {
    type: null, // 'glb_static' | 'scene' | null
    id: null,   // loaded item ID
    displayName: null
  },
  // scene_mode: future extension for complex layouts
  scene_mode: false // when true, ignores 2-slot constraint
};

// Update slot state when loading VRM
function updateCharacterSlot(vrmId, displayName) {
  SLOT_SYSTEM.character_slot = {
    type: 'vrm',
    id: vrmId,
    displayName: displayName || 'Loaded VRM'
  };
  console.log('Character slot updated (VRM):', SLOT_SYSTEM.character_slot);
}

// Update slot state when loading Animated GLB
function updateCharacterSlotGlb(glbId, displayName) {
  if (currentGlbAssetRole !== 'animated_character') {
    console.warn('Attempting to load non-animated GLB to character_slot');
    return false;
  }
  SLOT_SYSTEM.character_slot = {
    type: 'glb_character',
    id: glbId,
    displayName: displayName || 'Loaded GLB Character'
  };
  console.log('Character slot updated (Animated GLB):', SLOT_SYSTEM.character_slot);
  return true;
}

// Update environment slot with static GLB
function updateEnvironmentSlot(glbId, displayName) {
  if (currentGlbAssetRole !== 'static_object' && currentGlbAssetRole !== 'static_scene') {
    console.warn('Attempting to load animated GLB to environment_slot (requires static)');
    return false;
  }
  SLOT_SYSTEM.environment_slot = {
    type: currentGlbAssetRole === 'static_scene' ? 'scene' : 'glb_static',
    id: glbId,
    displayName: displayName || 'Loaded Environment'
  };
  console.log('Environment slot updated:', SLOT_SYSTEM.environment_slot);
  return true;
}

// Clear a slot
function clearSlot(slotName) {
  if (slotName === 'character_slot') {
    SLOT_SYSTEM.character_slot = { type: null, id: null, displayName: null };
  } else if (slotName === 'environment_slot') {
    SLOT_SYSTEM.environment_slot = { type: null, id: null, displayName: null };
  }
  console.log(`${slotName} cleared`);
}

// Get active slot info for UI display
function getSlotInfo() {
  return {
    character: SLOT_SYSTEM.character_slot.displayName || 'None',
    environment: SLOT_SYSTEM.environment_slot.displayName || 'None',
    sceneMode: SLOT_SYSTEM.scene_mode
  };
}

// GLB asset role definitions (for #34 implementation)
const GLB_ASSET_ROLES = {
  static_object: {
    label: '静的オブジェクト',
    description: '家具や小物など、動かないオブジェクト',
    supportsAnimation: false,
    supportsPose: false
  },
  animated_character: {
    label: 'アニメーション付きキャラクター',
    description: 'ボーンアニメーションを持つキャラクター',
    supportsAnimation: true,
    supportsPose: true,
    behaviorProfiles: true // can apply behavior_profiles
  },
  static_scene: {
    label: '静的シーン',
    description: '複数のオブジェクトを含む背景シーン',
    supportsAnimation: false,
    supportsPose: false
  }
};

// Detect GLB asset role from model structure
function detectGlbAssetRole(gltf) {
  // If has animations, likely an animated character
  if (gltf.animations && gltf.animations.length > 0) {
    return 'animated_character';
  }

  // Check for skeleton/armature (indicates rigged model)
  let hasSkeleton = false;
  gltf.scene.traverse((node) => {
    if (node.type === 'Bone' || node.name.toLowerCase().includes('armature')) {
      hasSkeleton = true;
    }
  });

  if (hasSkeleton) {
    return 'animated_character';
  }

  // Default to static object if no animations or skeleton
  return 'static_object';
}

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
    btnSaveWorkshop.classList.remove('hidden');
  }
});
glbUpload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    loadGlbModel(url);
    pendingSaveFile = file;
    pendingSaveCategory = 'glb_characters';
    btnSaveWorkshop.classList.remove('hidden');
  }
});

btnSaveWorkshop.addEventListener('click', () => {
  if (!pendingSaveFile) return;
  workshopSaveType.textContent = pendingSaveCategory === 'vrm_sets' ? 'VRM' : 'GLB';
  workshopSaveId.value = '';
  workshopSaveName.value = pendingSaveFile.name.replace(/\.[^.]+$/, '');
  workshopSaveDesc.value = '';
  workshopSaveAuthor.value = '';
  workshopSaveModal.classList.remove('hidden');
});

workshopSaveClose.addEventListener('click', () => {
  workshopSaveModal.classList.add('hidden');
});

workshopSaveCancel.addEventListener('click', () => {
  workshopSaveModal.classList.add('hidden');
});

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
    btnSaveWorkshop.classList.add('hidden');
    alert('Workshopに保存しました');
  } catch (err) {
    alert('保存エラー: ' + err);
  }
});

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
    if (!vrmEyeBlinkEnabled) return;

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
    if (glbAnimationMixer) {
      glbAnimationMixer.update(deltaTime);
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

      applyVrmPose();

      // Update character_slot for 2-slot system (#35)
      updateCharacterSlot('default', 'VRM Avatar');

      if (vrm.lookAt && vrmLookTargetObj) {
        vrm.lookAt.target = vrmLookTargetObj;
      }

      vrm.scene.updateMatrixWorld(true);
      frameVrmModel(vrm.scene, vrmCamera3D);
      applyVrmExpression();

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
      // Detect asset role (for #34 implementation)
      currentGlbAssetRole = detectGlbAssetRole(gltf);
      console.log('Detected GLB asset role:', currentGlbAssetRole);

      currentGlbRoot = gltf.scene;
      glbScene3D.add(gltf.scene);
      glbScene3D.updateMatrixWorld(true);
      captureGlbPoseBaseTransforms(gltf.scene);

      // Only process animations for animated characters
      if (currentGlbAssetRole === 'animated_character' && gltf.animations && gltf.animations.length > 0) {
        const THREE = THREE_Lib;
        glbAnimationMixer = new THREE.AnimationMixer(gltf.scene);
        glbAnimations = {};
        gltf.animations.forEach(clip => {
          glbAnimations[clip.name] = clip;
        });
        console.log('GLB animations:', Object.keys(glbAnimations));
      } else {
        glbAnimationMixer = null;
        glbAnimations = {};
      }

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
      applyGlbAnimation();

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
const VRM_DEFAULTS = { posX: 214, posY: -764, scale: 600, rotation: -14 };
const GLB_DEFAULTS = { posX: -390, posY: -537, scale: 592, rotation: -38 };
const GLB_CHAIR_DEFAULTS = { posX: 74, posY: -6, posZ: 2, scale: 109, rotation: -102 };
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

// ==========================================
// 11. THEME EDITOR (#18 Implementation)
// ==========================================
const themeEditorPanel = document.getElementById('theme-editor-panel');
const btnThemeEditor = document.getElementById('btn-theme-editor');
const themeEditorCloseBtn = document.getElementById('theme-editor-close-btn');

let themeEditorState = {
  colors: {
    accent: '#00ffcc',
    secondary: '#4adede',
    accent2: '#ff7b54',
    text: '#ffffff'
  },
  background: null,
  vrm: null,
  glb_character: null,
  glb_environment: null,
  behavior_profile: 'neutral'
};

let themeEditorBackup = null;

const themeEditorTabs = document.querySelectorAll('.theme-editor-tab');
themeEditorTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    themeEditorTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    document.querySelectorAll('.theme-editor-tab-content').forEach(content => {
      content.classList.remove('active');
    });
    document.querySelector(`[data-tab-content="${tab.dataset.tab}"]`).classList.add('active');
  });
});

['accent', 'secondary', 'accent2', 'text'].forEach(colorName => {
  const input = document.getElementById(`theme-color-${colorName}`);
  if (input) {
    const updateColor = (e) => {
      themeEditorState.colors[colorName] = e.target.value;
      previewThemeChanges();
    };
    input.addEventListener('input', updateColor);
    input.addEventListener('change', updateColor);
  }
});

const themeBgUpload = document.getElementById('theme-bg-upload');
if (themeBgUpload) {
  themeBgUpload.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        themeEditorState.background = evt.target.result;
        const preview = document.getElementById('theme-bg-preview');
        if (preview) preview.style.backgroundImage = `url('${evt.target.result}')`;
        previewThemeChanges();
      };
      reader.readAsDataURL(file);
    }
  });
}

document.getElementById('theme-bg-clear-btn')?.addEventListener('click', () => {
  themeEditorState.background = null;
  const preview = document.getElementById('theme-bg-preview');
  if (preview) preview.style.backgroundImage = 'none';
});

async function populateThemeEditorSelects() {
  const vrmSelect = document.getElementById('theme-vrm-select');
  const glbCharSelect = document.getElementById('theme-glb-char-select');
  const glbEnvSelect = document.getElementById('theme-glb-env-select');

  try {
    let vrmItems = [];
    let glbItems = [];

    if (window.__TAURI__) {
      vrmItems = await invoke('workshop_list_items', { category: 'vrm_sets' });
      glbItems = await invoke('workshop_list_items', { category: 'glb_characters' });
    } else {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('workshop_meta_vrm_sets_')) {
          vrmItems.push(JSON.parse(localStorage.getItem(key)));
        }
        if (key.startsWith('workshop_meta_glb_characters_')) {
          glbItems.push(JSON.parse(localStorage.getItem(key)));
        }
      }
    }

    vrmSelect.innerHTML = '<option value="">なし</option>';
    vrmItems.forEach(item => {
      const option = document.createElement('option');
      option.value = item.id;
      option.textContent = item.name;
      vrmSelect.appendChild(option);
    });

    glbCharSelect.innerHTML = '<option value="">なし</option>';
    glbItems.forEach(item => {
      const option = document.createElement('option');
      option.value = item.id;
      option.textContent = item.name;
      glbCharSelect.appendChild(option);
    });

    glbEnvSelect.innerHTML = '<option value="">なし</option>';
    glbItems.forEach(item => {
      const option = document.createElement('option');
      option.value = item.id;
      option.textContent = item.name;
      glbEnvSelect.appendChild(option);
    });
  } catch (e) {
    console.warn('Failed to populate theme editor selects:', e);
  }
}

document.getElementById('theme-vrm-select')?.addEventListener('change', (e) => {
  themeEditorState.vrm = e.target.value;
});

document.getElementById('theme-glb-char-select')?.addEventListener('change', (e) => {
  themeEditorState.glb_character = e.target.value;
});

document.getElementById('theme-glb-env-select')?.addEventListener('change', (e) => {
  themeEditorState.glb_environment = e.target.value;
});

document.getElementById('theme-behavior-select')?.addEventListener('change', (e) => {
  themeEditorState.behavior_profile = e.target.value;
});

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function previewThemeChanges() {
  const root = document.documentElement;

  // Map theme editor colors to CSS variables
  const colorMap = {
    accent: '--accent',
    secondary: '--accent-2',
    accent2: '--warm',
    text: '--text-color'  // New variable for text color
  };

  Object.entries(themeEditorState.colors).forEach(([key, value]) => {
    const cssVar = colorMap[key] || `--${key}`;
    root.style.setProperty(cssVar, value);

    // For accent, also update accent-rgb for rgba usage
    if (key === 'accent') {
      const rgb = hexToRgb(value);
      if (rgb) {
        root.style.setProperty('--accent-rgb', `${rgb.r}, ${rgb.g}, ${rgb.b}`);
      }
    }

    // For warm colors, also update warm-rgb
    if (key === 'accent2') {
      const rgb = hexToRgb(value);
      if (rgb) {
        root.style.setProperty('--warm-rgb', `${rgb.r}, ${rgb.g}, ${rgb.b}`);
      }
    }

    console.log(`Set CSS variable ${cssVar} to ${value}`);
  });

  if (themeEditorState.background) {
    const bgElement = document.getElementById('bg-ambient');
    if (bgElement) {
      bgElement.style.backgroundImage = `url('${themeEditorState.background}')`;
      console.log('Background image updated');
    }
  }
}

async function saveThemeEditorState() {
  const id = document.getElementById('theme-save-id')?.value.trim();
  const name = document.getElementById('theme-save-name')?.value.trim();
  const desc = document.getElementById('theme-save-desc')?.value.trim() || '';
  const author = document.getElementById('theme-save-author')?.value.trim() || '';

  if (!id || !name) {
    alert('テーマ ID と名前は必須です');
    return;
  }

  try {
    const meta = { id, name, description: desc, author, version: '1.0.0', type: 'themes' };
    const colors = themeEditorState.colors;
    const theme = {
      colors,
      background: themeEditorState.background || '',
      vrm_config: themeEditorState.vrm ? { id: themeEditorState.vrm, behavior_profile: themeEditorState.behavior_profile } : null,
      glb_config: themeEditorState.glb_character ? { id: themeEditorState.glb_character } : null,
      environment_config: themeEditorState.glb_environment ? { id: themeEditorState.glb_environment } : null
    };

    if (window.__TAURI__) {
      await invoke('workshop_create_item', { category: 'themes', id, name, description: desc, author });
      await invoke('workshop_save_file', {
        category: 'themes',
        id,
        filename: 'meta.json',
        data: Array.from(new TextEncoder().encode(JSON.stringify(meta, null, 2)))
      });
      await invoke('workshop_save_file', {
        category: 'themes',
        id,
        filename: 'colors.json',
        data: Array.from(new TextEncoder().encode(JSON.stringify(colors, null, 2)))
      });
      await invoke('workshop_save_file', {
        category: 'themes',
        id,
        filename: 'theme.json',
        data: Array.from(new TextEncoder().encode(JSON.stringify(theme, null, 2)))
      });
    } else {
      localStorage.setItem(`workshop_meta_themes_${id}`, JSON.stringify(meta));
      const metaBytes = new TextEncoder().encode(JSON.stringify(meta, null, 2));
      const colorBytes = new TextEncoder().encode(JSON.stringify(colors, null, 2));
      const themeBytes = new TextEncoder().encode(JSON.stringify(theme, null, 2));

      await saveFileToDB('themes', id, 'meta.json', metaBytes);
      await saveFileToDB('themes', id, 'colors.json', colorBytes);
      await saveFileToDB('themes', id, 'theme.json', themeBytes);
    }

    alert(`テーマ「${name}」を保存しました`);
    createThemeBackup(); // Update backup after successful save
    themeEditorPanel.classList.remove('active');
    if (btnThemeEditor) btnThemeEditor.classList.remove('active');
  } catch (err) {
    alert('保存エラー: ' + err);
  }
}

document.getElementById('theme-save-btn')?.addEventListener('click', saveThemeEditorState);
document.getElementById('theme-publish-btn')?.addEventListener('click', () => {
  alert('Workshop への投稿機能は実装予定です');
});

function restoreThemeFromBackup() {
  if (themeEditorBackup) {
    themeEditorState = JSON.parse(JSON.stringify(themeEditorBackup));
    // Update color input fields
    Object.entries(themeEditorState.colors).forEach(([key, value]) => {
      const input = document.getElementById(`theme-color-${key}`);
      if (input) input.value = value;
    });
    // Update select fields
    const vrmSelect = document.getElementById('theme-vrm-select');
    if (vrmSelect) vrmSelect.value = themeEditorState.vrm || '';

    const glbCharSelect = document.getElementById('theme-glb-char-select');
    if (glbCharSelect) glbCharSelect.value = themeEditorState.glb_character || '';

    const glbEnvSelect = document.getElementById('theme-glb-env-select');
    if (glbEnvSelect) glbEnvSelect.value = themeEditorState.glb_environment || '';

    const behaviorSelect = document.getElementById('theme-behavior-select');
    if (behaviorSelect) behaviorSelect.value = themeEditorState.behavior_profile || 'neutral';

    // Update background preview
    const bgPreview = document.getElementById('theme-bg-preview');
    if (bgPreview) {
      if (themeEditorState.background) {
        bgPreview.style.backgroundImage = `url('${themeEditorState.background}')`;
      } else {
        bgPreview.style.backgroundImage = 'none';
      }
    }

    previewThemeChanges();
    console.log('Theme restored from backup');
  }
}

function createThemeBackup() {
  themeEditorBackup = JSON.parse(JSON.stringify(themeEditorState));
  console.log('Theme backup created');
}

if (btnThemeEditor) {
  btnThemeEditor.addEventListener('click', () => {
    if (!themeEditorPanel.classList.contains('active')) {
      // Opening panel - create backup
      createThemeBackup();
      // Update input fields to match current state
      Object.entries(themeEditorState.colors).forEach(([key, value]) => {
        const input = document.getElementById(`theme-color-${key}`);
        if (input) input.value = value;
      });
      // Update select fields
      const vrmSelect = document.getElementById('theme-vrm-select');
      if (vrmSelect) vrmSelect.value = themeEditorState.vrm || '';

      const glbCharSelect = document.getElementById('theme-glb-char-select');
      if (glbCharSelect) glbCharSelect.value = themeEditorState.glb_character || '';

      const glbEnvSelect = document.getElementById('theme-glb-env-select');
      if (glbEnvSelect) glbEnvSelect.value = themeEditorState.glb_environment || '';

      const behaviorSelect = document.getElementById('theme-behavior-select');
      if (behaviorSelect) behaviorSelect.value = themeEditorState.behavior_profile || 'neutral';
    }
    closeOtherDrawers(themeEditorPanel);
    themeEditorPanel.classList.toggle('active');
    btnThemeEditor.classList.toggle('active', themeEditorPanel.classList.contains('active'));
    populateThemeEditorSelects();
  });
}

if (themeEditorCloseBtn) {
  themeEditorCloseBtn.addEventListener('click', () => {
    restoreThemeFromBackup();
    themeEditorPanel.classList.remove('active');
    if (btnThemeEditor) btnThemeEditor.classList.remove('active');
  });
}

// ==========================================
// 12. WORKSHOP PANEL
// ==========================================
const workshopPanel = document.getElementById('workshop-panel');
const btnWorkshop = document.getElementById('btn-workshop');
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
const workshopSearchQuery = document.getElementById('workshop-search-query');
const workshopSearchBtn = document.getElementById('workshop-search-btn');

let workshopCurrentCategory = 'themes';
let workshopCurrentItem = null;
let workshopEditingId = null;
let workshopSubscribedItems = new Set();

const WORKSHOP_CATEGORY_ICONS = {
  themes: '🎨',
  vrm_sets: '👤',
  glb_characters: '📦',
  apps: '📱',
  plugins_rust: '⚙️',
  plugins_wasm: '🔧'
};

const WORKSHOP_CATEGORY_LABELS = {
  themes: 'テーマ',
  vrm_sets: 'VRMセット',
  glb_characters: 'GLBキャラ',
  scenes: 'シーン',
  apps: 'アプリ',
  plugins_rust: 'Rustプラグイン',
  plugins_wasm: 'WASMプラグイン'
};

function workshopInvoke(cmd, args) {
  if (!window.__TAURI__) return Promise.reject('Tauri 環境ではありません');
  return window.__TAURI__.core.invoke(cmd, args);
}

btnWorkshop.addEventListener('click', () => {
  closeOtherDrawers(workshopPanel);
  workshopPanel.classList.toggle('active');
  btnWorkshop.classList.toggle('active', workshopPanel.classList.contains('active'));
  if (workshopPanel.classList.contains('active')) {
    loadWorkshopItems();
  }
});

workshopCloseBtn.addEventListener('click', () => {
  workshopPanel.classList.remove('active');
  btnWorkshop.classList.remove('active');
});

// Category tabs
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

// Search functionality
async function searchWorkshopItems() {
  const query = workshopSearchQuery.value.trim();
  if (!query) {
    loadWorkshopItems();
    return;
  }

  try {
    if (window.__TAURI__) {
      const items = await workshopInvoke('workshop_search_items', {
        category: workshopCurrentCategory,
        query
      });
      renderWorkshopItems(items);
    } else {
      const items = [];
      const queryLower = query.toLowerCase();
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith(`workshop_meta_${workshopCurrentCategory}_`)) {
          try {
            const meta = JSON.parse(localStorage.getItem(key));
            if (meta.name.toLowerCase().includes(queryLower) ||
                (meta.description && meta.description.toLowerCase().includes(queryLower)) ||
                (meta.author && meta.author.toLowerCase().includes(queryLower))) {
              items.push(meta);
            }
          } catch (e) {}
        }
      }
      items.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
      renderWorkshopItems(items);
    }
  } catch (err) {
    console.error('Workshop search error:', err);
    workshopItems.innerHTML = '<div class="workshop-empty">検索エラー</div>';
  }
}

workshopSearchBtn.addEventListener('click', searchWorkshopItems);
workshopSearchQuery.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') searchWorkshopItems();
});

// Create new item
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

workshopFormClose.addEventListener('click', () => {
  workshopForm.classList.add('hidden');
});

workshopFormCancel.addEventListener('click', () => {
  workshopForm.classList.add('hidden');
});

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

// Show item detail
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

workshopDetailClose.addEventListener('click', () => {
  workshopDetail.classList.add('hidden');
});

// Apply item (theme/model)
workshopDetailApply.addEventListener('change', async () => {
  if (!workshopCurrentItem) return;
  const item = workshopCurrentItem;
  const activeKey = `workshop_active_${item.item_type}`;

  if (workshopDetailApply.checked) {
    try {
      // Subscribe if not already subscribed
      if (!workshopSubscribedItems.has(item.id)) {
        if (window.__TAURI__) {
          await workshopInvoke('workshop_subscribe_item', {
            category: item.item_type,
            id: item.id
          });
        }
        workshopSubscribedItems.add(item.id);
        localStorage.setItem(`workshop_subscribed_${item.id}`, 'true');
      }

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
    try {
      // Unsubscribe
      if (workshopSubscribedItems.has(item.id)) {
        if (window.__TAURI__) {
          await workshopInvoke('workshop_unsubscribe_item', {
            category: item.item_type,
            id: item.id
          });
        }
        workshopSubscribedItems.delete(item.id);
        localStorage.removeItem(`workshop_subscribed_${item.id}`);
      }

      localStorage.removeItem(activeKey);
      workshopDetailApplyLabel.textContent = '利用する';
      if (item.item_type === 'themes') {
        removeWorkshopTheme();
      } else if (item.item_type === 'vrm_sets') {
        loadVrmModel(DEFAULT_VRM_URL);
      } else if (item.item_type === 'glb_characters') {
        loadGlbModel(DEFAULT_GLB_URL);
      }
    } catch (err) {
      workshopDetailApply.checked = true;
      alert('削除エラー: ' + err);
    }
  }
});

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
  let behaviorProfiles = null;

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

    // Try to load behavior_profiles.json
    const behaviorFile = files.find(f => f.includes('behavior') && f.endsWith('.json'));
    if (behaviorFile) {
      try {
        const behaviorRaw = await workshopInvoke('workshop_read_file', {
          category: 'vrm_sets',
          id: item.id,
          filename: behaviorFile
        });
        if (behaviorRaw) {
          const behaviorText = new TextDecoder().decode(new Uint8Array(behaviorRaw));
          behaviorProfiles = JSON.parse(behaviorText);
        }
      } catch (e) {
        console.warn('Failed to load VRM behavior profiles:', e);
      }
    }
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

    // Try to load behavior_profiles.json from IndexedDB
    const behaviorFile = files.find(f => f.includes('behavior') && f.endsWith('.json'));
    if (behaviorFile) {
      try {
        const behaviorRaw = await readFileFromDB('vrm_sets', item.id, behaviorFile);
        if (behaviorRaw) {
          const behaviorText = new TextDecoder().decode(new Uint8Array(behaviorRaw));
          behaviorProfiles = JSON.parse(behaviorText);
        }
      } catch (e) {
        console.warn('Failed to load VRM behavior profiles:', e);
      }
    }
  }

  const blob = new Blob([data], { type: 'model/vrm' });
  const url = URL.createObjectURL(blob);
  loadVrmModel(url);

  // Update character_slot for 2-slot system (#35)
  setTimeout(() => {
    updateCharacterSlot(item.id, item.name);
  }, 100);

  // Register loaded behavior profiles
  if (behaviorProfiles && typeof behaviorProfiles === 'object') {
    Object.entries(behaviorProfiles).forEach(([key, profile]) => {
      VRM_BEHAVIOR_PROFILES[key] = profile;
    });
    console.log('Loaded VRM behavior profiles:', Object.keys(behaviorProfiles));
  }
}

async function applyWorkshopGlb(item) {
  let files;
  let data;
  let poseData = null;

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

    // Try to load pose.json
    const poseFiles = files.filter(f => f.includes('pose') && f.endsWith('.json'));
    if (poseFiles.length > 0) {
      try {
        const poseFile = poseFiles[0];
        const poseRaw = await workshopInvoke('workshop_read_file', {
          category: 'glb_characters',
          id: item.id,
          filename: poseFile
        });
        if (poseRaw) {
          const poseText = new TextDecoder().decode(new Uint8Array(poseRaw));
          poseData = JSON.parse(poseText);
        }
      } catch (e) {
        console.warn('Failed to load GLB pose data:', e);
      }
    }
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

    // Try to load pose.json from IndexedDB
    const poseFiles = files.filter(f => f.includes('pose') && f.endsWith('.json'));
    if (poseFiles.length > 0) {
      try {
        const poseFile = poseFiles[0];
        const poseRaw = await readFileFromDB('glb_characters', item.id, poseFile);
        if (poseRaw) {
          const poseText = new TextDecoder().decode(new Uint8Array(poseRaw));
          poseData = JSON.parse(poseText);
        }
      } catch (e) {
        console.warn('Failed to load GLB pose data:', e);
      }
    }
  }

  const blob = new Blob([data], { type: 'model/gltf-binary' });
  const url = URL.createObjectURL(blob);
  loadGlbModel(url);

  // Update 2-slot system based on asset_role (#35)
  setTimeout(() => {
    if (currentGlbAssetRole === 'animated_character') {
      updateCharacterSlotGlb(item.id, item.name);
    } else if (currentGlbAssetRole === 'static_object' || currentGlbAssetRole === 'static_scene') {
      updateEnvironmentSlot(item.id, item.name);
    }
  }, 100);

  // Apply pose data if available and model supports poses (for #34)
  if (poseData) {
    // Wait for model to load, then check asset_role before applying pose
    setTimeout(() => {
      if (currentGlbAssetRole === 'animated_character' || GLB_ASSET_ROLES[currentGlbAssetRole]?.supportsPose) {
        applyGlbPose(poseData);
        console.log(`Applied pose to GLB (asset_role: ${currentGlbAssetRole})`);
      } else {
        console.info(`GLB asset_role "${currentGlbAssetRole}" does not support poses, skipping pose application`);
      }
    }, 300);
  }
}

// Delete item
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

// ============================================================================
// VRoid Hub OAuth 2.0 Integration (#39)
// ============================================================================

function initVroidHubCallbackHandler() {
  const url = new URL(window.location.href);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');

  if (code && state && window.__TAURI__) {
    handleVroidHubCallback(code, state);
  }
}

async function handleVroidHubCallback(code, state) {
  try {
    const result = await invoke('vroid_hub_exchange_code', { code, state });
    if (result) {
      localStorage.setItem('vroid_hub_connected', 'true');
      window.history.replaceState({}, document.title, window.location.pathname);
      await loadVroidHubVrmList();
      updateVroidHubStatus();
    }
  } catch (error) {
    console.error('VRoid Hub callback error:', error);
    localStorage.setItem('vroid_hub_connected', 'false');
    showErrorMessage('VRoid Hub authentication failed: ' + error);
  }
}

function isVroidHubConnected() {
  return localStorage.getItem('vroid_hub_connected') === 'true';
}

function updateVroidHubStatus() {
  const statusEl = document.getElementById('vroid-hub-status');
  if (statusEl) {
    statusEl.textContent = isVroidHubConnected() ? 'Connected' : 'Not connected';
  }
}

async function loadVroidHubVrmList() {
  if (!window.__TAURI__) return;

  try {
    const vrmList = await invoke('vroid_hub_get_vrm_list');
    localStorage.setItem('vroid_hub_vrm_list_cache', JSON.stringify(vrmList));
    populateVroidHubVrmSelector(vrmList);
  } catch (error) {
    console.error('Failed to load VRM list:', error);
    showErrorMessage('VRoid Hub VRM list loading failed');
  }
}

function populateVroidHubVrmSelector(vrmList) {
  const listEl = document.getElementById('vroid-hub-list');
  if (!listEl) return;

  listEl.innerHTML = '';
  vrmList.forEach(vrm => {
    const item = document.createElement('div');
    item.className = 'vroid-hub-item';
    item.dataset.vrmId = vrm.id;
    item.dataset.vrmName = vrm.name;

    if (vrm.thumbnail_url) {
      const img = document.createElement('img');
      img.src = vrm.thumbnail_url;
      img.alt = vrm.name;
      item.appendChild(img);
    }

    const name = document.createElement('div');
    name.textContent = vrm.name;
    name.style.fontSize = '12px';
    name.style.whiteSpace = 'nowrap';
    name.style.overflow = 'hidden';
    name.style.textOverflow = 'ellipsis';
    item.appendChild(name);

    listEl.appendChild(item);
  });
}

async function downloadVroidHubVrm(vrmId, vrmName) {
  if (!window.__TAURI__) return;

  try {
    showDownloadProgress(vrmId);
    const workshopId = await invoke('vroid_hub_download_vrm', { vrm_id: vrmId, vrm_name: vrmName });
    await applyWorkshopVrm({ id: workshopId, name: vrmName, item_type: 'vrm_sets' });
    hideDownloadProgress();
  } catch (error) {
    console.error('VRM download error:', error);
    showErrorMessage('VRM download failed: ' + error);
    hideDownloadProgress();
  }
}

function showDownloadProgress(vrmId) {
  const progressEl = document.getElementById('vroid-download-progress');
  if (progressEl) {
    progressEl.style.display = 'block';
  }
}

function hideDownloadProgress() {
  const progressEl = document.getElementById('vroid-download-progress');
  if (progressEl) {
    progressEl.style.display = 'none';
  }
}

function updateDownloadProgress(vrmId, downloaded, total) {
  const fillEl = document.getElementById('progress-fill');
  if (fillEl) {
    const percent = Math.round((downloaded / total) * 100);
    fillEl.style.width = percent + '%';
  }
}

function showErrorMessage(msg) {
  console.error(msg);
  // TODO: Show user-friendly error notification
}

// VRoid Hub event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Connect button
  const connectBtn = document.getElementById('btn-vroid-connect');
  if (connectBtn) {
    connectBtn.addEventListener('click', async () => {
      try {
        if (!window.__TAURI__) {
          showErrorMessage('VRoid Hub requires Tauri');
          return;
        }
        const authUrl = await invoke('vroid_hub_get_auth_url');
        window.open(authUrl, '_blank');
      } catch (error) {
        console.error('Failed to get auth URL:', error);
        showErrorMessage('Failed to initiate VRoid Hub login');
      }
    });
  }

  // Source toggle (Workshop vs VRoid Hub)
  document.querySelectorAll('[data-source]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const source = e.target.dataset.source;
      const workshopSel = document.getElementById('workshop-vrm-selector');
      const vroidPanel = document.getElementById('vroid-hub-panel');

      if (workshopSel) {
        workshopSel.style.display = source === 'workshop' ? 'block' : 'none';
      }
      if (vroidPanel) {
        vroidPanel.style.display = source === 'vroid_hub' ? 'block' : 'none';
      }

      if (source === 'vroid_hub') {
        if (isVroidHubConnected()) {
          loadVroidHubVrmList();
        } else {
          const statusEl = document.getElementById('vroid-hub-status');
          if (statusEl) statusEl.textContent = 'Not connected';
        }
      }
    });
  });

  // VRM item selection
  document.addEventListener('click', async (e) => {
    if (e.target.classList.contains('vroid-hub-item')) {
      const vrmId = e.target.dataset.vrmId;
      const vrmName = e.target.dataset.vrmName || 'VRM Model';
      await downloadVroidHubVrm(vrmId, vrmName);
    }
  });

  // Download progress listener
  if (window.__TAURI__) {
    window.__TAURI__.event.listen('vroid_hub_download_progress', (event) => {
      updateDownloadProgress(event.payload.vrm_id, event.payload.downloaded, event.payload.total);
    });
  }
});

// Load saved workshop items on startup
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

// Startup scene apply: deferred to here so update3DLights() can see the
// (still-null) THREE_Lib bindings instead of hitting the TDZ.
applyScene();
loadWorkshopOnStartup();

// VRoid Hub OAuth callback handler
initVroidHubCallbackHandler();
updateVroidHubStatus();
