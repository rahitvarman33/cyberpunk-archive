/**
 * Cyberpunk Vector & Glyph Engine
 * 100% Image-Free Procedural Holographic Artwork Generator
 */

const GlyphRenderer = {
  /**
   * Generates a primary glowing vector emblem SVG based on glyph type
   */
  getEmblemSVG(glyphType, primaryColor = "#00f0ff", secondaryColor = "#3b82f6") {
    const p = primaryColor;
    const s = secondaryColor;

    switch (glyphType) {
      case "cyber_eye":
        return `
          <g transform="translate(100, 100)">
            <!-- Outer Target Rings -->
            <circle cx="0" cy="0" r="75" fill="none" stroke="${p}" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.6"/>
            <circle cx="0" cy="0" r="62" fill="none" stroke="${s}" stroke-width="2"/>
            <circle cx="0" cy="0" r="50" fill="none" stroke="${p}" stroke-width="1" stroke-dasharray="3 3"/>
            <!-- Eye Contour -->
            <path d="M-60 0 C-30 -38, 30 -38, 60 0 C30 38, -30 38, -60 0 Z" fill="rgba(0, 240, 255, 0.08)" stroke="${p}" stroke-width="2.5"/>
            <!-- Iris & Pupil -->
            <circle cx="0" cy="0" r="26" fill="rgba(6, 18, 38, 0.85)" stroke="${p}" stroke-width="2"/>
            <circle cx="0" cy="0" r="14" fill="${p}" opacity="0.9"/>
            <circle cx="0" cy="0" r="6" fill="#ffffff"/>
            <!-- Optical Aperture Blades -->
            <line x1="-26" y1="0" x2="-14" y2="0" stroke="${s}" stroke-width="2"/>
            <line x1="26" y1="0" x2="14" y2="0" stroke="${s}" stroke-width="2"/>
            <line x1="0" y1="-26" x2="0" y2="-14" stroke="${s}" stroke-width="2"/>
            <line x1="0" y1="26" x2="0" y2="14" stroke="${s}" stroke-width="2"/>
            <!-- Crosshairs -->
            <line x1="-80" y1="0" x2="-65" y2="0" stroke="${p}" stroke-width="2"/>
            <line x1="80" y1="0" x2="65" y2="0" stroke="${p}" stroke-width="2"/>
            <line x1="0" y1="-80" x2="0" y2="-65" stroke="${p}" stroke-width="2"/>
            <line x1="0" y1="80" x2="0" y2="65" stroke="${p}" stroke-width="2"/>
            <!-- HUD Angle Brackets -->
            <path d="M-55 -45 L-65 -45 L-65 -35" fill="none" stroke="${p}" stroke-width="2"/>
            <path d="M55 -45 L65 -45 L65 -35" fill="none" stroke="${p}" stroke-width="2"/>
            <path d="M-55 45 L-65 45 L-65 35" fill="none" stroke="${p}" stroke-width="2"/>
            <path d="M55 45 L65 45 L65 35" fill="none" stroke="${p}" stroke-width="2"/>
          </g>
        `;

      case "matrix_grid":
        return `
          <g transform="translate(100, 100)">
            <rect x="-70" y="-70" width="140" height="140" fill="none" stroke="${p}" stroke-width="1.5" opacity="0.5" stroke-dasharray="10 5"/>
            <rect x="-55" y="-55" width="110" height="110" fill="rgba(0, 255, 102, 0.05)" stroke="${s}" stroke-width="2"/>
            <!-- Matrix Gateway Node -->
            <polygon points="0,-45 45,0 0,45 -45,0" fill="rgba(0, 240, 255, 0.15)" stroke="${p}" stroke-width="2"/>
            <polygon points="0,-25 25,0 0,25 -25,0" fill="${p}" opacity="0.3" stroke="#fff" stroke-width="1"/>
            <!-- Digital Data Pillars -->
            <line x1="-35" y1="-65" x2="-35" y2="65" stroke="${p}" stroke-width="1.5" stroke-dasharray="4 6"/>
            <line x1="-15" y1="-65" x2="-15" y2="65" stroke="${s}" stroke-width="1.5" stroke-dasharray="6 3"/>
            <line x1="15" y1="-65" x2="15" y2="65" stroke="${s}" stroke-width="1.5" stroke-dasharray="6 3"/>
            <line x1="35" y1="-65" x2="35" y2="65" stroke="${p}" stroke-width="1.5" stroke-dasharray="4 6"/>
            <!-- Center Core -->
            <circle cx="0" cy="0" r="10" fill="#ffffff" filter="drop-shadow(0 0 8px ${p})"/>
          </g>
        `;

      case "neural_cortex":
        return `
          <g transform="translate(100, 100)">
            <circle cx="0" cy="0" r="70" fill="rgba(56, 189, 248, 0.05)" stroke="${s}" stroke-width="1" stroke-dasharray="4 8"/>
            <!-- Left & Right Brain Lobes -->
            <path d="M-5 -45 C-40 -45 -55 -20 -55 5 C-55 30 -35 48 -10 48 C-5 48 -5 35 -5 20 Z" fill="none" stroke="${p}" stroke-width="2.5"/>
            <path d="M5 -45 C40 -45 55 -20 55 5 C55 30 35 48 10 48 C5 48 5 35 5 20 Z" fill="none" stroke="${p}" stroke-width="2.5"/>
            <!-- Axon Synaptic Nodes -->
            <circle cx="-30" cy="-20" r="4" fill="${p}"/>
            <circle cx="-38" cy="15" r="4" fill="${s}"/>
            <circle cx="-15" cy="30" r="4" fill="${p}"/>
            <circle cx="30" cy="-20" r="4" fill="${p}"/>
            <circle cx="38" cy="15" r="4" fill="${s}"/>
            <circle cx="15" cy="30" r="4" fill="${p}"/>
            <circle cx="0" cy="-10" r="6" fill="#fff"/>
            <!-- Synaptic Connection Arcs -->
            <line x1="-30" y1="-20" x2="0" y2="-10" stroke="${p}" stroke-width="1.5"/>
            <line x1="30" y1="-20" x2="0" y2="-10" stroke="${p}" stroke-width="1.5"/>
            <line x1="-38" y1="15" x2="-15" y2="30" stroke="${s}" stroke-width="1.5"/>
            <line x1="38" y1="15" x2="15" y2="30" stroke="${s}" stroke-width="1.5"/>
            <line x1="-15" y1="30" x2="0" y2="-10" stroke="${p}" stroke-width="1.5"/>
            <line x1="15" y1="30" x2="0" y2="-10" stroke="${p}" stroke-width="1.5"/>
          </g>
        `;

      case "quantum_singularity":
        return `
          <g transform="translate(100, 100)">
            <!-- Accretion Disk Ellipses -->
            <ellipse cx="0" cy="0" rx="76" ry="24" fill="none" stroke="${p}" stroke-width="2" transform="rotate(-25)"/>
            <ellipse cx="0" cy="0" rx="64" ry="18" fill="rgba(0, 240, 255, 0.1)" stroke="${s}" stroke-width="2" transform="rotate(-25)"/>
            <ellipse cx="0" cy="0" rx="76" ry="24" fill="none" stroke="${p}" stroke-width="1.5" stroke-dasharray="6 6" transform="rotate(65)"/>
            <!-- Event Horizon Black Void Core -->
            <circle cx="0" cy="0" r="28" fill="#030712" stroke="${p}" stroke-width="3"/>
            <circle cx="0" cy="0" r="14" fill="#000000"/>
            <circle cx="0" cy="0" r="4" fill="#ffffff"/>
            <!-- Lensing Rays -->
            <line x1="0" y1="-75" x2="0" y2="-40" stroke="${p}" stroke-width="2"/>
            <line x1="0" y1="75" x2="0" y2="40" stroke="${p}" stroke-width="2"/>
            <line x1="-75" y1="0" x2="-40" y2="0" stroke="${p}" stroke-width="2"/>
            <line x1="75" y1="0" x2="40" y2="0" stroke="${p}" stroke-width="2"/>
          </g>
        `;

      case "android_face":
        return `
          <g transform="translate(100, 100)">
            <!-- Polygonal Cranium -->
            <polygon points="0,-65 48,-40 40,25 0,65 -40,25 -48,-40" fill="rgba(6, 18, 38, 0.8)" stroke="${p}" stroke-width="2.5"/>
            <!-- Cybernetic Half-Split Line -->
            <line x1="0" y1="-65" x2="0" y2="65" stroke="${s}" stroke-width="2" stroke-dasharray="6 3"/>
            <!-- Optical Sensor Visor -->
            <rect x="-35" y="-18" width="70" height="14" rx="3" fill="rgba(0, 240, 255, 0.2)" stroke="${p}" stroke-width="2"/>
            <circle cx="-16" cy="-11" r="4" fill="#fff"/>
            <circle cx="16" cy="-11" r="4" fill="${p}"/>
            <!-- Jaw Circuit Paths -->
            <path d="M-30 20 L-18 20 L-10 40" fill="none" stroke="${s}" stroke-width="1.5"/>
            <path d="M30 20 L18 20 L10 40" fill="none" stroke="${s}" stroke-width="1.5"/>
            <circle cx="-10" cy="40" r="2.5" fill="${p}"/>
            <circle cx="10" cy="40" r="2.5" fill="${p}"/>
          </g>
        `;

      case "sandevistan_spine":
        return `
          <g transform="translate(100, 100)">
            <!-- Vertebrae Segment Stack -->
            <line x1="0" y1="-70" x2="0" y2="70" stroke="${s}" stroke-width="3"/>
            <path d="M-35 -50 L0 -60 L35 -50 L0 -40 Z" fill="rgba(0, 240, 255, 0.2)" stroke="${p}" stroke-width="2"/>
            <path d="M-42 -25 L0 -35 L42 -25 L0 -15 Z" fill="rgba(0, 240, 255, 0.3)" stroke="${p}" stroke-width="2"/>
            <path d="M-45 0 L0 -10 L45 0 L0 10 Z" fill="rgba(0, 240, 255, 0.4)" stroke="#fff" stroke-width="2.5"/>
            <path d="M-42 25 L0 15 L42 25 L0 35 Z" fill="rgba(0, 240, 255, 0.3)" stroke="${p}" stroke-width="2"/>
            <path d="M-35 50 L0 40 L35 50 L0 60 Z" fill="rgba(0, 240, 255, 0.2)" stroke="${p}" stroke-width="2"/>
            <!-- Voltage Discharges -->
            <polyline points="-50,-10 -60,0 -52,10" fill="none" stroke="#f43f5e" stroke-width="2"/>
            <polyline points="50,-10 60,0 52,10" fill="none" stroke="#f43f5e" stroke-width="2"/>
          </g>
        `;

      case "identity_disc":
        return `
          <g transform="translate(100, 100)">
            <circle cx="0" cy="0" r="70" fill="none" stroke="${p}" stroke-width="3"/>
            <circle cx="0" cy="0" r="56" fill="rgba(0, 240, 255, 0.1)" stroke="${s}" stroke-width="2"/>
            <circle cx="0" cy="0" r="42" fill="none" stroke="${p}" stroke-width="2" stroke-dasharray="14 8"/>
            <circle cx="0" cy="0" r="24" fill="#030712" stroke="#fff" stroke-width="2"/>
            <circle cx="0" cy="0" r="8" fill="${p}"/>
            <!-- Outer Disc Power Fins -->
            <line x1="-70" y1="0" x2="-80" y2="0" stroke="${p}" stroke-width="3"/>
            <line x1="70" y1="0" x2="80" y2="0" stroke="${p}" stroke-width="3"/>
            <line x1="0" y1="-70" x2="0" y2="-80" stroke="${p}" stroke-width="3"/>
            <line x1="0" y1="70" x2="0" y2="80" stroke="${p}" stroke-width="3"/>
          </g>
        `;

      case "bionic_chip":
        return `
          <g transform="translate(100, 100)">
            <!-- Micro-Die Silicon Square -->
            <rect x="-45" y="-45" width="90" height="90" rx="6" fill="rgba(6, 18, 38, 0.9)" stroke="${p}" stroke-width="2.5"/>
            <rect x="-30" y="-30" width="60" height="60" fill="rgba(0, 240, 255, 0.15)" stroke="${s}" stroke-width="1.5"/>
            <!-- Internal Logic Cores -->
            <rect x="-18" y="-18" width="15" height="15" fill="${p}" opacity="0.8"/>
            <rect x="3" y="-18" width="15" height="15" fill="${s}" opacity="0.8"/>
            <rect x="-18" y="3" width="15" height="15" fill="${s}" opacity="0.8"/>
            <rect x="3" y="3" width="15" height="15" fill="${p}" opacity="0.8"/>
            <!-- Processor Pin Array -->
            <line x1="-35" y1="-55" x2="-35" y2="-45" stroke="${p}" stroke-width="2"/>
            <line x1="-15" y1="-55" x2="-15" y2="-45" stroke="${p}" stroke-width="2"/>
            <line x1="15" y1="-55" x2="15" y2="-45" stroke="${p}" stroke-width="2"/>
            <line x1="35" y1="-55" x2="35" y2="-45" stroke="${p}" stroke-width="2"/>
            <line x1="-35" y1="45" x2="-35" y2="55" stroke="${p}" stroke-width="2"/>
            <line x1="-15" y1="45" x2="-15" y2="55" stroke="${p}" stroke-width="2"/>
            <line x1="15" y1="45" x2="15" y2="55" stroke="${p}" stroke-width="2"/>
            <line x1="35" y1="45" x2="35" y2="55" stroke="${p}" stroke-width="2"/>
            <line x1="-55" y1="-25" x2="-45" y2="-25" stroke="${p}" stroke-width="2"/>
            <line x1="-55" y1="25" x2="-45" y2="25" stroke="${p}" stroke-width="2"/>
            <line x1="45" y1="-25" x2="55" y2="-25" stroke="${p}" stroke-width="2"/>
            <line x1="45" y1="25" x2="55" y2="25" stroke="${p}" stroke-width="2"/>
          </g>
        `;

      case "bionic_skull":
        return `
          <g transform="translate(100, 100)">
            <path d="M-45 -30 C-45 -60 45 -60 45 -30 C45 0 35 15 28 35 L-28 35 C-35 15 -45 0 -45 -30 Z" fill="rgba(6, 18, 38, 0.85)" stroke="${p}" stroke-width="2.5"/>
            <!-- Skull Eye Sockets -->
            <polygon points="-28,-18 -10,-24 -12,-5 -26,-2" fill="${s}" stroke="${p}" stroke-width="2"/>
            <polygon points="28,-18 10,-24 12,-5 26,-2" fill="${s}" stroke="${p}" stroke-width="2"/>
            <circle cx="-18" cy="-12" r="4" fill="#f43f5e"/>
            <circle cx="18" cy="-12" r="4" fill="#00f0ff"/>
            <!-- Teeth / Grill -->
            <rect x="-20" y="42" width="40" height="14" fill="none" stroke="${p}" stroke-width="2"/>
            <line x1="-10" y1="42" x2="-10" y2="56" stroke="${s}" stroke-width="1.5"/>
            <line x1="0" y1="42" x2="0" y2="56" stroke="${s}" stroke-width="1.5"/>
            <line x1="10" y1="42" x2="10" y2="56" stroke="${s}" stroke-width="1.5"/>
          </g>
        `;

      case "chrono_rift":
        return `
          <g transform="translate(100, 100)">
            <!-- Hourglass / Temporal Inversion Vortex -->
            <polygon points="-50,-60 50,-60 0,0 -50,60 50,60 0,0" fill="rgba(2, 132, 199, 0.15)" stroke="${p}" stroke-width="2"/>
            <ellipse cx="0" cy="-60" rx="50" ry="12" fill="none" stroke="${s}" stroke-width="2"/>
            <ellipse cx="0" cy="60" rx="50" ry="12" fill="none" stroke="${s}" stroke-width="2"/>
            <circle cx="0" cy="0" r="10" fill="#fff" filter="drop-shadow(0 0 6px ${p})"/>
            <!-- Reversed Flow Stream -->
            <line x1="0" y1="-50" x2="0" y2="50" stroke="${p}" stroke-width="2" stroke-dasharray="4 4"/>
            <circle cx="-25" cy="-30" r="3" fill="${p}"/>
            <circle cx="25" cy="30" r="3" fill="${p}"/>
          </g>
        `;

      case "orbital_station":
        return `
          <g transform="translate(100, 100)">
            <!-- Ring Habitat -->
            <ellipse cx="0" cy="0" rx="75" ry="30" fill="none" stroke="${p}" stroke-width="3" transform="rotate(-15)"/>
            <ellipse cx="0" cy="0" rx="55" ry="20" fill="none" stroke="${s}" stroke-width="1.5" transform="rotate(-15)"/>
            <!-- Central Spoke and Spindle -->
            <circle cx="0" cy="0" r="16" fill="rgba(6, 18, 38, 0.9)" stroke="#fff" stroke-width="2"/>
            <line x1="-60" y1="16" x2="60" y2="-16" stroke="${p}" stroke-width="2"/>
            <line x1="-16" y1="-60" x2="16" y2="60" stroke="${s}" stroke-width="2"/>
            <!-- Solar Array Panels -->
            <rect x="-85" y="-10" width="20" height="20" fill="${s}" opacity="0.6"/>
            <rect x="65" y="-10" width="20" height="20" fill="${s}" opacity="0.6"/>
          </g>
        `;

      case "synth_heart":
        return `
          <g transform="translate(100, 100)">
            <!-- Cyber Heart Polygon Shell -->
            <path d="M0 -30 C-30 -65 -65 -25 -40 15 L0 60 L40 15 C65 -25 30 -65 0 -30 Z" fill="rgba(56, 189, 248, 0.15)" stroke="${p}" stroke-width="2.5"/>
            <!-- Core Micro-Reactor -->
            <circle cx="0" cy="0" r="16" fill="rgba(6, 18, 38, 0.9)" stroke="${s}" stroke-width="2"/>
            <circle cx="0" cy="0" r="8" fill="#ffffff" filter="drop-shadow(0 0 8px ${p})"/>
            <!-- Valve Arteries -->
            <line x1="-12" y1="-38" x2="-12" y2="-55" stroke="${p}" stroke-width="3"/>
            <line x1="12" y1="-38" x2="12" y2="-55" stroke="${p}" stroke-width="3"/>
            <polyline points="-30,10 -15,10 0,35 15,10 30,10" fill="none" stroke="${s}" stroke-width="2"/>
          </g>
        `;

      case "mech_core":
      default:
        return `
          <g transform="translate(100, 100)">
            <polygon points="0,-70 60,-35 60,35 0,70 -60,35 -60,-35" fill="rgba(6, 18, 38, 0.85)" stroke="${p}" stroke-width="2.5"/>
            <polygon points="0,-50 43,-25 43,25 0,50 -43,25 -43,-25" fill="none" stroke="${s}" stroke-width="1.5" stroke-dasharray="6 4"/>
            <circle cx="0" cy="0" r="24" fill="rgba(0, 240, 255, 0.2)" stroke="${p}" stroke-width="2"/>
            <circle cx="0" cy="0" r="10" fill="#ffffff" filter="drop-shadow(0 0 10px ${p})"/>
            <!-- Reactor Tri-Nodes -->
            <circle cx="0" cy="-35" r="4" fill="${p}"/>
            <circle cx="-30" cy="20" r="4" fill="${p}"/>
            <circle cx="30" cy="20" r="4" fill="${p}"/>
          </g>
        `;
    }
  },

  /**
   * Generates a complete standalone Cyber-Vector Poster SVG for a movie card or modal.
   * Completely image-free, pure SVG with cyberpunk HUD telemetry, scanline grids, and glowing badges.
   */
  renderMoviePosterSVG(movie, isModal = false) {
    const pColor = movie.badgeColor || "#00f0ff";
    const sColor = "#3b82f6";
    const classification = movie.cyberClassification || "SYS-AI-00";
    const year = movie.releaseYear || "2099";
    const glyphType = movie.glyphType || "mech_core";
    const rating = (movie.cyberRating || 9.0).toFixed(1);
    const resonance = movie.resonanceScore || 95;

    // Viewbox scale
    const viewBox = isModal ? "0 0 400 480" : "0 0 300 360";
    const emblemCenterY = isModal ? 210 : 155;
    const emblemScale = isModal ? 1.4 : 1.0;

    return `
      <svg class="cyber-poster-svg" viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
        <defs>
          <!-- Neon linear gradients -->
          <linearGradient id="bgGrad_${movie.id}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#050d1a"/>
            <stop offset="50%" stop-color="#08152e"/>
            <stop offset="100%" stop-color="#030712"/>
          </linearGradient>
          
          <linearGradient id="neonSweep_${movie.id}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="${pColor}" stop-opacity="0.8"/>
            <stop offset="50%" stop-color="#3b82f6" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="transparent"/>
          </linearGradient>

          <!-- Holographic Scanline Grid Pattern -->
          <pattern id="scanGrid_${movie.id}" width="16" height="16" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="16" y2="0" stroke="rgba(0, 240, 255, 0.08)" stroke-width="0.75"/>
            <line x1="0" y1="0" x2="0" y2="16" stroke="rgba(0, 240, 255, 0.05)" stroke-width="0.75"/>
          </pattern>

          <!-- Glow Filter -->
          <filter id="glow_${movie.id}" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <!-- Base Background with Scan Grid -->
        <rect width="100%" height="100%" fill="url(#bgGrad_${movie.id})" />
        <rect width="100%" height="100%" fill="url(#scanGrid_${movie.id})" />

        <!-- Futuristic Border & Corner HUD Notches -->
        <rect x="8" y="8" width="calc(100% - 16)" height="calc(100% - 16)" fill="none" stroke="rgba(0, 240, 255, 0.25)" stroke-width="1.2"/>
        
        <!-- Corner Reticles -->
        <path d="M 8 28 L 8 8 L 28 8" fill="none" stroke="${pColor}" stroke-width="2.5"/>
        <path d="M calc(100% - 28) 8 L calc(100% - 8) 8 L calc(100% - 8) 28" fill="none" stroke="${pColor}" stroke-width="2.5"/>
        <path d="M 8 calc(100% - 28) L 8 calc(100% - 8) L 28 calc(100% - 8)" fill="none" stroke="${pColor}" stroke-width="2.5"/>
        <path d="M calc(100% - 28) calc(100% - 8) L calc(100% - 8) calc(100% - 8) L calc(100% - 8) calc(100% - 28)" fill="none" stroke="${pColor}" stroke-width="2.5"/>

        <!-- Top Telemetry Strip -->
        <text x="20" y="24" fill="${pColor}" font-family="'Share Tech Mono', monospace" font-size="9" letter-spacing="1.5">
          [ ${classification} ]
        </text>
        <text x="calc(100% - 20)" y="24" text-anchor="end" fill="#94a3b8" font-family="'Share Tech Mono', monospace" font-size="9">
          SYS.REL//${year}
        </text>

        <!-- Top Secondary Tech Specs Bar -->
        <line x1="20" y1="30" x2="calc(100% - 20)" y2="30" stroke="rgba(0, 240, 255, 0.2)" stroke-width="1"/>
        <line x1="20" y1="30" x2="70" y2="30" stroke="${pColor}" stroke-width="2"/>

        <!-- Central Hologram Target Matrix Group -->
        <g transform="translate(${isModal ? 100 : 50}, ${emblemCenterY - 100}) scale(${emblemScale})" filter="url(#glow_${movie.id})">
          ${this.getEmblemSVG(glyphType, pColor, sColor)}
        </g>

        <!-- Holographic Watermark / Japanese Cyber Kana -->
        <text x="${isModal ? 370 : 275}" y="${emblemCenterY}" text-anchor="end" fill="rgba(0, 240, 255, 0.12)" font-family="'Orbitron', sans-serif" font-size="28" font-weight="900">
          AI//CORE
        </text>

        <!-- Audio Frequency / Data Resonance Waveform Bars -->
        <g transform="translate(20, ${isModal ? 380 : 285})">
          <rect x="0" y="8" width="3" height="12" fill="${pColor}" opacity="0.9"/>
          <rect x="6" y="2" width="3" height="18" fill="${pColor}" opacity="0.7"/>
          <rect x="12" y="10" width="3" height="10" fill="${sColor}" opacity="0.8"/>
          <rect x="18" y="0" width="3" height="20" fill="${pColor}" opacity="1.0"/>
          <rect x="24" y="6" width="3" height="14" fill="${sColor}" opacity="0.6"/>
          <rect x="30" y="12" width="3" height="8" fill="${pColor}" opacity="0.8"/>
          <rect x="36" y="4" width="3" height="16" fill="${pColor}" opacity="0.9"/>
          
          <text x="50" y="16" fill="#38bdf8" font-family="'Share Tech Mono', monospace" font-size="9" letter-spacing="1">
            RESONANCE: ${resonance}%
          </text>
        </g>

        <!-- Bottom Cyber Rating Hexagon Badge -->
        <g transform="translate(${isModal ? 340 : 255}, ${isModal ? 390 : 295})">
          <polygon points="0,-18 16,-9 16,9 0,18 -16,9 -16,-9" fill="rgba(6, 18, 38, 0.9)" stroke="${pColor}" stroke-width="2"/>
          <text x="0" y="4" text-anchor="middle" fill="#ffffff" font-family="'Orbitron', sans-serif" font-size="11" font-weight="800">
            ${rating}
          </text>
        </g>

        <!-- Bottom Status Line -->
        <line x1="20" y1="${isModal ? 440 : 330}" x2="calc(100% - 20)" y2="${isModal ? 440 : 330}" stroke="rgba(0, 240, 255, 0.2)" stroke-width="1"/>
        <text x="20" y="${isModal ? 456 : 346}" fill="#64748b" font-family="'Share Tech Mono', monospace" font-size="8.5" letter-spacing="1">
          NEURAL LINK SECURE // NO IMAGE REQUIRED
        </text>
        <text x="calc(100% - 20)" y="${isModal ? 456 : 346}" text-anchor="end" fill="${pColor}" font-family="'Share Tech Mono', monospace" font-size="8.5">
          ● ONLINE
        </text>
      </svg>
    `;
  },

  /**
   * Generates a compact vector glyph icon for terminal/table view or badges
   */
  renderMiniGlyphSVG(glyphType, color = "#00f0ff", size = 32) {
    return `
      <svg class="mini-glyph-svg" width="${size}" height="${size}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" rx="20" fill="rgba(6, 18, 38, 0.8)" stroke="${color}" stroke-width="4"/>
        ${this.getEmblemSVG(glyphType, color, "#3b82f6")}
      </svg>
    `;
  },

  /**
   * Generates a cyber avatar token for cast members
   */
  renderCastAvatarSVG(name, index = 0) {
    const colors = ["#00f0ff", "#38bdf8", "#818cf8", "#f43f5e", "#f59e0b"];
    const color = colors[index % colors.length];
    const initials = name
      .split(" ")
      .slice(0, 2)
      .map(part => part[0])
      .join("")
      .toUpperCase();

    return `
      <div class="cyber-avatar-token" style="--token-color: ${color}">
        <svg viewBox="0 0 40 40" width="40" height="40">
          <polygon points="20,2 38,11 38,29 20,38 2,29 2,11" fill="rgba(6, 18, 38, 0.9)" stroke="${color}" stroke-width="1.5"/>
          <circle cx="20" cy="20" r="12" fill="rgba(0, 240, 255, 0.1)"/>
          <text x="20" y="24" text-anchor="middle" fill="#ffffff" font-family="'Orbitron', sans-serif" font-size="11" font-weight="700">
            ${initials}
          </text>
        </svg>
      </div>
    `;
  }
};
