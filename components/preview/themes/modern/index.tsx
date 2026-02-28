"use client"

import { ChevronRight, ExternalLink, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { CareerTimeline } from "@/components/career-timeline"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { careerProjects } from "@/constants/career-data"

import { ExtensionGallery } from "../../extension-gallery"

export function renderModernPreview(previewType: string, content: string) {
  // 強み用プレビュー
  if (previewType === "strong-points") {
    return (
      <div className="min-h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              強み・アピールポイント
            </h1>
            <p className="text-xl text-slate-400">What Makes Me Stand Out</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "フルスタック開発力",
                desc: "フロントエンドからバックエンド、インフラまで一貫して対応。プロジェクト全体を俯瞰した設計・実装が可能です。",
                icon: "🔧",
                color: "from-emerald-500 to-cyan-500",
              },
              {
                title: "モダン技術への適応力",
                desc: "Next.js 14、TypeScript厳密モード、tRPCなど最新技術を積極採用。常に技術のアップデートを続けています。",
                icon: "🚀",
                color: "from-cyan-500 to-blue-500",
              },
              {
                title: "パフォーマンス最適化",
                desc: "Core Web Vitalsを意識した実装、バンドルサイズ最適化、DBクエリ改善などの経験が豊富です。",
                icon: "⚡",
                color: "from-blue-500 to-purple-500",
              },
              {
                title: "リーダーシップ",
                desc: "12名規模のチームリード経験。コードレビュー文化の醸成やメンバーの成長サポートを実践してきました。",
                icon: "👥",
                color: "from-purple-500 to-pink-500",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="p-8 bg-slate-900/50 border-slate-800 backdrop-blur hover:border-slate-700 transition-all group"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>
                <h3
                  className={`text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}
                >
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-slate-900/50 border-slate-800 backdrop-blur mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <span className="text-3xl">💬</span>
              ソフトスキル
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "コミュニケーション",
                  items: [
                    "非エンジニアへの説明が得意",
                    "ドキュメント作成重視",
                    "チーム間の橋渡し役",
                  ],
                },
                {
                  title: "問題解決",
                  items: ["複雑な問題の分解", "根本原因の特定", "技術的負債の計画的解消"],
                },
                {
                  title: "学習意欲",
                  items: ["新技術の積極的習得", "ブログでの知見共有", "コミュニティ活動"],
                },
              ].map((section) => (
                <div key={section.title}>
                  <h4 className="text-lg font-semibold text-white mb-3">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-slate-400">
                        <ChevronRight className="w-4 h-4 text-cyan-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { num: "40%", label: "パフォーマンス改善", color: "from-emerald-500 to-cyan-500" },
              { num: "150%", label: "ユーザー数成長", color: "from-cyan-500 to-blue-500" },
              { num: "30%", label: "生産性向上", color: "from-blue-500 to-purple-500" },
              { num: "10万PV", label: "月間ブログ", color: "from-purple-500 to-pink-500" },
            ].map((stat) => (
              <Card
                key={stat.label}
                className="p-6 bg-slate-900/50 border-slate-800 backdrop-blur text-center"
              >
                <div
                  className={`text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}
                >
                  {stat.num}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // FAQ用プレビュー
  if (previewType === "faq") {
    return (
      <div className="min-h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              よくある質問
            </h1>
            <p className="text-xl text-slate-400">Frequently Asked Questions</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "リモートワークは可能ですか?",
                a: "はい、完全リモートでの業務に対応しています。Slack、Discord、Teams等のツールを活用し、円滑なコミュニケーションを心がけています。",
                color: "orange",
              },
              {
                q: "稼働時間はどのくらいですか?",
                a: "週20〜40時間での稼働が可能です。プロジェクトの状況に応じて柔軟に対応いたします。",
                color: "amber",
              },
              {
                q: "対応可能な技術スタックは?",
                a: "React、Next.js、TypeScript、Vue.js、Node.js、Python、Go、PostgreSQL、MongoDB、AWS、GCP、Vercel等に対応しています。",
                color: "yellow",
              },
              {
                q: "新しい技術のキャッチアップは可能?",
                a: "はい、積極的に新技術を学習しています。プロジェクトで必要な技術は事前にキャッチアップして対応いたします。",
                color: "orange",
              },
              {
                q: "設計から実装まで対応できる?",
                a: "はい、要件定義から設計、実装、テスト、デプロイまで一貫して対応可能です。",
                color: "amber",
              },
              {
                q: "見積もりは無料ですか?",
                a: "はい、お見積もりは無料で承っております。お気軽にご相談ください。",
                color: "yellow",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="p-6 bg-slate-900/50 border-slate-800 backdrop-blur hover:border-slate-700 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl bg-${item.color}-600/20 flex items-center justify-center shrink-0`}
                  >
                    <span className={`text-${item.color}-400 font-bold`}>Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{item.q}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-8 bg-slate-900/50 border-slate-800 backdrop-blur text-center">
            <h3 className="text-xl font-bold text-white mb-3">その他ご質問がありましたら</h3>
            <p className="text-slate-400 mb-6">
              お気軽にお問い合わせください。通常24時間以内にご返信いたします。
            </p>
            <Badge className="px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-0">
              お問い合わせはこちら
            </Badge>
          </Card>
        </div>
      </div>
    )
  }

  // プロフィール用プレビュー
  if (previewType === "profile") {
    return (
      <div className="min-h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto px-8 py-16">
          {/* ヒーローセクション */}
          <div className="mb-20 text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-5xl font-bold text-white shadow-2xl">
                  Dev
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-950" />
              </div>
            </div>
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              フルスタックエンジニア
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              5年以上のWeb開発経験を持ち、モダンな技術スタックで高品質なプロダクトを創造します
            </p>
            <div className="flex justify-center gap-4">
              <Badge className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white border-0 text-sm">
                採用可能
              </Badge>
              <Badge className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white border-0 text-sm">
                リモートワーク
              </Badge>
            </div>
          </div>

          {/* スキルグリッド */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 bg-slate-900/50 border-slate-800 backdrop-blur">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <span className="text-3xl">💻</span>
                フロントエンド
              </h3>
              <div className="space-y-3">
                {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-400" />
                    <span className="text-slate-300 text-lg">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-slate-900/50 border-slate-800 backdrop-blur">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <span className="text-3xl">⚙️</span>
                バックエンド
              </h3>
              <div className="space-y-3">
                {["Node.js", "Python", "PostgreSQL", "MongoDB"].map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-purple-400" />
                    <span className="text-slate-300 text-lg">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* 経験セクション */}
          <Card className="p-8 bg-slate-900/50 border-slate-800 backdrop-blur">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="text-3xl">🚀</span>
              実績
            </h3>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                <p className="text-lg">5年以上のWeb開発経験</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                <p className="text-lg">大規模なSaaSプロダクトの開発経験</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2" />
                <p className="text-lg">アジャイル開発チームでのリード経験</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  // プロジェクト用プレビュー
  if (previewType === "projects") {
    return (
      <div className="min-h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              プロジェクト
            </h1>
            <p className="text-xl text-slate-400">これまでに開発した主要なプロジェクト</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Eコマースプラットフォーム",
                desc: "Next.js 14とSupabaseを使用した完全なEコマースソリューション",
                techs: ["Next.js", "TypeScript", "Supabase", "Stripe"],
                color: "from-blue-600 to-blue-800",
              },
              {
                title: "リアルタイムチャットアプリ",
                desc: "WebSocketを使用したリアルタイムコミュニケーションプラットフォーム",
                techs: ["React", "Node.js", "Socket.io", "MongoDB"],
                color: "from-purple-600 to-purple-800",
              },
              {
                title: "プロジェクト管理ツール",
                desc: "チーム向けの包括的なプロジェクト管理システム",
                techs: ["Next.js", "tRPC", "Prisma", "PostgreSQL"],
                color: "from-pink-600 to-pink-800",
              },
            ].map((project, i) => (
              <Card
                key={i}
                className="group bg-slate-900/50 border-slate-800 backdrop-blur hover:border-slate-700 transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl`}
                >
                  {i === 0 ? "🛒" : i === 1 ? "💬" : "📊"}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techs.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-slate-800 text-slate-300 border-0 hover:bg-slate-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      デモ
                    </button>
                    <button className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
                      <Github className="w-4 h-4" />
                      コード
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // スキル用プレビュー
  if (previewType === "skills") {
    const getRankBadge = (rank: string) => {
      switch (rank) {
        case "S":
          return "bg-amber-500/20 text-amber-400 border-amber-500/50"
        case "A":
          return "bg-rose-500/20 text-rose-400 border-rose-500/50"
        case "B":
          return "bg-violet-500/20 text-violet-400 border-violet-500/50"
        case "C":
          return "bg-blue-500/20 text-blue-400 border-blue-500/50"
        default:
          return "bg-slate-500/20 text-slate-400 border-slate-500/50"
      }
    }

    const skills = {
      frontend: [
        { name: "React", years: 5, rank: "S" },
        { name: "Next.js", years: 4, rank: "S" },
        { name: "TypeScript", years: 4, rank: "A" },
      ],
      backend: [
        { name: "Node.js", years: 4, rank: "A" },
        { name: "Python", years: 3, rank: "B" },
        { name: "PostgreSQL", years: 3, rank: "A" },
      ],
      ai: [
        { name: "OpenAI API", years: 2, rank: "A" },
        { name: "LangChain", years: 1, rank: "B" },
        { name: "RAG", years: 1, rank: "B" },
      ],
      infra: [
        { name: "AWS", years: 3, rank: "A" },
        { name: "Docker", years: 3, rank: "A" },
        { name: "Terraform", years: 2, rank: "B" },
      ],
    }

    return (
      <div className="min-h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              スキルセット
            </h1>
            <p className="text-xl text-slate-400">技術スタックと習熟度</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-slate-900/50 border-slate-800 backdrop-blur">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                <span className="text-2xl">💻</span>
                フロントエンド
              </h3>
              <div className="space-y-3">
                {skills.frontend.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50"
                  >
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 text-sm">{skill.years}年</span>
                      <span
                        className={`px-3 py-1 text-sm font-bold border rounded-lg ${getRankBadge(skill.rank)}`}
                      >
                        {skill.rank}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-slate-900/50 border-slate-800 backdrop-blur">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                <span className="text-2xl">⚙️</span>
                バックエンド
              </h3>
              <div className="space-y-3">
                {skills.backend.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50"
                  >
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 text-sm">{skill.years}年</span>
                      <span
                        className={`px-3 py-1 text-sm font-bold border rounded-lg ${getRankBadge(skill.rank)}`}
                      >
                        {skill.rank}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-slate-900/50 border-slate-800 backdrop-blur">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                <span className="text-2xl">🤖</span>
                AI / ML
              </h3>
              <div className="space-y-3">
                {skills.ai.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50"
                  >
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 text-sm">{skill.years}年</span>
                      <span
                        className={`px-3 py-1 text-sm font-bold border rounded-lg ${getRankBadge(skill.rank)}`}
                      >
                        {skill.rank}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-slate-900/50 border-slate-800 backdrop-blur">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                <span className="text-2xl">☁️</span>
                インフラ
              </h3>
              <div className="space-y-3">
                {skills.infra.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50"
                  >
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 text-sm">{skill.years}年</span>
                      <span
                        className={`px-3 py-1 text-sm font-bold border rounded-lg ${getRankBadge(skill.rank)}`}
                      >
                        {skill.rank}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="mt-8 p-6 bg-slate-900/50 border-slate-800 backdrop-blur">
            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
              <span className="text-2xl">🛠️</span>
              その他のツール & 技術
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Git",
                "GitHub Actions",
                "Vercel",
                "Figma",
                "Agile",
                "TDD",
                "Redis",
                "Kubernetes",
              ].map((tool) => (
                <Badge
                  key={tool}
                  className="px-4 py-2 bg-slate-800 text-slate-300 border-slate-700 text-sm"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    )
  }

  // 連絡先用プレビュー
  if (previewType === "contact") {
    return (
      <div className="min-h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              お問い合わせ
            </h1>
            <p className="text-xl text-slate-400">お気軽にご連絡ください</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: <Mail className="w-6 h-6" />,
                label: "メール",
                value: "contact@example.com",
                href: "mailto:contact@example.com",
                color: "blue",
              },
              {
                icon: <Github className="w-6 h-6" />,
                label: "GitHub",
                value: "github.com/yourusername",
                href: "https://github.com/yourusername",
                color: "purple",
              },
              {
                icon: <Linkedin className="w-6 h-6" />,
                label: "LinkedIn",
                value: "linkedin.com/in/yourprofile",
                href: "https://linkedin.com/in/yourprofile",
                color: "blue",
              },
              {
                icon: <Twitter className="w-6 h-6" />,
                label: "Twitter",
                value: "@yourusername",
                href: "https://twitter.com/yourusername",
                color: "cyan",
              },
            ].map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={contact.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              >
                <Card className="p-6 bg-slate-900/50 border-slate-800 backdrop-blur hover:border-slate-700 transition-all group h-full">
                  <div
                    className={`w-12 h-12 rounded-lg bg-${contact.color}-600/20 flex items-center justify-center mb-4 text-${contact.color}-400 group-hover:scale-110 transition-transform`}
                  >
                    {contact.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-1">{contact.label}</h3>
                  <p className="text-slate-400 text-sm">{contact.value}</p>
                </Card>
              </a>
            ))}
          </div>

          <Card className="p-8 bg-slate-900/50 border-slate-800 backdrop-blur">
            <h3 className="text-2xl font-bold mb-6 text-white">対応可能な業務</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Webアプリケーション開発",
                "フロントエンド開発",
                "バックエンド開発",
                "技術コンサルティング",
                "コードレビュー",
                "技術記事執筆",
              ].map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">{service}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-4">レスポンス時間: 通常24時間以内</p>
            <Badge className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white border-0 text-sm">
              現在新規案件受付中
            </Badge>
          </div>
        </div>
      </div>
    )
  }

  // 経験用プレビュー
  if (previewType === "experience") {
    return <CareerTimeline projects={careerProjects} variant="modern" />
  }

  // README用プレビュー (Extension風カード一覧+モーダル)
  if (previewType === "readme") {
    return <ExtensionGallery theme="modern" />
  }

  return null
}
