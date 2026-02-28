"use client"

import { Card } from "@/components/ui/card"
import { getPreviewType } from "@/lib/file-utils"
import type { PreviewTheme } from "@/types"

import { renderInnovativePreview } from "./themes/innovative"
import { renderModernPreview } from "./themes/modern"
import { renderProfessionalPreview } from "./themes/professional"

interface PreviewPanelProps {
  fileName: string
  content: string
  theme?: PreviewTheme
}

export function PreviewPanel({ fileName, content, theme = "modern" }: PreviewPanelProps) {
  const previewType = getPreviewType(fileName)

  if (theme === "innovative") {
    return renderInnovativePreview(previewType, content)
  }

  if (theme === "professional") {
    return renderProfessionalPreview(previewType, content)
  }

  if (theme === "modern") {
    return renderModernPreview(previewType, content)
  }

  // デフォルトプレビュー
  return (
    <div className="min-h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8">
      <Card className="max-w-4xl mx-auto p-8 bg-slate-900/50 border-slate-800 backdrop-blur">
        <pre className="text-slate-300 leading-relaxed whitespace-pre-wrap font-mono text-sm">
          {content}
        </pre>
      </Card>
    </div>
  )
}
