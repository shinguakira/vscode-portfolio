"use client"

import type React from "react"
import {
  Menu,
  ChevronDown,
  ChevronRight,
  GitCommitHorizontal,
  Plus,
  Minus,
  MoveRight,
  Star,
  Download,
  ExternalLink,
  Github,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { VSCodeSettings, FileItem, SearchResult } from "@/types"
import { adjustBrightness } from "@/lib/color-utils"
import { gitHistory, skillDiffs, extensions } from "@/constants/portfolio-data"

interface SideBarProps {
  settings: VSCodeSettings
  sidebarCollapsed: boolean
  setSidebarCollapsed: (collapsed: boolean) => void
  searchMode: boolean
  historyMode: boolean
  diffMode: boolean
  extensionsMode: boolean
  searchQuery: string
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  searchResults: SearchResult[]
  openSearchResult: (result: SearchResult) => void
  fileTree: FileItem[]
  openFolders: string[]
  toggleFolder: (folderName: string) => void
  openFile: (file: FileItem, path: string[]) => void
  openExtension: (extensionId: string) => void
  bgSidebar: string
  bgMain: string
  bgHover: string
  textPrimary: string
  textSecondary: string
  textMuted: string
}

export function SideBar({
  settings,
  sidebarCollapsed,
  setSidebarCollapsed,
  searchMode,
  historyMode,
  diffMode,
  extensionsMode,
  searchQuery,
  handleSearchChange,
  searchResults,
  openSearchResult,
  fileTree,
  openFolders,
  toggleFolder,
  openFile,
  openExtension,
  bgSidebar,
  bgMain,
  bgHover,
  textPrimary,
  textSecondary,
  textMuted,
}: SideBarProps) {
  const renderFileTree = (items: FileItem[], level = 0, path: string[] = []) => {
    return items.map((item) => {
      const itemPath = [...path, item.name]
      const isOpen = openFolders.includes(itemPath.join("/"))

      if (item.type === "folder") {
        return (
          <div key={item.name}>
            <button
              onClick={() => toggleFolder(itemPath.join("/"))}
              className="flex items-center gap-1 w-full px-2 py-1 text-[11px] md:text-[13px] select-none"
              style={{
                paddingLeft: `${level * 8 + 8}px`,
                color: textPrimary,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = bgHover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent"
              }}
            >
              {isOpen ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
              <span className="mr-1">{item.icon}</span>
              <span className="truncate">{item.name}</span>
            </button>
            {isOpen && item.children && <div>{renderFileTree(item.children, level + 1, itemPath)}</div>}
          </div>
        )
      }

      return (
        <button
          key={item.name}
          onClick={() => openFile(item, path)}
          className="flex items-center gap-1 w-full px-2 py-1 text-[11px] md:text-[13px] select-none"
          style={{
            paddingLeft: `${level * 8 + 24}px`,
            color: textPrimary,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = bgHover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent"
          }}
        >
          <span className="mr-1">{item.icon}</span>
          <span className="truncate">{item.name}</span>
        </button>
      )
    })
  }

  return (
    <div
      className={cn(
        "border-r transition-all duration-200 flex flex-col shrink-0 h-full",
        sidebarCollapsed ? "w-0" : "w-48 md:w-64",
      )}
      style={{ backgroundColor: bgSidebar, borderColor: bgMain }}
    >
      {!sidebarCollapsed && (
        <>
          <div
            className="h-8 md:h-9 px-2 md:px-4 flex items-center justify-between text-[10px] md:text-[11px] uppercase tracking-wide shrink-0"
            style={{ color: textPrimary }}
          >
            <span className="truncate">
              {searchMode
                ? "検索"
                : historyMode
                  ? "Git History"
                  : diffMode
                    ? "Git Diff"
                    : extensionsMode
                      ? "拡張機能"
                      : "エクスプローラー"}
            </span>
            <button onClick={() => setSidebarCollapsed(true)}>
              <Menu className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto overflow-x-hidden" style={{ maxWidth: "600px" }}>
            {extensionsMode && !searchMode && !historyMode && !diffMode && (
              <div className="py-2">
                <div className="px-2 md:px-3 mb-3">
                  <div
                    className="text-[10px] md:text-[11px] font-semibold uppercase tracking-wider mb-2"
                    style={{ color: textSecondary }}
                  >
                    インストール済み
                  </div>
                  <div className="text-[10px] md:text-xs" style={{ color: textMuted }}>
                    {extensions.length} 件の拡張機能
                  </div>
                </div>

                {extensions.map((ext) => (
                  <div
                    key={ext.id}
                    onClick={() => openExtension(ext.id)}
                    className="px-2 md:px-3 py-2 md:py-3 border-b cursor-pointer transition-colors"
                    style={{ borderColor: bgMain }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = bgHover
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent"
                    }}
                  >
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="text-xl md:text-2xl shrink-0">{ext.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-[11px] md:text-sm truncate" style={{ color: textPrimary }}>
                          {ext.displayName}
                        </div>
                        <div className="text-[10px] md:text-xs mt-0.5 truncate" style={{ color: textMuted }}>
                          {ext.publisher}
                        </div>
                        <div
                          className="text-[10px] md:text-xs mt-1 md:mt-2 line-clamp-2"
                          style={{ color: textSecondary }}
                        >
                          {ext.description}
                        </div>

                        {/* タグ - モバイルでは2つまで */}
                        <div className="flex flex-wrap gap-1 mt-1 md:mt-2">
                          {ext.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-[9px] md:text-[10px] px-1 md:px-1.5 py-0.5 rounded"
                              style={{ backgroundColor: bgHover, color: textSecondary }}
                            >
                              {tag}
                            </span>
                          ))}
                          {ext.tags.length > 2 && (
                            <span
                              className="text-[9px] md:text-[10px] px-1 py-0.5 hidden md:inline"
                              style={{ color: textMuted }}
                            >
                              +{ext.tags.length - 2}
                            </span>
                          )}
                        </div>

                        <div
                          className="flex items-center gap-2 md:gap-3 mt-1 md:mt-2 text-[9px] md:text-[10px]"
                          style={{ color: textMuted }}
                        >
                          <div className="flex items-center gap-1">
                            <Star className="w-2.5 h-2.5 md:w-3 md:h-3 fill-yellow-500 text-yellow-500" />
                            <span>{ext.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Download className="w-2.5 h-2.5 md:w-3 md:h-3" />
                            <span>{(ext.downloads / 1000).toFixed(1)}K</span>
                          </div>
                          <span className="hidden md:inline">v{ext.version}</span>
                        </div>

                        {/* リンク - モバイルではアイコンのみ */}
                        <div className="flex gap-1 md:gap-2 mt-1 md:mt-2">
                          {ext.repository && (
                            <a
                              href={ext.repository}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[9px] md:text-[10px] px-1.5 md:px-2 py-0.5 md:py-1 rounded flex items-center gap-1 hover:opacity-80 transition-opacity"
                              style={{ backgroundColor: bgMain, color: settings.accentColor }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github className="w-2.5 h-2.5 md:w-3 md:h-3" />
                              <span className="hidden md:inline">リポジトリ</span>
                            </a>
                          )}
                          {ext.homepage && (
                            <a
                              href={ext.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[9px] md:text-[10px] px-1.5 md:px-2 py-0.5 md:py-1 rounded flex items-center gap-1 hover:opacity-80 transition-opacity"
                              style={{ backgroundColor: bgMain, color: settings.accentColor }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink className="w-2.5 h-2.5 md:w-3 md:h-3" />
                              <span className="hidden md:inline">デモ</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {searchMode && !historyMode && !diffMode && !extensionsMode && (
              <div className="px-2 py-2 flex flex-col gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="検索..."
                  className="w-full px-2 md:px-3 py-1.5 md:py-2 text-[11px] md:text-sm rounded border outline-none focus:ring-1"
                  style={{
                    backgroundColor: bgMain,
                    color: textPrimary,
                    borderColor: adjustBrightness(bgMain, 30),
                    caretColor: settings.accentColor,
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = settings.accentColor
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = adjustBrightness(bgMain, 30)
                  }}
                />

                <div className="overflow-y-auto" style={{ maxHeight: "calc(100vh - 140px)" }}>
                  {searchResults.length === 0 && searchQuery && (
                    <div className="px-2 py-4 text-[11px] md:text-sm" style={{ color: textMuted }}>
                      結果が見つかりませんでした
                    </div>
                  )}

                  {searchResults.map((result, idx) => (
                    <div key={idx} className="mb-3">
                      <button
                        onClick={() => openSearchResult(result)}
                        className="flex items-center gap-2 px-2 py-1 text-[11px] md:text-sm font-medium w-full text-left rounded"
                        style={{ color: textPrimary }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = bgHover
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent"
                        }}
                      >
                        <span>{result.file.icon}</span>
                        <span className="truncate">{result.path.join("/")}</span>
                        <span
                          className="ml-auto text-[10px] md:text-xs px-1 md:px-1.5 py-0.5 rounded shrink-0"
                          style={{ backgroundColor: bgHover, color: textSecondary }}
                        >
                          {result.matches.length}
                        </span>
                      </button>

                      <div className="ml-4 md:ml-6 mt-1">
                        {result.matches.slice(0, 3).map((match, matchIdx) => (
                          <div
                            key={matchIdx}
                            className="text-[10px] md:text-xs py-1 px-2 mb-1 rounded cursor-pointer truncate"
                            style={{ color: textSecondary }}
                            onClick={() => openSearchResult(result)}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = bgHover
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "transparent"
                            }}
                          >
                            <span style={{ color: textMuted }}>{match.line}:</span>{" "}
                            {match.text.substring(0, match.matchIndex)}
                            <span
                              style={{
                                backgroundColor: settings.accentColor + "30",
                                color: settings.accentColor,
                              }}
                            >
                              {match.text.substring(match.matchIndex, match.matchIndex + searchQuery.length)}
                            </span>
                            {match.text.substring(match.matchIndex + searchQuery.length)}
                          </div>
                        ))}
                        {result.matches.length > 3 && (
                          <div className="text-[10px] md:text-xs px-2 py-1" style={{ color: textMuted }}>
                            +{result.matches.length - 3} 件の一致...
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {historyMode && !searchMode && !diffMode && !extensionsMode && (
              <div className="py-2">
                {gitHistory.map((commit, idx) => (
                  <div key={commit.hash} className="px-2 md:px-3 py-2 md:py-3 border-b border-opacity-10 relative">
                    <div className="absolute left-[15px] md:left-[19px] top-8 bottom-[-20px] w-[2px] bg-gray-700 opacity-30 last:hidden"></div>
                    <div className="flex gap-2 md:gap-3">
                      <div className="flex flex-col items-center mt-1">
                        <div
                          className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full z-10"
                          style={{ backgroundColor: settings.accentColor }}
                        ></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span
                            className="text-[10px] md:text-xs font-mono opacity-70"
                            style={{ color: settings.accentColor }}
                          >
                            {commit.hash}
                          </span>
                          <span className="text-[9px] md:text-[10px] opacity-50" style={{ color: textSecondary }}>
                            {commit.date}
                          </span>
                        </div>
                        <div
                          className="font-semibold text-[11px] md:text-sm mt-0.5 truncate"
                          style={{ color: textPrimary }}
                        >
                          {commit.message}
                        </div>
                        <div
                          className="text-[10px] md:text-xs mt-1 flex items-center gap-1 flex-wrap"
                          style={{ color: textSecondary }}
                        >
                          <GitCommitHorizontal className="w-2.5 h-2.5 md:w-3 md:h-3" />
                          <span className="truncate">{commit.company}</span>
                          <span className="opacity-50">|</span>
                          <span className="truncate">{commit.position}</span>
                        </div>
                        <div className="mt-2 space-y-1">
                          {commit.changes.slice(0, 2).map((change, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-1.5 text-[10px] md:text-xs"
                              style={{ color: textMuted }}
                            >
                              <Plus className="w-2.5 h-2.5 md:w-3 md:h-3 text-green-500 shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{change}</span>
                            </div>
                          ))}
                          {commit.changes.length > 2 && (
                            <div className="text-[9px] md:text-[10px] pl-4" style={{ color: textMuted }}>
                              +{commit.changes.length - 2} more
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {diffMode && !searchMode && !historyMode && !extensionsMode && (
              <div className="py-2">
                {skillDiffs.map((diff, idx) => (
                  <div key={idx} className="mb-4 md:mb-6 px-2 md:px-3">
                    <div
                      className="text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-2 px-1 flex items-center gap-2"
                      style={{ color: textSecondary }}
                    >
                      <ChevronDown className="w-3 h-3" />
                      {diff.category}
                    </div>
                    <div className="space-y-1">
                      {diff.changes.map((change, i) => (
                        <div
                          key={i}
                          className="rounded p-1.5 md:p-2 text-[10px] md:text-xs border border-transparent hover:border-opacity-20 transition-all"
                          style={{
                            backgroundColor:
                              change.type === "added"
                                ? "rgba(34, 197, 94, 0.05)"
                                : change.type === "removed"
                                  ? "rgba(239, 68, 68, 0.05)"
                                  : "rgba(59, 130, 246, 0.05)",
                          }}
                        >
                          <div className="flex items-center gap-2 font-medium" style={{ color: textPrimary }}>
                            {change.type === "added" && <Plus className="w-2.5 h-2.5 md:w-3 md:h-3 text-green-500" />}
                            {change.type === "removed" && <Minus className="w-2.5 h-2.5 md:w-3 md:h-3 text-red-500" />}
                            {change.type === "improved" && (
                              <div className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-500 font-mono">~</div>
                            )}
                            <span className="truncate">{change.skill}</span>
                          </div>
                          <div className="ml-4 md:ml-5 mt-1 opacity-80 line-clamp-2" style={{ color: textSecondary }}>
                            {change.description}
                          </div>
                          {(change.before || change.after) && (
                            <div className="ml-4 md:ml-5 mt-1.5 flex items-center gap-2 font-mono text-[9px] md:text-[10px] opacity-70 bg-black/20 w-fit px-1.5 py-0.5 rounded">
                              {change.before && (
                                <span className="text-red-400 line-through decoration-red-400/50">{change.before}</span>
                              )}
                              {change.before && change.after && <MoveRight className="w-2 h-2 opacity-50" />}
                              {change.after && <span className="text-green-400">{change.after}</span>}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!searchMode && !historyMode && !diffMode && !extensionsMode && (
              <div className="py-2">
                <div
                  className="px-2 md:px-4 py-1 text-[10px] md:text-[11px] font-bold uppercase flex items-center gap-1 cursor-pointer"
                  style={{ color: textSecondary }}
                >
                  <ChevronDown className="w-3 h-3" />
                  <span>PORTFOLIO</span>
                </div>
                {renderFileTree(fileTree)}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
