import { Suspense } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { StoriesGrid } from "@/components/stories-grid"
import { Footer } from "@/components/footer"
import { getStories } from "@/lib/stories"

// This is a Server Component - data is fetched server-side
// and not bundled with client JavaScript
export default function Home() {
  const stories = getStories()
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero storiesCount={stories.length} />
        <Suspense fallback={<div className="py-10 text-center">Loading stories...</div>}>
          <StoriesGrid stories={stories} />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
