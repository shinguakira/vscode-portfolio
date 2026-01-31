// VS Code UIの配色とレイアウト定数

import type { PreviewTheme } from "@/types"

export const DEFAULT_COLORS = {
  bgMain: "#0D0D0D",
  bgSidebar: "#141414",
  bgActivityBar: "#1A1A1A",
  bgTitleBar: "#181818",
  bgHover: "#1F1F1F",
  bgTab: "#141414",
  textPrimary: "#CCCCCC",
  textSecondary: "#969696",
  textMuted: "#858585",
  border: "#0D0D0D",
}

export const COLOR_PRESETS = [
  { name: "ダークブラック", bg: "#0D0D0D", text: "#CCCCCC" },
  { name: "ミッドナイト", bg: "#1A1A2E", text: "#E0E0E0" },
  { name: "グレー", bg: "#1E1E1E", text: "#D4D4D4" },
  { name: "ダークブルー", bg: "#0E1525", text: "#C5D4DD" },
  { name: "ダークグリーン", bg: "#0D1B0E", text: "#C8E6C9" },
  { name: "ダークパープル", bg: "#1A0D1F", text: "#E1BEE7" },
]

export const ACCENT_COLOR_PRESETS = [
  { name: "ブルー", color: "#007ACC" },
  { name: "グリーン", color: "#0E8A16" },
  { name: "パープル", color: "#8B5CF6" },
  { name: "オレンジ", color: "#F97316" },
  { name: "レッド", color: "#EF4444" },
  { name: "ピンク", color: "#EC4899" },
]

export const THEME_PRESETS = [
  {
    name: "ダークブラック",
    backgroundColor: "#0D0D0D",
    textColor: "#CCCCCC",
    accentColor: "#007ACC",
  },
  {
    name: "ミッドナイト",
    backgroundColor: "#1A1A2E",
    textColor: "#E0E0E0",
    accentColor: "#4A90E2",
  },
  {
    name: "ダークブルー",
    backgroundColor: "#0E1525",
    textColor: "#C5D4DD",
    accentColor: "#00D9FF",
  },
  {
    name: "ダークグリーン",
    backgroundColor: "#0D1B0E",
    textColor: "#C8E6C9",
    accentColor: "#4CAF50",
  },
  {
    name: "ダークパープル",
    backgroundColor: "#1A0D1F",
    textColor: "#E1BEE7",
    accentColor: "#9C27B0",
  },
  {
    name: "グレー",
    backgroundColor: "#1E1E1E",
    textColor: "#D4D4D4",
    accentColor: "#007ACC",
  },
]

export const PREVIEW_THEMES: Array<{ id: PreviewTheme; name: string; description: string }> = [
  {
    id: "modern",
    name: "モダン",
    description: "ダークテーマとグラデーションを使用した現代的なデザイン",
  },
  {
    id: "innovative",
    name: "革新的",
    description: "実験的で未来的な大胆なビジュアルデザイン",
  },
  {
    id: "professional",
    name: "プロフェッショナル",
    description: "洗練されたミニマルでエレガントなデザイン",
  },
]

export const DEFAULT_SETTINGS: {
  backgroundColor: string
  textColor: string
  accentColor: string
  fontSize: number
  previewTheme: PreviewTheme
} = {
  backgroundColor: "#0D0D0D",
  textColor: "#CCCCCC",
  accentColor: "#007ACC",
  fontSize: 14,
  previewTheme: "modern",
}

export const FILE_ICONS: Record<string, string> = {
  md: "📄",
  json: "{}",
  tsx: "⚛️",
  jsx: "⚛️",
  ts: "📘",
  js: "📜",
  yaml: "⚙️",
  yml: "⚙️",
  css: "🎨",
  html: "🌐",
  folder: "📁",
}

export function getFileType(filename: string): string {
  const ext = filename.split(".").pop()?.toLowerCase()
  const types: Record<string, string> = {
    md: "Markdown",
    json: "JSON",
    tsx: "TypeScript React",
    jsx: "JavaScript React",
    ts: "TypeScript",
    js: "JavaScript",
    yaml: "YAML",
    yml: "YAML",
    css: "CSS",
    html: "HTML",
  }
  return types[ext || ""] || "Plain Text"
}
