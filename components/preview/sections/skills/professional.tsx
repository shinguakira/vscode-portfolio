"use client"

export function ProfessionalSkills() {
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
