import { GenreCard } from "@/components/GenreCard";
import { MainHeader } from "@/components/MainHeader";
import trackCover1 from "@/assets/track-cover-1.jpg";
import trackCover2 from "@/assets/track-cover-2.jpg";
import trackCover3 from "@/assets/track-cover-3.jpg";
import trackCover4 from "@/assets/track-cover-7.jpg";

const genres = [
  {
    title: "Hex Step",
    description: "A collection of dark and driving Drum & Bass tracks with a focus on intricate rhythms and atmospheric sound design.",
    imageUrl: trackCover1,
    linkUrl: "/hex-step",
  },
  {
    title: "Mellow Tapes",
    description: "A series of laid-back House tracks, featuring smooth melodies, deep basslines, and a nostalgic, tape-saturated feel.",
    imageUrl: trackCover2,
    linkUrl: "/mellow-tapes",
  },
  {
    title: "Dark Cut",
    description: "Experimental and raw cuts that blend elements of techno, industrial, and noise.",
    imageUrl: trackCover3,
    linkUrl: "/dark-cut",
  },
  {
    title: "Haunted Garage",
    description: "A fusion of UK Garage rhythms with eerie, ghostly atmospheres and deep sub-bass.",
    imageUrl: trackCover4,
    linkUrl: "/haunted-garrage",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainHeader />
      <header className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-thin text-accent neon-glow tracking-tight">
          VOID-FLUX SOUND
        </h1>
        <p className="text-foreground/70 mt-2 text-sm md:text-base tracking-wide">
          A personal gallery of generative music and sound experiments.
        </p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-8">
          {genres.map((genre) => (
            <GenreCard key={genre.title} {...genre} />
          ))}
        </div>
      </main>

      <footer className="mt-24 py-8 border-t border-border/20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            Select a genre to explore the interactive soundscapes.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
