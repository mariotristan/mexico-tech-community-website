import { Globe } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
               <Globe size={24} />
               <span>TechCommunity</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Connecting tech communities worldwide. Fostering collaboration, growth, and innovation across borders.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="/communities" className="hover:text-foreground transition-colors">Communities</a></li>
              <li><a href="/events" className="hover:text-foreground transition-colors">Events</a></li>
              <li><a href="/sponsors" className="hover:text-foreground transition-colors">Sponsors</a></li>
            </ul>
          </div>

          {/* Open Source Links */}
          <div>
            <h4 className="font-semibold mb-4">Open Source</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="https://github.com/aileenvl/mexico-tech-community-website" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contributing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Code of Conduct</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} TechCommunity Global. Open Source Project.</p>
        </div>
      </div>
    </footer>
  );
}
