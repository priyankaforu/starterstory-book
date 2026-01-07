import { founderStories } from "./data"
import type { FounderStory } from "./data"

// Re-export for cleaner imports
export type { FounderStory }

// These functions run server-side in Next.js App Router
export function getStories(): FounderStory[] {
  return founderStories
}

export function getStoryById(id: number): FounderStory | undefined {
  return founderStories.find((story) => story.id === id)
}

export function getStoriesCount(): number {
  return founderStories.length
}
