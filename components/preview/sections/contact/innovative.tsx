"use client"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import type React from "react"

import { CONTACT_LINKS } from "@/constants/preview-data"

const ICONS: Record<string, React.ReactNode> = {
  Email: <Mail className="w-8 h-8" />,
  GitHub: <Github className="w-8 h-8" />,
  LinkedIn: <Linkedin className="w-8 h-8" />,
  Twitter: <Twitter className="w-8 h-8" />,
}

const GRADIENTS: Record<string, string> = {
  Email: "from-rose-500 to-pink-500",
  GitHub: "from-pink-500 to-purple-500",
  LinkedIn: "from-purple-500 to-indigo-500",
  Twitter: "from-indigo-500 to-blue-500",
}

export function InnovativeContact() {
  return (
    <div className="min-h-full bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400">
            CONTACT
          </h1>
          <p className="text-2xl text-gray-400 font-light">Let&apos;s Build Something Amazing</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {CONTACT_LINKS.map((item, i) => {
            const gradient = GRADIENTS[item.label] ?? "from-rose-500 to-pink-500"
            return (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="group relative block"
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500`}
                />
                <div className="relative bg-black border border-gray-800 rounded-2xl p-6 flex items-center gap-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center text-white`}
                  >
                    {ICONS[item.label]}
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm mb-1">{item.label}</div>
                    <div className="text-xl font-bold text-white">{item.value}</div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        <div className="text-center">
          <div className="inline-block group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition" />
            <button className="relative px-12 py-6 bg-black rounded-2xl text-white font-bold text-xl">
              お仕事のご相談はこちら
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
