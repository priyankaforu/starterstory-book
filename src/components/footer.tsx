import { Heart, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="font-bold text-xl">
                Saas<span className="text-teal-500">Ideas</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm mb-4">
              Curated summaries from Starter Story founder interviews. 
              Get actionable business ideas, growth strategies, and tech stacks — all in one place.
            </p>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-red-500" /> for builders everywhere
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/stories" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link 
                  href="/#quotes" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Founder Insights
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@starterstory" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  Starter Story <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.starterstory.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  StartStory.com <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://build.starterstory.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  Starter Story Build <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SaasIdeas. Summaries compiled from{" "}
            <a
              href="https://www.youtube.com/@starterstory"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              Starter Story YouTube
            </a>
          </p>
          <p className="text-xs text-muted-foreground">
            Not affiliated with Starter Story. Just a fan sharing notes.
          </p>
        </div>
      </div>
    </footer>
  )
}
