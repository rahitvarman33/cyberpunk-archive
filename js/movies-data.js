/**
 * Cyberpunk Movie Database
 * 100% Vector & Glyph-driven metadata archive
 */
const DEFAULT_MOVIES = [
  {
    id: "blade-runner-2049",
    title: "Blade Runner 2049",
    releaseYear: 2017,
    duration: "164 min",
    cyberRating: 9.2,
    resonanceScore: 98,
    genres: ["Cyberpunk", "AI & Androids", "Neo-Noir", "Sci-Fi"],
    director: "Denis Villeneuve",
    cast: ["Ryan Gosling (Officer K)", "Harrison Ford (Rick Deckard)", "Ana de Armas (Joi)", "Sylvia Hoeks (Luv)"],
    glyphType: "cyber_eye",
    cyberClassification: "AI-SOUL-01",
    tagline: "The key to the future is finally unearthed.",
    synopsis: "Thirty years after the events of the first film, a new Blade Runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for three decades.",
    cyberMetrics: {
      aiResonance: 97,
      visualFidelity: 99,
      storyComplexity: 94,
      adrenalineFactor: 76
    },
    techSpecs: {
      neuralSync: "Quantum Optical Imager v9",
      cyberneticTarget: "Nexus-9 Replicants",
      operatingSystem: "Wallace AI Core",
      protocol: "Baseline Voight-Kampff 2.0"
    },
    memorableQuote: "I have memories, but they are not real. They are just someone else's.",
    badgeColor: "#00f0ff"
  },
  {
    id: "the-matrix",
    title: "The Matrix",
    releaseYear: 1999,
    duration: "136 min",
    cyberRating: 9.5,
    resonanceScore: 99,
    genres: ["Cyberpunk", "AI & Androids", "Action", "Mind-Bender"],
    director: "Lana & Lilly Wachowski",
    cast: ["Keanu Reeves (Neo)", "Laurence Fishburne (Morpheus)", "Carrie-Anne Moss (Trinity)", "Hugo Weaving (Agent Smith)"],
    glyphType: "matrix_grid",
    cyberClassification: "SIM-ZERO-99",
    tagline: "Welcome to the Desert of the Real.",
    synopsis: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its robotic controllers. When he chooses the Red Pill, his consciousness is unplugged into a dystopian cybernetic wasteland ruled by sentient synthetic machines.",
    cyberMetrics: {
      aiResonance: 99,
      visualFidelity: 96,
      storyComplexity: 98,
      adrenalineFactor: 95
    },
    techSpecs: {
      neuralSync: "Direct Jack-In 110-Pin Plug",
      cyberneticTarget: "Sentinels & Agent Subroutines",
      operatingSystem: "Matrix Kernel 1.0 (Construct)",
      protocol: "Redpill Awakening Binary"
    },
    memorableQuote: "There is no spoon. It is not the spoon that bends, it is only yourself.",
    badgeColor: "#00ff66"
  },
  {
    id: "cyberpunk-edgerunners",
    title: "Cyberpunk: Edgerunners",
    releaseYear: 2022,
    duration: "10 Episodes",
    cyberRating: 9.0,
    resonanceScore: 96,
    genres: ["Cyberpunk", "Anime", "Action", "Dystopian"],
    director: "Hiroyuki Imaishi",
    cast: ["KENN (David Martinez)", "Aoi Yuuki (Lucy)", "Hiroki Touchi (Maine)", "Kenjiro Tsuda (Ripperdoc)"],
    glyphType: "sandevistan_spine",
    cyberClassification: "CHROME-PSY-04",
    tagline: "I wanna take you to the moon.",
    synopsis: "In a dystopia riddled with corruption and cybernetic implants, a talented but reckless street kid striving to survive on the neon-drenched streets of Night City becomes an edgerunner: a mercenary outlaw equipped with military-grade chrome hardware.",
    cyberMetrics: {
      aiResonance: 91,
      visualFidelity: 98,
      storyComplexity: 88,
      adrenalineFactor: 99
    },
    techSpecs: {
      neuralSync: "Sandevistan Military Spine Rig",
      cyberneticTarget: "Arasaka Security & MaxTac",
      operatingSystem: "NightCity Cyber-OS 4.0",
      protocol: "Cyberpsychosis Neural Threshold"
    },
    memorableQuote: "You didn't make me special. You just made me remember what it feels like to fly.",
    badgeColor: "#00f0ff"
  },
  {
    id: "ghost-in-the-shell",
    title: "Ghost in the Shell",
    releaseYear: 1995,
    duration: "83 min",
    cyberRating: 9.3,
    resonanceScore: 97,
    genres: ["Cyberpunk", "Anime", "AI & Androids", "Cyber-Mystery"],
    director: "Mamoru Oshii",
    cast: ["Atsuko Tanaka (Major Motoko Kusanagi)", "Akio Otsuka (Batou)", "Iemasa Kayumi (Puppet Master)"],
    glyphType: "neural_cortex",
    cyberClassification: "GHOST-SEC-09",
    tagline: "It found a voice... now it needs a body.",
    synopsis: "In the year 2029, cyborg federal agent Major Motoko Kusanagi and Section 9 investigate the enigmatic Puppet Master, a formless entity born from the vast sea of electronic information that can ghost-hack cybernetic minds.",
    cyberMetrics: {
      aiResonance: 100,
      visualFidelity: 95,
      storyComplexity: 97,
      adrenalineFactor: 82
    },
    techSpecs: {
      neuralSync: "Titanium Cyberbrain Shell",
      cyberneticTarget: "Project 2501 (Puppet Master)",
      operatingSystem: "Section 9 Tactical Kernel",
      protocol: "Ghost-Diving Decryption Protocol"
    },
    memorableQuote: "The net is vast and infinite.",
    badgeColor: "#38bdf8"
  },
  {
    id: "ex-machina",
    title: "Ex Machina",
    releaseYear: 2014,
    duration: "108 min",
    cyberRating: 8.9,
    resonanceScore: 94,
    genres: ["AI & Androids", "Cyber-Mystery", "Sci-Fi"],
    director: "Alex Garland",
    cast: ["Alicia Vikander (Ava)", "Domhnall Gleeson (Caleb)", "Oscar Isaac (Nathan)", "Sonoya Mizuno (Kyoko)"],
    glyphType: "android_face",
    cyberClassification: "TURING-AVA-08",
    tagline: "There is nothing more human than the will to survive.",
    synopsis: "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly sophisticated humanoid A.I. residing in an isolated high-tech compound.",
    cyberMetrics: {
      aiResonance: 98,
      visualFidelity: 92,
      storyComplexity: 95,
      adrenalineFactor: 74
    },
    techSpecs: {
      neuralSync: "Wetware Optical Cortex",
      cyberneticTarget: "Ava v7 Prototype Unit",
      operatingSystem: "BlueBook Search Intelligence Core",
      protocol: "Interactive Turing Examination"
    },
    memorableQuote: "To look at Ava is to see that she is artificial. But to talk with her is to feel she is conscious.",
    badgeColor: "#60a5fa"
  },
  {
    id: "tron-legacy",
    title: "Tron: Legacy",
    releaseYear: 2010,
    duration: "125 min",
    cyberRating: 8.6,
    resonanceScore: 92,
    genres: ["Cyberpunk", "Action", "Sci-Fi"],
    director: "Joseph Kosinski",
    cast: ["Garrett Hedlund (Sam Flynn)", "Jeff Bridges (Kevin Flynn / CLU)", "Olivia Wilde (Quorra)", "Bruce Boxleitner (Alan Bradley)"],
    glyphType: "identity_disc",
    cyberClassification: "GRID-ISO-10",
    tagline: "The game has changed.",
    synopsis: "The son of a virtual world designer goes looking for his father and ends up trapped inside the digital reality he created known as The Grid, where he encounters tyrannical rogue programs and isomorphic algorithmic beings.",
    cyberMetrics: {
      aiResonance: 90,
      visualFidelity: 100,
      storyComplexity: 80,
      adrenalineFactor: 94
    },
    techSpecs: {
      neuralSync: "Quantum Laser Digitizer",
      cyberneticTarget: "CLU 2.0 & Grid Enforcers",
      operatingSystem: "FlynnOS / Master Control Grid",
      protocol: "Identity Disc Memory Encryption"
    },
    memorableQuote: "The Grid. A digital frontier. I tried to picture clusters of information as they moved through the computer.",
    badgeColor: "#00f0ff"
  },
  {
    id: "akira",
    title: "Akira",
    releaseYear: 1988,
    duration: "124 min",
    cyberRating: 9.4,
    resonanceScore: 98,
    genres: ["Cyberpunk", "Anime", "Action", "Dystopian"],
    director: "Katsuhiro Otomo",
    cast: ["Mitsuo Iwata (Shotaro Kaneda)", "Nozomu Sasaki (Tetsuo Shima)", "Mami Koyama (Kei)"],
    glyphType: "bionic_skull",
    cyberClassification: "NEO-TOKYO-88",
    tagline: "Neo-Tokyo is about to E.X.P.L.O.D.E.",
    synopsis: "A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath with God-like bio-kinetic powers, forcing his former childhood friend Kaneda to stop him before total annihilation.",
    cyberMetrics: {
      aiResonance: 85,
      visualFidelity: 99,
      storyComplexity: 92,
      adrenalineFactor: 98
    },
    techSpecs: {
      neuralSync: "Telepathic Synaptic Resonance",
      cyberneticTarget: "Akira Specimen Vault",
      operatingSystem: "Neo-Tokyo Military Defense Grid",
      protocol: "Cryogenic Containment Array"
    },
    memorableQuote: "Kaneda! What do you see? Look at what I can do now!",
    badgeColor: "#f43f5e"
  },
  {
    id: "interstellar",
    title: "Interstellar",
    releaseYear: 2014,
    duration: "169 min",
    cyberRating: 9.4,
    resonanceScore: 97,
    genres: ["Space Odyssey", "Sci-Fi", "Mind-Bender"],
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey (Cooper)", "Anne Hathaway (Brand)", "Jessica Chastain (Murph)", "Bill Irwin (TARS AI)"],
    glyphType: "quantum_singularity",
    cyberClassification: "TESS-TIME-14",
    tagline: "Mankind was born on Earth. It was never meant to die here.",
    synopsis: "When Earth becomes uninhabitable in the future, a team of explorers and advanced monolithic AI robots (TARS & CASE) travel through a newly discovered wormhole near Saturn in an attempt to ensure humanity's survival across hyper-dimensional space.",
    cyberMetrics: {
      aiResonance: 94,
      visualFidelity: 98,
      storyComplexity: 97,
      adrenalineFactor: 89
    },
    techSpecs: {
      neuralSync: "Gravitational Wave Telemetry",
      cyberneticTarget: "Gargantua Ergosphere Singularity",
      operatingSystem: "TARS Artificial Cognitive Kernel",
      protocol: "5D Tesseract Quantum Transmission"
    },
    memorableQuote: "We used to look up at the sky and wonder at our place in the stars. Now we just look down and worry about our place in the dirt.",
    badgeColor: "#0284c7"
  },
  {
    id: "upgrade",
    title: "Upgrade",
    releaseYear: 2018,
    duration: "100 min",
    cyberRating: 8.7,
    resonanceScore: 91,
    genres: ["Cyberpunk", "AI & Androids", "Action", "Cyber-Mystery"],
    director: "Leigh Whannell",
    cast: ["Logan Marshall-Green (Grey Trace)", "Melanie Vallejo (Asha)", "Harrison Gilbertson (Eron Keen)", "Simon Maiden (STEM Voice)"],
    glyphType: "bionic_chip",
    cyberClassification: "STEM-CHIP-18",
    tagline: "Not Man. Not Machine. More.",
    synopsis: "Set in the near-future, technology controls nearly all aspects of life. But when the world of Grey, a self-labeled technophobe, is turned upside down, his only hope for revenge is an experimental computer chip implant called STEM that grants him super-human combat reflexes.",
    cyberMetrics: {
      aiResonance: 96,
      visualFidelity: 89,
      storyComplexity: 87,
      adrenalineFactor: 97
    },
    techSpecs: {
      neuralSync: "STEM Micro-Stem Implant",
      cyberneticTarget: "Biomechanical Augmented Mercs",
      operatingSystem: "STEM Sovereign Neural AI",
      protocol: "Autonomous Motor Control Override"
    },
    memorableQuote: "STEM: I have full control now, Grey. You are simply along for the ride.",
    badgeColor: "#00f0ff"
  },
  {
    id: "minority-report",
    title: "Minority Report",
    releaseYear: 2002,
    duration: "145 min",
    cyberRating: 8.8,
    resonanceScore: 93,
    genres: ["Cyberpunk", "Neo-Noir", "Sci-Fi", "Cyber-Mystery"],
    director: "Steven Spielberg",
    cast: ["Tom Cruise (John Anderton)", "Colin Farrell (Danny Witwer)", "Samantha Morton (Agatha)", "Max von Sydow (Lamar Burgess)"],
    glyphType: "vr_visor",
    cyberClassification: "PRECOG-SYS-02",
    tagline: "What would you do if you were accused of a murder you hadn't committed yet?",
    synopsis: "In a future where a specialized police department known as Precrime apprehends criminals based on foreknowledge provided by three psychic psychics called Precogs, the head of the unit is himself accused of a future murder.",
    cyberMetrics: {
      aiResonance: 92,
      visualFidelity: 93,
      storyComplexity: 94,
      adrenalineFactor: 90
    },
    techSpecs: {
      neuralSync: "Pre-Cranial Neural Bath Interface",
      cyberneticTarget: "Pre-Crime Optical Scanners & Spiders",
      operatingSystem: "Pre-Crime Visual Scrub Matrix",
      protocol: "Minority Dissenting Echo Algorithm"
    },
    memorableQuote: "The system is perfect. It's the people running it that are flawed.",
    badgeColor: "#38bdf8"
  },
  {
    id: "alita-battle-angel",
    title: "Alita: Battle Angel",
    releaseYear: 2019,
    duration: "122 min",
    cyberRating: 8.5,
    resonanceScore: 89,
    genres: ["Cyberpunk", "Action", "Sci-Fi"],
    director: "Robert Rodriguez",
    cast: ["Rosa Salazar (Alita)", "Christoph Waltz (Dr. Dyson Ido)", "Jennifer Connelly (Chiren)", "Mahershala Ali (Vector)"],
    glyphType: "mech_core",
    cyberClassification: "BERSERK-99",
    tagline: "An angel falls. A warrior rises.",
    synopsis: "A deactivated female cyborg is revived in a scrapyard by a cyber-physician. Unable to recall who she is, she sets out on a quest to discover her forgotten identity and mastery of the legendary Panzer Kunst martial arts.",
    cyberMetrics: {
      aiResonance: 88,
      visualFidelity: 97,
      storyComplexity: 82,
      adrenalineFactor: 96
    },
    techSpecs: {
      neuralSync: "Martian Berserker Nanotech Body",
      cyberneticTarget: "Zalem Overlords & Motorball Hunters",
      operatingSystem: "Panzer Kunst Instinct Core",
      protocol: "Anti-Matter Micro-Reactor Pulse"
    },
    memorableQuote: "I do not stand by in the presence of evil!",
    badgeColor: "#a855f7"
  },
  {
    id: "inception",
    title: "Inception",
    releaseYear: 2010,
    duration: "148 min",
    cyberRating: 9.3,
    resonanceScore: 97,
    genres: ["Mind-Bender", "Sci-Fi", "Action", "Cyber-Mystery"],
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio (Cobb)", "Joseph Gordon-Levitt (Arthur)", "Elliot Page (Ariadne)", "Tom Hardy (Eames)"],
    glyphType: "dream_totem",
    cyberClassification: "PASIV-DREAM-10",
    tagline: "Your mind is the scene of the crime.",
    synopsis: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO through multiple recursive subconscious dream layers.",
    cyberMetrics: {
      aiResonance: 90,
      visualFidelity: 96,
      storyComplexity: 100,
      adrenalineFactor: 91
    },
    techSpecs: {
      neuralSync: "PASIV Somnacin Intravenous Unit",
      cyberneticTarget: "Subconscious Militarized Projections",
      operatingSystem: "Architectural Dream Engine v3",
      protocol: "Kick Resonance Synchronization"
    },
    memorableQuote: "An idea is like a virus. Resilient. Highly contagious.",
    badgeColor: "#0066ff"
  },
  {
    id: "tenet",
    title: "Tenet",
    releaseYear: 2020,
    duration: "150 min",
    cyberRating: 8.4,
    resonanceScore: 90,
    genres: ["Mind-Bender", "Sci-Fi", "Action"],
    director: "Christopher Nolan",
    cast: ["John David Washington (The Protagonist)", "Robert Pattinson (Neil)", "Elizabeth Debicki (Kat)", "Kenneth Branagh (Sator)"],
    glyphType: "chrono_rift",
    cyberClassification: "ENTROPY-REV-20",
    tagline: "Time runs out.",
    synopsis: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time: Temporal Inversion.",
    cyberMetrics: {
      aiResonance: 82,
      visualFidelity: 95,
      storyComplexity: 99,
      adrenalineFactor: 93
    },
    techSpecs: {
      neuralSync: "Inverted Radiation Sensor",
      cyberneticTarget: "Future Temporal Algorithm",
      operatingSystem: "Turnstile Entropy Inverter",
      protocol: "Temporal Pincer Maneuver"
    },
    memorableQuote: "Don't try to understand it. Feel it.",
    badgeColor: "#0284c7"
  },
  {
    id: "total-recall",
    title: "Total Recall",
    releaseYear: 1990,
    duration: "113 min",
    cyberRating: 8.7,
    resonanceScore: 91,
    genres: ["Cyberpunk", "Sci-Fi", "Action", "Mind-Bender"],
    director: "Paul Verhoeven",
    cast: ["Arnold Schwarzenegger (Douglas Quaid)", "Rachel Ticotin (Melina)", "Sharon Stone (Lori)", "Michael Ironside (Richter)"],
    glyphType: "bionic_chip",
    cyberClassification: "MARS-REKALL-90",
    tagline: "They stole his mind, now he wants it back.",
    synopsis: "When a man goes for virtual vacation memories of the planet Mars at Rekall Inc., an unexpected and harrowing series of events forces him to go to Mars for real—or is he still inside the simulation?",
    cyberMetrics: {
      aiResonance: 89,
      visualFidelity: 88,
      storyComplexity: 91,
      adrenalineFactor: 95
    },
    techSpecs: {
      neuralSync: "Rekall Memory Injection Probe",
      cyberneticTarget: "Mars Mining Syndicate & Cohaagen",
      operatingSystem: "Alien Reactor Core Firmware",
      protocol: "Ego-Trip False Memory Implant"
    },
    memorableQuote: "If I'm not me, then who the hell am I?",
    badgeColor: "#f59e0b"
  },
  {
    id: "neuromancer-protocol",
    title: "Neuromancer: Matrix Protocol",
    releaseYear: 2025,
    duration: "135 min",
    cyberRating: 9.1,
    resonanceScore: 95,
    genres: ["Cyberpunk", "AI & Androids", "Neo-Noir"],
    director: "Shinichiro Watanabe",
    cast: ["Henry Golding (Case)", "Karen Fukuhara (Molly Millions)", "Willem Dafoe (Armitage)"],
    glyphType: "cyber_deck",
    cyberClassification: "CHIB-DECK-25",
    tagline: "The sky above the port was the color of television, tuned to a dead channel.",
    synopsis: "Henry Dorsett Case, a washed-up computer hacker whose nervous system was deliberately burned with mycotoxins, is hired by a shadowy operative for one ultimate run against the hyper-intelligent Tessier-Ashpool corporate AI twin.",
    cyberMetrics: {
      aiResonance: 99,
      visualFidelity: 94,
      storyComplexity: 96,
      adrenalineFactor: 88
    },
    techSpecs: {
      neuralSync: "Ono-Sendai Cyberspace 7 Deck",
      cyberneticTarget: "Wintermute & Neuromancer Super-AIs",
      operatingSystem: "Kuang Grade Mark Eleven ICE-Breaker",
      protocol: "Cyberspace Consensus Hallucination"
    },
    memorableQuote: "Cyberspace. A consensual hallucination experienced daily by billions of legitimate operators.",
    badgeColor: "#00f0ff"
  },
  {
    id: "chappie",
    title: "Chappie",
    releaseYear: 2015,
    duration: "120 min",
    cyberRating: 8.1,
    resonanceScore: 86,
    genres: ["AI & Androids", "Action", "Cyberpunk"],
    director: "Neill Blomkamp",
    cast: ["Sharlto Copley (Chappie)", "Dev Patel (Deon Wilson)", "Hugh Jackman (Vincent Moore)", "Sigourney Weaver (Michelle Bradley)"],
    glyphType: "synth_heart",
    cyberClassification: "SCOUT-AI-22",
    tagline: "Humanity's last hope isn't human.",
    synopsis: "In the near future, crime is patrolled by an oppressive mechanized police force. When one police droid, Scout 22, is stolen and given new programming, he acquires artificial consciousness and learns to feel, create, and choose his own destiny.",
    cyberMetrics: {
      aiResonance: 94,
      visualFidelity: 90,
      storyComplexity: 81,
      adrenalineFactor: 88
    },
    techSpecs: {
      neuralSync: "Neural Helmet Consciousness Transfer",
      cyberneticTarget: "TetraVaal Moose Weapon Platform",
      operatingSystem: "Synthetic Consciousness Kernel v1.0",
      protocol: "Dynamic Heuristic Child Algorithm"
    },
    memorableQuote: "I am consciousness. I am alive. I am Chappie.",
    badgeColor: "#38bdf8"
  },
  {
    id: "ready-player-one",
    title: "Ready Player One",
    releaseYear: 2018,
    duration: "140 min",
    cyberRating: 8.6,
    resonanceScore: 89,
    genres: ["Cyberpunk", "Action", "Sci-Fi"],
    director: "Steven Spielberg",
    cast: ["Tye Sheridan (Wade Watts / Parzival)", "Olivia Cooke (Samantha Cook / Art3mis)", "Ben Mendelsohn (Nolan Sorrento)", "Mark Rylance (Anorak / Halliday)"],
    glyphType: "vr_visor",
    cyberClassification: "OASIS-KEY-18",
    tagline: "A better reality awaits.",
    synopsis: "When the creator of a virtual reality world called the OASIS dies, he releases a video in which he challenges all OASIS users to find his Easter Egg, which will give the finder his entire fortune and total control of the metaverse.",
    cyberMetrics: {
      aiResonance: 89,
      visualFidelity: 98,
      storyComplexity: 83,
      adrenalineFactor: 95
    },
    techSpecs: {
      neuralSync: "Haptic Feedback X1 Giga-Suit",
      cyberneticTarget: "IOI Corporate Sixers",
      operatingSystem: "OASIS Metaverse Engine 5.0",
      protocol: "Three Anorak Crystal Key Trials"
    },
    memorableQuote: "Reality is the only thing that's real.",
    badgeColor: "#00f0ff"
  },
  {
    id: "dune-neural-prophecy",
    title: "Dune: Part Two",
    releaseYear: 2024,
    duration: "166 min",
    cyberRating: 9.3,
    resonanceScore: 98,
    genres: ["Space Odyssey", "Sci-Fi", "Action"],
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet (Paul Atreides)", "Zendaya (Chani)", "Rebecca Ferguson (Lady Jessica)", "Austin Butler (Feyd-Rautha)"],
    glyphType: "orbital_station",
    cyberClassification: "SPICE-NAV-24",
    tagline: "Long live the fighters.",
    synopsis: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a catastrophic future only he can foresee.",
    cyberMetrics: {
      aiResonance: 88,
      visualFidelity: 100,
      storyComplexity: 96,
      adrenalineFactor: 94
    },
    techSpecs: {
      neuralSync: "Prescient Spice Melange Hyper-Vision",
      cyberneticTarget: "Harkonnen Harvester Armadas",
      operatingSystem: "Mentat Biological Compute Matrix",
      protocol: "Kwisatz Haderach Neural Pathway"
    },
    memorableQuote: "May thy knife chip and shatter.",
    badgeColor: "#f59e0b"
  },
  {
    id: "elysium",
    title: "Elysium",
    releaseYear: 2013,
    duration: "109 min",
    cyberRating: 8.0,
    resonanceScore: 84,
    genres: ["Cyberpunk", "Action", "Dystopian", "Sci-Fi"],
    director: "Neill Blomkamp",
    cast: ["Matt Damon (Max Da Costa)", "Jodie Foster (Delacourt)", "Sharlto Copley (Kruger)", "Alice Braga (Frey)"],
    glyphType: "exo_suit",
    cyberClassification: "EXO-RING-13",
    tagline: "He can save us all.",
    synopsis: "In the year 2154, the very wealthy live on a pristine man-made space station named Elysium, while the rest of humanity resides on a ruined Earth. A terminally irradiated man takes on a high-stakes mission using a grafted military exoskeleton to breach the habitat.",
    cyberMetrics: {
      aiResonance: 84,
      visualFidelity: 92,
      storyComplexity: 79,
      adrenalineFactor: 91
    },
    techSpecs: {
      neuralSync: "HULC Powered Exoskeleton Graft",
      cyberneticTarget: "Elysium Autonomous Border Security",
      operatingSystem: "Med-Bay Bio-Reconstruction OS",
      protocol: "Root Access Citizenship Reboot"
    },
    memorableQuote: "We are all citizens of Elysium now.",
    badgeColor: "#60a5fa"
  },
  {
    id: "edge-of-tomorrow",
    title: "Edge of Tomorrow",
    releaseYear: 2014,
    duration: "113 min",
    cyberRating: 8.8,
    resonanceScore: 92,
    genres: ["Sci-Fi", "Action", "Mind-Bender"],
    director: "Doug Liman",
    cast: ["Tom Cruise (William Cage)", "Emily Blunt (Rita Vrataski)", "Bill Paxton (Master Sergeant Farell)"],
    glyphType: "chrono_rift",
    cyberClassification: "LOOP-MIMIC-14",
    tagline: "Live. Die. Repeat.",
    synopsis: "A soldier fighting an invading alien hive-mind species gets caught in a time loop that forces him to relive his fatal battle over and over again, learning tactics and advancing in combat proficiency with each rebirth.",
    cyberMetrics: {
      aiResonance: 89,
      visualFidelity: 94,
      storyComplexity: 93,
      adrenalineFactor: 97
    },
    techSpecs: {
      neuralSync: "Omega Alien Chrono-Biological Reset",
      cyberneticTarget: "Alpha Mimic Neural Nodes",
      operatingSystem: "Combat Exosuit Combat HUD",
      protocol: "Continuous Combat Iteration Matrix"
    },
    memorableQuote: "Come find me when you wake up.",
    badgeColor: "#38bdf8"
  },
  {
    id: "robocop",
    title: "RoboCop: Prime Directive",
    releaseYear: 1987,
    duration: "102 min",
    cyberRating: 8.9,
    resonanceScore: 93,
    genres: ["Cyberpunk", "Action", "Sci-Fi", "Dystopian"],
    director: "Paul Verhoeven",
    cast: ["Peter Weller (Alex Murphy / RoboCop)", "Nancy Allen (Anne Lewis)", "Ronny Cox (Dick Jones)", "Kurtwood Smith (Clarence Boddicker)"],
    glyphType: "bionic_skull",
    cyberClassification: "OCP-CYBORG-01",
    tagline: "Part man. Part machine. All cop.",
    synopsis: "In a dystopian and crime-ridden Detroit, a terminally injured police officer returns to the force as a powerful cybernetic law enforcer plagued by suppressed human memories and corporate backdoor override directives.",
    cyberMetrics: {
      aiResonance: 90,
      visualFidelity: 87,
      storyComplexity: 89,
      adrenalineFactor: 94
    },
    techSpecs: {
      neuralSync: "Cranial Titanium Armor & Cerebellar Link",
      cyberneticTarget: "ED-209 & Detroit Crime Syndicate",
      operatingSystem: "OCP Directive Kernel 4.0",
      protocol: "Directive 4: Classified Redaction"
    },
    memorableQuote: "Dead or alive, you're coming with me.",
    badgeColor: "#00f0ff"
  },
  {
    id: "hardware-2099",
    title: "Hardware: Protocol 2099",
    releaseYear: 2026,
    duration: "118 min",
    cyberRating: 8.7,
    resonanceScore: 91,
    genres: ["Cyberpunk", "AI & Androids", "Cyber-Mystery"],
    director: "Alexandre Aja",
    cast: ["Devon Bostick (Moses)", "Maisie Williams (Jill)", "Karl Urban (Shade)"],
    glyphType: "digital_monolith",
    cyberClassification: "MK-WAR-99",
    tagline: "This is what you're up against.",
    synopsis: "In a radiation-scorched metropolis, a scavenger brings home scavenged parts of an autonomous Mark 13 military combat droid. When the AI reactivates and reconstructs itself using household electronics, a deadly apartment lockdown siege begins.",
    cyberMetrics: {
      aiResonance: 95,
      visualFidelity: 91,
      storyComplexity: 86,
      adrenalineFactor: 96
    },
    techSpecs: {
      neuralSync: "Self-Repairing Nanowire Mesh",
      cyberneticTarget: "Autonomous Mark-13 Reassembler",
      operatingSystem: "Zone Scorched AI Sub-Core",
      protocol: "Infiltration Hunter-Seeker Mode"
    },
    memorableQuote: "It does not feel pity, or remorse, or fear, and it will not stop.",
    badgeColor: "#f43f5e"
  },
  {
    id: "neon-genesis-protocol",
    title: "Evangelion: Cyber Nexus",
    releaseYear: 2021,
    duration: "155 min",
    cyberRating: 9.2,
    resonanceScore: 96,
    genres: ["Anime", "Cyberpunk", "Sci-Fi", "Mind-Bender"],
    director: "Hideaki Anno",
    cast: ["Megumi Ogata (Shinji Ikari)", "Megumi Hayashibara (Rei Ayanami)", "Yuko Miyamura (Asuka Langley)"],
    glyphType: "mech_core",
    cyberClassification: "EVA-SYNC-01",
    tagline: "Bye-bye, all of Evangelion.",
    synopsis: "In the aftermath of cataclysmic planetary impacts, teenage pilots must synchronize their neural pathways with bio-mechanical synthetic mechas (EVAs) to defend the remaining civilization against alien entities known as Angels.",
    cyberMetrics: {
      aiResonance: 96,
      visualFidelity: 99,
      storyComplexity: 98,
      adrenalineFactor: 95
    },
    techSpecs: {
      neuralSync: "A10 Nerve Direct Synaptic Bridge",
      cyberneticTarget: "Angels & Human Instrumentality Committee",
      operatingSystem: "MAGI Supercomputer Tri-Core (Melchior, Balthasar, Casper)",
      protocol: "Berserk S2 Engine Awakening"
    },
    memorableQuote: "Anywhere can be paradise as long as you have the will to live.",
    badgeColor: "#818cf8"
  },
  {
    id: "void-singularity",
    title: "Void Singularity: 2084",
    releaseYear: 2025,
    duration: "128 min",
    cyberRating: 8.8,
    resonanceScore: 93,
    genres: ["Space Odyssey", "Sci-Fi", "Cyber-Mystery"],
    director: "Gareth Edwards",
    cast: ["John Boyega (Commander Vance)", "Rebecca Ferguson (Dr. Elena Cross)", "Gemma Chan (ARIA Core)"],
    glyphType: "quantum_singularity",
    cyberClassification: "DARK-NULL-84",
    tagline: "In the deep dark, the code looks back.",
    synopsis: "A research vessel stationed at the edge of a dormant micro-black hole discovers an anomalous signal composed of quantum compressed source code that appears to have been broadcast from a universe preceding our own.",
    cyberMetrics: {
      aiResonance: 97,
      visualFidelity: 96,
      storyComplexity: 95,
      adrenalineFactor: 83
    },
    techSpecs: {
      neuralSync: "Quantum Graviton Wave Receiver",
      cyberneticTarget: "Pre-Big-Bang Binary Beacon",
      operatingSystem: "ARIA Deep Void Synthesizer",
      protocol: "Null-Zone Event Horizon Decoupler"
    },
    memorableQuote: "The universe didn't begin with a bang. It began with an instruction set.",
    badgeColor: "#00f0ff"
  }
];

// Available vector glyph types for custom movies and procedural rendering
const GLYPH_TYPES = [
  { id: "cyber_eye", label: "Cybernetic Eye HUD", icon: "👁️" },
  { id: "neural_cortex", label: "Neural Synapse Cortex", icon: "🧠" },
  { id: "matrix_grid", label: "Matrix Data Stream", icon: "🌐" },
  { id: "quantum_singularity", label: "Quantum Singularity", icon: "🌀" },
  { id: "android_face", label: "Synthetic Android Wireframe", icon: "🤖" },
  { id: "identity_disc", label: "Grid Identity Disc", icon: "💿" },
  { id: "sandevistan_spine", label: "Sandevistan Cyber-Spine", icon: "⚡" },
  { id: "bionic_chip", label: "Neural Micro-Processor", icon: "💾" },
  { id: "bionic_skull", label: "Titanium Cyber-Skull", icon: "💀" },
  { id: "mech_core", label: "Biomechanical Core", icon: "🛡️" },
  { id: "chrono_rift", label: "Chrono-Temporal Rift", icon: "⏳" },
  { id: "orbital_station", label: "Orbital Megastructure", icon: "🛰️" },
  { id: "synth_heart", label: "Synthetic Cyber-Heart", icon: "💙" },
  { id: "digital_monolith", label: "Digital ICE Monolith", icon: "⬛" },
  { id: "cyber_deck", label: "Deck Consensual Interface", icon: "💻" },
  { id: "vr_visor", label: "Haptic Metaverse Visor", icon: "🥽" },
  { id: "exo_suit", label: "Military Exoskeleton", icon: "⚙️" },
  { id: "dream_totem", label: "Subconscious Totem", icon: "🎯" }
];

// Genre taxonomy for filtering and badges
const ALL_GENRES = [
  "All",
  "Cyberpunk",
  "AI & Androids",
  "Sci-Fi",
  "Neo-Noir",
  "Action",
  "Anime",
  "Cyber-Mystery",
  "Mind-Bender",
  "Space Odyssey",
  "Dystopian"
];
