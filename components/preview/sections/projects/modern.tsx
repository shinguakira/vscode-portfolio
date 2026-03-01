"use client"

import { ExternalLink, Github } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { PROJECTS } from "@/constants/preview-data"

export function ModernProjects() {
  return (
    <div className="min-h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            プロジェクト
          </h1>
          <p className="text-xl text-slate-400">これまでに開発した主要なプロジェクト</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <Card
              key={i}
              className="group bg-slate-900/50 border-slate-800 backdrop-blur hover:border-slate-700 transition-all duration-300 overflow-hidden"
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl`}
              >
                {project.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techs.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-slate-800 text-slate-300 border-0 hover:bg-slate-700"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    デモ
                  </button>
                  <button className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
                    <Github className="w-4 h-4" />
                    コード
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
