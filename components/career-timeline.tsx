"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Briefcase, GraduationCap, Calendar, Users, X } from "lucide-react";

/* ─── Public types ─── */

export interface CareerProject {
  id: string;
  name: string;
  company: string;
  role: string;
  startDate: string; // YYYY-MM
  endDate: string | "present"; // YYYY-MM or "present"
  color: string; // hex e.g. "#3ecfb0"
  tags: string[];
  description: string;
  highlights: string[];
  teamSize?: number;
}

export type TimelineVariant = "innovative" | "professional" | "modern";

/* ─── Internal helpers ─── */

function parseDate(d: string): Date {
  if (d === "present") return new Date();
  const [y, m] = d.split("-").map(Number);
  return new Date(y, m - 1);
}

function fmtShort(d: string) {
  if (d === "present") return "Now";
  const dt = parseDate(d);
  return dt.toLocaleDateString("en-US", { month: "short", year: "2-digit" });
}

function fmtLong(d: string) {
  if (d === "present") return "Present";
  const dt = parseDate(d);
  return dt.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function duration(s: string, e: string) {
  const a = parseDate(s);
  const b = parseDate(e);
  const mo =
    (b.getFullYear() - a.getFullYear()) * 12 +
    (b.getMonth() - a.getMonth());
  const y = Math.floor(mo / 12);
  const m = mo % 12;
  if (y === 0) return `${m}mo`;
  if (m === 0) return `${y}yr`;
  return `${y}yr ${m}mo`;
}

function durationJa(s: string, e: string) {
  const a = parseDate(s);
  const b = parseDate(e);
  const mo =
    (b.getFullYear() - a.getFullYear()) * 12 +
    (b.getMonth() - a.getMonth());
  const y = Math.floor(mo / 12);
  const m = mo % 12;
  if (y === 0) return `${m}ヶ月`;
  if (m === 0) return `${y}年`;
  return `${y}年${m}ヶ月`;
}

function monthsBetween(a: Date, b: Date) {
  return (
    (b.getFullYear() - a.getFullYear()) * 12 +
    (b.getMonth() - a.getMonth())
  );
}

function getRange(items: CareerProject[]) {
  let minD = new Date();
  let maxD = new Date(0);
  for (const p of items) {
    const s = parseDate(p.startDate);
    const e = parseDate(p.endDate);
    if (s < minD) minD = s;
    if (e > maxD) maxD = e;
  }
  minD = new Date(minD.getFullYear(), 0);
  maxD = new Date(maxD.getFullYear() + 1, 0);
  return { minD, maxD };
}

function findOverlaps(items: CareerProject[]) {
  const map = new Map<string, string[]>();
  for (let i = 0; i < items.length; i++) {
    const a = items[i];
    const aS = parseDate(a.startDate);
    const aE = parseDate(a.endDate);
    const ids: string[] = [];
    for (let j = 0; j < items.length; j++) {
      if (i === j) continue;
      const b = items[j];
      if (aS < parseDate(b.endDate) && aE > parseDate(b.startDate))
        ids.push(b.id);
    }
    map.set(a.id, ids);
  }
  return map;
}

function packColumns(items: CareerProject[]) {
  const sorted = [...items].sort(
    (a, b) => parseDate(a.startDate).getTime() - parseDate(b.startDate).getTime()
  );
  const cols: CareerProject[][] = [];
  for (const p of sorted) {
    const pS = parseDate(p.startDate);
    let placed = false;
    for (const col of cols) {
      const last = col[col.length - 1];
      if (parseDate(last.endDate) <= pS) {
        col.push(p);
        placed = true;
        break;
      }
    }
    if (!placed) cols.push([p]);
  }
  const map = new Map<string, number>();
  cols.forEach((col, ci) => col.forEach((p) => map.set(p.id, ci)));
  return { map, count: cols.length };
}

/* ─── Config ─── */

const PX = 16;
const COL_W = 164;
const GAP = 6;
const RULER_W = 48;

/* ─── Variant style maps ─── */

const variantStyles = {
  innovative: {
    wrapper: "min-h-full bg-black relative overflow-hidden",
    bg1: "absolute top-1/3 right-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl",
    bg2: "absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl",
    inner: "relative max-w-5xl mx-auto px-8 py-20",
    title: "text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400 text-center",
    subtitle: "text-2xl text-gray-400 font-light text-center mb-16",
    rulerText: "text-muted-foreground/70",
    gridLine: "border-border/15",
    blockBg: (color: string) => `${color}12`,
    blockBorder: (color: string) => `3px solid ${color}`,
    nameColor: (color: string) => color,
    companyText: "text-muted-foreground",
    roleText: "text-muted-foreground/50",
    tagBg: (color: string) => `${color}15`,
    tagText: (color: string) => `${color}99`,
    dateLabelText: "text-muted-foreground/40",
    durationColor: (color: string) => `${color}80`,
    educationBg: "bg-black border border-gray-800 rounded-2xl p-6",
    educationGrad: "bg-gradient-to-r from-blue-500 to-cyan-500",
    educationTitle: "text-xl font-black text-white",
    educationSub: "text-gray-500",
    // modal
    overlayBg: "bg-black/80 backdrop-blur-sm",
    modalBg: "bg-gray-950 border border-gray-800",
    modalTitle: "text-white",
    modalCompany: (color: string) => color,
    modalMeta: "text-gray-400",
    modalSectionTitle: "text-gray-500",
    modalText: "text-gray-300",
    modalTagBg: (color: string) => `${color}18`,
    modalTagText: (color: string) => color,
    modalBulletColor: (color: string) => color,
    parallelRowBg: (color: string) => `${color}08`,
    parallelBarColor: (color: string) => color,
    parallelName: (color: string) => color,
    parallelCompany: "text-muted-foreground",
  },
  professional: {
    wrapper: "min-h-full bg-white",
    bg1: "",
    bg2: "",
    inner: "max-w-4xl mx-auto px-8 py-24",
    title: "text-5xl font-serif font-bold text-gray-900 mb-3 text-left",
    subtitle: "text-xl text-gray-600 text-left mb-16 pb-8 border-b border-gray-200",
    rulerText: "text-gray-400",
    gridLine: "border-gray-200/40",
    blockBg: (color: string) => `${color}08`,
    blockBorder: (color: string) => `3px solid ${color}`,
    nameColor: (color: string) => color,
    companyText: "text-gray-600",
    roleText: "text-gray-400",
    tagBg: (color: string) => `${color}08`,
    tagText: (color: string) => `${color}aa`,
    dateLabelText: "text-gray-400",
    durationColor: (color: string) => `${color}80`,
    educationBg: "border-t border-gray-200 pt-8 mt-8",
    educationGrad: "",
    educationTitle: "text-xl font-bold text-gray-900",
    educationSub: "text-gray-600",
    overlayBg: "bg-black/40",
    modalBg: "bg-white border border-gray-200 shadow-2xl",
    modalTitle: "text-gray-900",
    modalCompany: (_color: string) => "#6b7280",
    modalMeta: "text-gray-600",
    modalSectionTitle: "text-gray-500",
    modalText: "text-gray-700",
    modalTagBg: (color: string) => `${color}10`,
    modalTagText: (color: string) => `${color}cc`,
    modalBulletColor: (color: string) => color,
    parallelRowBg: (color: string) => `${color}06`,
    parallelBarColor: (color: string) => color,
    parallelName: (color: string) => color,
    parallelCompany: "text-gray-500",
  },
  modern: {
    wrapper: "min-h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950",
    bg1: "",
    bg2: "",
    inner: "max-w-5xl mx-auto px-8 py-16",
    title: "text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center",
    subtitle: "text-xl text-slate-400 text-center mb-12",
    rulerText: "text-slate-500",
    gridLine: "border-slate-800/50",
    blockBg: (color: string) => `${color}12`,
    blockBorder: (color: string) => `3px solid ${color}`,
    nameColor: (color: string) => color,
    companyText: "text-slate-400",
    roleText: "text-slate-500",
    tagBg: (color: string) => `${color}15`,
    tagText: (color: string) => `${color}99`,
    dateLabelText: "text-slate-500",
    durationColor: (color: string) => `${color}80`,
    educationBg: "bg-slate-900/50 border border-slate-800 rounded-xl p-6 backdrop-blur",
    educationGrad: "",
    educationTitle: "text-xl font-bold text-white",
    educationSub: "text-slate-400",
    overlayBg: "bg-black/70 backdrop-blur-sm",
    modalBg: "bg-slate-950 border border-slate-800 shadow-2xl",
    modalTitle: "text-white",
    modalCompany: (color: string) => color,
    modalMeta: "text-slate-400",
    modalSectionTitle: "text-slate-500",
    modalText: "text-slate-300",
    modalTagBg: (color: string) => `${color}18`,
    modalTagText: (color: string) => color,
    modalBulletColor: (color: string) => color,
    parallelRowBg: (color: string) => `${color}08`,
    parallelBarColor: (color: string) => color,
    parallelName: (color: string) => color,
    parallelCompany: "text-slate-500",
  },
};

/* ─── Modal sub-component ─── */

function DetailModal({
  project,
  allProjects,
  overlaps,
  onClose,
  variant = "modern",
}: {
  project: CareerProject | null;
  allProjects: CareerProject[];
  overlaps: Map<string, string[]>;
  onClose: () => void;
  variant?: TimelineVariant;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const s = variantStyles[variant];

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, handleKey]);

  if (!project) return null;

  const parallelIds = overlaps.get(project.id) ?? [];
  const parallel = allProjects.filter((p) => parallelIds.includes(p.id));

  return (
    <div
      ref={overlayRef}
      className={cn("fixed inset-0 z-50 flex items-center justify-center p-4", s.overlayBg)}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} details`}
    >
      <div className={cn("relative w-full max-w-lg rounded-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200", s.modalBg)}>
        <div className="h-1 w-full" style={{ backgroundColor: project.color }} />

        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <h3
                className="text-lg font-semibold tracking-tight"
                style={{ color: project.color }}
              >
                {project.name}
              </h3>
              <p className="text-sm mt-0.5" style={{ color: s.modalCompany(project.color) }}>
                {project.company}
              </p>
              <p className={cn("text-xs mt-0.5", s.modalMeta)}>
                {project.role}
              </p>
            </div>
            <button
              onClick={onClose}
              className={cn("shrink-0 w-8 h-8 rounded-md flex items-center justify-center transition-colors", s.modalMeta, "hover:opacity-80")}
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Duration + team */}
          <div className="mt-4 flex items-center gap-3 flex-wrap">
            <span className={cn("text-xs font-mono flex items-center gap-1", s.modalMeta)}>
              <Calendar className="w-3 h-3" />
              {fmtLong(project.startDate)} &rarr; {fmtLong(project.endDate)}
            </span>
            <span
              className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: `${project.color}18`, color: project.color }}
            >
              {durationJa(project.startDate, project.endDate)}
            </span>
            {project.teamSize && (
              <span className={cn("text-xs font-mono flex items-center gap-1", s.modalMeta)}>
                <Users className="w-3 h-3" /> {project.teamSize}名
              </span>
            )}
          </div>

          {/* Description */}
          <p className={cn("mt-4 text-sm leading-relaxed", s.modalText)}>
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights.length > 0 && (
            <div className="mt-5">
              <p className={cn("text-[10px] font-mono uppercase tracking-wider mb-2", s.modalSectionTitle)}>
                Highlights
              </p>
              <ul className="space-y-1.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: project.color }}
                    />
                    <span className={cn("text-sm", s.modalText)}>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-1 rounded-md"
                style={{ backgroundColor: s.modalTagBg(project.color), color: s.modalTagText(project.color) }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Parallel projects */}
          {parallel.length > 0 && (
            <div className="mt-6 pt-4 border-t border-current/10">
              <p className={cn("text-[10px] font-mono uppercase tracking-wider mb-3", s.modalSectionTitle)}>
                並行プロジェクト
              </p>
              <div className="space-y-2">
                {parallel.map((pp) => (
                  <div
                    key={pp.id}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg"
                    style={{ backgroundColor: s.parallelRowBg(pp.color) }}
                  >
                    <div
                      className="shrink-0 w-1.5 h-7 rounded-full"
                      style={{ backgroundColor: pp.color }}
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium truncate" style={{ color: pp.color }}>
                        {pp.name}
                      </p>
                      <p className={cn("text-[10px] truncate", s.parallelCompany)}>
                        {pp.company}
                      </p>
                    </div>
                    <span className={cn("shrink-0 text-[9px] font-mono", s.modalMeta)}>
                      {durationJa(pp.startDate, pp.endDate)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Education data (shared) ─── */

const educationData = {
  degree: "情報工学学士",
  university: "○○大学",
  year: "2019年卒業",
};

/* ─── Main exported component ─── */

export function CareerTimeline({
  projects,
  variant = "modern",
}: {
  projects: CareerProject[];
  variant?: TimelineVariant;
}) {
  const s = variantStyles[variant];
  const { minD, maxD } = useMemo(() => getRange(projects), [projects]);
  const totalH = useMemo(() => monthsBetween(minD, maxD) * PX, [minD, maxD]);
  const columns = useMemo(() => packColumns(projects), [projects]);
  const overlaps = useMemo(() => findOverlaps(projects), [projects]);

  const years = useMemo(() => {
    const arr: { year: number; top: number }[] = [];
    for (let y = minD.getFullYear(); y <= maxD.getFullYear(); y++) {
      arr.push({ year: y, top: monthsBetween(minD, new Date(y, 0)) * PX });
    }
    return arr;
  }, [minD, maxD]);

  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<CareerProject | null>(null);

  const isLit = useCallback(
    (id: string) => {
      if (!hovered) return true;
      if (id === hovered) return true;
      return overlaps.get(hovered)?.includes(id) ?? false;
    },
    [hovered, overlaps]
  );

  const chartW = columns.count * (COL_W + GAP) - GAP;

  return (
    <div className={s.wrapper}>
      {/* Background decorations (innovative only) */}
      {s.bg1 && (
        <div className="absolute inset-0">
          <div className={s.bg1} />
          <div className={s.bg2} />
        </div>
      )}

      <div className={s.inner}>
        {/* Title */}
        <div>
          <h1 className={s.title}>
            {variant === "innovative" ? "CAREER" : "職務経歴"}
          </h1>
          <p className={s.subtitle}>
            {variant === "innovative" ? "Professional Journey" : "これまでのキャリアと実績"}
          </p>
        </div>

        {/* Timeline chart */}
        <div className="overflow-x-auto pb-4 mb-8">
          <div className="relative flex" style={{ height: totalH + 32, minWidth: chartW + RULER_W + 16 }}>
            {/* Year ruler */}
            <div className="shrink-0 relative" style={{ width: RULER_W }}>
              {years.map(({ year, top }) => (
                <div key={year} className="absolute left-0 flex items-center gap-1" style={{ top }}>
                  <span className={cn("text-[10px] font-mono tabular-nums", s.rulerText)}>
                    {year}
                  </span>
                  <div className="w-1.5 h-px bg-current opacity-20" />
                </div>
              ))}
            </div>

            {/* Lane area */}
            <div className="relative" style={{ width: chartW }}>
              {/* Grid lines */}
              {years.map(({ year, top }) => (
                <div key={`g-${year}`} className={cn("absolute left-0 right-0 border-t border-dashed", s.gridLine)} style={{ top }} />
              ))}

              {/* Blocks */}
              {projects.map((p) => {
                const start = parseDate(p.startDate);
                const end = parseDate(p.endDate);
                const top = monthsBetween(minD, start) * PX;
                const height = Math.max(monthsBetween(start, end) * PX, 28);
                const col = columns.map.get(p.id) ?? 0;
                const lit = isLit(p.id);
                const active = hovered === p.id;
                const isParallel = hovered && hovered !== p.id && lit;

                return (
                  <div
                    key={p.id}
                    className={cn(
                      "absolute rounded-lg transition-all duration-300 cursor-pointer group",
                      lit ? "opacity-100" : "opacity-[0.06]",
                      active && "z-20"
                    )}
                    style={{
                      top,
                      height,
                      left: col * (COL_W + GAP),
                      width: COL_W,
                    }}
                    onMouseEnter={() => setHovered(p.id)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setSelected(p)}
                  >
                    {/* Background */}
                    <div
                      className={cn(
                        "absolute inset-0 rounded-lg transition-all duration-300",
                        active
                          ? "ring-1 ring-current/20 shadow-lg shadow-black/20"
                          : isParallel
                            ? "ring-1 ring-current/10"
                            : ""
                      )}
                      style={{
                        backgroundColor: s.blockBg(p.color),
                        borderLeft: s.blockBorder(p.color),
                      }}
                    />

                    {/* Content */}
                    <div className="relative h-full px-3 py-2.5 flex flex-col overflow-hidden">
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold leading-tight truncate" style={{ color: s.nameColor(p.color) }}>
                          {p.name}
                        </p>
                        {height > 55 && (
                          <p className={cn("text-[10px] mt-0.5 truncate", s.companyText)}>
                            {p.company}
                          </p>
                        )}
                        {height > 75 && (
                          <p className={cn("text-[9px] mt-0.5 truncate", s.roleText)}>
                            {p.role}
                          </p>
                        )}
                      </div>

                      {height > 105 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {p.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-[8px] font-mono px-1.5 py-0.5 rounded-sm"
                              style={{ backgroundColor: s.tagBg(p.color), color: s.tagText(p.color) }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex-1 min-h-0" />

                      <div>
                        <span className={cn("text-[9px] font-mono block", s.dateLabelText)}>
                          {fmtShort(p.startDate)} - {fmtShort(p.endDate)}
                        </span>
                        {height > 65 && (
                          <span
                            className="text-[9px] font-mono font-medium mt-0.5 block"
                            style={{ color: s.durationColor(p.color) }}
                          >
                            {durationJa(p.startDate, p.endDate)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className={s.educationBg}>
          <div className="flex items-center gap-4">
            {variant !== "professional" && (
              <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center shrink-0", s.educationGrad || "bg-blue-600/20")}>
                <GraduationCap className="w-5 h-5 text-blue-400" />
              </div>
            )}
            {variant === "professional" && (
              <GraduationCap className="w-5 h-5 text-gray-500 shrink-0" />
            )}
            <div>
              <h3 className={s.educationTitle}>{educationData.degree}</h3>
              <p className={s.educationSub}>{educationData.university} / {educationData.year}</p>
            </div>
          </div>
        </div>
      </div>

      <DetailModal
        project={selected}
        allProjects={projects}
        overlaps={overlaps}
        onClose={() => setSelected(null)}
        variant={variant}
      />
    </div>
  );
}
