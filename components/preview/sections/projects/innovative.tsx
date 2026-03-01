"use client"

import { PROJECTS_INNOVATIVE } from "@/constants/preview-data"

export function InnovativeProjects() {
  return (
    <div className="min-h-full bg-black">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <h1 className="text-7xl font-black mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
          革新的プロジェクト
        </h1>

        <div className="space-y-32">
          {PROJECTS_INNOVATIVE.map((project, i) => (
            <div key={i} className="group relative">
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition duration-700`}
              />
              <div className="relative bg-black border border-gray-800 rounded-3xl overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div
                    className={`flex items-center justify-center text-[120px] bg-gradient-to-br ${project.gradient} p-20`}
                  >
                    {project.icon}
                  </div>
                  <div className="p-12 flex flex-col justify-center">
                    <h3
                      className={`text-4xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-xl text-gray-400 mb-8 leading-relaxed">{project.desc}</p>
                    <div className="flex gap-4">
                      <button
                        className={`px-6 py-3 rounded-xl font-bold bg-gradient-to-r ${project.gradient} text-white`}
                      >
                        詳細を見る
                      </button>
                      <button className="px-6 py-3 rounded-xl font-bold border-2 border-gray-700 text-white hover:border-gray-500 transition">
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
