"use client"

import { ChevronRight } from "lucide-react"

import { Card } from "@/components/ui/card"

export function ModernStrongPoints() {
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
                items: ["非エンジニアへの説明が得意", "ドキュメント作成重視", "チーム間の橋渡し役"],
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
