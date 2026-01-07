import { ArrowRight } from "lucide-react"

interface HeroProps {
  storiesCount: number
}

export function Hero({ storiesCount }: HeroProps) {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-600 dark:text-teal-400 px-4 py-2 rounded-full text-sm font-medium mb-8">
            {storiesCount}+ Profitable Business Ideas & Founder Stories
          </div>
          
          {/* Main headline - SEO optimized with trending keywords */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight font-display">
            <span className="bg-teal-500 text-white px-3 py-1 rounded-lg inline-block mb-2">
              SaaS Ideas
            </span>
            <br />
            <span className="text-foreground">
              That Build Empires
            </span>
          </h1>
          
          {/* Subheadline - keyword rich */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Discover profitable micro SaaS ideas, side hustle opportunities, and startup strategies from real indie hackers. 
            Curated founder interviews with actionable playbooks to help you build your next online business.
          </p>
          
          {/* CTA Button */}
          <a 
            href="/stories" 
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all"
          >
            Explore Founder Stories
            <ArrowRight className="w-5 h-5" />
          </a>
          
          {/* Stats - SEO keywords */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">$1.5M+ Combined Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Actionable Growth Playbooks</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Real Tech Stacks & Tools</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
