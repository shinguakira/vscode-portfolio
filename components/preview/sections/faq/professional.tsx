"use client"

export function ProfessionalFaq() {
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
