"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FounderStory } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

interface FounderCardProps {
  story: FounderStory
}

export function FounderCard({ story }: FounderCardProps) {
  return (
    <Link href={`/story/${story.id}`}>
      <Card className="group overflow-hidden border-border/50 bg-card hover:border-border hover:shadow-lg transition-all duration-300 cursor-pointer h-full p-0 gap-0">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={story.thumbnail}
            alt={story.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <Badge className="absolute top-2 right-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs">
            {story.revenue}
          </Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-sm leading-tight mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {story.title}
          </h3>
          <p className="text-xs text-muted-foreground mb-2">
            {story.founder} • {story.app}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {story.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-[10px] px-2 py-0">
                {tag}
              </Badge>
            ))}
          </div>
          <span className="text-[10px] text-muted-foreground">{story.postedDate}</span>
        </CardContent>
      </Card>
    </Link>
  )
}
