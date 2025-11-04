export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">MX Tech Community</h3>
            <p className="text-foreground/70 text-sm">
              Conectando comunidades tecnológicas en México, fomentando la
              colaboración y el crecimiento.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a
                  href="/communities"
                  className="hover:text-foreground transition-colors"
                >
                  Comunidades
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="hover:text-foreground transition-colors"
                >
                  Eventos
                </a>
              </li>
              <li>
                <a
                  href="/sponsors"
                  className="hover:text-foreground transition-colors"
                >
                  Patrocinadores
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Conecta</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a
                  href="https://github.com/aileenvl/mexico-tech-community-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
          <p>Proyecto de código abierto. Contribuye en GitHub.</p>
          <p className="mt-2">
            &copy; {currentYear} MX Tech Community. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
