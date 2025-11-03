/* ===========================================
   TRACK CARD COMPONENT
   Displays individual music track with:
   - Glassmorphic card design
   - Album artwork
   - Play/Pause controls
   - Track metadata (title, description)
   =========================================== */

import { Play, Pause } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface TrackCardProps {
  title: string;
  description: string;
  audioUrl: string;
  imageUrl: string;
  // Optional delay for staggered animation entrance
  animationDelay?: number;
}

export const TrackCard = ({ 
  title, 
  description, 
  audioUrl, 
  imageUrl,
  animationDelay = 0 
}: TrackCardProps) => {
  /* ===========================================
     AUDIO PLAYER STATE MANAGEMENT
     =========================================== */
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio element on component mount
  useEffect(() => {
    audioRef.current = new Audio(audioUrl);
    
    // Cleanup: pause and remove audio on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioUrl]);

  /* ===========================================
     PLAY/PAUSE TOGGLE HANDLER
     =========================================== */
  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  /* ===========================================
     RENDER: GLASSMORPHIC CARD WITH AUDIO CONTROLS
     =========================================== */
  return (
    <div 
      className="glass-card rounded-lg overflow-hidden transition-smooth hover:scale-[1.02] hover:shadow-2xl group"
      style={{ 
        animationDelay: `${animationDelay}ms`,
        animation: 'float 6s ease-in-out infinite'
      }}
    >
      {/* Album Artwork Container */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
        
        {/* Play/Pause Button Overlay - Centered on image */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
          <Button
            size="lg"
            onClick={togglePlayPause}
            className="w-16 h-16 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-accent/50 transition-all"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8" fill="currentColor" />
            ) : (
              <Play className="w-8 h-8" fill="currentColor" />
            )}
          </Button>
        </div>
      </div>

      {/* Track Information Section */}
      <div className="p-6 space-y-3">
        {/* Track Title - Neon green accent */}
        <h3 className="text-xl font-bold text-accent neon-glow tracking-wide">
          {title}
        </h3>
        
        {/* Track Description - White text */}
        <p className="text-sm text-foreground/80 leading-relaxed">
          {description}
        </p>

        {/* Compact Play/Pause Control */}
        <div className="flex items-center gap-3 pt-2">
          <Button
            size="sm"
            variant="outline"
            onClick={togglePlayPause}
            className="border-accent/50 text-accent hover:bg-accent/10 hover:border-accent transition-smooth"
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 mr-2" />
                Pause
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                Play
              </>
            )}
          </Button>
          
          {/* Audio format indicator */}
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            MP3
          </span>
        </div>
      </div>
    </div>
  );
};
