"use client"

import { useEffect, useState } from "react"

import { DEFAULT_SETTINGS } from "@/constants/vscode-config"
import type { PreviewTheme, VSCodeSettings } from "@/types"

const STORAGE_KEY = "vscode-settings"

function loadSettings(): VSCodeSettings {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    try {
      const parsed = JSON.parse(saved)
      return {
        backgroundColor: parsed.backgroundColor || DEFAULT_SETTINGS.backgroundColor,
        textColor: parsed.textColor || DEFAULT_SETTINGS.textColor,
        accentColor: parsed.accentColor || DEFAULT_SETTINGS.accentColor,
        fontSize: parsed.fontSize || DEFAULT_SETTINGS.fontSize,
        previewTheme: parsed.previewTheme || DEFAULT_SETTINGS.previewTheme,
      }
    } catch {
      // fall through to defaults
    }
  }
  return { ...DEFAULT_SETTINGS }
}

export function useSettings() {
  const [settings, setSettings] = useState<VSCodeSettings>({ ...DEFAULT_SETTINGS })

  useEffect(() => {
    setSettings(loadSettings())
  }, [])

  const saveSettings = (newSettings: VSCodeSettings) => {
    setSettings(newSettings)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newSettings))
  }

  const changePreviewTheme = (themeId: string) => {
    setSettings((prev) => {
      const newSettings = { ...prev, previewTheme: themeId as PreviewTheme }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newSettings))
      return newSettings
    })
  }

  return { settings, saveSettings, changePreviewTheme }
}
