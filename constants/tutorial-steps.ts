export interface TutorialStep {
  id: string
  targetSelector: string
  title: string
  description: string
  position: "top" | "bottom" | "left" | "right"
  mobilePosition?: "top" | "bottom" | "center"
  uiState?: {
    sidebarMode?: "explorer" | "search" | "gitHistory" | "gitDiff" | "extensions" | "settings"
    terminalOpen?: boolean
    sidebarCollapsed?: boolean
  }
  action?: {
    type:
      | "openFile"
      | "openExtension"
      | "togglePreview"
      | "runCommand"
      | "changePreviewTheme"
      | "showPreviewWithTheme"
    payload?: string
  }
}

export const TUTORIAL_STEPS: TutorialStep[] = [
  {
    id: "activity-bar",
    targetSelector: "[data-tutorial='activity-bar']",
    title: "アクティビティバー",
    description: "左のアイコンでファイル、検索、Git履歴、拡張機能、設定に切り替え可能です。",
    position: "right",
    mobilePosition: "bottom",
    uiState: { sidebarMode: "explorer", sidebarCollapsed: false },
  },
  {
    id: "explorer",
    targetSelector: "[data-tutorial='sidebar']",
    title: "エクスプローラー",
    description: "ファイル一覧です。タップで内容を表示します。",
    position: "right",
    mobilePosition: "bottom",
    uiState: { sidebarMode: "explorer", sidebarCollapsed: false },
  },
  {
    id: "file-profile",
    targetSelector: "[data-tutorial='file-profile.md']",
    title: "プロフィール",
    description: "profile.mdには自己紹介が記載されています。",
    position: "right",
    mobilePosition: "bottom",
    uiState: { sidebarMode: "explorer", sidebarCollapsed: false },
  },
  {
    id: "file-profile-open",
    targetSelector: "[data-tutorial='editor-area']",
    title: "ファイル内容",
    description: "マークダウン形式で自己紹介が表示されます。",
    position: "bottom",
    mobilePosition: "top",
    uiState: { sidebarMode: "explorer", sidebarCollapsed: false },
    action: { type: "openFile", payload: "profile.md" },
  },
  {
    id: "preview-button",
    targetSelector: "[data-tutorial='preview-button']",
    title: "プレビュー",
    description: "このボタンでプレビューモードに切り替えられます。",
    position: "bottom",
    mobilePosition: "bottom",
    uiState: { sidebarMode: "explorer", sidebarCollapsed: false },
  },
  {
    id: "preview-mode",
    targetSelector: "[data-tutorial='editor-area']",
    title: "プレビューモード",
    description: "洗練されたデザインで表示されます。3つのテーマから選択可能。",
    position: "bottom",
    mobilePosition: "top",
    uiState: { sidebarMode: "explorer", sidebarCollapsed: false },
    action: { type: "togglePreview", payload: "on" },
  },
  {
    id: "search",
    targetSelector: "[data-tutorial='sidebar']",
    title: "検索",
    description: "テキスト検索が可能です。結果をタップでファイルを開きます。",
    position: "right",
    mobilePosition: "bottom",
    uiState: { sidebarMode: "search", sidebarCollapsed: false },
    action: { type: "togglePreview", payload: "off" },
  },
  {
    id: "git-history",
    targetSelector: "[data-tutorial='sidebar']",
    title: "Git履歴",
    description: "職務経歴をコミット履歴風に表示しています。",
    position: "right",
    mobilePosition: "bottom",
    uiState: { sidebarMode: "gitHistory", sidebarCollapsed: false },
  },
  {
    id: "git-diff",
    targetSelector: "[data-tutorial='sidebar']",
    title: "Git Diff",
    description: "スキルの成長を差分形式で表現しています。",
    position: "right",
    mobilePosition: "bottom",
    uiState: { sidebarMode: "gitDiff", sidebarCollapsed: false },
  },
  {
    id: "extensions",
    targetSelector: "[data-tutorial='sidebar']",
    title: "拡張機能",
    description: "制作物をショーケース形式で紹介しています。",
    position: "right",
    mobilePosition: "bottom",
    uiState: { sidebarMode: "extensions", sidebarCollapsed: false },
  },
  {
    id: "extension-showcase",
    targetSelector: "[data-tutorial='editor-area']",
    title: "プロジェクト詳細",
    description: "スクリーンショット、技術スタック、リンクなどが確認できます。",
    position: "left",
    mobilePosition: "top",
    uiState: { sidebarMode: "extensions", sidebarCollapsed: false },
    action: { type: "openExtension", payload: "ecommerce-platform" },
  },
  {
    id: "terminal-intro",
    targetSelector: "[data-tutorial='terminal']",
    title: "ターミナル",
    description: "コマンドを実行できます。次で'help'を実行します。",
    position: "top",
    mobilePosition: "top",
    uiState: { terminalOpen: true, sidebarMode: "explorer" },
  },
  {
    id: "terminal-help",
    targetSelector: "[data-tutorial='terminal']",
    title: "helpコマンド",
    description: "利用可能なコマンド一覧が表示されました。",
    position: "top",
    mobilePosition: "top",
    uiState: { terminalOpen: true, sidebarMode: "explorer" },
    action: { type: "runCommand", payload: "help" },
  },
  {
    id: "settings",
    targetSelector: "[data-tutorial='editor-area']",
    title: "設定",
    description: "テーマカラーやフォントサイズをカスタマイズできます。",
    position: "left",
    mobilePosition: "top",
    uiState: { sidebarMode: "settings", sidebarCollapsed: false, terminalOpen: false },
  },
  {
    id: "preview-theme-change",
    targetSelector: "[data-tutorial='editor-area']",
    title: "プレビューテーマ変更",
    description:
      "設定からプレビューテーマを変更できます。モダン、革新的、プロフェッショナルの3種類から選べます。",
    position: "left",
    mobilePosition: "top",
    uiState: { sidebarMode: "settings", sidebarCollapsed: false, terminalOpen: false },
    action: { type: "changePreviewTheme", payload: "innovative" },
  },
  {
    id: "preview-theme-result",
    targetSelector: "[data-tutorial='editor-area']",
    title: "テーマ変更後のプレビュー",
    description: "革新的テーマに変更されました。プレビューモードでこのデザインが適用されます。",
    position: "left",
    mobilePosition: "top",
    uiState: { sidebarMode: "explorer", sidebarCollapsed: false, terminalOpen: false },
    action: { type: "showPreviewWithTheme", payload: "innovative" },
  },
  {
    id: "help-button",
    targetSelector: "[data-tutorial='help-button']",
    title: "ヘルプボタン",
    description: "左上の?ボタンからいつでもこのチュートリアルを再確認できます。お疲れ様でした!",
    position: "bottom",
    mobilePosition: "bottom",
    uiState: { sidebarMode: "explorer", sidebarCollapsed: false, terminalOpen: false },
    action: { type: "togglePreview", payload: "off" },
  },
]
