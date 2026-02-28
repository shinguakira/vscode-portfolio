"use client"

export function ProfessionalStrongPoints() {
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
                      <li key={i} className="text-sm text-gray-600 pl-3 border-l border-gray-300">
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
                <div className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
