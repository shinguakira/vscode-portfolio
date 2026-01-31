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
  uiState?: {
    sidebarMode?: "explorer" | "search" | "gitHistory" | "gitDiff" | "extensions" | "settings"
    terminalOpen?: boolean
    sidebarCollapsed?: boolean
  }
  action?: {
    type: "openFile" | "openExtension" | "togglePreview" | "runCommand"
    payload?: string
  }
}

const TUTORIAL_STEPS: TutorialStep[] = [
  {
    id: "activity-bar",
    targetSelector: "[data-tutorial='activity-bar']",
    title: "アクティビティバー",
    description:
      "左端のアイコンメニューです。ファイルエクスプローラー、検索、Git履歴、拡張機能、設定などに切り替えられます。",
    position: "right",
    uiState: { sidebarMode: "explorer", sidebarCollapsed: false },
  },
  {
    id: "explorer",
    targetSelector: "[data-tutorial='sidebar']",
    title: "エクスプローラー",
    description: "ポートフォリオのファイル一覧です。クリックするとファイルの内容がエディタで開きます。",
    position: "right",
    uiState: { sidebarMode: "explorer", sidebarCollapsed: false },
  },
  {
    id: "file-profile",
    targetSelector: "[data-tutorial='file-profile.md']",
    title: "プロフィールファイル",
    description: "profile.mdには自己紹介が記載されています。次のステップでこのファイルを開きます。",
    position: "right",
    uiState: { sidebarMode: "explorer", sidebarCollapsed: false },
  },
  {
    id: "file-profile-open",
    targetSelector: "[data-tutorial='editor-area']",
    title: "ファイルの内容",
    description: "profile.mdの内容が表示されました。マークダウン形式で自己紹介が記載されています。",
    position: "bottom",
    uiState: { sidebarMode: "explorer", sidebarCollapsed: false },
    action: { type: "openFile", payload: "profile.md" },
  },
  {
    id: "preview-button",
    targetSelector: "[data-tutorial='preview-button']",
    title: "プレビューボタン",
    description: "このボタンでプレビューモードに切り替えられます。次のステップでプレビューを表示します。",
    position: "bottom",
    uiState: { sidebarMode: "explorer", sidebarCollapsed: false },
  },
  {
    id: "preview-mode",
    targetSelector: "[data-tutorial='editor-area']",
    title: "プレビューモード",
    description: "洗練されたデザインでコンテンツがレンダリングされます。3つのテーマから選択可能です。",
    position: "bottom",
    uiState: { sidebarMode: "explorer", sidebarCollapsed: false },
    action: { type: "togglePreview", payload: "on" },
  },
  {
    id: "search",
    targetSelector: "[data-tutorial='sidebar']",
    title: "検索機能",
    description: "ファイル内のテキストを検索できます。検索結果をクリックすると該当ファイルが開きます。",
    position: "right",
    uiState: { sidebarMode: "search", sidebarCollapsed: false },
    action: { type: "togglePreview", payload: "off" },
  },
  {
    id: "git-history",
    targetSelector: "[data-tutorial='sidebar']",
    title: "Git履歴（経歴）",
    description: "Git Historyでは職務経歴をコミット履歴風に表示しています。時系列で経験を確認できます。",
    position: "right",
    uiState: { sidebarMode: "gitHistory", sidebarCollapsed: false },
  },
  {
    id: "git-diff",
    targetSelector: "[data-tutorial='sidebar']",
    title: "Git Diff（成長）",
    description: "Git Diffではスキルの成長を差分形式で表現しています。技術の習得過程を確認できます。",
    position: "right",
    uiState: { sidebarMode: "gitDiff", sidebarCollapsed: false },
  },
  {
    id: "extensions",
    targetSelector: "[data-tutorial='sidebar']",
    title: "拡張機能（ポートフォリオ）",
    description:
      "拡張機能セクションでは制作物をショーケース形式で紹介しています。次のステップでプロジェクトを開きます。",
    position: "right",
    uiState: { sidebarMode: "extensions", sidebarCollapsed: false },
  },
  {
    id: "extension-showcase",
    targetSelector: "[data-tutorial='editor-area']",
    title: "プロジェクト詳細",
    description:
      "プロジェクトの詳細がショーケース形式で表示されます。スクリーンショット、技術スタック、リンクなどが確認できます。",
    position: "left",
    uiState: { sidebarMode: "extensions", sidebarCollapsed: false },
    action: { type: "openExtension", payload: "ecommerce-platform" },
  },
  {
    id: "terminal-intro",
    targetSelector: "[data-tutorial='terminal']",
    title: "ターミナル",
    description:
      "ターミナルでコマンドを実行できます。次のステップで'help'コマンドを実行して利用可能なコマンドを確認します。",
    position: "top",
    uiState: { terminalOpen: true, sidebarMode: "explorer" },
  },
  {
    id: "terminal-help",
    targetSelector: "[data-tutorial='terminal']",
    title: "helpコマンド",
    description:
      "利用可能なコマンド一覧が表示されました。'npm run start'で経歴ログを表示したり、'ls'でファイル一覧を確認できます。",
    position: "top",
    uiState: { terminalOpen: true, sidebarMode: "explorer" },
    action: { type: "runCommand", payload: "help" },
  },
  {
    id: "settings",
    targetSelector: "[data-tutorial='sidebar']",
    title: "設定",
    description: "テーマカラーやフォントサイズ、プレビューテーマなどをカスタマイズできます。",
    position: "right",
    uiState: { sidebarMode: "settings", sidebarCollapsed: false, terminalOpen: false },
  },
]

interface TutorialOverlayProps {
  onUIStateChange: (state: TutorialStep["uiState"]) => void
  onOpenFile?: (fileName: string) => void
  onOpenExtension?: (extensionId: string) => void
  onTogglePreview?: (on: boolean) => void
  onRunCommand?: (command: string) => void
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
  accentColor,
  backgroundColor,
  textColor,
  onRestartRef,
}: TutorialOverlayProps) {
  const [showInitialModal, setShowInitialModal] = useState(false)
  const [isTutorialActive, setIsTutorialActive] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [dontShowAgain, setDontShowAgain] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return
    const dontShow = localStorage.getItem("portfolio-tutorial-dont-show")
    if (dontShow !== "true") {
      const timer = setTimeout(() => setShowInitialModal(true), 500)
      return () => clearTimeout(timer)
    }
  }, [isMobile])

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
      }
    },
    [onOpenFile, onOpenExtension, onTogglePreview, onRunCommand],
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

  if (isMobile) return null

  if (showInitialModal) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70">
        <div className="max-w-md p-6 rounded-lg shadow-2xl" style={{ backgroundColor, color: textColor }}>
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8" style={{ color: accentColor }} />
            <h2 className="text-xl font-bold">ポートフォリオへようこそ!</h2>
          </div>
          <p className="mb-6 text-sm opacity-80">
            このポートフォリオはVS Code風のUIで作成されています。 使い方の説明をご覧になりますか？
          </p>
          <label className="flex items-center gap-2 mb-4 cursor-pointer text-sm opacity-70 hover:opacity-100">
            <input
              type="checkbox"
              checked={dontShowAgain}
              onChange={(e) => setDontShowAgain(e.target.checked)}
              className="w-4 h-4 rounded"
              style={{ accentColor }}
            />
            今後このメッセージを表示しない
          </label>
          <div className="flex gap-3 justify-end">
            <Button variant="outline" onClick={skipTutorial} className="border-current/30 bg-transparent">
              スキップ
            </Button>
            <Button onClick={startTutorial} style={{ backgroundColor: accentColor, color: "#fff" }}>
              説明を見る
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (!isTutorialActive || !targetRect) return null

  const step = TUTORIAL_STEPS[currentStep]
  const padding = 8

  const getTooltipStyle = (): React.CSSProperties => {
    const tooltipWidth = 320
    const tooltipHeight = 200
    const gap = 16

    let style: React.CSSProperties = {}

    switch (step.position) {
      case "right":
        style = {
          left: Math.min(targetRect.right + gap, window.innerWidth - tooltipWidth - 20),
          top: Math.max(
            20,
            Math.min(
              targetRect.top + targetRect.height / 2 - tooltipHeight / 2,
              window.innerHeight - tooltipHeight - 20,
            ),
          ),
        }
        break
      case "left":
        style = {
          left: Math.max(20, targetRect.left - tooltipWidth - gap),
          top: Math.max(
            20,
            Math.min(
              targetRect.top + targetRect.height / 2 - tooltipHeight / 2,
              window.innerHeight - tooltipHeight - 20,
            ),
          ),
        }
        break
      case "top":
        style = {
          left: Math.max(
            20,
            Math.min(targetRect.left + targetRect.width / 2 - tooltipWidth / 2, window.innerWidth - tooltipWidth - 20),
          ),
          top: Math.max(20, targetRect.top - tooltipHeight - gap),
        }
        break
      case "bottom":
        style = {
          left: Math.max(
            20,
            Math.min(targetRect.left + targetRect.width / 2 - tooltipWidth / 2, window.innerWidth - tooltipWidth - 20),
          ),
          top: Math.min(targetRect.bottom + gap, window.innerHeight - tooltipHeight - 20),
        }
        break
    }

    return style
  }

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
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

      <div
        className="absolute rounded transition-all duration-300 pointer-events-none"
        style={{
          left: targetRect.left - padding,
          top: targetRect.top - padding,
          width: targetRect.width + padding * 2,
          height: targetRect.height + padding * 2,
          border: `2px solid ${accentColor}`,
          boxShadow: `0 0 20px ${accentColor}50`,
        }}
      />

      <div
        className="absolute w-80 p-4 rounded-lg shadow-2xl pointer-events-auto transition-all duration-300"
        style={{
          ...getTooltipStyle(),
          backgroundColor,
          color: textColor,
          border: `1px solid ${accentColor}40`,
        }}
      >
        <button
          onClick={endTutorial}
          className="absolute top-2 right-2 p-1 rounded hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-xs opacity-60 mb-2">
          {currentStep + 1} / {TUTORIAL_STEPS.length}
        </div>

        <h3 className="text-lg font-bold mb-2" style={{ color: accentColor }}>
          {step.title}
        </h3>

        <p className="text-sm opacity-80 mb-4 leading-relaxed">{step.description}</p>

        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            size="sm"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="border-current/30 disabled:opacity-30 bg-transparent"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            前へ
          </Button>
          <Button size="sm" onClick={nextStep} style={{ backgroundColor: accentColor, color: "#fff" }}>
            {currentStep === TUTORIAL_STEPS.length - 1 ? (
              "閉じる"
            ) : (
              <>
                次へ
                <ChevronRight className="w-4 h-4 ml-1" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
