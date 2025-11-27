"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Globe } from "lucide-react"
import { usePathname } from "next/navigation"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  // Only show navigation on non-landing pages or if we want a consistent header
  // The landing page in Image 3 has "TechCommunity" and "GitHub"
  // The interior pages (Image 1, 2) have "TechCommunity", "Communities", "Events", "Mexico"
  
  useEffect(() => {
    setMounted(true)
  }, [])

  // Default to false during server rendering/hydration to prevent mismatch, 
  // or handle consistent initial state if pathname is available on server (which it is in App Router).
  // However, usePathname is a client hook. 
  // To avoid hydration mismatch with conditional rendering based on pathname, 
  // we can either render a placeholder or ensure the logic is robust. 
  // Actually, usePathname() is safe for hydration in Client Components *if* it returns the same value. 
  // The issue might be somewhere else or just need a robust check.
  // But usually, conditional rendering based on `pathname` in a `use client` component is fine.
  
  // The error "A tree hydrated but some attributes..." often points to:
  // 1. Browser extensions (user mentioned this is possible).
  // 2. Invalid HTML nesting (e.g., <div> inside <p>).
  // 3. `typeof window` checks.
  
  // Let's assume the issue *might* be related to `pathname` potentially being null initially or similar edge cases, 
  // OR we can use a `mounted` check to only render client-specific parts after hydration if strictly necessary. 
  // But first, let's check if `pathname` is consistent. 
  
  const isLanding = pathname === "/"

  // If we are unsure about hydration stability, we can force a re-render after mount
  // or use a suppression method, but it's better to fix the root cause. 
  // A common cause in headers is if `pathname` differs or if we render different structure.
  
  // Let's just ensure we don't render the conditional parts until mounted if it's causing issues, 
  // OR verify the structure. 
  // The `usePathname` hook *should* be stable. 
  
  // However, the error trace showed: `A tree hydrated but some attributes of the server rendered HTML didn't match...`
  // It usually points to text content or attributes. 
  // If `Header` renders different LINKS based on `isLanding`, and if the server sees `pathname` differently (e.g. during build vs run), that's a problem.
  // But `usePathname` works on client. 
  
  // Wait, `Header` is imported in `RootLayout` (server component) but `Header` is "use client".
  // Next.js renders "use client" components on the server (SSR) too for the initial HTML. 
  // If `usePathname` returns `null` or something else on the server vs client, that would cause a mismatch.
  // In Next.js 13+ `usePathname` should work during SSR of Client Components.
  
  // Use `mounted` check to be safe if the error persists.
  
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
           <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground">
            <Globe size={24} />
            <span>TechCommunity</span>
          </Link>
           {/* Render a safe default or empty space for the dynamic parts to avoid layout shift if possible, 
               or just render the common parts. */}
        </nav>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground">
          <Globe size={24} />
          <span>TechCommunity</span>
        </Link>

        {/* Desktop Navigation */}
        {!isLanding && (
          <div className="hidden md:flex gap-8 items-center">
            <Link 
              href="/communities" 
              className={`text-sm font-medium transition-colors ${pathname.startsWith('/communities') ? 'text-foreground' : 'text-foreground/60 hover:text-foreground'}`}
            >
              Communities
            </Link>
            <Link 
              href="/events" 
              className={`text-sm font-medium transition-colors ${pathname.startsWith('/events') ? 'text-foreground' : 'text-foreground/60 hover:text-foreground'}`}
            >
              Events
            </Link>
          </div>
        )}

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center gap-4">
          {!isLanding ? (
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border hover:bg-muted transition-colors text-sm font-medium">
              <Globe size={16} />
              Mexico
            </button>
          ) : (
             <a
              href="https://github.com/aileenvl/mexico-tech-community-website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium"
            >
              GitHub
            </a>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden p-4 animate-in slide-in-from-top-5">
            <div className="flex flex-col gap-4">
              <Link
                href="/communities"
                className="text-foreground/70 hover:text-foreground transition-colors p-2"
                onClick={() => setIsOpen(false)}
              >
                Communities
              </Link>
              <Link
                href="/events"
                className="text-foreground/70 hover:text-foreground transition-colors p-2"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
               <a
                href="https://github.com/aileenvl/mexico-tech-community-website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors p-2"
                onClick={() => setIsOpen(false)}
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
