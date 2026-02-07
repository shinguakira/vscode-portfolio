import React from "react"
import {
  ShoppingCart,
  MessageCircle,
  LayoutDashboard,
  Palette,
  Sparkles,
  ImageIcon,
  FileText,
  Folder,
  Zap,
  HelpCircle,
  Braces,
  BookOpen,
  Mail,
  Settings,
  Code2,
} from "lucide-react"

const iconComponents: Record<string, React.FC<{ className?: string }>> = {
  "shopping-cart": ShoppingCart,
  "message-circle": MessageCircle,
  "layout-dashboard": LayoutDashboard,
  "palette": Palette,
  "sparkles": Sparkles,
  "image": ImageIcon,
  "file-text": FileText,
  "folder": Folder,
  "zap": Zap,
  "help-circle": HelpCircle,
  "braces": Braces,
  "book-open": BookOpen,
  "mail": Mail,
  "settings": Settings,
}

export function IconFromKey({
  iconKey,
  className = "w-5 h-5",
  style,
}: {
  iconKey: string
  className?: string
  style?: React.CSSProperties
}) {
  const Icon = iconComponents[iconKey] || Code2
  return <Icon className={className} style={style} />
}
