"use client"

import {
  ChevronRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Star,
  Twitter,
  X,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import { type CareerProject, CareerTimeline } from "@/components/career-timeline"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { extensions } from "@/constants/portfolio-data"
import { IconFromKey } from "@/lib/icon-map"
import type { Extension, PreviewTheme } from "@/types"

const careerProjects: CareerProject[] = [
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

interface PreviewPanelProps {
  fileName: string
  content: string
  theme?: PreviewTheme
}

export function PreviewPanel({ fileName, content, theme = "modern" }: PreviewPanelProps) {
  // ファイル名から種類を判定
  const getPreviewType = (name: string) => {
    if (!name) return "default"
    if (name.includes("strong-points")) return "strong-points"
    if (name.includes("faq")) return "faq"
    if (name.includes("profile") || name.includes("about")) return "profile"
    if (name.includes("experience")) return "experience"
    if (name.includes("README")) return "readme"
    if (name.includes("featured") || name.includes("projects")) return "projects"
    if (name.includes("skills")) return "skills"
    if (name.includes("contact")) return "contact"
    return "default"
  }

  const previewType = getPreviewType(fileName)

  if (theme === "innovative") {
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
              <p className="text-2xl text-gray-400 font-light">
                Let&apos;s Build Something Amazing
              </p>
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
  }

  if (theme === "professional") {
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
                          <li
                            key={i}
                            className="text-sm text-gray-600 pl-3 border-l border-gray-300"
                          >
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
                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                      {stat.label}
                    </div>
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
                    <div className="text-sm text-gray-600 uppercase tracking-wide">
                      {stat.label}
                    </div>
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

    if (previewType === "contact") {
      return (
        <div className="min-h-full bg-white">
          <div className="max-w-4xl mx-auto px-8 py-24">
            <div className="mb-16 border-b border-gray-200 pb-8">
              <h1 className="text-5xl font-serif font-bold text-gray-900 mb-3">お問い合わせ</h1>
              <p className="text-xl text-gray-600">お気軽にご連絡ください</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">
                  連絡先
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      label: "メール",
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
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      className="flex items-start gap-4 pb-4 border-b border-gray-100 hover:opacity-70 transition-opacity"
                    >
                      <div className="text-gray-900 mt-1">{item.icon}</div>
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-1">{item.label}</div>
                        <div className="text-gray-900">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">
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
                    <li key={service} className="pl-4 border-l-2 border-gray-900 text-gray-700">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12 text-center">
              <p className="text-gray-600 mb-6">レスポンス時間: 通常24時間以内</p>
              <a
                href="mailto:contact@example.com"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
              >
                メールを送る
              </a>
            </div>
          </div>
        </div>
      )
    }
  }

  if (theme === "modern") {
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
  }

  // デフォルトプレビュー
  return (
    <div className="min-h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8">
      <Card className="max-w-4xl mx-auto p-8 bg-slate-900/50 border-slate-800 backdrop-blur">
        <pre className="text-slate-300 leading-relaxed whitespace-pre-wrap font-mono text-sm">
          {content}
        </pre>
      </Card>
    </div>
  )
}

// Extension Gallery Component with Modal
function ExtensionGallery({ theme }: { theme: PreviewTheme }) {
  const [selectedExtension, setSelectedExtension] = useState<Extension | null>(null)

  const colorMap: Record<string, string> = {
    "nextjs-ecommerce": "from-emerald-500 to-teal-500",
    "realtime-chat": "from-blue-500 to-cyan-500",
    "project-management": "from-violet-500 to-purple-500",
    "design-system": "from-pink-500 to-rose-500",
    "ai-content-generator": "from-orange-500 to-amber-500",
    "image-optimizer": "from-indigo-500 to-blue-500",
  }

  if (theme === "professional") {
    return (
      <div className="min-h-full bg-white">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <div className="mb-16 border-b border-gray-200 pb-8">
            <h1 className="text-5xl font-serif font-bold text-gray-900 mb-3">プロジェクト一覧</h1>
            <p className="text-xl text-gray-600">クリックして詳細を表示</p>
          </div>

          <div className="space-y-6">
            {extensions.map((ext) => (
              <div
                key={ext.id}
                onClick={() => setSelectedExtension(ext)}
                className="border border-gray-200 p-6 hover:border-gray-400 transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div>
                    <IconFromKey iconKey={ext.icon} className="w-8 h-8 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{ext.displayName}</h3>
                      <span className="text-sm text-gray-500">v{ext.version}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{ext.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        {ext.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        {(ext.downloads / 1000).toFixed(1)}K
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Modal - Extension Showcase Style */}
        {selectedExtension && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedExtension(null)}
          >
            <div
              className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-gray-200">
                <button
                  onClick={() => setSelectedExtension(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 border border-gray-200">
                    <IconFromKey
                      iconKey={selectedExtension.icon}
                      className="w-10 h-10 md:w-12 md:h-12 text-gray-600"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-2">
                      {selectedExtension.displayName}
                    </h2>
                    <div className="flex flex-wrap items-center gap-3 mb-3 text-sm text-gray-500">
                      <span>{selectedExtension.publisher}</span>
                      <span>v{selectedExtension.version}</span>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base mb-4">
                      {selectedExtension.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-sm">
                        <Star className="w-4 h-4 text-amber-500" fill="#f59e0b" />
                        <span className="text-gray-900 font-medium">
                          {selectedExtension.rating}
                        </span>
                        <span className="text-gray-500">/5.0</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-sm">
                        <Download className="w-4 h-4 text-gray-600" />
                        <span className="text-gray-900 font-medium">
                          {selectedExtension.downloads.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Main Content */}
                <div className="lg:col-span-2 p-6 md:p-8 space-y-6 border-b lg:border-b-0 lg:border-r border-gray-200">
                  {/* Screenshots */}
                  {selectedExtension.screenshots && selectedExtension.screenshots.length > 0 && (
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Screenshots</h3>
                      <div className="aspect-video rounded-lg overflow-hidden border border-gray-200 relative">
                        <Image
                          src={selectedExtension.screenshots[0] || "/placeholder.svg"}
                          alt={selectedExtension.displayName}
                          className="w-full h-full object-cover"
                          fill
                        />
                      </div>
                      {selectedExtension.screenshots.length > 1 && (
                        <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
                          {selectedExtension.screenshots.map((screenshot, index) => (
                            <div
                              key={index}
                              className="shrink-0 w-24 h-14 rounded-md overflow-hidden border border-gray-200 opacity-70 hover:opacity-100 transition cursor-pointer relative"
                            >
                              <Image
                                src={screenshot || "/placeholder.svg"}
                                alt={`Screenshot ${index + 1}`}
                                className="w-full h-full object-cover"
                                fill
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Features</h3>
                    <div className="grid gap-2">
                      {selectedExtension.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-3 rounded-lg bg-gray-50"
                        >
                          <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-gray-900">
                            <ChevronRight className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="p-6 md:p-8 space-y-6">
                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedExtension.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-xs border border-gray-300 text-gray-600 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Categories */}
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider">
                      Categories
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedExtension.categories.map((category) => (
                        <span
                          key={category}
                          className="px-3 py-1.5 text-xs rounded bg-gray-100 text-gray-600"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div>
                    <h3 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider">
                      Links
                    </h3>
                    <div className="space-y-2">
                      {selectedExtension.repository && (
                        <a
                          href={selectedExtension.repository}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 p-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
                        >
                          <Github className="w-4 h-4" />
                          <span className="text-sm">Repository</span>
                          <ExternalLink className="w-3 h-3 ml-auto text-gray-400" />
                        </a>
                      )}
                      {selectedExtension.homepage && (
                        <a
                          href={selectedExtension.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 p-3 rounded-lg text-white transition bg-gray-900 hover:bg-gray-800"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm font-medium">Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  if (theme === "innovative") {
    return (
      <div className="min-h-full bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-green-400 to-emerald-400">
              PROJECTS
            </h1>
            <p className="text-2xl text-gray-400 font-light">クリックして詳細を表示</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {extensions.map((ext) => (
              <div
                key={ext.id}
                onClick={() => setSelectedExtension(ext)}
                className="group relative cursor-pointer"
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${colorMap[ext.id] || "from-teal-500 to-green-500"} rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-500`}
                />
                <div className="relative bg-black border border-gray-800 rounded-3xl p-6 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorMap[ext.id] || "from-teal-500 to-green-500"} flex items-center justify-center`}
                    >
                      <IconFromKey iconKey={ext.icon} className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white">{ext.displayName}</h3>
                      <span className="text-xs text-gray-500">v{ext.version}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{ext.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">
                      {(ext.downloads / 1000).toFixed(1)}K downloads
                    </span>
                    <span className="flex items-center gap-1 text-amber-400">
                      {"★".repeat(Math.floor(ext.rating))}
                      <span className="text-gray-500 ml-1">{ext.rating}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Innovative Modal - Extension Showcase Style */}
        {selectedExtension && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedExtension(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${colorMap[selectedExtension.id] || "from-teal-500 to-green-500"} rounded-3xl blur opacity-30`}
              />
              <div className="relative bg-black border border-gray-800 rounded-3xl overflow-hidden">
                {/* Header */}
                <div className="p-6 md:p-8 border-b border-gray-800">
                  <button
                    onClick={() => setSelectedExtension(null)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div
                      className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${colorMap[selectedExtension.id] || "from-teal-500 to-green-500"} flex items-center justify-center shrink-0`}
                    >
                      <IconFromKey
                        iconKey={selectedExtension.icon}
                        className="w-10 h-10 md:w-12 md:h-12 text-white"
                      />
                    </div>
                    <div className="flex-1">
                      <h2
                        className={`text-2xl md:text-3xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r ${colorMap[selectedExtension.id] || "from-teal-500 to-green-500"}`}
                      >
                        {selectedExtension.displayName}
                      </h2>
                      <div className="flex flex-wrap items-center gap-3 mb-3 text-sm text-gray-500">
                        <span>{selectedExtension.publisher}</span>
                        <span>v{selectedExtension.version}</span>
                      </div>
                      <p className="text-gray-400 text-sm md:text-base mb-4">
                        {selectedExtension.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900 text-sm">
                          <Star className="w-4 h-4 text-amber-400" fill="#fbbf24" />
                          <span className="text-white font-medium">{selectedExtension.rating}</span>
                          <span className="text-gray-500">/5.0</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900 text-sm">
                          <Download className="w-4 h-4 text-teal-400" />
                          <span className="text-white font-medium">
                            {selectedExtension.downloads.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Main Content */}
                  <div className="lg:col-span-2 p-6 md:p-8 space-y-6 border-b lg:border-b-0 lg:border-r border-gray-800">
                    {/* Screenshots */}
                    {selectedExtension.screenshots && selectedExtension.screenshots.length > 0 && (
                      <div>
                        <h3
                          className={`text-lg font-bold mb-4 flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r ${colorMap[selectedExtension.id] || "from-teal-500 to-green-500"}`}
                        >
                          <span className="text-teal-400">|</span> Screenshots
                        </h3>
                        <div className="aspect-video rounded-xl overflow-hidden border border-gray-800 relative">
                          <Image
                            src={selectedExtension.screenshots[0] || "/placeholder.svg"}
                            alt={selectedExtension.displayName}
                            className="w-full h-full object-cover"
                            fill
                          />
                        </div>
                        {selectedExtension.screenshots.length > 1 && (
                          <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
                            {selectedExtension.screenshots.map((screenshot, index) => (
                              <div
                                key={index}
                                className="shrink-0 w-24 h-14 rounded-lg overflow-hidden border border-gray-700 opacity-70 hover:opacity-100 transition cursor-pointer relative"
                              >
                                <Image
                                  src={screenshot || "/placeholder.svg"}
                                  alt={`Screenshot ${index + 1}`}
                                  className="w-full h-full object-cover"
                                  fill
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Features */}
                    <div>
                      <h3
                        className={`text-lg font-bold mb-4 flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r ${colorMap[selectedExtension.id] || "from-teal-500 to-green-500"}`}
                      >
                        <span className="text-teal-400">|</span> Features
                      </h3>
                      <div className="grid gap-2">
                        {selectedExtension.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/50"
                          >
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-gradient-to-br ${colorMap[selectedExtension.id] || "from-teal-500 to-green-500"}`}
                            >
                              <ChevronRight className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="p-6 md:p-8 space-y-6">
                    {/* Tech Stack */}
                    <div>
                      <h3 className="text-sm font-bold text-gray-400 mb-3">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedExtension.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-3 py-1.5 text-xs rounded-full border border-teal-500/40 text-teal-400 bg-teal-500/10`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Categories */}
                    <div>
                      <h3 className="text-sm font-bold text-gray-400 mb-3">Categories</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedExtension.categories.map((category) => (
                          <span
                            key={category}
                            className="px-3 py-1.5 text-xs rounded-lg bg-gray-900 text-gray-400"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div>
                      <h3 className="text-sm font-bold text-gray-400 mb-3">Links</h3>
                      <div className="space-y-2">
                        {selectedExtension.repository && (
                          <a
                            href={selectedExtension.repository}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 p-3 rounded-lg bg-gray-900 text-gray-300 hover:bg-gray-800 transition"
                          >
                            <Github className="w-4 h-4" />
                            <span className="text-sm">Repository</span>
                            <ExternalLink className="w-3 h-3 ml-auto text-gray-500" />
                          </a>
                        )}
                        {selectedExtension.homepage && (
                          <a
                            href={selectedExtension.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 p-3 rounded-lg text-white transition bg-gradient-to-r ${colorMap[selectedExtension.id] || "from-teal-500 to-green-500"}`}
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span className="text-sm font-medium">Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  // Modern theme (default)
  return (
    <div className="min-h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto px-8 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-xl text-slate-400">クリックして詳細を表示</p>
        </div>

        <div className="space-y-6">
          {extensions.map((ext) => (
            <Card
              key={ext.id}
              onClick={() => setSelectedExtension(ext)}
              className="p-6 bg-slate-900/50 border-slate-800 backdrop-blur hover:border-slate-600 transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-5">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorMap[ext.id] || "from-teal-500 to-emerald-500"} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                >
                  <IconFromKey iconKey={ext.icon} className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white truncate">{ext.displayName}</h3>
                    <span className="text-sm text-slate-500 shrink-0">v{ext.version}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{ext.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {ext.tags.slice(0, 4).map((tag) => (
                      <Badge
                        key={tag}
                        className="px-2 py-1 bg-slate-800 text-slate-300 border-slate-700 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <span className="text-slate-500">
                      <span className="text-slate-300 font-medium">
                        {(ext.downloads / 1000).toFixed(1)}K
                      </span>{" "}
                      downloads
                    </span>
                    <span className="flex items-center gap-1 text-amber-400">
                      {"★".repeat(Math.floor(ext.rating))}
                      <span className="text-slate-500 ml-1">{ext.rating}</span>
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Modern Modal - Extension Showcase Style */}
      {selectedExtension && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedExtension(null)}
        >
          <Card
            className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-slate-800">
              <button
                onClick={() => setSelectedExtension(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex flex-col md:flex-row gap-6">
                <div
                  className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${colorMap[selectedExtension.id] || "from-teal-500 to-emerald-500"} flex items-center justify-center shrink-0`}
                >
                  <IconFromKey
                    iconKey={selectedExtension.icon}
                    className="w-10 h-10 md:w-12 md:h-12 text-white"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {selectedExtension.displayName}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 mb-3 text-sm text-slate-500">
                    <span>{selectedExtension.publisher}</span>
                    <span>v{selectedExtension.version}</span>
                  </div>
                  <p className="text-slate-400 text-sm md:text-base mb-4">
                    {selectedExtension.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 text-sm">
                      <Star className="w-4 h-4 text-amber-400" fill="#fbbf24" />
                      <span className="text-white font-medium">{selectedExtension.rating}</span>
                      <span className="text-slate-500">/5.0</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 text-sm">
                      <Download className="w-4 h-4 text-teal-400" />
                      <span className="text-white font-medium">
                        {selectedExtension.downloads.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              {/* Main Content */}
              <div className="lg:col-span-2 p-6 md:p-8 space-y-6 border-b lg:border-b-0 lg:border-r border-slate-800">
                {/* Screenshots */}
                {selectedExtension.screenshots && selectedExtension.screenshots.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <span className="text-teal-400">|</span> Screenshots
                    </h3>
                    <div className="aspect-video rounded-xl overflow-hidden border border-slate-700 relative">
                      <Image
                        src={selectedExtension.screenshots[0] || "/placeholder.svg"}
                        alt={selectedExtension.displayName}
                        className="w-full h-full object-cover"
                        fill
                      />
                    </div>
                    {selectedExtension.screenshots.length > 1 && (
                      <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
                        {selectedExtension.screenshots.map((screenshot, index) => (
                          <div
                            key={index}
                            className="shrink-0 w-24 h-14 rounded-lg overflow-hidden border border-slate-700 opacity-70 hover:opacity-100 transition cursor-pointer relative"
                          >
                            <Image
                              src={screenshot || "/placeholder.svg"}
                              alt={`Screenshot ${index + 1}`}
                              className="w-full h-full object-cover"
                              fill
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Features */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span className="text-teal-400">|</span> Features
                  </h3>
                  <div className="grid gap-2">
                    {selectedExtension.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/50"
                      >
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-gradient-to-br ${colorMap[selectedExtension.id] || "from-teal-500 to-emerald-500"}`}
                        >
                          <ChevronRight className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="p-6 md:p-8 space-y-6">
                {/* Tech Stack */}
                <div>
                  <h3 className="text-sm font-bold text-slate-400 mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedExtension.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="px-3 py-1.5 bg-teal-500/10 text-teal-400 border-teal-500/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h3 className="text-sm font-bold text-slate-400 mb-3">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedExtension.categories.map((category) => (
                      <span
                        key={category}
                        className="px-3 py-1.5 text-xs rounded-lg bg-slate-800 text-slate-400"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div>
                  <h3 className="text-sm font-bold text-slate-400 mb-3">Links</h3>
                  <div className="space-y-2">
                    {selectedExtension.repository && (
                      <a
                        href={selectedExtension.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm">Repository</span>
                        <ExternalLink className="w-3 h-3 ml-auto text-slate-500" />
                      </a>
                    )}
                    {selectedExtension.homepage && (
                      <a
                        href={selectedExtension.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 rounded-lg text-white transition bg-teal-600 hover:bg-teal-700"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
