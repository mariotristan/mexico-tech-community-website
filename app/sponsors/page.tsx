"use client";

import type React from "react";

import { useState } from "react";
import {
  Check,
  Mail,
  Building2,
  DollarSign,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { sponsorsData } from "@/data/sponsors";

export default function SponsorsPage() {
  const [activeTab, setActiveTab] = useState<"current" | "become">("current");
  const budgetSponsors = sponsorsData.filter((s) => s.type === "budget");
  const spaceSponsors = sponsorsData.filter((s) => s.type === "space");

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      <section className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros Patrocinadores
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Gracias a nuestros patrocinadores que apoyan y hacen posible las
            comunidades tecnológicas en México. Juntos, estamos construyendo un
            ecosistema tecnológico próspero.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-12 border-b border-border">
          <button
            onClick={() => setActiveTab("current")}
            className={`
              px-6 py-4 font-semibold transition-all border-b-2 -mb-px
              ${
                activeTab === "current"
                  ? "border-primary text-primary"
                  : "border-transparent text-foreground/70 hover:text-foreground"
              }
            `}
          >
            Patrocinadores Actuales
          </button>
          <button
            onClick={() => setActiveTab("become")}
            className={`
              px-6 py-4 font-semibold transition-all border-b-2 -mb-px
              ${
                activeTab === "become"
                  ? "border-primary text-primary"
                  : "border-transparent text-foreground/70 hover:text-foreground"
              }
            `}
          >
            Conviértete en Patrocinador
          </button>
        </div>

        {/* Current Sponsors Tab */}
        {activeTab === "current" && (
          <div className="space-y-16">
            {/* Budget Sponsors */}
            {budgetSponsors.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <DollarSign size={28} className="text-primary" />
                  <h2 className="text-2xl font-bold">
                    Patrocinadores de Presupuesto
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {budgetSponsors.map((sponsor) => (
                    <SponsorCard key={sponsor.id} sponsor={sponsor} />
                  ))}
                </div>
              </div>
            )}

            {/* Space Sponsors */}
            {spaceSponsors.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <MapPin size={28} className="text-accent" />
                  <h2 className="text-2xl font-bold">
                    Patrocinadores de Espacios
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {spaceSponsors.map((sponsor) => (
                    <SponsorCard key={sponsor.id} sponsor={sponsor} />
                  ))}
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div className="bg-card border border-primary/20 rounded-lg p-8 text-center mt-8">
              <h3 className="text-2xl font-bold mb-4">
                ¿Quieres Apoyar a la Comunidad?
              </h3>
              <p className="text-foreground/70 mb-6">
                Únete a nuestros patrocinadores y ayúdanos a hacer crecer la
                comunidad tecnológica en México.
              </p>
              <button
                onClick={() => setActiveTab("become")}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all"
              >
                Conviértete en Patrocinador
              </button>
            </div>
          </div>
        )}

        {/* Become a Sponsor Tab */}
        {activeTab === "become" && (
          <div className="space-y-12">
            {/* Sponsorship Tiers */}
            <div>
              <h2 className="text-2xl font-bold mb-8">
                Opciones de Patrocinio
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SponsorshipTier
                  icon={<DollarSign size={32} />}
                  title="Patrocinador de Presupuesto"
                  description="Proporciona apoyo financiero para iniciativas comunitarias"
                  benefits={[
                    "Apoya el hosting de eventos y honorarios de speakers",
                    "Financia iniciativas de la comunidad",
                    "Patrocina charlas y workshops",
                    "Listado destacado en el sitio web",
                    "Logo en todos los materiales de eventos",
                    "Reconocimiento en newsletters",
                  ]}
                  cta="Ser Patrocinador de Presupuesto"
                />
                <SponsorshipTier
                  icon={<Building2 size={32} />}
                  title="Patrocinador de Espacios"
                  description="Proporciona venue e infraestructura para eventos"
                  features={[
                    "Hospeda meetups comunitarios",
                    "Apoya workshops y conferencias",
                    "Proporciona espacios de trabajo para colaboraciones",
                    "Listado destacado en el sitio web",
                    "Logo en todos los materiales de eventos",
                    "Reconocimiento en newsletters",
                  ]}
                  cta="Ser Patrocinador de Espacios"
                />
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-8">
                Cómo Convertirse en Patrocinador
              </h2>
              <div className="space-y-6">
                <Step
                  number={1}
                  title="Prepara tu Información"
                  description="Reúne el logo de tu empresa, nombre, sitio web y una breve descripción de tu organización."
                />
                <Step
                  number={2}
                  title="Crea un Pull Request"
                  description="Haz fork de nuestro repositorio de GitHub y agrega los detalles de tu patrocinio al archivo de datos de patrocinadores."
                />
                <Step
                  number={3}
                  title="Envía para Revisión"
                  description="Crea un PR con tus cambios. Nuestro equipo lo revisará y lo aprobará en 24-48 horas."
                />
                <Step
                  number={4}
                  title="Aparece Destacado"
                  description="Una vez aprobado, tu organización aparecerá en nuestro sitio web y en nuestros eventos!"
                />
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-foreground/70 mb-6">
                  Todos los patrocinios se gestionan a través de nuestro
                  repositorio de GitHub para asegurar transparencia y confianza
                  de la comunidad.
                </p>
                <a
                  href="https://github.com/aileenvl/mexico-tech-community-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  <Mail size={18} />
                  Ver Guía de Contribución
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">¿Preguntas?</h3>
              <p className="text-foreground/70 mb-6">
                ¿Tienes preguntas sobre oportunidades de patrocinio? Contáctanos
                para más información.
              </p>
              <a
                href="mailto:sponsors@mtytech.community"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all"
              >
                <Mail size={18} />
                Contáctanos
              </a>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

interface Sponsor {
  id: string;
  name: string;
  description: string;
  type: "budget" | "space";
  logo?: string;
  website?: string;
}

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const icon =
    sponsor.type === "budget" ? <DollarSign size={24} /> : <MapPin size={24} />;
  const color = sponsor.type === "budget" ? "text-primary" : "text-accent";

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all">
      <div className="flex items-start gap-4 mb-4">
        <div className={`${color}`}>{icon}</div>
        <div className="flex-grow">
          <h3 className="text-lg font-bold">{sponsor.name}</h3>
          <span
            className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold ${
              sponsor.type === "budget"
                ? "bg-primary/20 text-primary"
                : "bg-accent/20 text-accent"
            }`}
          >
            {sponsor.type === "budget"
              ? "Patrocinador de Presupuesto"
              : "Patrocinador de Espacios"}
          </span>
        </div>
      </div>

      <p className="text-foreground/70 text-sm mb-4">{sponsor.description}</p>

      {sponsor.logo && (
        <div className="mb-4 h-12 flex items-center justify-center bg-muted rounded">
          <div className="text-xs font-semibold text-foreground/70">
            {sponsor.logo}
          </div>
        </div>
      )}

      {sponsor.website && (
        <a
          href={sponsor.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-accent text-sm font-semibold transition-colors"
        >
          Visitar Sitio Web
          <ExternalLink size={14} />
        </a>
      )}
    </div>
  );
}

function SponsorshipTier({
  icon,
  title,
  description,
  benefits,
  features,
  cta,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits?: string[];
  features?: string[];
  cta: string;
}) {
  const items = benefits || features || [];

  return (
    <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all">
      <div className="mb-6 text-primary">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-foreground/70 mb-6">{description}</p>

      <ul className="space-y-4 mb-8">
        {items.map((item, idx) => (
          <li key={idx} className="flex gap-3 items-start">
            <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
            <span className="text-foreground/80">{item}</span>
          </li>
        ))}
      </ul>

      <a
        href="https://github.com/aileenvl/mexico-tech-community-website"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all text-center inline-block"
      >
        {cta}
      </a>
    </div>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 text-primary font-bold text-lg">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-foreground/70">{description}</p>
      </div>
    </div>
  );
}
