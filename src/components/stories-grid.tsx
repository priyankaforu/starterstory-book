"use client"

import { FounderCard } from "./founder-card"
import { founderStories } from "@/lib/data"

export function StoriesGrid() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {founderStories.map((story) => (
            <FounderCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  )
}
