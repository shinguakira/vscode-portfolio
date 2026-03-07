"use client"

import { getFaqCategories } from "@/constants/preview-data"
import { useLocale } from "@/contexts/locale-context"

export function ProfessionalFaq() {
  const locale = useLocale()
  const FAQ_CATEGORIES = getFaqCategories(locale)

  return (
    <div className="min-h-full bg-white">
      <div className="max-w-4xl mx-auto px-8 py-24">
        <div className="mb-16 border-b border-gray-200 pb-8">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-3">
            {locale === "en" ? "Frequently Asked Questions" : "よくある質問"}
          </h1>
          <p className="text-xl text-gray-600">
            {locale === "en" ? "" : "Frequently Asked Questions"}
          </p>
        </div>

        <div className="space-y-0">
          {FAQ_CATEGORIES.map((section) => (
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
            {locale === "en"
              ? "If you have any other questions, feel free to contact us."
              : "その他ご不明点がございましたら、お気軽にお問い合わせください。"}
          </p>
          <button className="px-8 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition">
            {locale === "en" ? "Contact us" : "お問い合わせ"}
          </button>
        </div>
      </div>
    </div>
  )
}
