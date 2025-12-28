"use client"
import { GitBranch, XCircle, AlertTriangle, Check, Bell, PanelBottom } from "lucide-react"
import type { VSCodeSettings } from "@/types"

interface StatusBarProps {
  settings: VSCodeSettings
  terminalOpen: boolean
  setTerminalOpen: (open: boolean) => void
  accentColor: string
  bgMain: string
  textSecondary: string
}

export function StatusBar({
  settings,
  terminalOpen,
  setTerminalOpen,
  accentColor,
  bgMain,
  textSecondary,
}: StatusBarProps) {
  return (
    <div
      className="h-5 md:h-6 flex items-center justify-between px-2 md:px-3 text-[9px] md:text-[11px] shrink-0 select-none z-10"
      style={{
        backgroundColor: settings.accentColor,
        color: "#ffffff",
      }}
    >
      <div className="flex items-center gap-2 md:gap-4">
        <div className="flex items-center gap-1 hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer">
          <GitBranch className="w-2.5 h-2.5 md:w-3 md:h-3" />
          <span>main*</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer">
          <XCircle className="w-2.5 h-2.5 md:w-3 md:h-3" />
          <span>0</span>
          <AlertTriangle className="w-2.5 h-2.5 md:w-3 md:h-3 ml-1" />
          <span>0</span>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button
          onClick={() => setTerminalOpen(!terminalOpen)}
          className="flex items-center gap-1 hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer"
          title={terminalOpen ? "Close Terminal" : "Open Terminal"}
        >
          <PanelBottom className="w-2.5 h-2.5 md:w-3 md:h-3" />
        </button>
        {/* モバイルでは一部項目を非表示 */}
        <div className="hidden md:flex items-center gap-1 hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer">
          <span>Ln 12, Col 45</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer">
          <span>UTF-8</span>
        </div>
        <div className="hidden sm:flex items-center gap-1 hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer">
          <span className="hidden md:inline">TypeScript React</span>
          <span className="md:hidden">TSX</span>
        </div>
        <div className="hidden md:flex items-center gap-1 hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer">
          <Check className="w-3 h-3" />
          <span>Prettier</span>
        </div>
        <div className="hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer">
          <Bell className="w-2.5 h-2.5 md:w-3 md:h-3" />
        </div>
      </div>
    </div>
  )
}
