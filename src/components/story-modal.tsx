"use client"

import { useEffect } from "react"
import { X, ExternalLink, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FounderStory } from "@/lib/data"
import ReactMarkdown from "react-markdown"

interface StoryModalProps {
  story: FounderStory | null
  onClose: () => void
}

export function StoryModal({ story, onClose }: StoryModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (story) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [story, onClose])

  if (!story) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden bg-background rounded-xl shadow-2xl flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background border-b p-6 pb-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </Button>
          
          <div className="flex items-start gap-4 pr-10">
            <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shrink-0 mt-1">
              {story.revenue}
            </Badge>
            <div>
              <h2 className="text-xl font-bold leading-tight">{story.title}</h2>
              <p className="text-muted-foreground mt-1">
                <span className="font-medium text-foreground">{story.founder}</span> • {story.app} • {story.postedDate}
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {story.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 pt-4">
          <div className="prose prose-sm dark:prose-invert max-w-none prose-headings:font-semibold prose-h2:text-lg prose-h2:mt-6 prose-h2:mb-3 prose-h3:text-base prose-h3:mt-4 prose-h3:mb-2 prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-ul:my-2 prose-ol:my-2">
            <ReactMarkdown
              components={{
                a: ({ href, children }) => (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {children}
                  </a>
                ),
              }}
            >
              {story.summary}
            </ReactMarkdown>
          </div>
        </div>
        
        {/* Footer */}
        <div className="sticky bottom-0 bg-background border-t p-4">
          <Button asChild className="w-full gap-2">
            <a href={story.videoUrl} target="_blank" rel="noopener noreferrer">
              <Youtube className="w-4 h-4" /> Watch Full Video on YouTube <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
