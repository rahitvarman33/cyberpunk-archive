# CYBER//FLIX - Blue AI Cyberpunk Movie Explorer

An immersive, zero-image front-end web application built with **Blue AI Cyberpunk** aesthetics, interactive SVG vector holograms, neural data matrix filtering, and Web Audio API synthesized soundscapes.

---

## 🌟 Key Features

1. **Blue AI Cyberpunk Visual Interface**:
   - Deep obsidian, electric cyan (`#00F0FF`), and plasma blue (`#38BDF8`) color scheme.
   - Glassmorphic HUD overlay panels, geometric polygon cutouts (`clip-path`), and CRT scanline CRT overlay.
   - Dynamic HTML5 Canvas background rendering an interactive neural mesh & floating particle nodes connected by laser vectors.

2. **100% Vector & Procedural Symbols (Zero Images)**:
   - In strict adherence to the design requirement, **no image files (`.jpg`, `.png`, `.webp`) or photo URLs are used**.
   - Every movie features a custom-engineered procedural holographic SVG poster containing glowing geometric emblems (e.g. *Cybernetic Eye*, *Neural Synapse Cortex*, *Matrix Data Stream*, *Quantum Singularity*, *Synthetic Android Wireframe*, *Tron Identity Disc*, *Sandevistan Cyber-Spine*, *Bionic Silicon Chip*, and more).

3. **Real-Time Search & Multi-Genre Matrix**:
   - Instant text search across movie titles, directors, cast members, and tech classifications.
   - Genre filter chips (*Cyberpunk, AI & Androids, Sci-Fi, Neo-Noir, Action, Anime, Cyber-Mystery, Mind-Bender, Space Odyssey, Dystopian*).
   - Minimum Cyber-Rating range slider (e.g. `8.5+`).
   - Dynamic Multi-Sort (*Rating, AI Resonance, Newest Release, Oldest Era, Alphabetical*).

4. **Neural Memory (Favorites System)**:
   - One-click favorite synchronization with audio-reactive feedback.
   - "Favorites Only" quick HUD filter tab with real-time counter badge.
   - Full persistence across page reloads via `localStorage`.
   - Data Export feature to download backup JSON files.

5. **Deep Movie HUD Inspection Modal**:
   - Interactive high-resolution holographic poster view.
   - Detailed plot synopsis, memorable transmission quotes, and technical specs.
   - Four interactive inspection tabs: **Overview**, **Cyber-Metrics** (Resonance, Fidelity, Complexity, Adrenaline), **Tech Specs** (Neural Sync, Operating System, Security Protocol), and **Cast & AI Crew** vector avatar tokens.
   - Integrated quote audio frequency speaker simulator.

6. **AI Neural Recommender & Vibe Engine**:
   - Choose from pre-tuned atmospheric neural vibes or type custom prompts to calculate matching compatibility scores with matrix text-scrambler decoding animation.

7. **Inject Custom Cyber-Movies**:
   - Add custom movies with title, release year, duration, rating, genre tags, procedural symbol picker with live SVG preview, director, cast, and synopsis.

8. **Web Audio UI Synthesizer**:
   - Built-in sound generator using Web Audio API for clicks, hover chirps, favorite arpeggios, and modal sweeps with a master mute toggle.

---

## 🚀 How to Run

Simply open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Firefox, Brave, Safari) or serve with any static server:

```powershell
# Option 1: Open directly
Start-Process "index.html"

# Option 2: Run with Python HTTP Server
python -m http.server 8080
```

---

## 📁 File Structure

```
cyberpunk-movie-explorer/
├── index.html              # Main HUD structure and modal overlays
├── README.md               # Application documentation
├── css/
│   ├── cyber-theme.css     # Design tokens, typography, glassmorphism, scanlines
│   ├── components.css      # Movie cards, HUD modal, search bar, sliders, buttons
│   └── animations.css      # Scanlines, glitch text, holographic pulse, laser sweeps
└── js/
    ├── movies-data.js      # 24+ rich cyberpunk movie entries with cyber metrics & specs
    ├── glyph-renderer.js   # Procedural SVG vector poster & emblem rendering engine
    ├── audio-synth.js      # Web Audio API sound effects synthesizer
    ├── storage.js          # LocalStorage persistence manager
    ├── recommender.js      # Neural vibe AI matching & scrambler engine
    └── app.js              # Application state, canvas animation, and UI controller
```
