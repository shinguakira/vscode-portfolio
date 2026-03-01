"use client"

import { OTHER_SKILLS_PROFESSIONAL, SKILL_CATEGORIES } from "@/constants/preview-data"

const CATEGORY_LABELS: Record<string, string> = {
  フロントエンド: "フロントエンド開発",
  バックエンド: "バックエンド開発",
  "AI / ML": "AI / 機械学習",
  インフラ: "インフラストラクチャ",
}

const PROFESSIONAL_SKILL_NAMES: Record<string, Record<string, string>> = {
  フロントエンド: { React: "React / Next.js", TypeScript: "TypeScript", "Next.js": "" },
  バックエンド: {
    "Node.js": "Node.js / Express",
    Python: "Python / FastAPI",
    PostgreSQL: "PostgreSQL",
  },
  "AI / ML": { "OpenAI API": "OpenAI API / GPT", LangChain: "LangChain", RAG: "RAG / Embedding" },
  インフラ: {
    AWS: "AWS (EC2, Lambda, S3)",
    Docker: "Docker / Kubernetes",
    Terraform: "Terraform / IaC",
  },
}

function getRankStyle(rank: string) {
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

export function ProfessionalSkills() {
  const sections = SKILL_CATEGORIES.map((cat) => {
    const label = CATEGORY_LABELS[cat.category] ?? cat.category
    const nameMap = PROFESSIONAL_SKILL_NAMES[cat.category] ?? {}
    const skills = cat.skills
      .map((s) => {
        const displayName = nameMap[s.name]
        if (displayName === "") return null
        return { name: displayName ?? s.name, years: s.years, rank: s.rank }
      })
      .filter(Boolean) as { name: string; years: number; rank: string }[]

    if (cat.category === "フロントエンド") {
      skills.push({ name: "Tailwind CSS", years: 3, rank: "S" })
    }

    return { category: label, skills }
  })

  return (
    <div className="min-h-full bg-white">
      <div className="max-w-5xl mx-auto px-8 py-24">
        <div className="mb-16 border-b border-gray-200 pb-8">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-3">スキルと技術</h1>
          <p className="text-xl text-gray-600">専門知識と技術スタック</p>
        </div>

        <div className="space-y-16">
          {sections.map((section) => (
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
            {OTHER_SKILLS_PROFESSIONAL.map((skill) => (
              <span key={skill} className="px-4 py-2 border border-gray-300 text-gray-700 text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
