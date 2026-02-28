"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export function ModernSkills() {
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

  const renderSkillCard = (title: string, icon: string, skillList: typeof skills.frontend) => (
    <Card className="p-6 bg-slate-900/50 border-slate-800 backdrop-blur">
      <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        {title}
      </h3>
      <div className="space-y-3">
        {skillList.map((skill) => (
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
  )

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
          {renderSkillCard("フロントエンド", "💻", skills.frontend)}
          {renderSkillCard("バックエンド", "⚙️", skills.backend)}
          {renderSkillCard("AI / ML", "🤖", skills.ai)}
          {renderSkillCard("インフラ", "☁️", skills.infra)}
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
