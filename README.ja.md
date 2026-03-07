# VSCode Portfolio

Visual Studio Codeのエディタインターフェースを再現したポートフォリオサイトです。IDE上でファイルを閲覧するようにポートフォリオの各セクションを表示できます。タブ、サイドバー、ターミナル、設定パネル、テーマカスタマイズなどを備えています。

## 特徴

- **VS Code UI**: タイトルバー、アクティビティバー、サイドバー、タブ、ターミナル、ステータスバーを忠実に再現
- **3つのテーマ**: 各セクションにModern、Innovative、Professionalの3つのビジュアルスタイル
- **8つのセクション**: プロフィール、プロジェクト、スキル、お問い合わせ、強み、FAQ、経歴、README
- **日英対応**: next-intlによる完全な日本語・英語サポート
- **インタラクティブ要素**: ファイルエクスプローラー、検索、Git履歴、拡張機能ギャラリー、設定パネル、チュートリアル
- **レスポンシブ対応**: デスクトップ、モバイル横向き（`short:`バリアントによるスケーリング）、縦向きレイアウト
- **ビジュアルリグレッションテスト**: 4ビューポート × 2言語で計168のPlaywrightスナップショットテスト
- **SSG最適化**: スクリーンショットルートをビルド時に静的HTMLとして事前レンダリング

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router)、React 19、TypeScript (strict)
- **スタイリング**: Tailwind CSS v4、モバイル横向き用カスタム`short:`バリアント
- **国際化**: next-intl (ja/en)
- **アイコン**: lucide-react
- **テスト**: Playwright（`toHaveScreenshot`によるビジュアルリグレッション）
- **リンティング**: ESLint 9、oxfmt、knip
- **アナリティクス**: Vercel Analytics
- **デプロイ**: Vercel

## セットアップ

### 前提条件

- Node.js 20以上
- npm

### インストール

```bash
npm install
```

### 開発サーバー起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開きます。

### ビルド

```bash
npm run build
npm run start
```

### 品質チェック

```bash
# 一括チェック（TypeScript + フォーマット + リント）
npm run check

# 個別実行
npm run type-check    # TypeScript型チェック
npm run format        # oxfmtフォーマッター
npm run lint:fix      # ESLint自動修正
npx knip              # 未使用コード・依存関係の検出
```

### ビジュアルリグレッションテスト

```bash
# 全168テスト実行
npx playwright test

# 特定のビューポート/言語で実行
npx playwright test -g "desktop ja/profile"

# 意図的な変更後にベースラインを更新
npx playwright test --update-snapshots

# 失敗時のHTMLレポート生成
npx playwright test --reporter=html
npx playwright show-report
```

スナップショットは `e2e/__snapshots__/{locale}/{viewport}/{section}-{theme}.png` に保存されます。

## プロジェクト構成

```
app/
  [locale]/
    page.tsx                    # メインVS Codeレイアウト（クライアントレンダリング）
    layout.tsx                  # ロケールレイアウト + SEOメタデータ
    screenshot/[section]/[theme]/
      page.tsx                  # SSGスクリーンショットページ（42の静的ルート）
  robots.ts                     # /robots.txt
  sitemap.ts                    # /sitemap.xml

components/
  vscode-layout.tsx             # メインレイアウトシェル
  vscode/                       # VS Code UI（タイトルバー、アクティビティバー、タブバー等）
  sidebar/                      # エクスプローラー、検索、Git履歴、更新履歴、拡張機能パネル
  preview/
    preview-panel.tsx           # セクションディスパッチャー
    sections/<feature>/<theme>.tsx  # 24セクションコンポーネント（8機能 × 3テーマ）
  career-timeline/              # 経歴セクション（テーマ共通タイムラインスタイル）
  editor/                       # エディタエリアと空状態

constants/                      # 全静的データ（ポートフォリオ、経歴、プレビュー、設定、チュートリアル）
contexts/                       # ThemeContext、LocaleContext
hooks/                          # use-settings、use-tabs、use-file-search、use-responsive
lib/                            # ユーティリティ（カラー、ファイル、アイコン）
i18n/                           # next-intlルーティングとリクエスト設定
e2e/                            # Playwrightビジュアルリグレッションテスト + スナップショット
```
