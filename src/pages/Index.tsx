/* ===========================================
   MAIN LANDING PAGE - MUSIC COMPOSITION ARCHIVE
   Dark techno aesthetic with asymmetric layout
   Features glassmorphic cards in masonry grid
   =========================================== */

import { TrackCard } from "@/components/TrackCard";
import trackCover1 from "@/assets/track-cover-1.jpg";
import trackCover2 from "@/assets/track-cover-2.jpg";
import trackCover3 from "@/assets/track-cover-3.jpg";
import trackCover4 from "@/assets/track-cover-7.jpg";

/* ===========================================
   TRACK DATA STRUCTURE
   Add your tracks here manually
   Audio files should be placed in public/audio/
   They'll be accessible at /audio/filename.mp3
   =========================================== */

interface Track {
  id: string;
  title: string;
  description: string;
  // Public URL for external access (e.g., Tampermonkey scripts)
  audioUrl: string;
  imageUrl: string;
}

const tracks: Track[] = [
  {
    id: "1",
    title: "Ethereal Echoes",
    description: "A haunting melody that fades in and out, creating a sense of spaciousness and mystery.",
    audioUrl: "/audio/1-2.mp3",
    imageUrl: trackCover1,
  },
  {
    id: "2",
    title: "Lunar Cycles",
    description: "A rhythmic and percussive track with a driving beat, perfect for a late-night coding session.",
    audioUrl: "/audio/1-3.mp3",
    imageUrl: trackCover2,
  },
  {
    id: "3",
    title: "Foolmoon",
    description: "An atmospheric and ambient track with a sense of wonder and exploration.",
    audioUrl: "/audio/foolmoon.mp3",
    imageUrl: trackCover3,
  },
  {
    id: "4",
    title: "Provide",
    description: "A nervoutic beat loop haunted by the liminal ghosts of the concrete passages ",
    audioUrl: "audio/Strudel.mp3",
    imageUrl: trackCover4,
  }
];

/* ===========================================
   MAIN COMPONENT RENDER
   =========================================== */

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section - Fixed positioning */}
      <header className="sticky top-0 z-50 glass-card border-b border-border/20 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-6">
          {/* Main Title - Neon green with glow effect */}
          <h1 className="text-4xl md:text-5xl font-bold text-accent neon-glow tracking-tight">
            DARK ARCHIVE
          </h1>
          {/* Subtitle - White text */}
          <p className="text-foreground/70 mt-2 text-sm md:text-base tracking-wide">
            Cursed loops / Haunted soundscapes
          </p>
        </div>
      </header>

      {/* Main Content - Asymmetric Masonry Grid */}
      <main className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-16 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Sound Collection
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            A curated archive of dark techno compositions. Each track is built
            from industrial elements, minimalist rhythms, and atmospheric textures.
          </p>
          <p className="text-sm text-muted-foreground italic">
            All tracks are accessible via direct URI links for external use.
            Right-click on any track card to inspect audio URLs.
          </p>
        </section>

        {/* Asymmetric Track Grid - Masonry layout */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tracks.map((track, index) => (
            <div
              key={track.id}
              className={`
                ${index % 3 === 0 ? 'md:col-span-1' : ''}
                ${index % 3 === 1 ? 'md:col-span-1 md:row-span-1' : ''}
                ${index % 3 === 2 ? 'md:col-span-1' : ''}
              `}
            >
              <TrackCard
                title={track.title}
                description={track.description}
                audioUrl={track.audioUrl}
                imageUrl={track.imageUrl}
                animationDelay={index * 100}
              />
            </div>
          ))}
        </section>

        {/* Footer Section */}
        <footer className="mt-24 py-8 border-t border-border/20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              To add more tracks: Place audio files in{" "}
              <code className="text-accent bg-muted/30 px-2 py-1 rounded">
                public/audio/
              </code>{" "}
              and update the tracks array in{" "}
              <code className="text-accent bg-muted/30 px-2 py-1 rounded">
                src/pages/Index.tsx
              </code>
            </p>
            <p className="text-xs text-muted-foreground/60 mt-4">
              Built for deployment on Vercel / Netlify
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
