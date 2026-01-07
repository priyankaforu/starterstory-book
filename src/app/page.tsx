import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { QuotesGrid } from "@/components/quotes-grid"
import { MyStory } from "@/components/my-story"
import { Footer } from "@/components/footer"
import { getStories } from "@/lib/stories"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const stories = getStories()
  
  // Extract key insights as quotes from founders
  const founderQuotes = stories.slice(0, 8).map(story => ({
    quote: story.keyInsight,
    founder: story.founder,
    app: story.app,
    revenue: story.revenue,
  }))
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero storiesCount={stories.length} />
        <QuotesGrid quotes={founderQuotes} />
        <MyStory />
        
        {/* CTA to Stories */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">
              Ready to Get Inspired?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Dive into {stories.length} detailed founder case studies with actionable playbooks, tech stacks, and growth strategies.
            </p>
            <Link 
              href="/stories" 
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Explore All Stories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
