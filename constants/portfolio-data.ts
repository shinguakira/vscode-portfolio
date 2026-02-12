// ポートフォリオのファイルツリーデータ

import type { ChangelogEntry, Extension, FileItem, GitCommit } from "@/types"

export const gitHistory: GitCommit[] = [
  {
    hash: "a7f3d2e",
    date: "2024-01-15",
    author: "あなたの名前",
    message: "feat: AI機能の実装とチームリード経験を追加",
    company: "Tech Startup Inc.",
    position: "シニアフルスタックエンジニア",
    changes: [
      "AI/MLプロジェクトのリード",
      "チーム規模を5名→12名に拡大",
      "アーキテクチャ設計の主導",
    ],
  },
  {
    hash: "b3c8f91",
    date: "2023-03-20",
    author: "あなたの名前",
    message: "feat: Next.js 13移行とパフォーマンス改善",
    company: "Tech Startup Inc.",
    position: "フルスタックエンジニア",
    changes: ["App Routerへの全面移行", "パフォーマンス40%向上", "TypeScript導入100%達成"],
  },
  {
    hash: "c9e2a44",
    date: "2021-06-10",
    author: "あなたの名前",
    message: "refactor: SaaSプロダクトの設計刷新",
    company: "Tech Startup Inc.",
    position: "フルスタックエンジニア",
    changes: [
      "マイクロサービスアーキテクチャ導入",
      "CI/CDパイプライン構築",
      "ユーザー数150%増加に貢献",
    ],
  },
  {
    hash: "d1f5b88",
    date: "2020-09-05",
    author: "あなたの名前",
    message: "feat: React/Next.jsスタック移行を主導",
    company: "Web Agency Co.",
    position: "フロントエンドエンジニア",
    changes: ["レガシーコードのモダン化", "コンポーネントライブラリ構築", "開発効率30%向上"],
  },
  {
    hash: "e7a9c22",
    date: "2019-04-01",
    author: "あなたの名前",
    message: "init: Web開発キャリアスタート",
    company: "Web Agency Co.",
    position: "フロントエンドエンジニア",
    changes: [
      "HTML/CSS/JavaScriptの実務経験",
      "20以上のWebサイト制作",
      "クライアント折衝スキル習得",
    ],
  },
]

// アプリの変更履歴 (CHANGELOG)
export const changelog: ChangelogEntry[] = [
  {
    version: "2.0.0",
    date: "2024-01-15",
    type: "major",
    title: "VS Code風UIの完全リニューアル",
    changes: [
      { type: "added", description: "VS Code風のエディタUI全面採用" },
      { type: "added", description: "3種類のプレビューテーマ(モダン/革新的/プロフェッショナル)" },
      { type: "added", description: "インタラクティブチュートリアル機能" },
      { type: "improved", description: "レスポンシブデザインの改善" },
    ],
  },
  {
    version: "1.5.0",
    date: "2023-11-20",
    type: "minor",
    title: "拡張機能パネルの追加",
    changes: [
      { type: "added", description: "プロジェクト一覧を拡張機能形式で表示" },
      { type: "added", description: "スクリーンショットギャラリー機能" },
      { type: "added", description: "GitHubリポジトリ/デモサイトへのリンク" },
      { type: "improved", description: "検索機能の精度向上" },
    ],
  },
  {
    version: "1.4.0",
    date: "2023-09-10",
    type: "minor",
    title: "Git履歴ビューの実装",
    changes: [
      { type: "added", description: "キャリア履歴をGitコミット形式で表示" },
      { type: "added", description: "タイムライン形式のUI" },
      { type: "improved", description: "アニメーションの追加" },
    ],
  },
  {
    version: "1.3.0",
    date: "2023-07-05",
    type: "minor",
    title: "ターミナル機能の追加",
    changes: [
      { type: "added", description: "インタラクティブターミナルUI" },
      { type: "added", description: "コマンド履歴機能" },
      { type: "added", description: "help, about, skills コマンド" },
    ],
  },
  {
    version: "1.2.0",
    date: "2023-05-15",
    type: "minor",
    title: "設定パネルの追加",
    changes: [
      { type: "added", description: "背景色/テキスト色/アクセントカラーのカスタマイズ" },
      { type: "added", description: "フォントサイズ調整機能" },
      { type: "improved", description: "設定のローカルストレージ保存" },
    ],
  },
  {
    version: "1.1.0",
    date: "2023-03-20",
    type: "minor",
    title: "検索機能の実装",
    changes: [
      { type: "added", description: "ファイル内容の全文検索" },
      { type: "added", description: "検索結果のハイライト表示" },
      { type: "fixed", description: "ファイルツリーの展開状態の保持" },
    ],
  },
  {
    version: "1.0.0",
    date: "2023-01-10",
    type: "major",
    title: "初回リリース",
    changes: [
      { type: "added", description: "VS Code風ファイルエクスプローラー" },
      { type: "added", description: "Markdownファイルのプレビュー機能" },
      { type: "added", description: "タブ形式のエディタUI" },
    ],
  },
]

export const fileTree: FileItem[] = [
  {
    name: "about",
    type: "folder",
    icon: "folder",
    children: [
      {
        name: "profile.md",
        type: "file",
        icon: "file-text",
        content: `# プロフィール

## 自己紹介

こんにちは!私はフルスタックエンジニアです。

### スキル
- **フロントエンド**: React, Next.js, TypeScript, Tailwind CSS
- **バックエンド**: Node.js, Python, Go
- **データベース**: PostgreSQL, MongoDB, Redis
- **インフラ**: AWS, Docker, Kubernetes

### 経験
- 5年以上のWeb開発経験
- 大規模なSaaSプロダクトの開発経験
- アジャイル開発チームでのリード経験

### 趣味
- オープンソースへの貢献
- 技術ブログの執筆
- ハッカソンへの参加`,
      },
      {
        name: "strong-points.md",
        type: "file",
        icon: "zap",
        content: `# 強み・アピールポイント

## 技術的な強み

### 1. フルスタック開発力
フロントエンドからバックエンド、インフラまで一貫して対応可能。
プロジェクト全体を俯瞰した設計・実装ができます。

### 2. モダン技術への適応力
- Next.js 14 App Router / Server Actions
- TypeScript 厳密モード での開発
- tRPC を用いた型安全なAPI設計
- 最新のReact機能（Server Components, Suspense）

### 3. パフォーマンス最適化
- Core Web Vitals を意識した実装
- バンドルサイズの最適化
- データベースクエリの最適化経験

## ソフトスキル

### コミュニケーション
- 非エンジニアへの技術説明が得意
- ドキュメント作成を重視
- チーム間の橋渡し役として活躍

### 問題解決
- 複雑な問題を分解して対処
- 根本原因の特定と恒久対策の提案
- 技術的負債の計画的な解消

### リーダーシップ
- 12名規模のチームリード経験
- コードレビュー文化の醸成
- メンバーの成長をサポート

## 実績ハイライト

| 指標 | 成果 |
|------|------|
| パフォーマンス改善 | 読み込み時間 **40%短縮** |
| ユーザー数増加 | **150%** の成長に貢献 |
| 開発効率 | チーム生産性 **30%向上** |
| 技術ブログ | 月間 **10万PV** 達成 |`,
      },
      {
        name: "faq.md",
        type: "file",
        icon: "help-circle",
        content: `# よくある質問 (FAQ)

## 業務について

### Q: リモートワークは可能ですか？
**A:** はい、完全リモートでの業務に対応しています。
オンラインでのコミュニケーションツール（Slack, Discord, Teams等）を活用し、
円滑なやり取りを心がけています。

### Q: 稼働時間はどのくらいですか？
**A:** 週20〜40時間での稼働が可能です。
プロジェクトの状況に応じて柔軟に対応いたします。

### Q: 副業・業務委託での参画は可能ですか？
**A:** はい、対応可能です。
契約形態についてはご相談ください。

## 技術について

### Q: 対応可能な技術スタックは？
**A:** 主に以下の技術に対応しています：
- **フロントエンド**: React, Next.js, TypeScript, Vue.js
- **バックエンド**: Node.js, Python, Go
- **データベース**: PostgreSQL, MongoDB, Redis, Supabase
- **インフラ**: AWS, GCP, Vercel, Docker

### Q: 新しい技術のキャッチアップは可能ですか？
**A:** はい、積極的に新技術を学習しています。
プロジェクトで必要な技術は事前にキャッチアップして対応いたします。

### Q: 設計から実装まで一人で対応できますか？
**A:** はい、要件定義から設計、実装、テスト、デプロイまで
一貫して対応可能です。

## 料金について

### Q: 時間単価はいくらですか？
**A:** プロジェクトの内容や期間により変動します。
詳細はお問い合わせください。

### Q: 見積もりは無料ですか？
**A:** はい、お見積もりは無料で承っております。
お気軽にご相談ください。

## その他

### Q: ポートフォリオのソースコードは公開していますか？
**A:** はい、GitHubで公開しています。
実際のコードを見ていただくことで、
コーディングスタイルを確認いただけます。

### Q: 面談は可能ですか？
**A:** はい、オンラインでの面談に対応しています。
お気軽にお申し付けください。`,
      },
      {
        name: "experience.json",
        type: "file",
        icon: "braces",
        content: `{
  "workExperience": [
    {
      "company": "Tech Startup Inc.",
      "position": "シニアフルスタックエンジニア",
      "period": "2021年4月 - 現在",
      "startYear": 2021,
      "startMonth": 4,
      "endYear": null,
      "description": "SaaSプロダクトの設計と開発をリード。プロダクトのアーキテクチャ設計から実装、チームマネジメントまで一貫して担当。",
      "techStack": ["Next.js", "TypeScript", "PostgreSQL", "AWS", "Docker", "Terraform", "tRPC", "Prisma"],
      "role": "テックリード / フルスタック",
      "teamSize": 12,
      "achievements": [
        "新機能開発により、ユーザー数を150%増加",
        "パフォーマンス最適化により、読み込み時間を40%短縮",
        "CI/CDパイプラインの構築と改善",
        "マイクロサービスアーキテクチャへの段階的移行を設計・実行"
      ],
      "details": "入社時はフロントエンドエンジニアとして参画。半年後にテックリードに昇格し、バックエンドを含むプロダクト全体の技術的意思決定を担当。特にNext.js App Routerへの移行とtRPCの導入により、開発生産性を大幅に向上させた。"
    },
    {
      "company": "Web Agency Co.",
      "position": "フロントエンドエンジニア",
      "period": "2019年4月 - 2021年3月",
      "startYear": 2019,
      "startMonth": 4,
      "endYear": 2021,
      "endMonth": 3,
      "description": "クライアントのWebサイトとアプリケーション開発を担当。受託開発を中心に幅広い業界のプロジェクトに従事。",
      "techStack": ["React", "Next.js", "Vue.js", "SCSS", "Node.js", "Firebase"],
      "role": "フロントエンドエンジニア",
      "teamSize": 5,
      "achievements": [
        "20以上のプロジェクトを納品",
        "React/Next.jsへの技術スタック移行を主導",
        "コードレビュー文化の確立"
      ],
      "details": "新卒入社後、HTML/CSS/jQueryベースの開発からスタートし、React/Next.jsへの技術移行を提案・主導。社内の技術基盤をモダン化し、開発効率を2倍以上に改善。コードレビューのガイドライン策定やJr.エンジニアの育成にも注力。"
    },
    {
      "company": "フリーランス",
      "position": "Webデベロッパー",
      "period": "2020年10月 - 2021年6月",
      "startYear": 2020,
      "startMonth": 10,
      "endYear": 2021,
      "endMonth": 6,
      "description": "本業と並行して個人でWeb開発案件を受注。副業としてスタートアップのMVP開発を支援。",
      "techStack": ["Next.js", "Tailwind CSS", "Supabase", "Vercel", "Stripe"],
      "role": "フルスタックエンジニア",
      "teamSize": 1,
      "achievements": [
        "3つのMVPを短期間で開発・リリース",
        "Stripe決済統合の実装",
        "Supabaseを活用したリアルタイム機能の構築"
      ],
      "details": "Web Agency Co.在籍中に副業として開始。スタートアップのMVP開発を中心に、企画段階から技術選定・実装・デプロイまでワンストップで対応。この経験がフルスタックエンジニアへの転向のきっかけとなった。"
    }
  ],
  "education": {
    "degree": "情報工学学士",
    "university": "○○大学",
    "year": "2019年卒業",
    "startYear": 2015,
    "endYear": 2019,
    "details": "情報工学を専攻。卒業研究ではWebアクセシビリティに関する研究を実施。在学中にインターンシップでWeb開発の実務経験を積む。"
  }
}`,
      },
    ],
  },
  {
    name: "projects",
    type: "folder",
    icon: "folder",
    children: [
      {
        name: "README.md",
        type: "file",
        icon: "book-open",
        content: `# プロジェクト一覧

このフォルダには、私が開発した主要なプロジェクトが含まれています。
詳細は拡張機能パネルからご確認ください。

## Featured Projects

### Next.js Eコマースプラットフォーム v2.1.0
Next.js 14とSupabaseを使用した完全なEコマースソリューション。
Stripe決済、在庫管理、ユーザー認証などの機能を備えた実用的なプラットフォーム。

**Technologies:** Next.js, TypeScript, Supabase, Stripe, Tailwind CSS
**Downloads:** 15,000+ | **Rating:** 4.8/5

---

### リアルタイムチャットアプリ v1.5.3
WebSocketを使用した高性能なリアルタイムコミュニケーションプラットフォーム。
プライベート/グループチャット、ファイル共有、通知機能を実装。

**Technologies:** React, Node.js, Socket.io, MongoDB, Redis
**Downloads:** 8,500+ | **Rating:** 4.6/5

---

### プロジェクト管理ツール v3.0.1
チーム向けの包括的なプロジェクト管理システム。
かんばんボード、ガントチャート、タスク管理、リアルタイムコラボレーション機能を提供。

**Technologies:** Next.js, tRPC, Prisma, PostgreSQL, Zustand
**Downloads:** 12,000+ | **Rating:** 4.9/5

---

### React UIコンポーネントライブラリ v1.8.0
再利用可能でアクセシブルなReactコンポーネントライブラリ。
Tailwind CSSベースで、ダークモード、テーマカスタマイズをサポート。

**Technologies:** React, TypeScript, Tailwind CSS, Storybook
**Downloads:** 25,000+ | **Rating:** 4.7/5

---

## More Projects

- AI コンテンツジェネレーター - OpenAI APIを使用したコンテンツ生成ツール
- 画像最適化API - 高速な画像変換・圧縮APIサービス

すべてのプロジェクトはGitHubで公開されており、デモもご覧いただけます。`,
      },
    ],
  },
  {
    name: "skills.json",
    type: "file",
    icon: "braces",
    content: `{
  "frontend": {
    "frameworks": [
      { "name": "React", "level": 95, "years": 5 },
      { "name": "Next.js", "level": 90, "years": 4 },
      { "name": "Vue.js", "level": 75, "years": 2 },
      { "name": "TypeScript", "level": 90, "years": 4 }
    ],
    "styling": [
      { "name": "Tailwind CSS", "level": 95, "years": 4 },
      { "name": "CSS/SCSS", "level": 90, "years": 6 },
      { "name": "Styled Components", "level": 80, "years": 3 }
    ],
    "tools": [
      "Webpack",
      "Vite",
      "ESLint",
      "Prettier"
    ]
  },
  "backend": {
    "languages": [
      { "name": "Node.js", "level": 90, "years": 5 },
      { "name": "Python", "level": 80, "years": 3 },
      { "name": "Go", "level": 70, "years": 2 }
    ],
    "frameworks": [
      "Express",
      "NestJS",
      "FastAPI",
      "tRPC"
    ],
    "databases": [
      { "name": "PostgreSQL", "level": 85 },
      { "name": "MongoDB", "level": 80 },
      { "name": "Redis", "level": 75 },
      { "name": "Supabase", "level": 85 }
    ]
  },
  "devops": {
    "cloud": ["AWS", "Vercel", "Heroku", "DigitalOcean"],
    "containers": ["Docker", "Kubernetes"],
    "cicd": ["GitHub Actions", "GitLab CI", "CircleCI"],
    "monitoring": ["DataDog", "Sentry", "LogRocket"]
  },
  "other": {
    "versionControl": ["Git", "GitHub", "GitLab"],
    "methodology": ["Agile", "Scrum", "TDD"],
    "design": ["Figma", "Adobe XD"]
  }
}`,
  },
  {
    name: "contact.md",
    type: "file",
    icon: "mail",
    content: `# お問い合わせ

## 連絡方法

お仕事のご依頼やご相談など、お気軽にお問い合わせください。

### メール
contact@example.com

### SNS・リンク

- **GitHub**: [github.com/yourusername](https://github.com/yourusername)
- **Twitter/X**: [@yourusername](https://twitter.com/yourusername)
- **LinkedIn**: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- **ポートフォリオ**: [yourportfolio.com](https://yourportfolio.com)

### 対応可能な業務

- Webアプリケーション開発
- フロントエンド開発(React/Next.js)
- バックエンド開発(Node.js/Python)
- 技術コンサルティング
- コードレビューとリファクタリング
- 技術記事執筆

### 稼働状況

現在、フリーランスとして活動しており、新規プロジェクトのご相談を受け付けております。

**レスポンス時間**: 通常24時間以内に返信いたします。

---

## よくある質問

**Q: リモートワークは可能ですか?**  
A: はい、完全リモートでの業務に対応しています。

**Q: 時間単価はいくらですか?**  
A: プロジェクトの内容により変動します。詳細はお問い合わせください。

**Q: 小規模プロジェクトも対応可能ですか?**  
A: はい、小規模から大規模まで、幅広く対応可能です。

ご連絡お待ちしております!`,
  },
  {
    name: "config.yaml",
    type: "file",
    icon: "settings",
    content: `# ポートフォリオ設定

site:
  title: "Developer Portfolio"
  description: "フルスタックエンジニアのポートフォリオサイト"
  author: "あなたの名前"
  url: "https://yourportfolio.com"

theme:
  primaryColor: "#007ACC"
  darkMode: true
  font: "Geist"

social:
  github: "yourusername"
  twitter: "yourusername"
  linkedin: "yourprofile"
  email: "contact@example.com"

features:
  blog: true
  projects: true
  resume: true
  contact: true

seo:
  keywords:
    - "フルスタックエンジニア"
    - "React"
    - "Next.js"
    - "TypeScript"
  ogImage: "/og-image.png"
  twitterCard: "summary_large_image"`,
  },
]

export const extensions: Extension[] = [
  {
    id: "nextjs-ecommerce",
    name: "nextjs-ecommerce",
    displayName: "Next.js Eコマースプラットフォーム",
    description:
      "Next.js 14とSupabaseを使用した完全なEコマースソリューション。Stripe決済、在庫管理、ユーザー認証などの機能を備えた実用的なプラットフォーム。",
    version: "2.1.0",
    publisher: "あなたの名前",
    icon: "shopping-cart",
    categories: ["フルスタック", "Eコマース"],
    tags: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind CSS"],
    downloads: 15000,
    rating: 4.8,
    repository: "https://github.com/yourusername/nextjs-ecommerce",
    homepage: "https://ecommerce-demo.example.com",
    features: [
      "商品管理と在庫システム",
      "Stripe決済統合",
      "ユーザー認証と注文履歴",
      "レスポンシブデザイン",
      "管理者ダッシュボード",
    ],
    screenshots: [
      "/ecommerce-homepage-with-products-grid.jpg",
      "/shopping-cart-checkout-page.jpg",
      "/admin-dashboard-analytics.jpg",
      "/product-detail-page-with-reviews.jpg",
    ],
  },
  {
    id: "realtime-chat",
    name: "realtime-chat",
    displayName: "リアルタイムチャットアプリ",
    description:
      "WebSocketを使用した高性能なリアルタイムコミュニケーションプラットフォーム。プライベート/グループチャット、ファイル共有、通知機能を実装。",
    version: "1.5.3",
    publisher: "あなたの名前",
    icon: "message-circle",
    categories: ["フルスタック", "リアルタイム"],
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    downloads: 8500,
    rating: 4.6,
    repository: "https://github.com/yourusername/realtime-chat",
    homepage: "https://chat-demo.example.com",
    features: [
      "リアルタイムメッセージング",
      "プライベートとグループチャット",
      "ファイル共有機能",
      "オンラインステータス表示",
      "既読・未読管理",
    ],
    screenshots: [
      "/chat-application-with-message-bubbles.jpg",
      "/group-chat-room-with-multiple-users.jpg",
      "/file-sharing-interface-in-chat.jpg",
      "/user-profile-settings-page.jpg",
    ],
  },
  {
    id: "project-management",
    name: "project-management",
    displayName: "プロジェクト管理ツール",
    description:
      "チーム向けの包括的なプロジェクト管理システム。かんばんボード、ガントチャート、タスク管理、リアルタイムコラボレーション機能を提供。",
    version: "3.0.1",
    publisher: "あなたの名前",
    icon: "layout-dashboard",
    categories: ["フルスタック", "生産性"],
    tags: ["Next.js", "tRPC", "Prisma", "PostgreSQL", "Zustand"],
    downloads: 12000,
    rating: 4.9,
    repository: "https://github.com/yourusername/project-manager",
    homepage: "https://pm-demo.example.com",
    features: [
      "かんばんボードとガントチャート",
      "タスク管理と進捗追跡",
      "チームコラボレーション機能",
      "リアルタイム通知",
      "カスタマイズ可能なワークフロー",
    ],
    screenshots: [
      "/kanban-board-with-task-cards.jpg",
      "/gantt-chart-project-timeline.jpg",
      "/team-collaboration-dashboard.png",
      "/task-detail-modal-with-comments.jpg",
    ],
  },
  {
    id: "design-system",
    name: "design-system",
    displayName: "React UIコンポーネントライブラリ",
    description:
      "再利用可能でアクセシブルなReactコンポーネントライブラリ。Tailwind CSSベースで、ダークモード、テーマカスタマイズをサポート。",
    version: "1.8.0",
    publisher: "あなたの名前",
    icon: "palette",
    categories: ["フロントエンド", "UIライブラリ"],
    tags: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Accessibility"],
    downloads: 25000,
    rating: 4.7,
    repository: "https://github.com/yourusername/ui-library",
    homepage: "https://ui-docs.example.com",
    features: [
      "50以上のコンポーネント",
      "完全なTypeScriptサポート",
      "WCAG 2.1 AAレベル準拠",
      "ダークモード対応",
      "Storybookドキュメント",
    ],
    screenshots: [
      "/component-library-storybook-documentation.jpg",
      "/button-variants-showcase.jpg",
      "/form-components-with-validation.jpg",
      "/dark-mode-theme-toggle.jpg",
    ],
  },
  {
    id: "ai-content-generator",
    name: "ai-content-generator",
    displayName: "AI コンテンツジェネレーター",
    description:
      "OpenAI APIを使用したコンテンツ生成ツール。ブログ記事、SNS投稿、マーケティングコピーなどを自動生成。",
    version: "1.2.5",
    publisher: "あなたの名前",
    icon: "sparkles",
    categories: ["AI/ML", "ツール"],
    tags: ["Next.js", "OpenAI", "TypeScript", "Prisma"],
    downloads: 6200,
    rating: 4.5,
    repository: "https://github.com/yourusername/ai-content-gen",
    homepage: "https://ai-content.example.com",
    features: [
      "複数のコンテンツタイプに対応",
      "カスタマイズ可能なプロンプト",
      "履歴管理と保存",
      "エクスポート機能",
      "トーン調整機能",
    ],
    screenshots: [
      "/placeholder.svg?height=400&width=700",
      "/placeholder.svg?height=400&width=700",
      "/placeholder.svg?height=400&width=700",
      "/placeholder.svg?height=400&width=700",
    ],
  },
  {
    id: "image-optimizer",
    name: "image-optimizer",
    displayName: "画像最適化API",
    description:
      "高速な画像変換・圧縮APIサービス。複数フォーマット対応、リサイズ、WebP変換などの機能を提供。",
    version: "2.3.0",
    publisher: "あなたの名前",
    icon: "image",
    categories: ["バックエンド", "API"],
    tags: ["Node.js", "Sharp", "Express", "Docker"],
    downloads: 10500,
    rating: 4.8,
    repository: "https://github.com/yourusername/image-optimizer",
    homepage: "https://api-docs.example.com",
    features: [
      "複数の画像フォーマットをサポート",
      "バッチ処理対応",
      "WebP/AVIF変換",
      "リサイズとクロップ",
      "RESTful API",
    ],
    screenshots: [
      "/placeholder.svg?height=400&width=700",
      "/placeholder.svg?height=400&width=700",
      "/placeholder.svg?height=400&width=700",
      "/placeholder.svg?height=400&width=700",
    ],
  },
]
