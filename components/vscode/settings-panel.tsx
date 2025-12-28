"use client"

import React from "react"

import { X } from "lucide-react"
import type { VSCodeSettings } from "@/types"
import { THEME_PRESETS, PREVIEW_THEMES } from "@/constants/vscode-config"
import { adjustBrightness } from "@/lib/color-utils"

interface SettingsPanelProps {
  settings: VSCodeSettings
  onSave: (newSettings: VSCodeSettings) => void
  onClose: () => void
  bgMain: string
  bgActivityBar: string
  textPrimary: string
  textSecondary: string
}

export function SettingsPanel({
  settings,
  onSave,
  onClose,
  bgMain,
  bgActivityBar,
  textPrimary,
  textSecondary,
}: SettingsPanelProps) {
  const [localSettings, setLocalSettings] = React.useState(settings)

  const handleSave = () => {
    onSave(localSettings)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        className="w-[600px] max-h-[80vh] rounded-lg shadow-2xl overflow-hidden flex flex-col border"
        style={{ backgroundColor: bgMain, borderColor: bgActivityBar, color: textPrimary }}
      >
        {/* ヘッダー */}
        <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: bgActivityBar }}>
          <h2 className="text-lg font-semibold">設定</h2>
          <button
            onClick={onClose}
            className="p-1 rounded transition-colors"
            style={{ color: textSecondary }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = adjustBrightness(bgMain, 20)
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
            }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* コンテンツ */}
        <div className="p-6 overflow-y-auto flex-1">
          <div className="space-y-6">
            {/* テーマプリセット */}
            <div>
              <label className="block text-sm font-medium mb-3" style={{ color: textPrimary }}>
                テーマプリセット
              </label>
              <div className="grid grid-cols-3 gap-3">
                {THEME_PRESETS.map((theme) => (
                  <button
                    key={theme.name}
                    onClick={() =>
                      setLocalSettings({
                        ...localSettings,
                        backgroundColor: theme.backgroundColor,
                        textColor: theme.textColor,
                        accentColor: theme.accentColor,
                      })
                    }
                    className="p-3 rounded border-2 transition-all text-left"
                    style={{
                      backgroundColor: theme.backgroundColor,
                      borderColor:
                        localSettings.backgroundColor === theme.backgroundColor
                          ? localSettings.accentColor
                          : "transparent",
                      color: theme.textColor,
                    }}
                  >
                    <div className="font-medium text-sm">{theme.name}</div>
                    <div className="flex gap-1 mt-2">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.accentColor }}></div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 背景色 */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: textPrimary }}>
                背景色
              </label>
              <div className="flex gap-3 items-center">
                <input
                  type="color"
                  value={localSettings.backgroundColor}
                  onChange={(e) => setLocalSettings({ ...localSettings, backgroundColor: e.target.value })}
                  className="w-20 h-10 rounded cursor-pointer border"
                  style={{ borderColor: bgActivityBar }}
                />
                <input
                  type="text"
                  value={localSettings.backgroundColor}
                  onChange={(e) => setLocalSettings({ ...localSettings, backgroundColor: e.target.value })}
                  className="flex-1 px-3 py-2 rounded border font-mono text-sm outline-none focus:ring-2"
                  style={{
                    backgroundColor: adjustBrightness(bgMain, 10),
                    borderColor: bgActivityBar,
                    color: textPrimary,
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = localSettings.accentColor
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = bgActivityBar
                  }}
                />
              </div>
            </div>

            {/* 文字色 */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: textPrimary }}>
                文字色
              </label>
              <div className="flex gap-3 items-center">
                <input
                  type="color"
                  value={localSettings.textColor}
                  onChange={(e) => setLocalSettings({ ...localSettings, textColor: e.target.value })}
                  className="w-20 h-10 rounded cursor-pointer border"
                  style={{ borderColor: bgActivityBar }}
                />
                <input
                  type="text"
                  value={localSettings.textColor}
                  onChange={(e) => setLocalSettings({ ...localSettings, textColor: e.target.value })}
                  className="flex-1 px-3 py-2 rounded border font-mono text-sm outline-none focus:ring-2"
                  style={{
                    backgroundColor: adjustBrightness(bgMain, 10),
                    borderColor: bgActivityBar,
                    color: textPrimary,
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = localSettings.accentColor
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = bgActivityBar
                  }}
                />
              </div>
            </div>

            {/* アクセントカラー */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: textPrimary }}>
                アクセントカラー
              </label>
              <div className="flex gap-3 items-center">
                <input
                  type="color"
                  value={localSettings.accentColor}
                  onChange={(e) => setLocalSettings({ ...localSettings, accentColor: e.target.value })}
                  className="w-20 h-10 rounded cursor-pointer border"
                  style={{ borderColor: bgActivityBar }}
                />
                <input
                  type="text"
                  value={localSettings.accentColor}
                  onChange={(e) => setLocalSettings({ ...localSettings, accentColor: e.target.value })}
                  className="flex-1 px-3 py-2 rounded border font-mono text-sm outline-none focus:ring-2"
                  style={{
                    backgroundColor: adjustBrightness(bgMain, 10),
                    borderColor: bgActivityBar,
                    color: textPrimary,
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = localSettings.accentColor
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = bgActivityBar
                  }}
                />
              </div>
            </div>

            {/* フォントサイズ */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: textPrimary }}>
                フォントサイズ: {localSettings.fontSize}px
              </label>
              <input
                type="range"
                min="10"
                max="24"
                value={localSettings.fontSize}
                onChange={(e) => setLocalSettings({ ...localSettings, fontSize: Number(e.target.value) })}
                className="w-full"
                style={{
                  accentColor: localSettings.accentColor,
                }}
              />
            </div>

            {/* プレビューテーマ */}
            <div>
              <label className="block text-sm font-medium mb-3" style={{ color: textPrimary }}>
                プレビューテーマ
              </label>
              <div className="grid grid-cols-3 gap-3">
                {PREVIEW_THEMES.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => setLocalSettings({ ...localSettings, previewTheme: theme.id })}
                    className="p-4 rounded border-2 transition-all text-left"
                    style={{
                      backgroundColor: adjustBrightness(bgMain, 10),
                      borderColor: localSettings.previewTheme === theme.id ? localSettings.accentColor : bgActivityBar,
                      color: textPrimary,
                    }}
                  >
                    <div className="font-medium text-sm mb-1">{theme.name}</div>
                    <div className="text-xs opacity-60" style={{ color: textSecondary }}>
                      {theme.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* フッター */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t" style={{ borderColor: bgActivityBar }}>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded transition-colors"
            style={{ color: textSecondary }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = adjustBrightness(bgMain, 20)
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
            }}
          >
            キャンセル
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded transition-colors font-medium"
            style={{ backgroundColor: localSettings.accentColor, color: "#ffffff" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.9"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1"
            }}
          >
            保存
          </button>
        </div>
      </div>
    </div>
  )
}
