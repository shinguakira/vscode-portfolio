"use client"

import { ChevronRight } from "lucide-react"

import { Card } from "@/components/ui/card"
import { ACHIEVEMENT_STATS, SOFT_SKILLS, STRENGTHS } from "@/constants/preview-data"

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
          {STRENGTHS.map((item, i) => (
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
            {SOFT_SKILLS.map((section) => (
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
          {ACHIEVEMENT_STATS.map((stat) => (
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
