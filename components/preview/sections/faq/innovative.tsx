"use client"

import { FAQ_ITEMS } from "@/constants/preview-data"

export function InnovativeFaq() {
  return (
    <div className="min-h-full bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-400">
            FAQ
          </h1>
          <p className="text-2xl text-gray-400 font-light">Frequently Asked Questions</p>
        </div>

        <div className="space-y-6">
          {FAQ_ITEMS.slice(0, 5).map((item, i) => (
            <div key={i} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500" />
              <div className="relative bg-black border border-gray-800 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 shrink-0">
                    Q
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-4">{item.q}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition" />
            <button className="relative px-10 py-5 bg-black rounded-2xl text-white font-bold text-xl">
              お気軽にお問い合わせください
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
