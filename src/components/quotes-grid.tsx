import { Quote } from "lucide-react"

interface FounderQuote {
  quote: string
  founder: string
  app: string
  revenue: string
}

interface QuotesGridProps {
  quotes: FounderQuote[]
}

export function QuotesGrid({ quotes }: QuotesGridProps) {
  return (
    <section id="quotes" className="py-20 bg-teal-500/10">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Wisdom from Builders
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Key insights from founders who turned their ideas into profitable businesses
          </p>
        </div>
        
        {/* Quotes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quotes.map((item, index) => (
            <div 
              key={index}
              className="relative bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 hover:border-teal-500/50 hover:shadow-lg transition-all duration-300 shadow-sm"
            >
              {/* Quote icon */}
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mb-4">
                <Quote className="w-4 h-4 text-white" />
              </div>
              
              {/* Revenue badge */}
              <div className="absolute top-4 right-4">
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">
                  {item.revenue}
                </span>
              </div>
              
              {/* Quote text */}
              <p className="text-sm leading-relaxed mb-6 text-foreground/90">
                "{item.quote}"
              </p>
              
              {/* Founder info */}
              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold text-sm">{item.founder}</p>
                <p className="text-xs text-muted-foreground">{item.app}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
