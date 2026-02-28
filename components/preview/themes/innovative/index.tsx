"use client"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"

import { CareerTimeline } from "@/components/career-timeline"
import { careerProjects } from "@/constants/career-data"

import { ExtensionGallery } from "../../extension-gallery"

export function renderInnovativePreview(previewType: string, content: string) {
  if (previewType === "profile") {
    return (
      <div className="min-h-full bg-black relative overflow-hidden">
        {/* 背景アニメーション */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative max-w-6xl mx-auto px-8 py-20">
          {/* 未来的なヒーロー */}
          <div className="mb-32 text-center">
            <div className="mb-12 inline-block relative">
              <div className="w-40 h-40 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-3xl rotate-6 animate-pulse" />
                <div className="absolute inset-2 bg-black rounded-3xl flex items-center justify-center text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-purple-500">
                  Dev
                </div>
              </div>
            </div>
            <h1 className="text-8xl font-black mb-6 leading-none">
              <span className="inline-block animate-bounce delay-100 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                未来
              </span>
              <span className="inline-block text-white mx-4">を</span>
              <span className="inline-block animate-bounce delay-300 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                創る
              </span>
            </h1>
            <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light tracking-wide">
              革新的なテクノロジーで、次世代のデジタル体験をデザインします
            </p>
            <div className="flex justify-center gap-6">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition" />
                <button className="relative px-8 py-4 bg-black rounded-2xl text-white font-bold text-lg">
                  プロジェクトを見る
                </button>
              </div>
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition" />
                <button className="relative px-8 py-4 bg-black rounded-2xl text-white font-bold text-lg">
                  お問い合わせ
                </button>
              </div>
            </div>
          </div>

          {/* グリッドレイアウト */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "5年+", desc: "開発経験", color: "from-cyan-500 to-blue-500" },
              { title: "50+", desc: "プロジェクト", color: "from-purple-500 to-pink-500" },
              { title: "100%", desc: "満足度", color: "from-pink-500 to-red-500" },
            ].map((stat, i) => (
              <div key={i} className="group relative">
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500`}
                />
                <div className="relative bg-black border border-gray-800 rounded-2xl p-8 text-center">
                  <div
                    className={`text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}
                  >
                    {stat.title}
                  </div>
                  <div className="text-gray-400 text-lg">{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (previewType === "projects") {
    return (
      <div className="min-h-full bg-black">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <h1 className="text-7xl font-black mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            革新的プロジェクト
          </h1>

          <div className="space-y-32">
            {[
              {
                title: "AI パワードEコマース",
                desc: "機械学習を活用した次世代のショッピング体験",
                gradient: "from-cyan-500 via-blue-500 to-purple-500",
                icon: "🤖",
              },
              {
                title: "リアルタイム3Dコラボレーション",
                desc: "WebGLとWebSocketsによる革新的な共同作業空間",
                gradient: "from-purple-500 via-pink-500 to-red-500",
                icon: "🎨",
              },
              {
                title: "ブロックチェーンプラットフォーム",
                desc: "分散型アプリケーションの未来を構築",
                gradient: "from-pink-500 via-red-500 to-orange-500",
                icon: "⛓️",
              },
            ].map((project, i) => (
              <div key={i} className="group relative">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition duration-700`}
                />
                <div className="relative bg-black border border-gray-800 rounded-3xl overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div
                      className={`flex items-center justify-center text-[120px] bg-gradient-to-br ${project.gradient} p-20`}
                    >
                      {project.icon}
                    </div>
                    <div className="p-12 flex flex-col justify-center">
                      <h3
                        className={`text-4xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}
                      >
                        {project.title}
                      </h3>
                      <p className="text-xl text-gray-400 mb-8 leading-relaxed">{project.desc}</p>
                      <div className="flex gap-4">
                        <button
                          className={`px-6 py-3 rounded-xl font-bold bg-gradient-to-r ${project.gradient} text-white`}
                        >
                          詳細を見る
                        </button>
                        <button className="px-6 py-3 rounded-xl font-bold border-2 border-gray-700 text-white hover:border-gray-500 transition">
                          GitHub
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (previewType === "strong-points") {
    return (
      <div className="min-h-full bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-8 py-20">
          <div className="text-center mb-20">
            <h1 className="text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400">
              STRENGTHS
            </h1>
            <p className="text-2xl text-gray-400 font-light">What Makes Me Different</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              {
                title: "Full-Stack",
                desc: "フロントからインフラまで一貫対応",
                icon: "01",
                color: "from-emerald-500 to-cyan-500",
              },
              {
                title: "Modern Tech",
                desc: "最新技術への高い適応力",
                icon: "02",
                color: "from-cyan-500 to-blue-500",
              },
              {
                title: "Performance",
                desc: "Core Web Vitalsを意識した最適化",
                icon: "03",
                color: "from-blue-500 to-purple-500",
              },
              {
                title: "Leadership",
                desc: "12名チームのリード経験",
                icon: "04",
                color: "from-purple-500 to-pink-500",
              },
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-500`}
                />
                <div className="relative bg-black border border-gray-800 rounded-3xl p-10">
                  <div
                    className={`text-8xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r ${item.color} opacity-30`}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className={`text-3xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xl text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "40%", label: "読み込み時間短縮" },
              { num: "150%", label: "ユーザー数成長" },
              { num: "30%", label: "生産性向上" },
              { num: "10万", label: "月間PV" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 border border-gray-800 rounded-2xl bg-black/50"
              >
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2">
                  {stat.num}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (previewType === "faq") {
    return (
      <div className="min-h-full bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-400">
              FAQ
            </h1>
            <p className="text-2xl text-gray-400 font-light">Frequently Asked Questions</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "リモートワークは可能ですか?",
                a: "完全リモート対応。Slack, Discord, Teams等で円滑にコミュニケーションします。",
              },
              { q: "稼働時間はどのくらい?", a: "週20〜40時間で柔軟に対応可能です。" },
              {
                q: "対応可能な技術スタックは?",
                a: "React, Next.js, TypeScript, Node.js, Python, Go, PostgreSQL, AWS等。",
              },
              {
                q: "新しい技術のキャッチアップは?",
                a: "積極的に学習し、プロジェクト前に事前準備いたします。",
              },
              {
                q: "設計から実装まで対応可能?",
                a: "要件定義からデプロイまで一貫して対応できます。",
              },
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500" />
                <div className="relative bg-black border border-gray-800 rounded-2xl p-8">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 shrink-0">
                      Q
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-4">{item.q}</h3>
                      <p className="text-gray-400 leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition" />
              <button className="relative px-10 py-5 bg-black rounded-2xl text-white font-bold text-xl">
                お気軽にお問い合わせください
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (previewType === "skills") {
    const getRankColor = (rank: string) => {
      switch (rank) {
        case "S":
          return "from-amber-400 to-yellow-500"
        case "A":
          return "from-rose-400 to-pink-500"
        case "B":
          return "from-violet-400 to-purple-500"
        case "C":
          return "from-blue-400 to-cyan-500"
        default:
          return "from-gray-400 to-gray-500"
      }
    }

    const skillCategories = [
      {
        title: "Frontend",
        gradient: "from-cyan-400 to-blue-500",
        skills: [
          { name: "React", years: 5, rank: "S", color: "from-cyan-500 to-blue-500", icon: "⚛️" },
          {
            name: "Next.js",
            years: 4,
            rank: "S",
            color: "from-blue-500 to-purple-500",
            icon: "▲",
          },
          {
            name: "TypeScript",
            years: 4,
            rank: "A",
            color: "from-purple-500 to-pink-500",
            icon: "TS",
          },
        ],
      },
      {
        title: "Backend",
        gradient: "from-green-400 to-emerald-500",
        skills: [
          {
            name: "Node.js",
            years: 4,
            rank: "A",
            color: "from-green-500 to-emerald-500",
            icon: "🟢",
          },
          {
            name: "Python",
            years: 3,
            rank: "B",
            color: "from-emerald-500 to-teal-500",
            icon: "🐍",
          },
          {
            name: "PostgreSQL",
            years: 3,
            rank: "A",
            color: "from-teal-500 to-cyan-500",
            icon: "🗄️",
          },
        ],
      },
      {
        title: "AI / ML",
        gradient: "from-purple-400 to-pink-500",
        skills: [
          {
            name: "OpenAI API",
            years: 2,
            rank: "A",
            color: "from-purple-500 to-pink-500",
            icon: "🤖",
          },
          {
            name: "LangChain",
            years: 1,
            rank: "B",
            color: "from-pink-500 to-rose-500",
            icon: "🔗",
          },
          { name: "RAG", years: 1, rank: "B", color: "from-rose-500 to-red-500", icon: "📚" },
        ],
      },
      {
        title: "Infrastructure",
        gradient: "from-orange-400 to-amber-500",
        skills: [
          { name: "AWS", years: 3, rank: "A", color: "from-orange-500 to-amber-500", icon: "☁️" },
          {
            name: "Docker",
            years: 3,
            rank: "A",
            color: "from-amber-500 to-yellow-500",
            icon: "🐳",
          },
          {
            name: "Terraform",
            years: 2,
            rank: "B",
            color: "from-yellow-500 to-lime-500",
            icon: "🏗️",
          },
        ],
      },
    ]

    return (
      <div className="min-h-full bg-black">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <h1 className="text-7xl font-black mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            テクノロジースタック
          </h1>

          <div className="space-y-16">
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h2
                  className={`text-3xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r ${category.gradient}`}
                >
                  {category.title}
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="group relative">
                      <div
                        className={`absolute -inset-0.5 bg-gradient-to-br ${skill.color} rounded-2xl blur opacity-40 group-hover:opacity-100 transition duration-500`}
                      />
                      <div className="relative bg-black border border-gray-800 rounded-2xl p-6 text-center h-full flex flex-col items-center justify-center">
                        <div className="text-5xl mb-4">{skill.icon}</div>
                        <div
                          className={`text-2xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r ${skill.color}`}
                        >
                          {skill.name}
                        </div>
                        <div className="flex items-center gap-3">
                          <span
                            className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${getRankColor(skill.rank)}`}
                          >
                            {skill.rank}
                          </span>
                          <span className="text-gray-500 text-lg">{skill.years}年</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (previewType === "experience") {
    return <CareerTimeline projects={careerProjects} variant="innovative" />
  }

  if (previewType === "contact") {
    return (
      <div className="min-h-full bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400">
              CONTACT
            </h1>
            <p className="text-2xl text-gray-400 font-light">Let&apos;s Build Something Amazing</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: <Mail className="w-8 h-8" />,
                label: "Email",
                value: "contact@example.com",
                href: "mailto:contact@example.com",
                color: "from-rose-500 to-pink-500",
              },
              {
                icon: <Github className="w-8 h-8" />,
                label: "GitHub",
                value: "@yourusername",
                href: "https://github.com/yourusername",
                color: "from-pink-500 to-purple-500",
              },
              {
                icon: <Linkedin className="w-8 h-8" />,
                label: "LinkedIn",
                value: "yourprofile",
                href: "https://linkedin.com/in/yourprofile",
                color: "from-purple-500 to-indigo-500",
              },
              {
                icon: <Twitter className="w-8 h-8" />,
                label: "Twitter/X",
                value: "@yourusername",
                href: "https://twitter.com/yourusername",
                color: "from-indigo-500 to-blue-500",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="group relative block"
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500`}
                />
                <div className="relative bg-black border border-gray-800 rounded-2xl p-6 flex items-center gap-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm mb-1">{item.label}</div>
                    <div className="text-xl font-bold text-white">{item.value}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition" />
              <button className="relative px-12 py-6 bg-black rounded-2xl text-white font-bold text-xl">
                お仕事のご相談はこちら
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (previewType === "readme") {
    return <ExtensionGallery theme="innovative" />
  }

  return null
}
