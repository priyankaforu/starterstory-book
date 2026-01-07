"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { FounderCard } from "./founder-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { FounderStory } from "@/lib/stories"

// 5 rows x 5 columns = 25 stories per page
const STORIES_PER_PAGE = 25

interface StoriesGridProps {
  stories: FounderStory[]
}

export function StoriesGrid({ stories }: StoriesGridProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  // Get current page from URL, default to 1
  const currentPage = Number(searchParams.get("page")) || 1
  
  const totalPages = Math.ceil(stories.length / STORIES_PER_PAGE)
  const startIndex = (currentPage - 1) * STORIES_PER_PAGE
  const endIndex = startIndex + STORIES_PER_PAGE
  const currentStories = stories.slice(startIndex, endIndex)

  const setPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    if (page === 1) {
      params.delete("page")
    } else {
      params.set("page", page.toString())
    }
    const queryString = params.toString()
    router.push(queryString ? `/?${queryString}` : "/", { scroll: false })
  }

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {currentStories.map((story) => (
            <FounderCard key={story.id} story={story} />
          ))}
        </div>
        
        {/* Pagination - only show when more than 25 stories */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="gap-1"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </Button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setPage(page)}
                  className="w-8 h-8 p-0"
                >
                  {page}
                </Button>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="gap-1"
            >
              Next <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
