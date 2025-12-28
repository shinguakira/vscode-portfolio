"use client"
import { FileText, Search, History, GitBranch, Settings, Package } from "lucide-react"
import { cn } from "@/lib/utils"
import type { VSCodeSettings } from "@/types"

interface ActivityBarProps {
  settings: VSCodeSettings
  searchMode: boolean
  historyMode: boolean
  diffMode: boolean
  extensionsMode: boolean
  sidebarCollapsed: boolean
  setSearchMode: (mode: boolean) => void
  setHistoryMode: (mode: boolean) => void
  setDiffMode: (mode: boolean) => void
  setExtensionsMode: (mode: boolean) => void
  setSidebarCollapsed: (collapsed: boolean) => void
  setSettingsOpen: (open: boolean) => void
  bgActivityBar: string
  bgMain: string
  textSecondary: string
}

export function ActivityBar({
  settings,
  searchMode,
  historyMode,
  diffMode,
  extensionsMode,
  sidebarCollapsed,
  setSearchMode,
  setHistoryMode,
  setDiffMode,
  setExtensionsMode,
  setSidebarCollapsed,
  setSettingsOpen,
  bgActivityBar,
  bgMain,
  textSecondary,
}: ActivityBarProps) {
  const handleModeClick = (
    targetSearchMode: boolean,
    targetHistoryMode: boolean,
    targetDiffMode: boolean,
    targetExtensionsMode: boolean,
  ) => {
    const isCurrentMode =
      searchMode === targetSearchMode &&
      historyMode === targetHistoryMode &&
      diffMode === targetDiffMode &&
      extensionsMode === targetExtensionsMode

    if (isCurrentMode && !sidebarCollapsed) {
      // 既に同じモードでサイドバーが開いている場合は閉じる
      setSidebarCollapsed(true)
    } else {
      // 異なるモードまたはサイドバーが閉じている場合は開く
      setSidebarCollapsed(false)
      setSearchMode(targetSearchMode)
      setHistoryMode(targetHistoryMode)
      setDiffMode(targetDiffMode)
      setExtensionsMode(targetExtensionsMode)
    }
  }

  return (
    <div
      className="w-10 md:w-12 flex flex-col items-center py-1 md:py-2 border-r shrink-0"
      style={{ backgroundColor: bgActivityBar, borderColor: bgMain }}
    >
      <button
        onClick={() => handleModeClick(false, false, false, false)}
        className={cn(
          "w-10 h-10 md:w-12 md:h-12 flex items-center justify-center relative",
          !searchMode && !historyMode && !diffMode && !extensionsMode && !sidebarCollapsed && "border-l-2",
        )}
        style={{
          color:
            !searchMode && !historyMode && !diffMode && !extensionsMode && !sidebarCollapsed
              ? settings.accentColor
              : textSecondary,
          borderColor: settings.accentColor,
        }}
        title="エクスプローラー"
      >
        <FileText className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={() => handleModeClick(true, false, false, false)}
        className={cn(
          "w-10 h-10 md:w-12 md:h-12 flex items-center justify-center relative",
          searchMode && !sidebarCollapsed && "border-l-2",
        )}
        style={{
          color: searchMode && !sidebarCollapsed ? settings.accentColor : textSecondary,
          borderColor: settings.accentColor,
        }}
        title="検索"
      >
        <Search className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={() => handleModeClick(false, true, false, false)}
        className={cn(
          "w-10 h-10 md:w-12 md:h-12 flex items-center justify-center relative",
          historyMode && !sidebarCollapsed && "border-l-2",
        )}
        style={{
          color: historyMode && !sidebarCollapsed ? settings.accentColor : textSecondary,
          borderColor: settings.accentColor,
        }}
        title="Git History"
      >
        <History className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={() => handleModeClick(false, false, true, false)}
        className={cn(
          "w-10 h-10 md:w-12 md:h-12 flex items-center justify-center relative",
          diffMode && !sidebarCollapsed && "border-l-2",
        )}
        style={{
          color: diffMode && !sidebarCollapsed ? settings.accentColor : textSecondary,
          borderColor: settings.accentColor,
        }}
        title="Git Diff"
      >
        <GitBranch className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={() => handleModeClick(false, false, false, true)}
        className={cn(
          "w-10 h-10 md:w-12 md:h-12 flex items-center justify-center relative",
          extensionsMode && !sidebarCollapsed && "border-l-2",
        )}
        style={{
          color: extensionsMode && !sidebarCollapsed ? settings.accentColor : textSecondary,
          borderColor: settings.accentColor,
        }}
        title="拡張機能"
      >
        <Package className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <div className="flex-1" />
      <button
        onClick={() => setSettingsOpen(true)}
        className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
        style={{ color: textSecondary }}
        title="設定"
      >
        <Settings className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  )
}
