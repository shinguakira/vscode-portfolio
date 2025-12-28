"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { ChevronUp, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { gitHistory } from "@/constants/portfolio-data"

interface TerminalPanelProps {
  isOpen: boolean
  onClose: () => void
  settings: {
    backgroundColor: string
    textColor: string
    accentColor: string
    fontSize: number
  }
}

interface LogEntry {
  id: number
  type: "command" | "output" | "error" | "success" | "info"
  content: string
  timestamp?: string
}

export function TerminalPanel({ isOpen, onClose, settings }: TerminalPanelProps) {
  const [logs, setLogs] = useState<LogEntry[]>([
    { id: 1, type: "info", content: "Microsoft Windows [Version 10.0.19045.2364]" },
    { id: 2, type: "info", content: "(c) Microsoft Corporation. All rights reserved." },
    { id: 3, type: "info", content: "" },
  ])
  const [input, setInput] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const logsEndRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState("TERMINAL")

  const bgPanel = settings.backgroundColor
  const textPrimary = settings.textColor

  // 明るさ調整関数 (layoutと同じロジック)
  const adjustBrightness = (color: string, amount: number) => {
    if (!color || typeof color !== "string") return "#000000"
    const hex = color.replace("#", "")
    if (hex.length !== 6) return color
    const r = Math.min(255, Math.max(0, Number.parseInt(hex.substring(0, 2), 16) + amount))
    const g = Math.min(255, Math.max(0, Number.parseInt(hex.substring(2, 4), 16) + amount))
    const b = Math.min(255, Math.max(0, Number.parseInt(hex.substring(4, 6), 16) + amount))
    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`
  }

  const borderColor = adjustBrightness(bgPanel, 20)
  const bgHeader = adjustBrightness(bgPanel, 5)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
    scrollToBottom()
  }, [isOpen, logs])

  const scrollToBottom = () => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim()

    // コマンド履歴に追加
    setLogs((prev) => [...prev, { id: Date.now(), type: "command", content: `user@portfolio:~$ ${trimmedCmd}` }])
    setInput("")

    if (!trimmedCmd) return

    if (trimmedCmd === "clear" || trimmedCmd === "cls") {
      setLogs([])
      return
    }

    if (trimmedCmd === "help") {
      const helpText = [
        "Available commands:",
        "  npm run start  - Start the career development server (Show career history)",
        "  ls             - List project directories",
        "  clear          - Clear terminal output",
        "  help           - Show this help message",
      ]
      setLogs((prev) => [
        ...prev,
        ...helpText.map((text, i) => ({
          id: Date.now() + i,
          type: "info" as const,
          content: text,
        })),
      ])
      return
    }

    if (trimmedCmd === "ls") {
      const files = ["about/", "projects/", "package.json", "tsconfig.json", "README.md"]
      setLogs((prev) => [...prev, { id: Date.now(), type: "info", content: files.join("  ") }])
      return
    }

    if (trimmedCmd === "npm run start" || trimmedCmd === "npm start" || trimmedCmd === "yarn start") {
      setIsRunning(true)

      const startSequence = [
        "> portfolio@1.0.0 start",
        "> next dev",
        "",
        "ready - started server on 0.0.0.0:3000, url: http://localhost:3000",
        "info  - Loaded env from .env",
      ]

      // 初期起動ログ
      for (const line of startSequence) {
        await new Promise((r) => setTimeout(r, 300))
        setLogs((prev) => [...prev, { id: Date.now(), type: "info", content: line }])
      }

      // 経歴ログの表示
      const sortedHistory = [...gitHistory].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

      for (const commit of sortedHistory) {
        await new Promise((r) => setTimeout(r, 800))
        setLogs((prev) => [
          ...prev,
          {
            id: Date.now(),
            type: "success",
            content: `[${commit.date}] ${commit.company} - ${commit.position}`,
            timestamp: commit.date,
          },
        ])

        await new Promise((r) => setTimeout(r, 200))
        setLogs((prev) => [
          ...prev,
          {
            id: Date.now(),
            type: "info",
            content: `  └─ ${commit.message}`,
          },
        ])
      }

      await new Promise((r) => setTimeout(r, 500))
      setLogs((prev) => [...prev, { id: Date.now(), type: "success", content: "✨  Compile Distributed Successfully" }])
      setIsRunning(false)
      return
    }

    setLogs((prev) => [
      ...prev,
      {
        id: Date.now(),
        type: "error",
        content: `Command not found: ${trimmedCmd}. Type 'help' for available commands.`,
      },
    ])
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isRunning) {
      handleCommand(input)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="h-64 border-t flex flex-col font-mono text-sm"
      style={{
        backgroundColor: bgPanel,
        borderColor: borderColor,
        color: textPrimary,
      }}
    >
      {/* ターミナルタブヘッダー */}
      <div className="flex items-center px-4 border-b h-9 select-none" style={{ borderColor }}>
        <div className="flex gap-6 text-[11px] font-medium tracking-wide">
          {["PROBLEMS", "OUTPUT", "DEBUG CONSOLE", "TERMINAL", "GIT LENS"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "h-9 relative px-1 transition-colors hover:text-opacity-100",
                activeTab === tab ? "text-opacity-100" : "text-opacity-60",
              )}
              style={{
                color: activeTab === tab ? textPrimary : textPrimary,
                borderBottom: activeTab === tab ? `1px solid ${settings.accentColor}` : "none",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-2">
          <button onClick={() => setLogs([])} className="p-1 rounded hover:bg-white/10" title="Clear Terminal">
            <Trash2 className="w-3.5 h-3.5" />
          </button>
          <button className="p-1 rounded hover:bg-white/10" title="Maximize Panel">
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ターミナルコンテンツ */}
      <div className="flex-1 overflow-auto p-2 font-mono text-[13px]" onClick={() => inputRef.current?.focus()}>
        {logs.map((log) => (
          <div key={log.id} className="leading-6 whitespace-pre-wrap break-all">
            <span
              className={cn(
                log.type === "error"
                  ? "text-red-400"
                  : log.type === "success"
                    ? "text-green-400"
                    : log.type === "command"
                      ? "font-bold"
                      : "opacity-90",
              )}
              style={{ color: log.type === "command" ? textPrimary : undefined }}
            >
              {log.content}
            </span>
          </div>
        ))}

        <div className="flex items-center mt-1">
          <span className="mr-2 text-green-400">➜</span>
          <span className="mr-2 text-cyan-400">portfolio</span>
          <span className="mr-2 text-yellow-400">git:(main)</span>
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent outline-none border-none p-0 m-0"
              style={{ color: textPrimary, caretColor: textPrimary }}
              disabled={isRunning}
              autoComplete="off"
              spellCheck="false"
              placeholder="Type 'help' for available commands..."
            />
          </div>
        </div>
        <div ref={logsEndRef} />
      </div>
    </div>
  )
}
