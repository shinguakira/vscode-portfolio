"use client"

import { CareerTimeline } from "@/components/career-timeline/career-timeline"
import { careerProjects } from "@/constants/career-data"

export function ModernExperience() {
  return <CareerTimeline projects={careerProjects} variant="modern" />
}
