import "./globals.css"

import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Geist_Mono } from "next/font/google"
import type React from "react"

const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "神宮 章 | Akira Shingu - フルスタックエンジニア ポートフォリオ",
  description:
    "神宮 章（しんぐう あきら / Akira Shingu）のポートフォリオサイト。React, Next.js, TypeScript, Python, AWSなどモダン技術スタックでのフルスタック開発。",
  authors: [{ name: "神宮 章" }],
  creator: "神宮 章",
  keywords: [
    "神宮 章",
    "Akira Shingu",
    "しんぐう あきら",
    "シングウ アキラ",
    "フルスタックエンジニア",
    "React",
    "Next.js",
    "TypeScript",
    "フリーランス",
    "ポートフォリオ",
    "Web開発",
  ],
  openGraph: {
    title: "神宮 章 | Akira Shingu - フルスタックエンジニア",
    description: "React, Next.js, TypeScript, AWSを活用したフルスタック開発。5年以上の実績。",
    type: "website",
    locale: "ja_JP",
    siteName: "神宮 章 Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "神宮 章 | Akira Shingu",
    description: "フルスタックエンジニア 神宮 章のポートフォリオ",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0d0d0d",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "神宮 章",
              alternateName: ["Akira Shingu", "しんぐう あきら", "シングウ アキラ"],
              jobTitle: "フルスタックエンジニア",
              knowsAbout: ["React", "Next.js", "TypeScript", "Python", "AWS"],
              url: "https://yoursite.com",
            }),
          }}
        />
      </head>
      <body className={`${geistMono.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
