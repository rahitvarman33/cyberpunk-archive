/**
 * Cyberpunk Movie Explorer - Main Application Controller
 */

class CyberpunkMovieApp {
  constructor() {
    this.state = {
      searchQuery: "",
      activeGenre: "All",
      minRating: 0,
      sortBy: "rating-desc",
      favoritesOnly: false,
      viewMode: "grid", // "grid" or "matrix"
      allMovies: [],
      currentDetailMovie: null
    };

    this.dom = {};
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.mouse = { x: null, y: null, radius: 140 };
  }

  init() {
    this.loadMovies();
    this.cacheDOM();
    this.initCanvasBackground();
    this.initTelemetryClock();
    this.renderGenreChips();
    this.renderGlyphOptions();
    this.bindEvents();
    this.updateAudioButtonState();
    this.render();
  }

  /**
   * Loads default database merged with any custom user creations
   */
  loadMovies() {
    const custom = CyberStorage.getCustomMovies();
    this.state.allMovies = [...custom, ...DEFAULT_MOVIES];
  }

  cacheDOM() {
    this.dom = {
      // Background & Telemetry
      canvas: document.getElementById("cyber-canvas"),
      clockLocal: document.getElementById("telemetry-clock-local"),
      clockUtc: document.getElementById("telemetry-clock-utc"),
      btnAudioToggle: document.getElementById("btn-audio-toggle"),
      audioIcon: document.getElementById("audio-toggle-icon"),
      favTopCount: document.getElementById("fav-top-count"),
      totalMoviesCount: document.getElementById("stat-total-movies"),
      totalFavsCount: document.getElementById("stat-total-favs"),
      totalGenresCount: document.getElementById("stat-total-genres"),

      // Controls
      searchInput: document.getElementById("cyber-search-input"),
      searchClearBtn: document.getElementById("search-clear-btn"),
      genreChipsWrap: document.getElementById("genre-chips-container"),
      sortSelect: document.getElementById("cyber-sort-select"),
      ratingSlider: document.getElementById("cyber-rating-slider"),
      ratingValueDisplay: document.getElementById("rating-slider-value"),
      btnFavFilterToggle: document.getElementById("btn-toggle-fav-filter"),
      btnViewGrid: document.getElementById("btn-view-grid"),
      btnViewMatrix: document.getElementById("btn-view-matrix"),
      btnOpenRecommender: document.getElementById("btn-open-recommender"),
      btnAddMovie: document.getElementById("btn-add-movie"),
      btnRandomPick: document.getElementById("btn-random-pick"),
      btnExportData: document.getElementById("btn-export-data"),
      resultsCountBadge: document.getElementById("results-count-badge"),

      // Deck Containers
      moviesGridDeck: document.getElementById("movies-grid-deck"),
      terminalMatrixView: document.getElementById("terminal-matrix-view"),
      emptyDeckState: document.getElementById("empty-deck-state"),

      // Detail Modal
      modalDetail: document.getElementById("modal-movie-detail"),
      detailCloseBtn: document.getElementById("detail-modal-close"),
      detailPosterStage: document.getElementById("detail-poster-stage"),
      detailTitle: document.getElementById("detail-title"),
      detailTagline: document.getElementById("detail-tagline"),
      detailYear: document.getElementById("detail-year"),
      detailDuration: document.getElementById("detail-duration"),
      detailRating: document.getElementById("detail-rating"),
      detailClassification: document.getElementById("detail-classification"),
      detailGenres: document.getElementById("detail-genres"),
      detailSynopsis: document.getElementById("detail-synopsis"),
      detailMetricsWrap: document.getElementById("detail-metrics-wrap"),
      detailTechSpecsWrap: document.getElementById("detail-tech-specs-wrap"),
      detailCastGrid: document.getElementById("detail-cast-grid"),
      detailQuoteText: document.getElementById("detail-quote-text"),
      btnPlayQuoteAudio: document.getElementById("btn-play-quote-audio"),
      btnDetailFavToggle: document.getElementById("btn-detail-fav-toggle"),
      detailModalTabs: document.querySelectorAll(".modal-tab-btn"),
      detailTabContents: document.querySelectorAll(".tab-pane"),

      // Recommender Modal
      modalRecommender: document.getElementById("modal-ai-recommender"),
      recommenderCloseBtn: document.getElementById("recommender-modal-close"),
      vibeSelectionGrid: document.getElementById("vibe-selection-grid"),
      recommenderInput: document.getElementById("recommender-custom-query"),
      btnRunRecommender: document.getElementById("btn-run-recommender"),
      recommenderResultsWrap: document.getElementById("recommender-results-wrap"),
      recommenderDecodingState: document.getElementById("recommender-decoding-state"),
      recommenderMatchesList: document.getElementById("recommender-matches-list"),

      // Custom Movie Modal
      modalAddMovie: document.getElementById("modal-add-movie"),
      addMovieCloseBtn: document.getElementById("add-movie-modal-close"),
      addMovieForm: document.getElementById("add-movie-form"),
      customGlyphSelect: document.getElementById("custom-glyph-select"),
      glyphPreviewBox: document.getElementById("custom-glyph-preview"),

      // Toast
      cyberToast: document.getElementById("cyber-toast"),
      toastMessage: document.getElementById("toast-message")
    };
  }

  /**
   * Initializes interactive cyberpunk particle & neural mesh background
   */
  initCanvasBackground() {
    this.canvas = this.dom.canvas;
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");

    const resize = () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.initParticles();
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => {
      this.mouse.x = e.x;
      this.mouse.y = e.y;
    });

    resize();
    this.animateCanvas();
  }

  initParticles() {
    this.particles = [];
    const count = Math.min(Math.floor((this.canvas.width * this.canvas.height) / 18000), 75);
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.45,
        speedY: (Math.random() - 0.5) * 0.45,
        color: Math.random() > 0.3 ? "#00f0ff" : "#0066ff"
      });
    }
  }

  animateCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw particle nodes and laser connection lines
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0 || p.x > this.canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.speedY *= -1;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.shadowBlur = 8;
      this.ctx.shadowColor = p.color;
      this.ctx.fill();

      // Connect near particles
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 * (1 - dist / 110)})`;
          this.ctx.lineWidth = 0.75;
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      }
    }

    requestAnimationFrame(() => this.animateCanvas());
  }

  /**
   * Real-time Local and UTC telemetry clock
   */
  initTelemetryClock() {
    const updateTime = () => {
      const now = new Date();
      if (this.dom.clockLocal) {
        this.dom.clockLocal.textContent = now.toLocaleTimeString([], { hour12: false });
      }
      if (this.dom.clockUtc) {
        this.dom.clockUtc.textContent = now.toISOString().substring(11, 19) + " UTC";
      }
    };
    updateTime();
    setInterval(updateTime, 1000);
  }

  /**
   * Generates Genre Filter Chips
   */
  renderGenreChips() {
    if (!this.dom.genreChipsWrap) return;
    this.dom.genreChipsWrap.innerHTML = ALL_GENRES.map(genre => `
      <button class="genre-chip ${this.state.activeGenre === genre ? 'active' : ''}" data-genre="${genre}">
        ${genre}
      </button>
    `).join("");
  }

  /**
   * Fills custom glyph dropdown options
   */
  renderGlyphOptions() {
    if (!this.dom.customGlyphSelect) return;
    this.dom.customGlyphSelect.innerHTML = GLYPH_TYPES.map(g => `
      <option value="${g.id}">${g.icon} ${g.label}</option>
    `).join("");

    this.updateGlyphPreview();
  }

  updateGlyphPreview() {
    if (!this.dom.glyphPreviewBox || !this.dom.customGlyphSelect) return;
    const glyphId = this.dom.customGlyphSelect.value;
    this.dom.glyphPreviewBox.innerHTML = GlyphRenderer.renderMiniGlyphSVG(glyphId, "#00f0ff", 64);
  }

  /**
   * Binds UI Event Listeners
   */
  bindEvents() {
    // Audio Toggle
    this.dom.btnAudioToggle?.addEventListener("click", () => {
      const isMuted = cyberAudio.toggleMute();
      this.updateAudioButtonState();
      this.showToast(isMuted ? "NEURAL AUDIO: MUTED" : "NEURAL AUDIO: ONLINE", "🔊");
    });

    // Search Input
    this.dom.searchInput?.addEventListener("input", (e) => {
      this.state.searchQuery = e.target.value.trim();
      this.dom.searchClearBtn.style.display = this.state.searchQuery ? "block" : "none";
      this.render();
    });

    this.dom.searchClearBtn?.addEventListener("click", () => {
      cyberAudio.playClick();
      this.dom.searchInput.value = "";
      this.state.searchQuery = "";
      this.dom.searchClearBtn.style.display = "none";
      this.render();
    });

    // Genre Chips
    this.dom.genreChipsWrap?.addEventListener("click", (e) => {
      const chip = e.target.closest(".genre-chip");
      if (!chip) return;
      cyberAudio.playClick();
      this.state.activeGenre = chip.dataset.genre;
      this.renderGenreChips();
      this.render();
    });

    // Sort Dropdown
    this.dom.sortSelect?.addEventListener("change", (e) => {
      cyberAudio.playClick();
      this.state.sortBy = e.target.value;
      this.render();
    });

    // Rating Slider
    this.dom.ratingSlider?.addEventListener("input", (e) => {
      this.state.minRating = parseFloat(e.target.value);
      this.dom.ratingValueDisplay.textContent = this.state.minRating.toFixed(1) + "+";
      this.render();
    });

    // Favorites Only Filter Toggle
    this.dom.btnFavFilterToggle?.addEventListener("click", () => {
      cyberAudio.playClick();
      this.state.favoritesOnly = !this.state.favoritesOnly;
      this.dom.btnFavFilterToggle.classList.toggle("cyber-btn-active", this.state.favoritesOnly);
      this.render();
    });

    // View Mode Switcher
    this.dom.btnViewGrid?.addEventListener("click", () => {
      if (this.state.viewMode === "grid") return;
      cyberAudio.playClick();
      this.state.viewMode = "grid";
      this.dom.btnViewGrid.classList.add("cyber-btn-active");
      this.dom.btnViewMatrix.classList.remove("cyber-btn-active");
      this.render();
    });

    this.dom.btnViewMatrix?.addEventListener("click", () => {
      if (this.state.viewMode === "matrix") return;
      cyberAudio.playClick();
      this.state.viewMode = "matrix";
      this.dom.btnViewMatrix.classList.add("cyber-btn-active");
      this.dom.btnViewGrid.classList.remove("cyber-btn-active");
      this.render();
    });

    // Random Pick
    this.dom.btnRandomPick?.addEventListener("click", () => {
      cyberAudio.playClick();
      this.pickRandomMovie();
    });

    // Open Recommender Modal
    this.dom.btnOpenRecommender?.addEventListener("click", () => {
      cyberAudio.playModalOpen();
      this.openRecommenderModal();
    });

    // Open Add Movie Modal
    this.dom.btnAddMovie?.addEventListener("click", () => {
      cyberAudio.playModalOpen();
      this.openAddMovieModal();
    });

    // Export / Import Data
    this.dom.btnExportData?.addEventListener("click", () => {
      cyberAudio.playClick();
      this.exportUserData();
    });

    // Detail Modal Close
    this.dom.detailCloseBtn?.addEventListener("click", () => {
      cyberAudio.playModalClose();
      this.closeModal(this.dom.modalDetail);
    });

    // Detail Modal Tabs
    this.dom.detailModalTabs.forEach(tab => {
      tab.addEventListener("click", (e) => {
        cyberAudio.playClick();
        const targetTab = e.currentTarget.dataset.tab;
        this.dom.detailModalTabs.forEach(t => t.classList.remove("active"));
        this.dom.detailTabContents.forEach(c => c.style.display = "none");
        e.currentTarget.classList.add("active");
        const activePane = document.getElementById(`tab-pane-${targetTab}`);
        if (activePane) activePane.style.display = "block";
      });
    });

    // Detail Quote Audio Synth Trigger
    this.dom.btnPlayQuoteAudio?.addEventListener("click", () => {
      cyberAudio.playTransmissionChirp();
      this.showToast("TRANSMITTING AUDIO FREQUENCY...", "⚡");
    });

    // Detail Modal Favorite Toggle
    this.dom.btnDetailFavToggle?.addEventListener("click", () => {
      if (!this.state.currentDetailMovie) return;
      const isFav = CyberStorage.toggleFavorite(this.state.currentDetailMovie.id);
      if (isFav) {
        cyberAudio.playFavorite();
        this.showToast(`[${this.state.currentDetailMovie.title}] SYNCED TO NEURAL FAVORITES`, "💙");
      } else {
        cyberAudio.playUnfavorite();
        this.showToast(`[${this.state.currentDetailMovie.title}] REMOVED FROM FAVORITES`, "🗑️");
      }
      this.updateDetailFavButton(isFav);
      this.render();
    });

    // Recommender Modal Events
    this.dom.recommenderCloseBtn?.addEventListener("click", () => {
      cyberAudio.playModalClose();
      this.closeModal(this.dom.modalRecommender);
    });

    this.dom.vibeSelectionGrid?.addEventListener("click", (e) => {
      const btn = e.target.closest(".vibe-card-btn");
      if (!btn) return;
      cyberAudio.playClick();
      document.querySelectorAll(".vibe-card-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      this.dom.recommenderInput.value = btn.dataset.vibe;
      this.executeAIRecommender(btn.dataset.vibe);
    });

    this.dom.btnRunRecommender?.addEventListener("click", () => {
      cyberAudio.playClick();
      const query = this.dom.recommenderInput.value.trim();
      if (query) this.executeAIRecommender(query);
    });

    // Add Movie Events
    this.dom.addMovieCloseBtn?.addEventListener("click", () => {
      cyberAudio.playModalClose();
      this.closeModal(this.dom.modalAddMovie);
    });

    this.dom.customGlyphSelect?.addEventListener("change", () => {
      this.updateGlyphPreview();
    });

    this.dom.addMovieForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleCreateCustomMovie();
    });

    // Backdrop click to close modals
    [this.dom.modalDetail, this.dom.modalRecommender, this.dom.modalAddMovie].forEach(modal => {
      modal?.addEventListener("click", (e) => {
        if (e.target === modal) {
          cyberAudio.playModalClose();
          this.closeModal(modal);
        }
      });
    });

    // Keyboard ESC to close modal
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        [this.dom.modalDetail, this.dom.modalRecommender, this.dom.modalAddMovie].forEach(m => {
          if (m?.classList.contains("is-open")) {
            cyberAudio.playModalClose();
            this.closeModal(m);
          }
        });
      }
    });
  }

  updateAudioButtonState() {
    if (!this.dom.audioIcon) return;
    this.dom.audioIcon.textContent = cyberAudio.isMuted ? "🔇" : "🔊";
  }

  /**
   * Main Filter, Sort, & Render Pipeline
   */
  getFilteredMovies() {
    let list = [...this.state.allMovies];
    const favorites = CyberStorage.getFavorites();

    // 1. Search Query Filter
    if (this.state.searchQuery) {
      const q = this.state.searchQuery.toLowerCase();
      list = list.filter(m => 
        m.title.toLowerCase().includes(q) ||
        m.director.toLowerCase().includes(q) ||
        m.synopsis.toLowerCase().includes(q) ||
        (m.cyberClassification && m.cyberClassification.toLowerCase().includes(q)) ||
        m.genres.some(g => g.toLowerCase().includes(q)) ||
        m.cast.some(c => c.toLowerCase().includes(q))
      );
    }

    // 2. Genre Filter
    if (this.state.activeGenre && this.state.activeGenre !== "All") {
      list = list.filter(m => m.genres.includes(this.state.activeGenre));
    }

    // 3. Min Rating Filter
    if (this.state.minRating > 0) {
      list = list.filter(m => (m.cyberRating || 0) >= this.state.minRating);
    }

    // 4. Favorites Only Filter
    if (this.state.favoritesOnly) {
      list = list.filter(m => favorites.includes(m.id));
    }

    // 5. Sorting
    list.sort((a, b) => {
      switch (this.state.sortBy) {
        case "rating-desc":
          return (b.cyberRating || 0) - (a.cyberRating || 0);
        case "resonance-desc":
          return (b.resonanceScore || 0) - (a.resonanceScore || 0);
        case "year-desc":
          return (b.releaseYear || 0) - (a.releaseYear || 0);
        case "year-asc":
          return (a.releaseYear || 0) - (b.releaseYear || 0);
        case "title-asc":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return list;
  }

  render() {
    const movies = this.getFilteredMovies();
    const favorites = CyberStorage.getFavorites();

    // Update Top Counters
    if (this.dom.favTopCount) this.dom.favTopCount.textContent = favorites.length;
    if (this.dom.totalFavsCount) this.dom.totalFavsCount.textContent = favorites.length;
    if (this.dom.totalMoviesCount) this.dom.totalMoviesCount.textContent = this.state.allMovies.length;
    if (this.dom.totalGenresCount) this.dom.totalGenresCount.textContent = ALL_GENRES.length - 1;

    // Update Results Telemetry Badge
    if (this.dom.resultsCountBadge) {
      this.dom.resultsCountBadge.textContent = `[ ${movies.length} DATA-STREAMS INDEXED ]`;
    }

    // Handle Empty State
    if (movies.length === 0) {
      this.dom.emptyDeckState.style.display = "block";
      this.dom.moviesGridDeck.style.display = "none";
      this.dom.terminalMatrixView.style.display = "none";
      return;
    }

    this.dom.emptyDeckState.style.display = "none";

    if (this.state.viewMode === "grid") {
      this.dom.moviesGridDeck.style.display = "grid";
      this.dom.terminalMatrixView.style.display = "none";
      this.renderGridView(movies, favorites);
    } else {
      this.dom.moviesGridDeck.style.display = "none";
      this.dom.terminalMatrixView.style.display = "block";
      this.renderMatrixView(movies, favorites);
    }
  }

  /**
   * Renders the Holographic Card Grid View
   * 100% Vector Procedural SVG Art (Zero External Images)
   */
  renderGridView(movies, favorites) {
    this.dom.moviesGridDeck.innerHTML = movies.map(movie => {
      const isFav = favorites.includes(movie.id);
      const posterSVG = GlyphRenderer.renderMoviePosterSVG(movie, false);

      return `
        <div class="cyber-card" data-id="${movie.id}">
          <div class="card-poster-stage" onclick="app.openDetailModal('${movie.id}')">
            ${posterSVG}
          </div>
          <div class="card-body">
            <div class="card-title-row">
              <h3 class="card-title" onclick="app.openDetailModal('${movie.id}')">${movie.title}</h3>
            </div>
            
            <div class="card-genres">
              ${movie.genres.map(g => `<span class="genre-tag-pill">${g}</span>`).join("")}
            </div>

            <p class="card-synopsis">${movie.synopsis}</p>

            <div class="card-metrics-row">
              <div class="card-resonance-meter">
                <span>AI RES:</span>
                <div class="meter-track">
                  <div class="meter-fill" style="width: ${movie.resonanceScore || 90}%"></div>
                </div>
                <span>${movie.resonanceScore || 90}%</span>
              </div>
              <span class="mono-tag text-cyan">★ ${(movie.cyberRating || 9.0).toFixed(1)}</span>
            </div>

            <div class="card-actions">
              <button class="card-btn-inspect" onclick="app.openDetailModal('${movie.id}')">
                <span>INSPECT [HUD]</span> <span>👁</span>
              </button>
              <button class="card-btn-favorite ${isFav ? 'is-favorited anim-heart-sync' : ''}" 
                      title="${isFav ? 'Remove from Neural Memory' : 'Sync to Neural Memory'}"
                      onclick="app.toggleCardFavorite('${movie.id}')">
                ${isFav ? '♥' : '♡'}
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  /**
   * Renders the Cyber-Terminal Data Matrix Table View
   */
  renderMatrixView(movies, favorites) {
    const tbody = document.getElementById("terminal-table-body");
    if (!tbody) return;

    tbody.innerHTML = movies.map(movie => {
      const isFav = favorites.includes(movie.id);
      const miniGlyph = GlyphRenderer.renderMiniGlyphSVG(movie.glyphType, movie.badgeColor || "#00f0ff", 32);

      return `
        <tr>
          <td>
            <div class="table-title-cell" onclick="app.openDetailModal('${movie.id}')">
              ${miniGlyph}
              <div>
                <div>${movie.title}</div>
                <div class="mono-tag text-dim" style="font-size: 0.75rem;">${movie.cyberClassification || 'AI-00'}</div>
              </div>
            </div>
          </td>
          <td>
            <div style="display: flex; gap: 0.3rem; flex-wrap: wrap;">
              ${movie.genres.slice(0, 2).map(g => `<span class="genre-tag-pill">${g}</span>`).join("")}
            </div>
          </td>
          <td><span class="mono-tag text-cyan">★ ${(movie.cyberRating || 9.0).toFixed(1)}</span></td>
          <td><span class="mono-tag text-blue">${movie.resonanceScore || 95}%</span></td>
          <td><span class="mono-tag text-dim">${movie.releaseYear}</span></td>
          <td>
            <div style="display: flex; gap: 0.4rem;">
              <button class="telemetry-btn" onclick="app.openDetailModal('${movie.id}')">
                HUD [ 👁 ]
              </button>
              <button class="card-btn-favorite ${isFav ? 'is-favorited' : ''}" 
                      style="width: 32px; height: 30px; font-size: 0.9rem;"
                      onclick="app.toggleCardFavorite('${movie.id}')">
                ${isFav ? '♥' : '♡'}
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join("");
  }

  /**
   * Toggles movie favorite status
   */
  toggleCardFavorite(movieId) {
    const movie = this.state.allMovies.find(m => m.id === movieId);
    const isFav = CyberStorage.toggleFavorite(movieId);

    if (isFav) {
      cyberAudio.playFavorite();
      this.showToast(`[${movie ? movie.title : 'STREAM'}] SAVED TO FAVORITES`, "💙");
    } else {
      cyberAudio.playUnfavorite();
      this.showToast(`[${movie ? movie.title : 'STREAM'}] REMOVED FROM FAVORITES`, "🗑️");
    }

    this.render();
  }

  /**
   * Opens Deep Movie HUD Inspection Modal
   */
  openDetailModal(movieId) {
    const movie = this.state.allMovies.find(m => m.id === movieId);
    if (!movie) return;

    this.state.currentDetailMovie = movie;
    cyberAudio.playModalOpen();

    // Populate Modal Info
    this.dom.detailPosterStage.innerHTML = GlyphRenderer.renderMoviePosterSVG(movie, true);
    this.dom.detailTitle.textContent = movie.title;
    this.dom.detailTagline.textContent = movie.tagline ? `"${movie.tagline}"` : "";
    this.dom.detailYear.textContent = movie.releaseYear;
    this.dom.detailDuration.textContent = movie.duration;
    this.dom.detailRating.textContent = `★ ${(movie.cyberRating || 9.0).toFixed(1)}`;
    this.dom.detailClassification.textContent = `[ ${movie.cyberClassification || 'AI-PROT-00'} ]`;
    this.dom.detailSynopsis.textContent = movie.synopsis;

    // Genres
    this.dom.detailGenres.innerHTML = movie.genres.map(g => `
      <span class="genre-tag-pill">${g}</span>
    `).join("");

    // Metrics Progress Bars
    const metrics = movie.cyberMetrics || {
      aiResonance: 92,
      visualFidelity: 95,
      storyComplexity: 90,
      adrenalineFactor: 85
    };

    this.dom.detailMetricsWrap.innerHTML = `
      <div class="metric-row">
        <div class="metric-label-group">
          <span>AI NEURAL RESONANCE</span>
          <span class="text-cyan">${metrics.aiResonance}%</span>
        </div>
        <div class="metric-progress-bar"><div class="metric-progress-fill" style="width: ${metrics.aiResonance}%"></div></div>
      </div>
      <div class="metric-row">
        <div class="metric-label-group">
          <span>VISUAL HOLOGRAPHIC FIDELITY</span>
          <span class="text-cyan">${metrics.visualFidelity}%</span>
        </div>
        <div class="metric-progress-bar"><div class="metric-progress-fill" style="width: ${metrics.visualFidelity}%"></div></div>
      </div>
      <div class="metric-row">
        <div class="metric-label-group">
          <span>NARRATIVE COMPLEXITY</span>
          <span class="text-cyan">${metrics.storyComplexity}%</span>
        </div>
        <div class="metric-progress-bar"><div class="metric-progress-fill" style="width: ${metrics.storyComplexity}%"></div></div>
      </div>
      <div class="metric-row">
        <div class="metric-label-group">
          <span>ADRENALINE & ACTION INDEX</span>
          <span class="text-cyan">${metrics.adrenalineFactor}%</span>
        </div>
        <div class="metric-progress-bar"><div class="metric-progress-fill" style="width: ${metrics.adrenalineFactor}%"></div></div>
      </div>
    `;

    // Tech Specs
    const specs = movie.techSpecs || {
      neuralSync: "Direct Synaptic Link",
      operatingSystem: "CyberKernel v4.2",
      cyberneticTarget: "Augmented Units",
      protocol: "Standard Voight-Kampff"
    };

    this.dom.detailTechSpecsWrap.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="stat-card">
          <div class="stat-icon-wrapper">🧬</div>
          <div>
            <div class="stat-label">NEURAL SYNC INTERFACE</div>
            <div class="mono-tag text-cyan" style="font-size: 0.9rem;">${specs.neuralSync}</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon-wrapper">💻</div>
          <div>
            <div class="stat-label">OPERATING SYSTEM</div>
            <div class="mono-tag text-cyan" style="font-size: 0.9rem;">${specs.operatingSystem}</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon-wrapper">🎯</div>
          <div>
            <div class="stat-label">TARGET CLASSIFICATION</div>
            <div class="mono-tag text-cyan" style="font-size: 0.9rem;">${specs.cyberneticTarget}</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon-wrapper">🔒</div>
          <div>
            <div class="stat-label">SECURITY PROTOCOL</div>
            <div class="mono-tag text-cyan" style="font-size: 0.9rem;">${specs.protocol}</div>
          </div>
        </div>
      </div>
    `;

    // Cast Avatars
    this.dom.detailCastGrid.innerHTML = movie.cast.map((actor, idx) => `
      <div class="cast-token-card">
        ${GlyphRenderer.renderCastAvatarSVG(actor, idx)}
        <div>
          <div class="cast-name-text">${actor}</div>
          <div class="mono-tag text-dim" style="font-size: 0.75rem;">AI-ID: #${1040 + idx}</div>
        </div>
      </div>
    `).join("");

    // Quote
    this.dom.detailQuoteText.textContent = movie.memorableQuote ? `"${movie.memorableQuote}"` : `"Neural link established. Accessing subconscious memory sector."`;

    // Update Favorite Button State in modal
    const isFav = CyberStorage.isFavorite(movie.id);
    this.updateDetailFavButton(isFav);

    // Reset to first tab
    this.dom.detailModalTabs[0].click();

    // Open Modal
    this.dom.modalDetail.classList.add("is-open");
  }

  updateDetailFavButton(isFav) {
    if (!this.dom.btnDetailFavToggle) return;
    this.dom.btnDetailFavToggle.innerHTML = isFav 
      ? `<span>NEURAL SYNCED</span> <span style="color: var(--accent-pink);">♥</span>`
      : `<span>SYNC TO MEMORY</span> <span>♡</span>`;
    this.dom.btnDetailFavToggle.classList.toggle("cyber-btn-pink", isFav);
  }

  /**
   * Opens the AI Neural Recommender modal
   */
  openRecommenderModal() {
    if (!this.dom.vibeSelectionGrid) return;
    this.dom.vibeSelectionGrid.innerHTML = NeuralRecommender.PRESET_VIBES.map(v => `
      <button class="vibe-card-btn" data-vibe="${v.title}">
        <div class="vibe-icon">${v.icon}</div>
        <div class="vibe-card-title">${v.title}</div>
        <div class="mono-tag text-dim" style="font-size: 0.75rem;">${v.tags.join(" • ")}</div>
      </button>
    `).join("");

    this.dom.recommenderResultsWrap.style.display = "none";
    this.dom.modalRecommender.classList.add("is-open");
  }

  executeAIRecommender(query) {
    cyberAudio.playTransmissionChirp();
    this.dom.recommenderResultsWrap.style.display = "block";
    this.dom.recommenderDecodingState.style.display = "block";
    this.dom.recommenderMatchesList.style.display = "none";

    const decodingText = document.getElementById("decoding-status-text");
    if (decodingText) {
      NeuralRecommender.scrambleText(decodingText, "SYNTHESIZING NEURAL VIBE MATRIX...", 700);
    }

    setTimeout(() => {
      const matches = NeuralRecommender.findMatches(query, this.state.allMovies).slice(0, 4);
      this.dom.recommenderDecodingState.style.display = "none";
      this.dom.recommenderMatchesList.style.display = "grid";

      this.dom.recommenderMatchesList.innerHTML = matches.map(match => `
        <div class="stat-card" style="cursor: pointer;" onclick="app.closeModal(document.getElementById('modal-ai-recommender')); app.openDetailModal('${match.movie.id}')">
          <div class="stat-icon-wrapper">
            ${GlyphRenderer.renderMiniGlyphSVG(match.movie.glyphType, match.movie.badgeColor || '#00f0ff', 40)}
          </div>
          <div style="flex-grow: 1;">
            <div style="display: flex; justify-content: space-between;">
              <h4 style="font-size: 1rem; color: #fff;">${match.movie.title}</h4>
              <span class="mono-tag text-cyan">${match.score}% MATCH</span>
            </div>
            <div class="mono-tag text-dim" style="font-size: 0.78rem;">${match.movie.genres.join(" | ")}</div>
          </div>
        </div>
      `).join("");
    }, 750);
  }

  /**
   * Opens Add Custom Movie Modal
   */
  openAddMovieModal() {
    this.dom.addMovieForm.reset();
    this.updateGlyphPreview();
    this.dom.modalAddMovie.classList.add("is-open");
  }

  handleCreateCustomMovie() {
    const title = document.getElementById("custom-title").value.trim();
    const releaseYear = parseInt(document.getElementById("custom-year").value) || 2026;
    const duration = document.getElementById("custom-duration").value.trim() || "120 min";
    const cyberRating = parseFloat(document.getElementById("custom-rating").value) || 8.5;
    const genreInput = document.getElementById("custom-genres").value.trim();
    const glyphType = this.dom.customGlyphSelect.value;
    const director = document.getElementById("custom-director").value.trim() || "Cyber Collective";
    const castRaw = document.getElementById("custom-cast").value.trim() || "Synthetic AI Cast";
    const synopsis = document.getElementById("custom-synopsis").value.trim();
    const quote = document.getElementById("custom-quote").value.trim();

    const genres = genreInput ? genreInput.split(",").map(g => g.trim()) : ["Cyberpunk", "Sci-Fi"];
    const cast = castRaw.split(",").map(c => c.trim());

    const newMovie = {
      id: "custom-" + Date.now(),
      title,
      releaseYear,
      duration,
      cyberRating,
      resonanceScore: Math.floor(85 + Math.random() * 14),
      genres,
      director,
      cast,
      glyphType,
      cyberClassification: `USER-AI-${Math.floor(100 + Math.random() * 900)}`,
      tagline: quote ? quote : "A user-injected neural transmission.",
      synopsis: synopsis || "A custom cybernetic narrative created in the neural archive.",
      cyberMetrics: {
        aiResonance: Math.floor(88 + Math.random() * 11),
        visualFidelity: Math.floor(90 + Math.random() * 9),
        storyComplexity: Math.floor(85 + Math.random() * 14),
        adrenalineFactor: Math.floor(85 + Math.random() * 14)
      },
      techSpecs: {
        neuralSync: "Custom User Neural Node",
        cyberneticTarget: "Local Memory Matrix",
        operatingSystem: "UserOS Kernel v1.0",
        protocol: "Injected Archive Protocol"
      },
      memorableQuote: quote,
      badgeColor: "#00f0ff"
    };

    CyberStorage.addCustomMovie(newMovie);
    this.loadMovies();
    this.closeModal(this.dom.modalAddMovie);
    cyberAudio.playFavorite();
    this.showToast(`CUSTOM MOVIE [${title}] INJECTED INTO ARCHIVE`, "🚀");
    this.render();
  }

  /**
   * Surprise Me - Picks a random movie
   */
  pickRandomMovie() {
    const list = this.getFilteredMovies();
    if (list.length === 0) return;
    const random = list[Math.floor(Math.random() * list.length)];
    this.showToast(`NEURAL SURPRISE: [${random.title}]`, "🎲");
    this.openDetailModal(random.id);
  }

  /**
   * Exports user favorites & custom movies as a downloadable JSON file
   */
  exportUserData() {
    const jsonStr = CyberStorage.exportFavoritesJSON();
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cyber-movie-archive-backup-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    this.showToast("NEURAL DATA EXPORTED SUCCESSFULLY", "💾");
  }

  closeModal(modalElement) {
    if (modalElement) modalElement.classList.remove("is-open");
  }

  showToast(message, icon = "⚡") {
    if (!this.dom.cyberToast || !this.dom.toastMessage) return;
    this.dom.toastMessage.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    this.dom.cyberToast.classList.add("show");
    if (this._toastTimeout) clearTimeout(this._toastTimeout);
    this._toastTimeout = setTimeout(() => {
      this.dom.cyberToast.classList.remove("show");
    }, 2800);
  }
}

// Global App Instance
let app;
window.addEventListener("DOMContentLoaded", () => {
  app = new CyberpunkMovieApp();
  app.init();
});
