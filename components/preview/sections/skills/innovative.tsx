"use client"

export function InnovativeSkills() {
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
        { name: "Next.js", years: 4, rank: "S", color: "from-blue-500 to-purple-500", icon: "▲" },
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
        { name: "Python", years: 3, rank: "B", color: "from-emerald-500 to-teal-500", icon: "🐍" },
        { name: "PostgreSQL", years: 3, rank: "A", color: "from-teal-500 to-cyan-500", icon: "🗄️" },
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
        { name: "LangChain", years: 1, rank: "B", color: "from-pink-500 to-rose-500", icon: "🔗" },
        { name: "RAG", years: 1, rank: "B", color: "from-rose-500 to-red-500", icon: "📚" },
      ],
    },
    {
      title: "Infrastructure",
      gradient: "from-orange-400 to-amber-500",
      skills: [
        { name: "AWS", years: 3, rank: "A", color: "from-orange-500 to-amber-500", icon: "☁️" },
        { name: "Docker", years: 3, rank: "A", color: "from-amber-500 to-yellow-500", icon: "🐳" },
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
