/**
 * Neural AI Movie Recommender & Vibe Engine
 * Synthesizes prompt vibes and computes neural resonance matches
 */

const NeuralRecommender = {
  PRESET_VIBES: [
    {
      id: "rogue-ai",
      title: "Rogue AI & Synthetic Consciousness",
      icon: "🤖",
      tags: ["AI & Androids", "Cyber-Mystery"],
      keywords: ["ai", "robot", "synthetic", "consciousness", "turing", "eva", "sentient", "machine", "algorithm"]
    },
    {
      id: "neon-noir",
      title: "Gritty Rain, Neon & Cyber-Noir Detectives",
      icon: "🌧️",
      tags: ["Cyberpunk", "Neo-Noir"],
      keywords: ["blade", "runner", "deckard", "detective", "rain", "neon", "replicant", "precog", "crime", "investigation"]
    },
    {
      id: "simulation-matrix",
      title: "Mind-Bending Simulation & False Reality",
      icon: "🌐",
      tags: ["Mind-Bender", "Cyberpunk", "Sci-Fi"],
      keywords: ["matrix", "simulation", "dream", "reality", "inception", "redpill", "spoon", "illusion", "subconscious"]
    },
    {
      id: "high-octane-chrome",
      title: "High-Octane Chrome & Mercenary Action",
      icon: "⚡",
      tags: ["Action", "Cyberpunk", "Anime"],
      keywords: ["edgerunners", "sandevistan", "chrome", "akira", "action", "fight", "upgrade", "speed", "cyberpsychosis"]
    },
    {
      id: "deep-space-singularity",
      title: "Deep Space Odyssey & Wormhole Physics",
      icon: "🌌",
      tags: ["Space Odyssey", "Sci-Fi"],
      keywords: ["space", "singularity", "black hole", "interstellar", "gravity", "wormhole", "cosmos", "dune", "void"]
    },
    {
      id: "bio-mecha-transhumanism",
      title: "Biomechanical Mecha & Transhumanist Evolution",
      icon: "🛡️",
      tags: ["Anime", "Sci-Fi", "Cyberpunk"],
      keywords: ["evangelion", "mecha", "alita", "cyborg", "berserker", "exo", "ghost", "shell", "enhancement"]
    }
  ],

  /**
   * Scrambler animation helper
   */
  scrambleText(element, finalText, durationMs = 800) {
    const chars = "01010101#@%&<>[]{}+=*~!?/\\ABCDEFXYZ";
    const startTime = Date.now();
    const length = finalText.length;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / durationMs, 1.0);
      const revealIndex = Math.floor(progress * length);

      let scrambled = "";
      for (let i = 0; i < length; i++) {
        if (i < revealIndex) {
          scrambled += finalText[i];
        } else {
          scrambled += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      element.textContent = scrambled;

      if (progress >= 1.0) {
        clearInterval(interval);
        element.textContent = finalText;
      }
    }, 40);
  },

  /**
   * Evaluates movies and computes compatibility score
   */
  findMatches(vibeQuery, allMovies) {
    const queryLower = (vibeQuery || "").toLowerCase();
    const tokens = queryLower.split(/[\s,.-]+/).filter(t => t.length > 2);

    const scored = allMovies.map(movie => {
      let score = 0;
      const titleLower = movie.title.toLowerCase();
      const synopsisLower = movie.synopsis.toLowerCase();
      const taglineLower = (movie.tagline || "").toLowerCase();
      const genreString = movie.genres.join(" ").toLowerCase();

      // Check keywords
      tokens.forEach(tok => {
        if (titleLower.includes(tok)) score += 35;
        if (genreString.includes(tok)) score += 25;
        if (taglineLower.includes(tok)) score += 18;
        if (synopsisLower.includes(tok)) score += 12;
      });

      // Boost by resonance and cyber rating
      score += (movie.resonanceScore || 80) * 0.2;
      score += (movie.cyberRating || 8.0) * 2;

      // Check preset match
      this.PRESET_VIBES.forEach(preset => {
        if (queryLower.includes(preset.title.toLowerCase()) || preset.keywords.some(k => queryLower.includes(k))) {
          if (movie.genres.some(g => preset.tags.includes(g))) {
            score += 40;
          }
        }
      });

      return {
        movie,
        score: Math.min(Math.round(score), 99)
      };
    });

    scored.sort((a, b) => b.score - a.score);
    return scored;
  }
};
