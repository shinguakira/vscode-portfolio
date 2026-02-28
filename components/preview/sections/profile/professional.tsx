"use client"

export function ProfessionalProfile() {
  return (
    <div className="min-h-full bg-white">
      <div className="max-w-4xl mx-auto px-8 py-24">
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
