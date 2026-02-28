"use client"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"

import { CareerTimeline } from "@/components/career-timeline"
import { careerProjects } from "@/constants/career-data"

import { ExtensionGallery } from "../../extension-gallery"

export function renderProfessionalPreview(previewType: string, content: string) {
  if (previewType === "strong-points") {
    return (
      <div className="min-h-full bg-white">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <div className="mb-16 border-b border-gray-200 pb-8">
            <h1 className="text-5xl font-serif font-bold text-gray-900 mb-3">強み・専門性</h1>
            <p className="text-xl text-gray-600">What I Bring to the Table</p>
          </div>

          <div className="space-y-12 mb-16">
            <div>
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6 pb-3 border-b border-gray-200">
                技術的な強み
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "フルスタック開発力",
                    desc: "フロントエンドからバックエンド、インフラまで一貫して対応可能。プロジェクト全体を俯瞰した設計・実装を行います。",
                  },
                  {
                    title: "モダン技術への適応",
                    desc: "Next.js App Router、TypeScript厳密モード、tRPCなど最新技術を積極的に採用し、品質の高いコードを提供します。",
                  },
                  {
                    title: "パフォーマンス最適化",
                    desc: "Core Web Vitalsを意識した実装、バンドルサイズの最適化、データベースクエリの改善などを得意としています。",
                  },
                  {
                    title: "クリーンなコード",
                    desc: "保守性と可読性を重視したコーディング。適切なテストカバレッジと継続的なリファクタリングを実践します。",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-gray-900 pl-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6 pb-3 border-b border-gray-200">
                ソフトスキル
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "コミュニケーション",
                    items: ["非エンジニアへの技術説明", "ドキュメント作成", "チーム間調整"],
                  },
                  {
                    title: "問題解決",
                    items: ["問題の分解・整理", "根本原因の特定", "技術的負債の解消"],
                  },
                  {
                    title: "リーダーシップ",
                    items: ["12名チームリード経験", "コードレビュー文化醸成", "メンバー育成"],
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.items.map((i) => (
                        <li key={i} className="text-sm text-gray-600 pl-3 border-l border-gray-300">
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">
              実績サマリー
            </h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { num: "40%", label: "パフォーマンス改善" },
                { num: "150%", label: "ユーザー数増加" },
                { num: "30%", label: "開発効率向上" },
                { num: "10万PV", label: "技術ブログ月間" },
              ].map((stat) => (
                <div key={stat.label} className="border border-gray-200 p-6">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.num}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (previewType === "faq") {
    return (
      <div className="min-h-full bg-white">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <div className="mb-16 border-b border-gray-200 pb-8">
            <h1 className="text-5xl font-serif font-bold text-gray-900 mb-3">よくある質問</h1>
            <p className="text-xl text-gray-600">Frequently Asked Questions</p>
          </div>

          <div className="space-y-0">
            {[
              {
                category: "業務について",
                questions: [
                  {
                    q: "リモートワークは可能ですか?",
                    a: "はい、完全リモートでの業務に対応しています。オンラインツール（Slack, Discord, Teams等）を活用し、円滑なコミュニケーションを心がけています。",
                  },
                  {
                    q: "稼働時間はどのくらいですか?",
                    a: "週20〜40時間での稼働が可能です。プロジェクトの状況に応じて柔軟に対応いたします。",
                  },
                  {
                    q: "副業・業務委託での参画は可能ですか?",
                    a: "はい、対応可能です。契約形態についてはご相談ください。",
                  },
                ],
              },
              {
                category: "技術について",
                questions: [
                  {
                    q: "対応可能な技術スタックは?",
                    a: "React, Next.js, TypeScript, Vue.js, Node.js, Python, Go, PostgreSQL, MongoDB, Redis, Supabase, AWS, GCP, Vercel, Docker等に対応しています。",
                  },
                  {
                    q: "設計から実装まで一人で対応できますか?",
                    a: "はい、要件定義から設計、実装、テスト、デプロイまで一貫して対応可能です。",
                  },
                ],
              },
              {
                category: "その他",
                questions: [
                  {
                    q: "見積もりは無料ですか?",
                    a: "はい、お見積もりは無料で承っております。お気軽にご相談ください。",
                  },
                  {
                    q: "面談は可能ですか?",
                    a: "はい、オンラインでの面談に対応しています。お気軽にお申し付けください。",
                  },
                ],
              },
            ].map((section) => (
              <div key={section.category} className="mb-12">
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6 pb-3 border-b border-gray-200">
                  {section.category}
                </h2>
                <div className="space-y-6">
                  {section.questions.map((item) => (
                    <div key={item.q} className="grid md:grid-cols-12 gap-4">
                      <div className="md:col-span-5">
                        <p className="font-medium text-gray-900">{item.q}</p>
                      </div>
                      <div className="md:col-span-7">
                        <p className="text-gray-600 leading-relaxed text-sm">{item.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-12 text-center">
            <p className="text-gray-600 mb-6">
              その他ご不明点がございましたら、お気軽にお問い合わせください。
            </p>
            <button className="px-8 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition">
              お問い合わせ
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (previewType === "profile") {
    return (
      <div className="min-h-full bg-white">
        <div className="max-w-4xl mx-auto px-8 py-24">
          {/* ミニマルなヒーロー */}
          <div className="mb-24 border-b border-gray-200 pb-16">
            <div className="flex items-start gap-8 mb-8">
              <div className="w-32 h-32 rounded-full bg-gray-900 flex items-center justify-center text-4xl font-bold text-white shrink-0">
                TY
              </div>
              <div className="pt-4">
                <h1 className="text-5xl font-serif font-bold text-gray-900 mb-3 tracking-tight">
                  田中 太郎
                </h1>
                <p className="text-2xl text-gray-600 mb-4 font-light">フルスタックエンジニア</p>
                <p className="text-gray-700 leading-relaxed max-w-xl">
                  5年以上のWeb開発経験を持ち、モダンな技術スタックで高品質なプロダクトを提供します。
                  クリーンなコード、優れたUX、そしてビジネス価値の創出を重視しています。
                </p>
              </div>
            </div>
          </div>

          {/* エレガントなスキルセクション */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">専門分野</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 pb-2 border-b border-gray-200">
                  フロントエンド開発
                </h3>
                <ul className="space-y-3">
                  {["React / Next.js", "TypeScript", "Tailwind CSS", "レスポンシブデザイン"].map(
                    (item) => (
                      <li key={item} className="text-gray-700 pl-4 border-l-2 border-gray-900">
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 pb-2 border-b border-gray-200">
                  バックエンド開発
                </h3>
                <ul className="space-y-3">
                  {[
                    "Node.js / Express",
                    "Python / Django",
                    "PostgreSQL / MongoDB",
                    "RESTful API設計",
                  ].map((item) => (
                    <li key={item} className="text-gray-700 pl-4 border-l-2 border-gray-900">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* シンプルな実績 */}
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">実績</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { num: "5+", label: "年の経験" },
                { num: "50+", label: "プロジェクト" },
                { num: "20+", label: "満足したクライアント" },
              ].map((stat) => (
                <div key={stat.label} className="border border-gray-200 p-6 rounded">
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.num}</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (previewType === "projects") {
    return (
      <div className="min-h-full bg-white">
        <div className="max-w-6xl mx-auto px-8 py-24">
          <div className="mb-16 border-b border-gray-200 pb-8">
            <h1 className="text-5xl font-serif font-bold text-gray-900 mb-3">プロジェクト</h1>
            <p className="text-xl text-gray-600">選りすぐりの制作実績</p>
          </div>

          <div className="space-y-20">
            {[
              {
                num: "01",
                title: "Eコマースプラットフォーム",
                client: "Tech Startup Inc.",
                year: "2024",
                desc: "Next.js 14とSupabaseを使用した完全なEコマースソリューション。高速なページロードとシームレスなチェックアウト体験を実現。",
              },
              {
                num: "02",
                title: "プロジェクト管理システム",
                client: "Enterprise Co.",
                year: "2023",
                desc: "チーム向けの包括的なプロジェクト管理ツール。リアルタイムコラボレーションとカンバンボードを実装。",
              },
              {
                num: "03",
                title: "コーポレートウェブサイト",
                client: "Design Studio",
                year: "2023",
                desc: "モダンでミニマルなコーポレートサイト。優れたタイポグラフィとスムーズなアニメーションが特徴。",
              },
            ].map((project) => (
              <div key={project.num} className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2">
                  <div className="text-6xl font-bold text-gray-200">{project.num}</div>
                </div>
                <div className="md:col-span-10 border-l-2 border-gray-900 pl-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>{project.client}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 max-w-2xl">{project.desc}</p>
                  <div className="flex gap-4">
                    <button className="px-6 py-2 bg-gray-900 text-white font-medium hover:bg-gray-800 transition">
                      詳細を見る
                    </button>
                    <button className="px-6 py-2 border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-50 transition">
                      ライブサイト
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (previewType === "experience") {
    return <CareerTimeline projects={careerProjects} variant="professional" />
  }

  if (previewType === "contact") {
    return (
      <div className="min-h-full bg-white">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <div className="mb-16 border-b border-gray-200 pb-8">
            <h1 className="text-5xl font-serif font-bold text-gray-900 mb-3">お問い合わせ</h1>
            <p className="text-xl text-gray-600">Get in Touch</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6 pb-3 border-b border-gray-200">
                連絡先
              </h2>
              <div className="space-y-6">
                {[
                  {
                    label: "Email",
                    value: "contact@example.com",
                    href: "mailto:contact@example.com",
                    icon: <Mail className="w-5 h-5" />,
                  },
                  {
                    label: "GitHub",
                    value: "github.com/yourusername",
                    href: "https://github.com/yourusername",
                    icon: <Github className="w-5 h-5" />,
                  },
                  {
                    label: "LinkedIn",
                    value: "linkedin.com/in/yourprofile",
                    href: "https://linkedin.com/in/yourprofile",
                    icon: <Linkedin className="w-5 h-5" />,
                  },
                  {
                    label: "Twitter",
                    value: "@yourusername",
                    href: "https://twitter.com/yourusername",
                    icon: <Twitter className="w-5 h-5" />,
                  },
                ].map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={contact.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-4 hover:opacity-70 transition-opacity"
                  >
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">
                        {contact.label}
                      </div>
                      <div className="text-gray-900">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6 pb-3 border-b border-gray-200">
                対応可能な業務
              </h2>
              <ul className="space-y-3">
                {[
                  "Webアプリケーション開発",
                  "フロントエンド開発",
                  "バックエンド開発",
                  "技術コンサルティング",
                  "コードレビュー",
                  "技術記事執筆",
                ].map((service) => (
                  <li key={service} className="text-gray-700 pl-4 border-l-2 border-gray-900">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-6">
              お仕事のご依頼やご相談など、お気軽にご連絡ください。
            </p>
            <a
              href="mailto:contact@example.com"
              className="inline-block px-8 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
            >
              メールで問い合わせる
            </a>
          </div>
        </div>
      </div>
    )
  }

  if (previewType === "readme") {
    return <ExtensionGallery theme="professional" />
  }

  if (previewType === "skills") {
    const getRankStyle = (rank: string) => {
      switch (rank) {
        case "S":
          return "bg-amber-100 text-amber-700 border-amber-300"
        case "A":
          return "bg-rose-100 text-rose-700 border-rose-300"
        case "B":
          return "bg-violet-100 text-violet-700 border-violet-300"
        case "C":
          return "bg-blue-100 text-blue-700 border-blue-300"
        default:
          return "bg-gray-100 text-gray-700 border-gray-300"
      }
    }

    return (
      <div className="min-h-full bg-white">
        <div className="max-w-5xl mx-auto px-8 py-24">
          <div className="mb-16 border-b border-gray-200 pb-8">
            <h1 className="text-5xl font-serif font-bold text-gray-900 mb-3">スキルと技術</h1>
            <p className="text-xl text-gray-600">専門知識と技術スタック</p>
          </div>

          <div className="space-y-16">
            {[
              {
                category: "フロントエンド開発",
                skills: [
                  { name: "React / Next.js", years: 5, rank: "S" },
                  { name: "TypeScript", years: 4, rank: "A" },
                  { name: "Tailwind CSS", years: 3, rank: "S" },
                ],
              },
              {
                category: "バックエンド開発",
                skills: [
                  { name: "Node.js / Express", years: 4, rank: "A" },
                  { name: "Python / FastAPI", years: 3, rank: "B" },
                  { name: "PostgreSQL", years: 3, rank: "A" },
                ],
              },
              {
                category: "AI / 機械学習",
                skills: [
                  { name: "OpenAI API / GPT", years: 2, rank: "A" },
                  { name: "LangChain", years: 1, rank: "B" },
                  { name: "RAG / Embedding", years: 1, rank: "B" },
                ],
              },
              {
                category: "インフラストラクチャ",
                skills: [
                  { name: "AWS (EC2, Lambda, S3)", years: 3, rank: "A" },
                  { name: "Docker / Kubernetes", years: 3, rank: "A" },
                  { name: "Terraform / IaC", years: 2, rank: "B" },
                ],
              },
            ].map((section) => (
              <div key={section.category}>
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6 pb-3 border-b border-gray-200">
                  {section.category}
                </h2>
                <div className="space-y-4">
                  {section.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between py-3 border-b border-gray-100"
                    >
                      <span className="text-gray-900 font-medium">{skill.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-500 text-sm">{skill.years}年</span>
                        <span
                          className={`px-3 py-1 text-sm font-bold border rounded ${getRankStyle(skill.rank)}`}
                        >
                          {skill.rank}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-16 border-t border-gray-200">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">
              その他のスキル
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Agile開発",
                "テスト駆動開発",
                "レスポンシブデザイン",
                "アクセシビリティ",
                "パフォーマンス最適化",
                "SEO",
                "チームリーダーシップ",
                "コードレビュー",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 border border-gray-300 text-gray-700 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}
