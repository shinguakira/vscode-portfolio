import { test } from "@playwright/test"
import path from "path"

const SECTIONS = ["profile", "projects", "skills", "contact", "strong-points", "faq", "experience"]
const THEMES = ["modern", "innovative", "professional"]
const LOCALES = ["ja", "en"]

const VIEWPORTS = [
  { name: "desktop", width: 1920, height: 1080, fullPage: true },
  { name: "mobile-landscape", width: 844, height: 390, fullPage: true },
  { name: "mobile-landscape-viewport", width: 844, height: 390, fullPage: false },
  { name: "mobile-portrait", width: 390, height: 844, fullPage: true },
]

const OUTPUT_DIR = path.join(__dirname, "..", "screenshots")

test.setTimeout(30000)

for (const viewport of VIEWPORTS) {
  for (const locale of LOCALES) {
    for (const section of SECTIONS) {
      for (const theme of THEMES) {
        test(`${viewport.name} ${locale}/${section}/${theme}`, async ({ page }) => {
          await page.setViewportSize({ width: viewport.width, height: viewport.height })
          await page.goto(`/${locale}/screenshot/${section}/${theme}`, {
            waitUntil: "networkidle",
          })
          await page.waitForSelector("[data-ready]", { timeout: 15000 })
          await page.waitForTimeout(500)
          await page.screenshot({
            path: path.join(OUTPUT_DIR, viewport.name, `${locale}-${section}-${theme}.png`),
            fullPage: viewport.fullPage,
          })
        })
      }
    }
  }
}
