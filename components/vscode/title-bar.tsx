"use client"

import type React from "react"
import { FileText, PanelBottom, Search } from "lucide-react"
import type { VSCodeSettings } from "@/types"
import { adjustBrightness } from "@/lib/color-utils"

interface TitleBarProps {
  settings: VSCodeSettings
  terminalOpen: boolean
  setTerminalOpen: (open: boolean) => void
  searchQuery: string
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  setSearchMode: (mode: boolean) => void
  bgMain: string
  bgTitleBar: string
  textPrimary: string
  textSecondary: string
}

export function TitleBar({
  settings,
  terminalOpen,
  setTerminalOpen,
  searchQuery,
  handleSearchChange,
  setSearchMode,
  bgMain,
  bgTitleBar,
  textPrimary,
  textSecondary,
}: TitleBarProps) {
  return (
    <div
      className="h-8 md:h-9 flex items-center justify-between px-2 md:px-4 text-[11px] md:text-[13px] border-b shrink-0"
      style={{ backgroundColor: bgTitleBar, borderColor: bgMain, color: textPrimary }}
    >
      {/* 左側: アプリ名 */}
      <div className="flex items-center gap-1 md:gap-2 w-1/4">
        <FileText className="w-3 h-3 md:w-4 md:h-4" style={{ color: settings.accentColor }} />
        <span className="font-semibold text-[10px] md:text-[13px]">Portfolio</span>
        <button
          onClick={() => setTerminalOpen(!terminalOpen)}
          className="p-1 rounded hover:bg-white/10 transition-colors ml-1 md:ml-2"
          title={terminalOpen ? "Close Panel" : "Open Panel"}
          style={{ color: textSecondary }}
        >
          <PanelBottom className="w-3 h-3 md:w-4 md:h-4" />
        </button>
      </div>

      {/* 中央: 検索ボックス */}
      <div className="flex-1 max-w-xl mx-2 md:mx-4 flex justify-center">
        <div className="w-full max-w-[200px] md:max-w-[400px] relative">
          <Search className="absolute left-2 top-1 md:top-1.5 w-3 h-3 md:w-3.5 md:h-3.5 opacity-50" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => setSearchMode(true)}
            placeholder="Portfolio"
            className="w-full pl-6 md:pl-8 pr-2 md:pr-3 py-0.5 md:py-1 text-[10px] md:text-xs rounded-md border outline-none transition-all text-center focus:text-left"
            style={{
              backgroundColor: adjustBrightness(bgMain, 10),
              color: textPrimary,
              borderColor: adjustBrightness(bgMain, 20),
              caretColor: settings.accentColor,
            }}
            onFocusCapture={(e) => {
              e.currentTarget.style.borderColor = settings.accentColor
              e.currentTarget.style.backgroundColor = adjustBrightness(bgMain, 15)
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = adjustBrightness(bgMain, 20)
              e.currentTarget.style.backgroundColor = adjustBrightness(bgMain, 10)
            }}
          />
        </div>
      </div>

      {/* 右側: ウィンドウ操作ボタン風 - モバイルでは非表示 */}
      <div className="hidden md:flex items-center justify-end gap-4 w-1/4">
        <div className="flex items-center gap-3">
          <div className="p-1 opacity-50">
            <div className="w-3.5 h-3.5 border border-current rounded-sm flex flex-col justify-end">
              <div className="h-[2px] w-full bg-current opacity-70"></div>
            </div>
          </div>
          <div className="p-1 opacity-50">
            <div className="w-3.5 h-3.5 grid grid-cols-2 gap-[1px]">
              <div className="border border-current rounded-[1px]"></div>
              <div className="border border-current rounded-[1px] opacity-50"></div>
            </div>
          </div>
          <div className="p-1 opacity-50">
            <div className="w-3.5 h-3.5 border border-current rounded-sm opacity-70"></div>
          </div>
        </div>
      </div>
      {/* モバイル用の右側スペーサー */}
      <div className="w-1/4 md:hidden"></div>
    </div>
  )
}
