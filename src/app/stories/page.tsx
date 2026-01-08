import { Suspense } from "react"
import { Metadata } from "next"
import { Header } from "@/components/header"
import { StoriesGrid } from "@/components/stories-grid"
import { Footer } from "@/components/footer"
import { getStories } from "@/lib/stories"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "100+ Founder Success Stories | SaaS Ideas & Side Hustle Case Studies",
  description: "Browse curated founder case studies with actionable playbooks. Discover profitable SaaS ideas, micro SaaS concepts, side hustle opportunities, and real tech stacks from successful indie hackers and entrepreneurs.",
  keywords: [
    "founder stories",
    "startup case studies",
    "SaaS success stories",
    "indie hacker stories",
    "entrepreneur interviews",
    "business case studies",
    "side hustle success",
    "micro SaaS examples",
  ],
  openGraph: {
    title: "100+ Founder Success Stories | SaaS Ideas & Side Hustle Case Studies",
    description: "Browse curated founder case studies with actionable playbooks. Discover profitable SaaS ideas and real tech stacks from successful entrepreneurs.",
    url: "https://saasideas.top/stories",
    type: "website",
  },
  alternates: {
    canonical: "https://saasideas.top/stories",
  },
}

// JSON-LD for the stories collection
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Founder Success Stories",
  description: "Curated summaries from Starter Story founder interviews with actionable business ideas and growth strategies.",
  url: "https://saasideas.top/stories",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [],
  },
}

export default function StoriesPage() {
  const stories = getStories()
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Page header */}
          <section className="py-12 border-b border-border/50">
            <div className="container mx-auto px-4">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                Founder Success Stories
              </h1>
              <p className="text-muted-foreground max-w-2xl">
                {stories.length} founder case studies with detailed summaries, actionable playbooks, 
                and real tech stacks. Discover profitable SaaS ideas, micro SaaS concepts, and side hustle opportunities from successful indie hackers.
              </p>
            </div>
          </section>
          
          <Suspense fallback={<div className="py-10 text-center">Loading stories...</div>}>
            <StoriesGrid stories={stories} />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  )
}
