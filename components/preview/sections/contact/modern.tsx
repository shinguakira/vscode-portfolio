"use client"

import { ChevronRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export function ModernContact() {
  return (
    <div className="min-h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            お問い合わせ
          </h1>
          <p className="text-xl text-slate-400">お気軽にご連絡ください</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            {
              icon: <Mail className="w-6 h-6" />,
              label: "メール",
              value: "contact@example.com",
              href: "mailto:contact@example.com",
              color: "blue",
            },
            {
              icon: <Github className="w-6 h-6" />,
              label: "GitHub",
              value: "github.com/yourusername",
              href: "https://github.com/yourusername",
              color: "purple",
            },
            {
              icon: <Linkedin className="w-6 h-6" />,
              label: "LinkedIn",
              value: "linkedin.com/in/yourprofile",
              href: "https://linkedin.com/in/yourprofile",
              color: "blue",
            },
            {
              icon: <Twitter className="w-6 h-6" />,
              label: "Twitter",
              value: "@yourusername",
              href: "https://twitter.com/yourusername",
              color: "cyan",
            },
          ].map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={contact.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            >
              <Card className="p-6 bg-slate-900/50 border-slate-800 backdrop-blur hover:border-slate-700 transition-all group h-full">
                <div
                  className={`w-12 h-12 rounded-lg bg-${contact.color}-600/20 flex items-center justify-center mb-4 text-${contact.color}-400 group-hover:scale-110 transition-transform`}
                >
                  {contact.icon}
                </div>
                <h3 className="text-white font-semibold mb-1">{contact.label}</h3>
                <p className="text-slate-400 text-sm">{contact.value}</p>
              </Card>
            </a>
          ))}
        </div>

        <Card className="p-8 bg-slate-900/50 border-slate-800 backdrop-blur">
          <h3 className="text-2xl font-bold mb-6 text-white">対応可能な業務</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Webアプリケーション開発",
              "フロントエンド開発",
              "バックエンド開発",
              "技術コンサルティング",
              "コードレビュー",
              "技術記事執筆",
            ].map((service) => (
              <div key={service} className="flex items-center gap-3">
                <ChevronRight className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">{service}</span>
              </div>
            ))}
          </div>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">レスポンス時間: 通常24時間以内</p>
          <Badge className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white border-0 text-sm">
            現在新規案件受付中
          </Badge>
        </div>
      </div>
    </div>
  )
}
