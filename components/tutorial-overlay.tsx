"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { X, ChevronLeft, ChevronRight, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface TutorialStep {
  id: string
  targetSelector: string
  title: string
  description: string
  position: "top" | "bottom" | "left" | "right"
  mobilePosition?: "top" | "bottom" | "center"
  uiState?: {
    sidebarMode?: "explorer" | "search" | "gitHistory" | "gitDiff" | "extensions" | "settings"
    terminalOpen?: boolean
    sidebarCollapsed?: boolean
  }
  action?: {
    type: "openFile" | "openExtension" | "togglePreview" | "runCommand" | "changePreviewTheme" | "showPreviewWithTheme"
    payload?: string
  }
}

const TUTORIAL_STEPS: TutorialStep[] = [
  {
    id: "activity-bar",
    targetSelector: "[data-tutorial='activity-bar']",
    title: "アクティビティバー",
    description: "左のアイコンでファイル、検索、Git履歴、拡張機能、設定に切り替え可能です。",
    position: "right",
    mobilePosition: "bottom",
    uiState: { sidebarMode: "explorer", sidebarCollapsed: false },
  },
  {
    id: "explorer",
    targetSelector: "[data-tutorial='sidebar']",
    title: "エクスプローラー",
    description: "ファイル一覧です。タップで内容を表示します。",
    position: "right",
    mobilePosition: "bottom",
    uiState: { sidebarMode: "explorer", sidebarCollapsed: false },
  },
  {
    id: "file-profile",
    targetSelector: "[data-tutorial='file-profile.md']",
    title: "プロフィール",
    description: "profile.mdには自己紹介が記載されています。",
    position: "right",
    mobilePosition: "bottom",
    uiState: { sidebarMode: "explorer", sidebarCollapsed: false },
  },
  {
    id: "file-profile-open",
    targetSelector: "[data-tutorial='editor-area']",
    title: "ファイル内容",
    description: "マークダウン形式で自己紹介が表示されます。",
    position: "bottom",
    mobilePosition: "top",
    uiState: { sidebarMode: "explorer", sidebarCollapsed: false },
    action: { type: "openFile", payload: "profile.md" },
  },
  {
    id: "preview-button",
    targetSelector: "[data-tutorial='preview-button']",
    title: "プレビュー",
    description: "このボタンでプレビューモードに切り替えられます。",
    position: "bottom",
    mobilePosition: "bottom",
    uiState: { sidebarMode: "explorer", sidebarCollapsed: false },
  },
  {
    id: "preview-mode",
    targetSelector: "[data-tutorial='editor-area']",
    title: "プレビューモード",
    description: "洗練されたデザインで表示されます。3つのテーマから選択可能。",
    position: "bottom",
    mobilePosition: "top",
    uiState: { sidebarMode: "explorer", sidebarCollapsed: false },
    action: { type: "togglePreview", payload: "on" },
  },
  {
    id: "search",
    targetSelector: "[data-tutorial='sidebar']",
    title: "検索",
    description: "テキスト検索が可能です。結果をタップでファイルを開きます。",
    position: "right",
    mobilePosition: "bottom",
    uiState: { sidebarMode: "search", sidebarCollapsed: false },
    action: { type: "togglePreview", payload: "off" },
  },
  {
    id: "git-history",
    targetSelector: "[data-tutorial='sidebar']",
    title: "Git履歴",
    description: "職務経歴をコミット履歴風に表示しています。",
    position: "right",
    mobilePosition: "bottom",
    uiState: { sidebarMode: "gitHistory", sidebarCollapsed: false },
  },
  {
    id: "git-diff",
    targetSelector: "[data-tutorial='sidebar']",
    title: "Git Diff",
    description: "スキルの成長を差分形式で表現しています。",
    position: "right",
    mobilePosition: "bottom",
    uiState: { sidebarMode: "gitDiff", sidebarCollapsed: false },
  },
  {
    id: "extensions",
    targetSelector: "[data-tutorial='sidebar']",
    title: "拡張機能",
    description: "制作物をショーケース形式で紹介しています。",
    position: "right",
    mobilePosition: "bottom",
    uiState: { sidebarMode: "extensions", sidebarCollapsed: false },
  },
  {
    id: "extension-showcase",
    targetSelector: "[data-tutorial='editor-area']",
    title: "プロジェクト詳細",
    description: "スクリーンショット、技術スタック、リンクなどが確認できます。",
    position: "left",
    mobilePosition: "top",
    uiState: { sidebarMode: "extensions", sidebarCollapsed: false },
    action: { type: "openExtension", payload: "ecommerce-platform" },
  },
  {
    id: "terminal-intro",
    targetSelector: "[data-tutorial='terminal']",
    title: "ターミナル",
    description: "コマンドを実行できます。次で'help'を実行します。",
    position: "top",
    mobilePosition: "top",
    uiState: { terminalOpen: true, sidebarMode: "explorer" },
  },
  {
    id: "terminal-help",
    targetSelector: "[data-tutorial='terminal']",
    title: "helpコマンド",
    description: "利用可能なコマンド一覧が表示されました。",
    position: "top",
    mobilePosition: "top",
    uiState: { terminalOpen: true, sidebarMode: "explorer" },
    action: { type: "runCommand", payload: "help" },
  },
  {
    id: "settings",
    targetSelector: "[data-tutorial='editor-area']",
    title: "設定",
    description: "テーマカラーやフォントサイズをカスタマイズできます。",
    position: "left",
    mobilePosition: "top",
    uiState: { sidebarMode: "settings", sidebarCollapsed: false, terminalOpen: false },
  },
  {
    id: "preview-theme-change",
    targetSelector: "[data-tutorial='editor-area']",
    title: "プレビューテーマ変更",
    description: "設定からプレビューテーマを変更できます。Terminal、Notion、Minimalistの3種類から選べます。",
    position: "left",
    mobilePosition: "top",
    uiState: { sidebarMode: "settings", sidebarCollapsed: false, terminalOpen: false },
    action: { type: "changePreviewTheme", payload: "notion" },
  },
  {
    id: "preview-theme-result",
    targetSelector: "[data-tutorial='editor-area']",
    title: "テーマ変更後のプレビュー",
    description: "Notionテーマに変更されました。プレビューボタンを押すとこのテーマでコンテンツが表示されます。",
    position: "left",
    mobilePosition: "top",
    uiState: { sidebarMode: "explorer", sidebarCollapsed: false, terminalOpen: false },
    action: { type: "showPreviewWithTheme", payload: "notion" },
  },
]

interface TutorialOverlayProps {
  onUIStateChange: (state: TutorialStep["uiState"]) => void
  onOpenFile?: (fileName: string) => void
  onOpenExtension?: (extensionId: string) => void
  onTogglePreview?: (on: boolean) => void
  onRunCommand?: (command: string) => void
  onChangePreviewTheme?: (themeId: string) => void
  accentColor: string
  backgroundColor: string
  textColor: string
  onRestartRef?: (fn: () => void) => void
}

export function TutorialOverlay({
  onUIStateChange,
  onOpenFile,
  onOpenExtension,
  onTogglePreview,
  onRunCommand,
  onChangePreviewTheme,
  accentColor,
  backgroundColor,
  textColor,
  onRestartRef,
}: TutorialOverlayProps) {
  const [showInitialModal, setShowInitialModal] = useState(false)
  const [isTutorialActive, setIsTutorialActive] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [dontShowAgain, setDontShowAgain] = useState(false)

  // Check for small screens (iPhone SE landscape ~568x320)
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      setIsSmallScreen(width < 768 || height < 400)
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  useEffect(() => {
    const dontShow = localStorage.getItem("portfolio-tutorial-dont-show")
    if (dontShow !== "true") {
      const timer = setTimeout(() => setShowInitialModal(true), 500)
      return () => clearTimeout(timer)
    }
  }, [])

  const updateTargetPosition = useCallback(() => {
    if (!isTutorialActive) return
    const step = TUTORIAL_STEPS[currentStep]
    const element = document.querySelector(step.targetSelector)
    if (element) {
      setTargetRect(element.getBoundingClientRect())
    }
  }, [currentStep, isTutorialActive])

  const executeStepAction = useCallback(
    (step: TutorialStep) => {
      if (!step.action) return

      switch (step.action.type) {
        case "openFile":
          if (onOpenFile && step.action.payload) {
            onOpenFile(step.action.payload)
          }
          break
        case "openExtension":
          if (onOpenExtension && step.action.payload) {
            onOpenExtension(step.action.payload)
          }
          break
        case "togglePreview":
          if (onTogglePreview) {
            onTogglePreview(step.action.payload === "on")
          }
          break
        case "runCommand":
          if (onRunCommand && step.action.payload) {
            onRunCommand(step.action.payload)
          }
          break
        case "changePreviewTheme":
          if (onChangePreviewTheme && step.action.payload) {
            onChangePreviewTheme(step.action.payload)
          }
          // Scroll to preview theme selector in settings panel
          setTimeout(() => {
            const previewThemeSection = document.querySelector("[data-tutorial='preview-theme-selector']")
            if (previewThemeSection) {
              previewThemeSection.scrollIntoView({ behavior: "smooth", block: "center" })
            }
          }, 200)
          break
        case "showPreviewWithTheme":
          if (onChangePreviewTheme && step.action.payload) {
            onChangePreviewTheme(step.action.payload)
          }
          if (onOpenFile) {
            onOpenFile("profile.md")
          }
          if (onTogglePreview) {
            setTimeout(() => onTogglePreview(true), 100)
          }
          break
      }
    },
    [onOpenFile, onOpenExtension, onTogglePreview, onRunCommand, onChangePreviewTheme],
  )

  useEffect(() => {
    if (!isTutorialActive) return
    const step = TUTORIAL_STEPS[currentStep]

    if (step.uiState) {
      onUIStateChange(step.uiState)
    }

    const actionTimer = setTimeout(() => {
      executeStepAction(step)
    }, 150)

    const positionTimer = setTimeout(updateTargetPosition, 300)

    return () => {
      clearTimeout(actionTimer)
      clearTimeout(positionTimer)
    }
  }, [currentStep, isTutorialActive, onUIStateChange, updateTargetPosition, executeStepAction])

  useEffect(() => {
    if (!isTutorialActive) return
    window.addEventListener("resize", updateTargetPosition)
    window.addEventListener("scroll", updateTargetPosition)
    return () => {
      window.removeEventListener("resize", updateTargetPosition)
      window.removeEventListener("scroll", updateTargetPosition)
    }
  }, [isTutorialActive, updateTargetPosition])

  const startTutorial = () => {
    setShowInitialModal(false)
    setIsTutorialActive(true)
    setCurrentStep(0)
  }

  const skipTutorial = () => {
    setShowInitialModal(false)
    if (dontShowAgain) {
      localStorage.setItem("portfolio-tutorial-dont-show", "true")
    }
  }

  const nextStep = () => {
    if (currentStep < TUTORIAL_STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      endTutorial()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const endTutorial = () => {
    setIsTutorialActive(false)
    onUIStateChange({ sidebarMode: "explorer", terminalOpen: false, sidebarCollapsed: false })
    if (onTogglePreview) {
      onTogglePreview(false)
    }
  }

  const restartTutorial = useCallback(() => {
    setShowInitialModal(false)
    setIsTutorialActive(true)
    setCurrentStep(0)
  }, [])

  useEffect(() => {
    if (onRestartRef) {
      onRestartRef(restartTutorial)
    }
  }, [onRestartRef, restartTutorial])

  // Initial modal - responsive for mobile landscape
  if (showInitialModal) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-2">
        <div
          className={`rounded-lg shadow-2xl ${isSmallScreen ? "max-w-[90vw] max-h-[90vh] p-3" : "max-w-md p-6"}`}
          style={{ backgroundColor, color: textColor }}
        >
          <div className={`flex items-center gap-2 ${isSmallScreen ? "mb-2" : "gap-3 mb-4"}`}>
            <HelpCircle
              className={isSmallScreen ? "w-5 h-5 shrink-0" : "w-8 h-8"}
              style={{ color: accentColor }}
            />
            <h2 className={`font-bold ${isSmallScreen ? "text-sm" : "text-xl"}`}>
              ポートフォリオへようこそ!
            </h2>
          </div>
          <p className={`opacity-80 ${isSmallScreen ? "text-xs mb-3" : "text-sm mb-6"}`}>
            VS Code風のUIで作成されています。使い方の説明をご覧になりますか？
          </p>
          <label
            className={`flex items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 ${isSmallScreen ? "text-xs mb-2" : "text-sm mb-4"}`}
          >
            <input
              type="checkbox"
              checked={dontShowAgain}
              onChange={(e) => setDontShowAgain(e.target.checked)}
              className={`rounded ${isSmallScreen ? "w-3 h-3" : "w-4 h-4"}`}
              style={{ accentColor }}
            />
            今後このメッセージを表示しない
          </label>
          <div className="flex gap-2 justify-end">
            <Button
              variant="outline"
              onClick={skipTutorial}
              className={`border-current/30 bg-transparent ${isSmallScreen ? "text-xs px-2 py-1 h-7" : ""}`}
            >
              スキップ
            </Button>
            <Button
              onClick={startTutorial}
              className={isSmallScreen ? "text-xs px-2 py-1 h-7" : ""}
              style={{ backgroundColor: accentColor, color: "#fff" }}
            >
              説明を見る
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (!isTutorialActive || !targetRect) return null

  const step = TUTORIAL_STEPS[currentStep]
  const padding = isSmallScreen ? 4 : 8

  // Responsive tooltip positioning
  const getTooltipStyle = (): React.CSSProperties => {
    const tooltipWidth = isSmallScreen ? 220 : 320
    const tooltipHeight = isSmallScreen ? 140 : 200
    const gap = isSmallScreen ? 8 : 16

    // For small screens, use mobilePosition or fallback logic
    const effectivePosition = isSmallScreen && step.mobilePosition ? step.mobilePosition : step.position

    let style: React.CSSProperties = {}

    if (isSmallScreen && step.mobilePosition === "center") {
      // Center on screen for mobile
      return {
        left: (window.innerWidth - tooltipWidth) / 2,
        top: (window.innerHeight - tooltipHeight) / 2,
      }
    }

    switch (effectivePosition) {
      case "right":
        style = {
          left: Math.min(targetRect.right + gap, window.innerWidth - tooltipWidth - 10),
          top: Math.max(
            10,
            Math.min(
              targetRect.top + targetRect.height / 2 - tooltipHeight / 2,
              window.innerHeight - tooltipHeight - 10,
            ),
          ),
        }
        break
      case "left":
        style = {
          left: Math.max(10, targetRect.left - tooltipWidth - gap),
          top: Math.max(
            10,
            Math.min(
              targetRect.top + targetRect.height / 2 - tooltipHeight / 2,
              window.innerHeight - tooltipHeight - 10,
            ),
          ),
        }
        break
      case "top":
        style = {
          left: Math.max(
            10,
            Math.min(targetRect.left + targetRect.width / 2 - tooltipWidth / 2, window.innerWidth - tooltipWidth - 10),
          ),
          top: Math.max(10, targetRect.top - tooltipHeight - gap),
        }
        break
      case "bottom":
      default:
        style = {
          left: Math.max(
            10,
            Math.min(targetRect.left + targetRect.width / 2 - tooltipWidth / 2, window.innerWidth - tooltipWidth - 10),
          ),
          top: Math.min(targetRect.bottom + gap, window.innerHeight - tooltipHeight - 10),
        }
        break
    }

    return style
  }

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* Overlay with cutout */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <mask id="tutorial-mask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <rect
              x={targetRect.left - padding}
              y={targetRect.top - padding}
              width={targetRect.width + padding * 2}
              height={targetRect.height + padding * 2}
              rx="4"
              fill="black"
            />
          </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="rgba(0,0,0,0.75)" mask="url(#tutorial-mask)" />
      </svg>

      {/* Highlight border */}
      <div
        className="absolute rounded transition-all duration-300 pointer-events-none"
        style={{
          left: targetRect.left - padding,
          top: targetRect.top - padding,
          width: targetRect.width + padding * 2,
          height: targetRect.height + padding * 2,
          border: `2px solid ${accentColor}`,
          boxShadow: `0 0 ${isSmallScreen ? "10px" : "20px"} ${accentColor}50`,
        }}
      />

      {/* Tooltip */}
      <div
        className={`absolute rounded-lg shadow-2xl pointer-events-auto transition-all duration-300 ${isSmallScreen ? "w-[220px] p-2" : "w-80 p-4"}`}
        style={{
          ...getTooltipStyle(),
          backgroundColor,
          color: textColor,
          border: `1px solid ${accentColor}40`,
        }}
      >
        <button
          onClick={endTutorial}
          className="absolute top-1 right-1 p-0.5 rounded hover:bg-white/10 transition-colors"
        >
          <X className={isSmallScreen ? "w-3 h-3" : "w-4 h-4"} />
        </button>

        <div className={`opacity-60 ${isSmallScreen ? "text-[10px] mb-1" : "text-xs mb-2"}`}>
          {currentStep + 1} / {TUTORIAL_STEPS.length}
        </div>

        <h3
          className={`font-bold ${isSmallScreen ? "text-xs mb-1" : "text-lg mb-2"}`}
          style={{ color: accentColor }}
        >
          {step.title}
        </h3>

        <p className={`opacity-80 leading-relaxed ${isSmallScreen ? "text-[10px] mb-2" : "text-sm mb-4"}`}>
          {step.description}
        </p>

        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            size="sm"
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`border-current/30 disabled:opacity-30 bg-transparent ${isSmallScreen ? "text-[10px] px-1.5 py-0.5 h-5" : ""}`}
          >
            <ChevronLeft className={isSmallScreen ? "w-2.5 h-2.5" : "w-4 h-4 mr-1"} />
            {!isSmallScreen && "前へ"}
          </Button>
          <Button
            size="sm"
            onClick={nextStep}
            className={isSmallScreen ? "text-[10px] px-1.5 py-0.5 h-5" : ""}
            style={{ backgroundColor: accentColor, color: "#fff" }}
          >
            {currentStep === TUTORIAL_STEPS.length - 1 ? (
              isSmallScreen ? "完了" : "閉じる"
            ) : (
              <>
                {!isSmallScreen && "次へ"}
                <ChevronRight className={isSmallScreen ? "w-2.5 h-2.5" : "w-4 h-4 ml-1"} />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
