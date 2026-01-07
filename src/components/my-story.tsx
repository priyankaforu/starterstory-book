import { Heart, Lightbulb, BookOpen } from "lucide-react"
import Image from "next/image"

export function MyStory() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-600 dark:text-teal-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              Why I Built This
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              A Builder's Journey
            </h2>
          </div>
          
          {/* Intro with profile image */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="flex-shrink-0">
              <Image 
                src="/doodleColored.png" 
                alt="Priyanka - Builder" 
                width={180} 
                height={180}
                className="rounded-2xl"
              />
            </div>
            <div>
              <p className="text-xl md:text-2xl font-medium text-foreground mb-4">
                Hey, I'm <a href="https://x.com/priyankapudi" target="_blank" rel="noopener noreferrer" className="text-teal-500 underline hover:text-teal-600 transition-colors">Priyanka</a> 👋
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm a fellow builder who has been deeply inspired by Starter Story. 
                Building wasn't something that came naturally to me — I explored many domains, 
                tried different paths, and eventually found my calling in crafting products from scratch.
              </p>
            </div>
          </div>
          
          {/* Story content */}
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-muted-foreground leading-relaxed mb-6">
              There's something magical about seeing a tool you've created being used by people around the world. 
              Like many indie hackers, I dream of building sustainable products that generate revenue — 
              because creating more requires resources, and passion alone doesn't pay the bills.
            </p>
            
            <div className="bg-muted/50 border-l-4 border-teal-500 p-6 rounded-r-lg my-8">
              <p className="text-foreground font-medium mb-0">
                "Starter Story has been my compass — helping me understand the founder mindset, 
                discover tools that work, and learn from those who've walked this path before me."
              </p>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm not successful yet — and I don't pretend to be. But I'm <strong className="text-foreground">continuously learning</strong>, 
              always looking for the next idea, the next opportunity. Whenever I feel stuck, 
              I turn to Starter Story for inspiration.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              These summaries are my <strong className="text-foreground">personal notes</strong> — everything I've learned from watching 
              founder interviews, distilled into actionable insights. If you don't have time to watch hours of videos, 
              grab these summaries and get the key takeaways in minutes. I hope they inspire you as much as they've inspired me.
            </p>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 rounded-2xl bg-muted/30 border border-border/50">
              <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="font-semibold mb-2">Curated Summaries</h3>
              <p className="text-sm text-muted-foreground">Key insights from every Starter Story interview</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-muted/30 border border-border/50">
              <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="font-semibold mb-2">Business Ideas</h3>
              <p className="text-sm text-muted-foreground">Discover validated SaaS and app concepts</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-muted/30 border border-border/50">
              <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="font-semibold mb-2">Built with Love</h3>
              <p className="text-sm text-muted-foreground">By a builder, for builders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
