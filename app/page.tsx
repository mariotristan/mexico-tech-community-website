"use client"

import type React from "react"
import Link from "next/link"
import { Zap, Users, Calendar, Handshake } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      {/* Hero Section - Centered and minimal */}
      <section className="flex-1 flex items-center justify-center px-4 py-20 md:py-32">
        <div className="max-w-2xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-light mb-8 leading-tight text-foreground">
            Conecta con Comunidades Tech en México
          </h1>
          <p className="text-lg md:text-xl text-foreground/60 mb-12 leading-relaxed">
            Descubre y apoya comunidades tecnológicas de cada estado de México. Encuentra eventos, conecta con organizadores y construye relaciones tecnológicas significativas.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/communities"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all"
            >
              Explorar Comunidades
            </Link>
            <Link
              href="/events"
              className="px-8 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition-all"
            >
              Ver Eventos
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Users size={32} />}
            title="Comunidades"
            description="Navega y únete a comunidades tecnológicas en México. Ve información de miembros y enlaces sociales."
          />
          <FeatureCard
            icon={<Calendar size={32} />}
            title="Eventos"
            description="Descubre próximos eventos tecnológicos, workshops y meetups organizados en todo el país."
          />
          <FeatureCard
            icon={<Zap size={32} />}
            title="Código Abierto"
            description="Plataforma impulsada por la comunidad. Envía PRs para agregar tu comunidad o eventos."
          />
          <FeatureCard
            icon={<Handshake size={32} />}
            title="Patrocinios"
            description="Apoya comunidades convirtiéndote en patrocinador. Proporciona recursos o espacios."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-card border border-primary/20 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Falta tu Comunidad?</h2>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Este es un proyecto de código abierto. Puedes agregar tu comunidad, eventos o convertirte en patrocinador creando un pull request en GitHub.
          </p>
          <a
            href="https://github.com/aileenvl/mexico-tech-community-website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-all"
          >
            Contribuir en GitHub
          </a>
        </div>
      </section>
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:bg-card/80 transition-all">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-foreground/70 text-sm">{description}</p>
    </div>
  )
}
