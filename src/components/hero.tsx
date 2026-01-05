"use client"

import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-4 text-center">
        <Badge variant="secondary" className="mb-3 gap-1">
          <Sparkles className="w-3 h-3" />
          5 Founder Case Studies
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
          Founder Playbooks{" "}
          <span className="text-muted-foreground">That Actually Work</span>
        </h1>
        <p className="text-base text-muted-foreground max-w-xl mx-auto mb-6">
          Real stories from founders who built profitable apps. Learn their exact strategies, 
          tech stacks, and distribution playbooks.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>$800K+ Total Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>5 Unique Strategies</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            <span>Actionable Playbooks</span>
          </div>
        </div>
      </div>
    </section>
  )
}
