"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl text-primary">
          México Tech
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/communities" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
            Comunidades
          </Link>
          <Link href="/events" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
            Eventos
          </Link>
          <Link href="/sponsors" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
            Patrocinadores
          </Link>
          <a
            href="https://github.com/aileenvl/mexico-tech-community-website"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-foreground transition-colors text-sm"
          >
            Docs
          </a>
        </div>

        {/* Log in link (right side) */}
        <div className="hidden md:block">
          <a
            href="https://github.com/aileenvl/mexico-tech-community-website"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-foreground transition-colors text-sm"
          >
            GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link
                href="/communities"
                className="text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Comunidades
              </Link>
              <Link
                href="/events"
                className="text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Eventos
              </Link>
              <Link
                href="/sponsors"
                className="text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Patrocinadores
              </Link>
              <a
                href="https://github.com/aileenvl/mexico-tech-community-website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors"
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
