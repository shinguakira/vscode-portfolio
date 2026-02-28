"use client"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function ProfessionalContact() {
  return (
    <div className="min-h-full bg-white">
      <div className="max-w-4xl mx-auto px-8 py-24">
        <div className="mb-16 border-b border-gray-200 pb-8">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-3">お問い合わせ</h1>
          <p className="text-xl text-gray-600">Get in Touch</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6 pb-3 border-b border-gray-200">
              連絡先
            </h2>
            <div className="space-y-6">
              {[
                {
                  label: "Email",
                  value: "contact@example.com",
                  href: "mailto:contact@example.com",
                  icon: <Mail className="w-5 h-5" />,
                },
                {
                  label: "GitHub",
                  value: "github.com/yourusername",
                  href: "https://github.com/yourusername",
                  icon: <Github className="w-5 h-5" />,
                },
                {
                  label: "LinkedIn",
                  value: "linkedin.com/in/yourprofile",
                  href: "https://linkedin.com/in/yourprofile",
                  icon: <Linkedin className="w-5 h-5" />,
                },
                {
                  label: "Twitter",
                  value: "@yourusername",
                  href: "https://twitter.com/yourusername",
                  icon: <Twitter className="w-5 h-5" />,
                },
              ].map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={contact.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-4 hover:opacity-70 transition-opacity"
                >
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                      {contact.label}
                    </div>
                    <div className="text-gray-900">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6 pb-3 border-b border-gray-200">
              対応可能な業務
            </h2>
            <ul className="space-y-3">
              {[
                "Webアプリケーション開発",
                "フロントエンド開発",
                "バックエンド開発",
                "技術コンサルティング",
                "コードレビュー",
                "技術記事執筆",
              ].map((service) => (
                <li key={service} className="text-gray-700 pl-4 border-l-2 border-gray-900">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-gray-200 text-center">
          <p className="text-gray-600 mb-6">お仕事のご依頼やご相談など、お気軽にご連絡ください。</p>
          <a
            href="mailto:contact@example.com"
            className="inline-block px-8 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            メールで問い合わせる
          </a>
        </div>
      </div>
    </div>
  )
}
