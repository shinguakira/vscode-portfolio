"use client"

import type React from "react"
import { X, Play } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Tab, VSCodeSettings } from "@/types"

interface TabBarProps {
  tabs: Tab[]
  activeTab: string | null
  setActiveTab: (id: string) => void
  closeTab: (id: string, e: React.MouseEvent) => void
  settings: VSCodeSettings
  previewMode: boolean
  setPreviewMode: (mode: boolean) => void
  bgTab: string
  bgMain: string
  textPrimary: string
  textSecondary: string
}

export function TabBar({
  tabs,
  activeTab,
  setActiveTab,
  closeTab,
  settings,
  previewMode,
  setPreviewMode,
  bgTab,
  bgMain,
  textPrimary,
  textSecondary,
}: TabBarProps) {
  if (tabs.length === 0) return null

  return (
    <div className="flex bg-[#0D0D0D] overflow-x-auto scrollbar-hide shrink-0">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            "flex items-center gap-2 px-3 py-2 min-w-[120px] max-w-[200px] text-[13px] border-r border-r-white/5 cursor-pointer group relative",
            activeTab === tab.id ? "bg-[#1E1E1E]" : "bg-[#141414]",
          )}
          style={{
            backgroundColor: activeTab === tab.id ? bgMain : bgTab,
            color: activeTab === tab.id ? textPrimary : textSecondary,
            borderTop: activeTab === tab.id ? `1px solid ${settings.accentColor}` : "1px solid transparent",
          }}
        >
          <span>{tab.icon}</span>
          <span className="truncate flex-1">{tab.name}</span>
          <button
            onClick={(e) => closeTab(tab.id, e)}
            className="opacity-0 group-hover:opacity-100 p-0.5 rounded hover:bg-white/10"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      ))}
      <div className="flex-1 border-b" style={{ borderColor: bgMain, backgroundColor: bgTab }} />

      {activeTab && (
        <div className="flex items-center px-2 border-b" style={{ borderColor: bgMain, backgroundColor: bgTab }}>
          <button
            onClick={() => setPreviewMode(!previewMode)}
            className="flex items-center gap-1 px-2 py-1 text-xs rounded hover:bg-white/10 transition-colors"
            style={{
              color: previewMode ? settings.accentColor : textSecondary,
            }}
            title="プレビュー切り替え"
          >
            <Play className="w-3 h-3" />
            <span>プレビュー</span>
          </button>
        </div>
      )}
    </div>
  )
}
