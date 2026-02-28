"use client"

export function InnovativeStrongPoints() {
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
            <div key={i} className="text-center p-6 border border-gray-800 rounded-2xl bg-black/50">
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
