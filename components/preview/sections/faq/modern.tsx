"use client"

import { getFaqItems } from "@/constants/preview-data"
import { useLocale } from "@/contexts/locale-context"

const COLORS = ["orange", "amber", "yellow", "orange", "amber", "yellow"]

export function ModernFaq() {
  const locale = useLocale()
  const FAQ_ITEMS = getFaqItems(locale)

  return (
    <div className="min-h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
            {locale === "en" ? "Frequently Asked Questions" : "よくある質問"}
          </h1>
          <p className="text-xl text-slate-400">
            {locale === "en" ? "" : "Frequently Asked Questions"}
          </p>
        </div>

        <div className="space-y-6">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="rounded-xl shadow-sm p-6 bg-slate-900/50 border-slate-800 backdrop-blur hover:border-slate-700 transition-all"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-xl bg-${COLORS[i]}-600/20 flex items-center justify-center shrink-0`}
                >
                  <span className={`text-${COLORS[i]}-400 font-bold`}>Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.q}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl shadow-sm mt-12 p-8 bg-slate-900/50 border-slate-800 backdrop-blur text-center">
          <h3 className="text-xl font-bold text-white mb-3">
            {locale === "en" ? "If you have any other questions" : "その他ご質問がありましたら"}
          </h3>
          <p className="text-slate-400 mb-6">
            {locale === "en"
              ? "Feel free to contact us. We usually respond within 24 hours."
              : "お気軽にお問い合わせください。通常24時間以内にご返信いたします。"}
          </p>
          <span className="inline-flex items-center rounded-md text-xs font-medium px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-0">
            {locale === "en" ? "Contact us here" : "お問い合わせはこちら"}
          </span>
        </div>
      </div>
    </div>
  )
}
