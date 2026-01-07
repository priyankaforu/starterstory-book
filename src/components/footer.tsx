import { Rocket } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
              <Rocket className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold">Saas Ideas</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Summaries compiled from{" "}
            <a
              href="https://www.youtube.com/@starterstory"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              Starter Story YouTube
            </a>
            {" "}• Built For Founders
          </p>
        </div>
      </div>
    </footer>
  )
}
