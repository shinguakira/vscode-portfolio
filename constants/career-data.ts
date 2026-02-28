import type { CareerProject } from "@/components/career-timeline/career-timeline"

export const careerProjects: CareerProject[] = [
  {
    id: "tech-startup",
    name: "シニアフルスタックエンジニア",
    company: "Tech Startup Inc.",
    role: "テックリード / フルスタック",
    startDate: "2021-04",
    endDate: "present",
    color: "#8b5cf6",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "AWS", "Docker", "Terraform", "tRPC", "Prisma"],
    description:
      "入社時はフロントエンドエンジニアとして参画。半年後にテックリードに昇格し、バックエンドを含むプロダクト全体の技術的意思決定を担当。特にNext.js App Routerへの移行とtRPCの導入により、開発生産性を大幅に向上させた。",
    highlights: [
      "ユーザー数150%増加",
      "読み込み時間40%短縮",
      "CI/CDパイプライン構築",
      "マイクロサービスアーキテクチャ移行",
    ],
    teamSize: 12,
  },
  {
    id: "web-agency",
    name: "フロントエンドエンジニア",
    company: "Web Agency Co.",
    role: "フロントエンドエンジニア",
    startDate: "2019-04",
    endDate: "2021-03",
    color: "#3b82f6",
    tags: ["React", "Next.js", "Vue.js", "SCSS", "Node.js", "Firebase"],
    description:
      "新卒入社後、HTML/CSS/jQueryベースの開発からスタートし、React/Next.jsへの技術移行を提案・主導。社内の技術基盤をモダン化し、開発効率を2倍以上に改善。コードレビューのガイドライン策定やJr.エンジニアの育成にも注力。",
    highlights: ["20以上のプロジェクト納品", "React/Next.js移行を主導", "コードレビュー文化確立"],
    teamSize: 5,
  },
  {
    id: "freelance",
    name: "Webデベロッパー（副業）",
    company: "フリーランス",
    role: "フルスタックエンジニア",
    startDate: "2020-10",
    endDate: "2021-06",
    color: "#14b8a6",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Vercel", "Stripe"],
    description:
      "Web Agency Co.在籍中に副業として開始。スタートアップのMVP開発を中心に、企画段階から技術選定・実装・デプロイまでワンストップで対応。この経験がフルスタックエンジニアへの転向のきっかけとなった。",
    highlights: ["3つのMVPを開発・リリース", "Stripe決済統合", "Supabaseリアルタイム機能構築"],
    teamSize: 1,
  },
]
