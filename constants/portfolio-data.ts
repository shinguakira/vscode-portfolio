// ポートフォリオのファイルツリーデータ

import type { FileItem, GitCommit, SkillDiff, Extension } from "@/types"

export const gitHistory: GitCommit[] = [
  {
    hash: "a7f3d2e",
    date: "2024-01-15",
    author: "あなたの名前",
    message: "feat: AI機能の実装とチームリード経験を追加",
    company: "Tech Startup Inc.",
    position: "シニアフルスタックエンジニア",
    changes: ["AI/MLプロジェクトのリード", "チーム規模を5名→12名に拡大", "アーキテクチャ設計の主導"],
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
    changes: ["マイクロサービスアーキテクチャ導入", "CI/CDパイプライン構築", "ユーザー数150%増加に貢献"],
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
    changes: ["HTML/CSS/JavaScriptの実務経験", "20以上のWebサイト制作", "クライアント折衝スキル習得"],
  },
]

export const skillDiffs: SkillDiff[] = [
  {
    category: "フロントエンド",
    changes: [
      {
        type: "added",
        skill: "Next.js 14",
        after: "App Router, Server Actions",
        description: "最新のNext.js機能を実務で活用",
      },
      {
        type: "improved",
        skill: "TypeScript",
        before: "70%",
        after: "90%",
        description: "高度な型システムの理解と実践",
      },
      {
        type: "improved",
        skill: "React",
        before: "80%",
        after: "95%",
        description: "React 19とServer Componentsの習得",
      },
      {
        type: "added",
        skill: "Tailwind CSS",
        after: "95%",
        description: "デザインシステム構築とカスタマイズ",
      },
    ],
  },
  {
    category: "バックエンド",
    changes: [
      {
        type: "added",
        skill: "Go",
        after: "70%",
        description: "マイクロサービス開発での採用",
      },
      {
        type: "improved",
        skill: "Node.js",
        before: "75%",
        after: "90%",
        description: "パフォーマンス最適化とスケーリング",
      },
      {
        type: "added",
        skill: "tRPC",
        after: "85%",
        description: "型安全なAPI設計",
      },
    ],
  },
  {
    category: "インフラ・DevOps",
    changes: [
      {
        type: "added",
        skill: "Kubernetes",
        after: "75%",
        description: "コンテナオーケストレーション",
      },
      {
        type: "improved",
        skill: "Docker",
        before: "60%",
        after: "85%",
        description: "マルチステージビルドとセキュリティ",
      },
      {
        type: "added",
        skill: "GitHub Actions",
        after: "90%",
        description: "CI/CDパイプラインの自動化",
      },
    ],
  },
  {
    category: "ソフトスキル",
    changes: [
      {
        type: "added",
        skill: "チームリーダーシップ",
        after: "12名のチームをリード",
        description: "技術的意思決定とメンタリング",
      },
      {
        type: "improved",
        skill: "アーキテクチャ設計",
        before: "小規模プロジェクト",
        after: "大規模SaaSアーキテクチャ",
        description: "スケーラブルなシステム設計",
      },
      {
        type: "added",
        skill: "技術記事執筆",
        after: "月間10万PV",
        description: "技術ブログでの情報発信",
      },
    ],
  },
]

export const fileTree: FileItem[] = [
  {
    name: "about",
    type: "folder",
    icon: "📁",
    children: [
      {
        name: "profile.md",
        type: "file",
        icon: "📄",
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
        icon: "💪",
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
        icon: "❓",
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
        icon: "{}",
        content: `{
  "workExperience": [
    {
      "company": "Tech Startup Inc.",
      "position": "シニアフルスタックエンジニア",
      "period": "2021年 - 現在",
      "description": "SaaSプロダクトの設計と開発をリード",
      "achievements": [
        "新機能開発により、ユーザー数を150%増加",
        "パフォーマンス最適化により、読み込み時間を40%短縮",
        "CI/CDパイプラインの構築と改善"
      ]
    },
    {
      "company": "Web Agency Co.",
      "position": "フロントエンドエンジニア",
      "period": "2019年 - 2021年",
      "description": "クライアントのWebサイトとアプリケーション開発",
      "achievements": [
        "20以上のプロジェクトを納品",
        "React/Next.jsへの技術スタック移行を主導",
        "コードレビュー文化の確立"
      ]
    }
  ],
  "education": {
    "degree": "情報工学学士",
    "university": "○○大学",
    "year": "2019年卒業"
  }
}`,
      },
    ],
  },
  {
    name: "projects",
    type: "folder",
    icon: "📁",
    children: [
      {
        name: "featured.tsx",
        type: "file",
        icon: "⚛️",
        content: `import { Project } from '@/types'

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: 'Eコマースプラットフォーム',
    description: 'Next.js 14とSupabaseを使用した完全なEコマースソリューション',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Tailwind CSS'],
    image: '/projects/ecommerce.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/ecommerce',
    features: [
      '商品管理と在庫システム',
      'Stripe決済統合',
      'ユーザー認証と注文履歴',
      'レスポンシブデザイン'
    ]
  },
  {
    id: 2,
    title: 'リアルタイムチャットアプリ',
    description: 'WebSocketを使用したリアルタイムコミュニケーションプラットフォーム',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redis'],
    image: '/projects/chat-app.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/chat-app',
    features: [
      'リアルタイムメッセージング',
      'プライベートとグループチャット',
      'ファイル共有機能',
      'オンラインステータス表示'
    ]
  },
  {
    id: 3,
    title: 'プロジェクト管理ツール',
    description: 'チーム向けの包括的なプロジェクト管理システム',
    technologies: ['Next.js', 'tRPC', 'Prisma', 'PostgreSQL', 'Zustand'],
    image: '/projects/project-manager.png',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project-manager',
    features: [
      'かんばんボードとガントチャート',
      'タスク管理と進捗追跡',
      'チームコラボレーション機能',
      'リアルタイム通知'
    ]
  }
]

export default featuredProjects`,
      },
      {
        name: "README.md",
        type: "file",
        icon: "📖",
        content: `# プロジェクト一覧

このフォルダには、私が開発した主要なプロジェクトが含まれています。

## ハイライト

### 🛒 Eコマースプラットフォーム
モダンなフルスタックEコマースソリューション。Next.js 14の最新機能を活用し、Supabaseでバックエンドを構築。Stripeを使用した安全な決済システムを実装。

### 💬 リアルタイムチャットアプリ
WebSocketベースのリアルタイムコミュニケーションプラットフォーム。低遅延のメッセージング、ファイル共有、オンラインプレゼンス機能を備えています。

### 📊 プロジェクト管理ツール
チーム向けの包括的なプロジェクト管理システム。タスク管理、かんばんボード、リアルタイムコラボレーション機能を提供。

## 技術スタック

- **フロントエンド**: React, Next.js, TypeScript, Tailwind CSS
- **バックエンド**: Node.js, tRPC, Prisma
- **データベース**: PostgreSQL, MongoDB, Supabase
- **リアルタイム**: Socket.io, WebSocket
- **認証**: NextAuth, Supabase Auth
- **決済**: Stripe

すべてのプロジェクトはGitHubで公開されており、デモもご覧いただけます。`,
      },
    ],
  },
  {
    name: "skills.json",
    type: "file",
    icon: "{}",
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
    icon: "📧",
    content: `# お問い合わせ

## 連絡方法

お仕事のご依頼やご相談など、お気軽にお問い合わせください。

### 📧 メール
contact@example.com

### 🔗 SNS・リンク

- **GitHub**: [github.com/yourusername](https://github.com/yourusername)
- **Twitter/X**: [@yourusername](https://twitter.com/yourusername)
- **LinkedIn**: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- **ポートフォリオ**: [yourportfolio.com](https://yourportfolio.com)

### 💼 対応可能な業務

- Webアプリケーション開発
- フロントエンド開発(React/Next.js)
- バックエンド開発(Node.js/Python)
- 技術コンサルティング
- コードレビューとリファクタリング
- 技術記事執筆

### ⏰ 稼働状況

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
    icon: "⚙️",
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
    icon: "🛒",
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
    icon: "💬",
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
    icon: "📊",
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
    icon: "🎨",
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
    description: "OpenAI APIを使用したコンテンツ生成ツール。ブログ記事、SNS投稿、マーケティングコピーなどを自動生成。",
    version: "1.2.5",
    publisher: "あなたの名前",
    icon: "🤖",
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
    description: "高速な画像変換・圧縮APIサービス。複数フォーマット対応、リサイズ、WebP変換などの機能を提供。",
    version: "2.3.0",
    publisher: "あなたの名前",
    icon: "🖼️",
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
