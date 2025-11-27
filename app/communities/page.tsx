"use client";

import { useState, useMemo } from "react";
import { Users, Search } from "lucide-react";
import Link from "next/link";
import { communitiesData } from "@/data/communities";
import { CommunityCard } from "@/components/community-card";

export default function CommunitiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [language, setLanguage] = useState<"es" | "en">("en"); // Default to English to match design

  const filteredCommunities = useMemo(() => {
    return communitiesData.filter((community) => {
      const searchTerm = searchQuery.toLowerCase();
      const matchesSearch =
        community.name.toLowerCase().includes(searchTerm) ||
        community.nameEs.toLowerCase().includes(searchTerm) ||
        community.description.toLowerCase().includes(searchTerm) ||
        community.descriptionEs.toLowerCase().includes(searchTerm) ||
        community.city.toLowerCase().includes(searchTerm) ||
        community.state.toLowerCase().includes(searchTerm);

      return matchesSearch;
    });
  }, [searchQuery]);

  return (
    <main className="min-h-screen bg-background pb-16">
       {/* Header Section */}
       <section className="container mx-auto px-4 pt-12 pb-8 border-b border-border">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
           <div>
             <h1 className="text-3xl md:text-4xl font-bold mb-2">Mexico Tech Ecosystem</h1>
             <p className="text-muted-foreground">Discover local communities and events in Mexico.</p>
           </div>
           
           {/* Language Toggle (Optional, keeping it simple/subtle) */}
           <div className="flex gap-2 text-sm">
              <button 
                onClick={() => setLanguage("en")} 
                className={`px-2 py-1 rounded ${language === 'en' ? 'bg-secondary font-medium' : 'text-muted-foreground'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage("es")} 
                className={`px-2 py-1 rounded ${language === 'es' ? 'bg-secondary font-medium' : 'text-muted-foreground'}`}
              >
                ES
              </button>
           </div>
        </div>

        {/* Controls: Tabs & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Tabs */}
          <div className="flex gap-2 p-1 bg-muted/30 rounded-lg self-start md:self-auto">
            <button className="px-4 py-2 bg-background shadow-sm rounded-md text-sm font-medium text-foreground">
              Communities
            </button>
            <Link href="/events" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Events
            </Link>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-auto md:min-w-[300px]">
             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
             <input 
               type="text"
               placeholder="Search..."
               className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
             />
          </div>
        </div>
      </section>

      {/* Communities Grid */}
      <section className="container mx-auto px-4 py-8">
        {filteredCommunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCommunities.map((community) => (
              <CommunityCard
                key={community.id}
                community={community}
                language={language}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Users size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">No communities found</h3>
            <p className="text-muted-foreground">Try adjusting your search.</p>
          </div>
        )}
      </section>
    </main>
  );
}
