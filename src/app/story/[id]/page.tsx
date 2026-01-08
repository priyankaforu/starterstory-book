import { Metadata } from "next"
import { getStoryById, getStories } from "@/lib/stories"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Youtube, ExternalLink } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { BackButton } from "@/components/back-button"
import { notFound } from "next/navigation"

interface StoryPageProps {
  params: Promise<{ id: string }>
}

// Generate static params for all stories
export async function generateStaticParams() {
  const stories = getStories()
  return stories.map((story) => ({
    id: story.id.toString(),
  }))
}

// Dynamic metadata for each story
export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const { id } = await params
  const story = getStoryById(Number(id))

  if (!story) {
    return {
      title: "Story Not Found",
    }
  }

  const title = `${story.founder} - ${story.app} (${story.revenue}) | Founder Story`
  const description = `Learn how ${story.founder} built ${story.app} to ${story.revenue}. ${story.keyInsight}`

  return {
    title,
    description,
    keywords: [
      story.app,
      story.founder,
      ...story.tags,
      "founder story",
      "startup case study",
      "SaaS success",
      "indie hacker",
    ],
    openGraph: {
      title,
      description,
      url: `https://saasideas.top/story/${id}`,
      type: "article",
      publishedTime: story.postedDate,
      authors: [story.founder],
      tags: story.tags,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://saasideas.top/story/${id}`,
    },
  }
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { id } = await params
  const story = getStoryById(Number(id))

  if (!story) {
    notFound()
  }

  // Parse the markdown summary into structured sections
  const sections = parseSummary(story.summary)

  // JSON-LD structured data for the article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${story.founder} - ${story.app} (${story.revenue})`,
    description: story.keyInsight,
    author: {
      "@type": "Person",
      name: story.founder,
    },
    datePublished: story.postedDate,
    publisher: {
      "@type": "Organization",
      name: "SaasIdeas",
      logo: {
        "@type": "ImageObject",
        url: "https://saasideas.top/doodleColored.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://saasideas.top/story/${id}`,
    },
    keywords: story.tags.join(", "),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
            <BackButton />
            <ThemeToggle />
          </div>
        </header>

        {/* Content */}
        <main className="container max-w-4xl mx-auto px-4 py-8">
          {/* Title Section */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm px-3 py-1">
                {story.revenue}
              </Badge>
              <span className="text-sm text-muted-foreground">{story.postedDate}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {story.title}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-4">
              <span className="font-medium text-foreground">{story.founder}</span> • {story.app}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {story.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <Button asChild size="lg" className="gap-2">
              <a href={story.videoUrl} target="_blank" rel="noopener noreferrer">
                <Youtube className="w-5 h-5" /> Watch Full Video <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Divider */}
          <hr className="my-8 border-border" />

          {/* Summary Content */}
          <article className="space-y-8">
            {sections.map((section, idx) => (
              <Section key={idx} section={section} />
            ))}
          </article>

          {/* Bottom CTA */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <Button variant="outline" asChild>
                <Link href="/stories">← Browse More Stories</Link>
              </Button>
              <Button asChild className="gap-2">
                <a href={story.videoUrl} target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-4 h-4" /> Watch on YouTube
                </a>
              </Button>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}


interface ParsedSection {
  type: 'h2' | 'h3' | 'paragraph' | 'list'
  content: string
  items?: string[]
}

function parseSummary(markdown: string): ParsedSection[] {
  const lines = markdown.split('\n')
  const sections: ParsedSection[] = []
  let currentList: string[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    
    if (!line) {
      if (currentList.length > 0) {
        sections.push({ type: 'list', content: '', items: [...currentList] })
        currentList = []
      }
      continue
    }

    if (line.startsWith('## ')) {
      if (currentList.length > 0) {
        sections.push({ type: 'list', content: '', items: [...currentList] })
        currentList = []
      }
      sections.push({ type: 'h2', content: line.replace('## ', '') })
    } else if (line.startsWith('### ')) {
      if (currentList.length > 0) {
        sections.push({ type: 'list', content: '', items: [...currentList] })
        currentList = []
      }
      sections.push({ type: 'h3', content: line.replace('### ', '') })
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      currentList.push(line.replace(/^[-*]\s+/, ''))
    } else if (/^\d+\.\s/.test(line)) {
      currentList.push(line.replace(/^\d+\.\s+/, ''))
    } else {
      if (currentList.length > 0) {
        sections.push({ type: 'list', content: '', items: [...currentList] })
        currentList = []
      }
      sections.push({ type: 'paragraph', content: line })
    }
  }

  if (currentList.length > 0) {
    sections.push({ type: 'list', content: '', items: currentList })
  }

  return sections
}

function Section({ section }: { section: ParsedSection }) {
  switch (section.type) {
    case 'h2':
      return (
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 pb-2 border-b border-border">
          {section.content}
        </h2>
      )
    case 'h3':
      return (
        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
          {section.content}
        </h3>
      )
    case 'paragraph':
      return (
        <p className="text-muted-foreground leading-relaxed">
          {formatText(section.content)}
        </p>
      )
    case 'list':
      return (
        <ul className="space-y-2 ml-1">
          {section.items?.map((item, idx) => (
            <li key={idx} className="flex gap-3 text-muted-foreground">
              <span className="text-emerald-500 mt-1.5 shrink-0">•</span>
              <span className="leading-relaxed">{formatText(item)}</span>
            </li>
          ))}
        </ul>
      )
    default:
      return null
  }
}

function formatText(text: string): React.ReactNode {
  // Handle bold text **text**
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={idx} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>
    }
    // Handle links
    const linkRegex = /(https?:\/\/[^\s]+)/g
    const linkParts = part.split(linkRegex)
    return linkParts.map((linkPart, linkIdx) => {
      if (linkRegex.test(linkPart)) {
        return (
          <a 
            key={`${idx}-${linkIdx}`} 
            href={linkPart} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {linkPart}
          </a>
        )
      }
      return linkPart
    })
  })
}
