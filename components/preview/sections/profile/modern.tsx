"use client"

import { ChevronRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import {
  PROFILE_ACHIEVEMENTS,
  PROFILE_BACKEND_SKILLS,
  PROFILE_FRONTEND_SKILLS,
} from "@/constants/preview-data"

const BULLET_COLORS = ["bg-blue-500", "bg-purple-500", "bg-pink-500"]

export function ModernProfile() {
  return (
    <div className="min-h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto px-8 py-16">
        <div className="mb-20 text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-5xl font-bold text-white shadow-2xl">
                Dev
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-950" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            フルスタックエンジニア
          </h1>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            5年以上のWeb開発経験を持ち、モダンな技術スタックで高品質なプロダクトを創造します
          </p>
          <div className="flex justify-center gap-4">
            <Badge className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white border-0 text-sm">
              採用可能
            </Badge>
            <Badge className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white border-0 text-sm">
              リモートワーク
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-slate-900/50 border-slate-800 backdrop-blur">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="text-3xl">💻</span>
              フロントエンド
            </h3>
            <div className="space-y-3">
              {PROFILE_FRONTEND_SKILLS.map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300 text-lg">{skill}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 bg-slate-900/50 border-slate-800 backdrop-blur">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="text-3xl">⚙️</span>
              バックエンド
            </h3>
            <div className="space-y-3">
              {PROFILE_BACKEND_SKILLS.map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-purple-400" />
                  <span className="text-slate-300 text-lg">{skill}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-slate-900/50 border-slate-800 backdrop-blur">
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
            <span className="text-3xl">🚀</span>
            実績
          </h3>
          <div className="space-y-4 text-slate-300">
            {PROFILE_ACHIEVEMENTS.map((achievement, i) => (
              <div key={achievement} className="flex items-start gap-3">
                <div className={`w-2 h-2 ${BULLET_COLORS[i]} rounded-full mt-2`} />
                <p className="text-lg">{achievement}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
