"use client"

import type React from "react"
import { useState, useEffect, useCallback, useRef } from "react"
import { fileTree, type FileItem, extensions } from "@/constants/portfolio-data"
import { DEFAULT_SETTINGS } from "@/constants/vscode-config"
import { PreviewPanel } from "@/components/preview-panel"
import { TerminalPanel } from "@/components/terminal-panel"
import { ExtensionShowcase } from "@/components/extension-showcase"
import { adjustBrightness } from "@/lib/color-utils"
import { TitleBar } from "@/components/vscode/title-bar"
import { ActivityBar } from "@/components/vscode/activity-bar"
import { SideBar } from "@/components/vscode/side-bar"
import { TabBar } from "@/components/vscode/tab-bar"
import { StatusBar } from "@/components/vscode/status-bar"
import { SettingsPanel } from "@/components/vscode/settings-panel"
import { LandscapePrompt } from "@/components/landscape-prompt"
import { ResizableDivider } from "@/components/resizable-divider"
import { TutorialOverlay } from "@/components/tutorial-overlay"
import type { Tab, VSCodeSettings, SearchResult, Extension, PreviewTheme } from "@/types"

export function VSCodeLayout() {
  const [openFolders, setOpenFolders] = useState<string[]>(["about", "projects"])
  const [tabs, setTabs] = useState<Tab[]>([])
  const [activeTab, setActiveTab] = useState<string | null>(null)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [previewMode, setPreviewMode] = useState(false)
  const [searchMode, setSearchMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [historyMode, setHistoryMode] = useState(false)
  const [diffMode, setDiffMode] = useState(false)
  const [extensionsMode, setExtensionsMode] = useState(false)
  const [terminalOpen, setTerminalOpen] = useState(false)
  const [activeExtension, setActiveExtension] = useState<Extension | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  const [sidebarWidth, setSidebarWidth] = useState(240)
  const [terminalHeight, setTerminalHeight] = useState(200)

  const terminalCommandRef = useRef<((command: string) => void) | null>(null)
  const tutorialRestartRef = useRef<(() => void) | null>(null)

  const [settings, setSettings] = useState<VSCodeSettings>({
    backgroundColor: DEFAULT_SETTINGS.backgroundColor || "#0d0d0d",
    textColor: DEFAULT_SETTINGS.textColor || "#cccccc",
    accentColor: DEFAULT_SETTINGS.accentColor || "#007acc",
    fontSize: DEFAULT_SETTINGS.fontSize || 14,
    previewTheme: DEFAULT_SETTINGS.previewTheme || "modern",
  })

  const handleTutorialUIChange = useCallback(
    (uiState: {
      sidebarMode?: "explorer" | "search" | "gitHistory" | "gitDiff" | "extensions" | "settings"
      terminalOpen?: boolean
      sidebarCollapsed?: boolean
    }) => {
      if (uiState.sidebarCollapsed !== undefined) {
        setSidebarCollapsed(uiState.sidebarCollapsed)
      }
      if (uiState.terminalOpen !== undefined) {
        setTerminalOpen(uiState.terminalOpen)
      }
      if (uiState.sidebarMode) {
        setSearchMode(false)
        setHistoryMode(false)
        setDiffMode(false)
        setExtensionsMode(false)
        setSettingsOpen(false)

        switch (uiState.sidebarMode) {
          case "explorer":
            break
          case "search":
            setSearchMode(true)
            break
          case "gitHistory":
            setHistoryMode(true)
            break
          case "gitDiff":
            setDiffMode(true)
            break
          case "extensions":
            setExtensionsMode(true)
            break
          case "settings":
            setSettingsOpen(true)
            break
        }
      }
    },
    [],
  )

  const handleTutorialOpenFile = useCallback((fileName: string) => {
    const findFile = (items: FileItem[], path: string[] = []): { file: FileItem; path: string[] } | null => {
      for (const item of items) {
        if (item.type === "file" && item.name === fileName) {
          return { file: item, path }
        }
        if (item.type === "folder" && item.children) {
          const found = findFile(item.children, [...path, item.name])
          if (found) return found
        }
      }
      return null
    }

    const result = findFile(fileTree)
    if (result) {
      openFile(result.file, result.path)
    }
  }, [])

  const handleTutorialOpenExtension = useCallback((extensionId: string) => {
    openExtension(extensionId)
  }, [])

  const handleTutorialTogglePreview = useCallback((on: boolean) => {
    setPreviewMode(on)
  }, [])

  const handleTutorialRunCommand = useCallback((command: string) => {
    if (terminalCommandRef.current) {
      terminalCommandRef.current(command)
    }
  }, [])

  const handleTutorialChangePreviewTheme = useCallback((themeId: string) => {
    setSettings((prev) => {
      const newSettings = { ...prev, previewTheme: themeId as PreviewTheme }
      localStorage.setItem("vscode-settings", JSON.stringify(newSettings))
      return newSettings
    })
  }, [])

  const handleHelpClick = useCallback(() => {
    if (tutorialRestartRef.current) {
      tutorialRestartRef.current()
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const isSmallMobile = width < 640 // iPhone SE landscape ~568px
      const isMobileScreen = width < 1024

      setIsMobile(isMobileScreen)

      if (isSmallMobile) {
        setSidebarCollapsed(true)
        setTerminalOpen(false)
        setSidebarWidth(Math.min(160, width - 60))
        setTerminalHeight(120)
      } else if (isMobileScreen) {
        setSidebarCollapsed(true)
        setTerminalOpen(false)
        setSidebarWidth(Math.min(200, width - 80))
        setTerminalHeight(150)
      } else {
        setSidebarCollapsed(false)
        setSidebarWidth(280)
        setTerminalHeight(200)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleMainAreaClick = useCallback(() => {
    if (isMobile && !sidebarCollapsed) {
      setSidebarCollapsed(true)
    }
  }, [isMobile, sidebarCollapsed])

  useEffect(() => {
    const saved = localStorage.getItem("vscode-settings")
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setSettings({
          backgroundColor: parsed.backgroundColor || "#0d0d0d",
          textColor: parsed.textColor || "#cccccc",
          accentColor: parsed.accentColor || "#007acc",
          fontSize: parsed.fontSize || 14,
          previewTheme: parsed.previewTheme || "modern",
        })
      } catch (e) {
        console.error("Failed to parse settings:", e)
      }
    }
  }, [])

  const saveSettings = (newSettings: VSCodeSettings) => {
    setSettings(newSettings)
    localStorage.setItem("vscode-settings", JSON.stringify(newSettings))
  }

  const bgMain = settings.backgroundColor || DEFAULT_SETTINGS.backgroundColor
  const textPrimary = settings.textColor || DEFAULT_SETTINGS.textColor
  const bgSidebar = adjustBrightness(bgMain, 7)
  const bgActivityBar = adjustBrightness(bgMain, 13)
  const bgTitleBar = adjustBrightness(bgMain, 11)
  const bgHover = adjustBrightness(bgMain, 18)
  const bgTab = adjustBrightness(bgMain, 7)
  const textSecondary = adjustBrightness(textPrimary, -50)
  const textMuted = adjustBrightness(textPrimary, -80)

  const toggleFolder = (folderName: string) => {
    setOpenFolders((prev) => (prev.includes(folderName) ? prev.filter((f) => f !== folderName) : [...prev, folderName]))
  }

  const openFile = (file: FileItem, path: string[] = []) => {
    const fileId = [...path, file.name].join("/")
    setActiveExtension(null)

    if (tabs.find((tab) => tab.id === fileId)) {
      setActiveTab(fileId)
      return
    }

    const newTab: Tab = {
      id: fileId,
      name: file.name,
      icon: file.icon,
      content: file.content || "",
      isDirty: false,
    }

    setTabs((prev) => [...prev, newTab])
    setActiveTab(fileId)
  }

  const closeTab = (tabId: string, e: React.MouseEvent) => {
    e.stopPropagation()

    setTabs((prev) => {
      const filtered = prev.filter((tab) => tab.id !== tabId)

      if (activeTab === tabId) {
        const closedIndex = prev.findIndex((tab) => tab.id === tabId)
        const nextTab = filtered[closedIndex] || filtered[closedIndex - 1] || null
        setActiveTab(nextTab?.id || null)
        if (tabId.startsWith("extensions/")) {
          setActiveExtension(null)
        }
      }

      return filtered
    })
  }

  useEffect(() => {
    if (activeTab?.startsWith("extensions/")) {
      const extId = activeTab.replace("extensions/", "")
      const ext = extensions.find((e) => e.id === extId)
      setActiveExtension(ext || null)
    } else {
      setActiveExtension(null)
    }
  }, [activeTab])

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)

  const searchInFiles = (query: string) => {
    if (!query.trim()) {
      setSearchResults([])
      return
    }

    const results: SearchResult[] = []
    const searchLower = query.toLowerCase()

    const searchRecursive = (items: FileItem[], currentPath: string[] = []) => {
      items.forEach((item) => {
        const itemPath = [...currentPath, item.name]

        if (item.type === "file" && item.content) {
          const lines = item.content.split("\n")
          const matches: Array<{ line: number; text: string; matchIndex: number }> = []

          lines.forEach((line, index) => {
            const lineLower = line.toLowerCase()
            const matchIndex = lineLower.indexOf(searchLower)

            if (matchIndex !== -1) {
              matches.push({
                line: index + 1,
                text: line.trim(),
                matchIndex,
              })
            }
          })

          if (matches.length > 0) {
            results.push({
              file: item,
              path: itemPath,
              matches,
            })
          }
        }

        if (item.type === "folder" && item.children) {
          searchRecursive(item.children, itemPath)
        }
      })
    }

    searchRecursive(fileTree)
    setSearchResults(results)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    searchInFiles(query)
  }

  const openSearchResult = (result: SearchResult) => {
    const folderPath = result.path.slice(0, -1)
    openFile(result.file, folderPath)
    setSearchMode(false)
  }

  const openExtension = (extensionId: string) => {
    const extension = extensions.find((ext) => ext.id === extensionId)
    if (!extension) return

    const tabId = `extensions/${extensionId}`

    if (tabs.find((tab) => tab.id === tabId)) {
      setActiveTab(tabId)
      setActiveExtension(extension)
      return
    }

    const newTab: Tab = {
      id: tabId,
      name: extension.displayName,
      icon: extension.icon,
      content: "",
      isDirty: false,
    }

    setTabs((prev) => [...prev, newTab])
    setActiveTab(tabId)
    setActiveExtension(extension)
  }

  const handleSidebarResize = (delta: number) => {
    setSidebarWidth((prev) => Math.max(200, Math.min(600, prev + delta)))
  }

  const handleTerminalResize = (delta: number) => {
    setTerminalHeight((prev) => Math.max(150, Math.min(800, prev - delta)))
  }

  return (
    <>
      <LandscapePrompt bgColor={bgMain} textColor={textPrimary} accentColor={settings.accentColor} />

      <TutorialOverlay
        onUIStateChange={handleTutorialUIChange}
        onOpenFile={handleTutorialOpenFile}
        onOpenExtension={handleTutorialOpenExtension}
        onTogglePreview={handleTutorialTogglePreview}
        onRunCommand={handleTutorialRunCommand}
        onChangePreviewTheme={handleTutorialChangePreviewTheme}
        accentColor={settings.accentColor}
        backgroundColor={bgSidebar}
        textColor={textPrimary}
        onRestartRef={(fn) => {
          tutorialRestartRef.current = fn
        }}
      />

      <div className="h-screen w-full flex flex-col font-mono overflow-hidden" style={{ backgroundColor: bgMain }}>
        <TitleBar
          settings={settings}
          terminalOpen={terminalOpen}
          setTerminalOpen={setTerminalOpen}
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          setSearchMode={setSearchMode}
          bgMain={bgMain}
          bgTitleBar={bgTitleBar}
          textPrimary={textPrimary}
          textSecondary={textSecondary}
          onHelpClick={handleHelpClick}
        />

        <div className="flex flex-1 overflow-hidden">
          <div data-tutorial="activity-bar">
            <ActivityBar
              settings={settings}
              searchMode={searchMode}
              historyMode={historyMode}
              diffMode={diffMode}
              extensionsMode={extensionsMode}
              sidebarCollapsed={sidebarCollapsed}
              setSearchMode={setSearchMode}
              setHistoryMode={setHistoryMode}
              setDiffMode={setDiffMode}
              setExtensionsMode={setExtensionsMode}
              setSidebarCollapsed={setSidebarCollapsed}
              setSettingsOpen={setSettingsOpen}
              bgActivityBar={bgActivityBar}
              bgMain={bgMain}
              textSecondary={textSecondary}
            />
          </div>

          {!sidebarCollapsed && (
            <>
              <div style={{ width: `${sidebarWidth}px` }} className="shrink-0 flex flex-col" data-tutorial="sidebar">
                <SideBar
                  settings={settings}
                  sidebarCollapsed={sidebarCollapsed}
                  setSidebarCollapsed={setSidebarCollapsed}
                  searchMode={searchMode}
                  historyMode={historyMode}
                  diffMode={diffMode}
                  extensionsMode={extensionsMode}
                  searchQuery={searchQuery}
                  handleSearchChange={handleSearchChange}
                  searchResults={searchResults}
                  openSearchResult={openSearchResult}
                  fileTree={fileTree}
                  openFolders={openFolders}
                  toggleFolder={toggleFolder}
                  openFile={openFile}
                  openExtension={openExtension}
                  bgSidebar={bgSidebar}
                  bgMain={bgMain}
                  bgHover={bgHover}
                  textPrimary={textPrimary}
                  textSecondary={textSecondary}
                  textMuted={textMuted}
                />
              </div>

              <ResizableDivider
                direction="vertical"
                onResize={handleSidebarResize}
                bgColor={bgActivityBar}
                hoverColor={settings.accentColor}
              />
            </>
          )}

          <div
              className="flex-1 flex flex-col min-w-0"
              style={{ backgroundColor: bgMain }}
              onClick={handleMainAreaClick}
              onKeyDown={(e) => {
                if (e.key === "Escape" && isMobile) {
                  setSidebarCollapsed(true)
                }
              }}
            >
            <TabBar
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              closeTab={closeTab}
              settings={settings}
              previewMode={previewMode}
              setPreviewMode={setPreviewMode}
              bgTab={bgTab}
              bgMain={bgMain}
              textPrimary={textPrimary}
              textSecondary={textSecondary}
            />

            <div className="flex-1 overflow-hidden relative" data-tutorial="editor-area">
              {activeExtension ? (
                <ExtensionShowcase extension={activeExtension} settings={settings} />
              ) : activeTabContent ? (
                previewMode ? (
                  <div className="h-full overflow-auto">
                    <PreviewPanel
                      content={activeTabContent.content}
                      fileName={activeTabContent.name}
                      theme={settings.previewTheme}
                    />
                  </div>
                ) : (
                  <div className="h-full overflow-auto">
                    <div className="flex min-h-full">
                      <div
                        className="w-6 md:w-8 lg:w-12 flex flex-col items-end pr-1 md:pr-2 pt-2 md:pt-4 select-none opacity-50 text-[9px] md:text-[10px] lg:text-xs font-mono shrink-0"
                        style={{ color: textSecondary }}
                      >
                        {activeTabContent.content.split("\n").map((_, i) => (
                          <div key={i} className="h-4 md:h-5 lg:h-6 leading-4 md:leading-5 lg:leading-6">
                            {i + 1}
                          </div>
                        ))}
                      </div>
                      <textarea
                        value={activeTabContent.content}
                        onChange={(e) => {
                          const newContent = e.target.value
                          setTabs((prev) =>
                            prev.map((tab) =>
                              tab.id === activeTabContent.id ? { ...tab, content: newContent, isDirty: true } : tab,
                            ),
                          )
                        }}
                        className="flex-1 bg-transparent border-none outline-none resize-none p-1 md:p-2 lg:p-4 font-mono text-[10px] md:text-[11px] lg:text-sm leading-4 md:leading-5 lg:leading-6 whitespace-pre min-w-0"
                        style={{ color: textPrimary, fontSize: `${Math.max(settings.fontSize - 3, 9)}px` }}
                        spellCheck={false}
                      />
                    </div>
                  </div>
                )
              ) : (
                <div
                  className="h-full flex flex-col items-center justify-center text-opacity-30 select-none px-4"
                  style={{ color: textPrimary }}
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 mb-2 md:mb-4 opacity-20">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <p className="text-[10px] md:text-xs lg:text-sm text-center">ファイルを選択して開く</p>
                  <p className="text-[8px] md:text-[10px] lg:text-xs mt-1 md:mt-2 opacity-50">⌘P でファイルを検索</p>
                </div>
              )}
            </div>

            {terminalOpen && (
              <>
                <ResizableDivider
                  direction="horizontal"
                  onResize={handleTerminalResize}
                  bgColor={bgActivityBar}
                  hoverColor={settings.accentColor}
                />
                <div
                  style={{ height: `${terminalHeight}px`, minHeight: "150px" }}
                  className="shrink-0 flex flex-col"
                  data-tutorial="terminal"
                >
                  <TerminalPanel
                    settings={settings}
                    isOpen={true}
                    onClose={() => setTerminalOpen(false)}
                    onCommandRef={(fn) => {
                      terminalCommandRef.current = fn
                    }}
                  />
                </div>
              </>
            )}
          </div>
        </div>

        <StatusBar
          settings={settings}
          terminalOpen={terminalOpen}
          setTerminalOpen={setTerminalOpen}
          accentColor={settings.accentColor}
          bgMain={bgMain}
          textSecondary={textSecondary}
        />

        {settingsOpen && (
          <SettingsPanel
            settings={settings}
            onSave={saveSettings}
            onClose={() => setSettingsOpen(false)}
            bgMain={bgMain}
            bgActivityBar={bgActivityBar}
            textPrimary={textPrimary}
            textSecondary={textSecondary}
          />
        )}
      </div>
    </>
  )
}
