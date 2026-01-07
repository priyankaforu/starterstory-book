"use client"

import { ThemeToggle } from "./theme-toggle"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="font-bold text-xl">
            Saas<span className="text-teal-500">Ideas</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/stories" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Success Stories
          </Link>
          <Link 
            href="/#quotes" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Founder Insights
          </Link>
          <a 
            href="https://www.youtube.com/@starterstory" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Starter Story ↗
          </a>
        </nav>
        
        {/* Right side */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              href="/stories" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Success Stories
            </Link>
            <Link 
              href="/#quotes" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Founder Insights
            </Link>
            <a 
              href="https://www.youtube.com/@starterstory" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Starter Story ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
