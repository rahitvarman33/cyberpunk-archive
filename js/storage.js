/**
 * LocalStorage Data Manager
 * Persists favorites, custom additions, and UI state across browser sessions
 */

const CyberStorage = {
  FAVORITES_KEY: "cyber_movie_favorites",
  CUSTOM_MOVIES_KEY: "cyber_custom_movies",
  SETTINGS_KEY: "cyber_user_settings",

  // --- FAVORITES ---
  getFavorites() {
    try {
      const data = localStorage.getItem(this.FAVORITES_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Failed to read favorites from localStorage:", e);
      return [];
    }
  },

  isFavorite(movieId) {
    const favorites = this.getFavorites();
    return favorites.includes(movieId);
  },

  toggleFavorite(movieId) {
    let favorites = this.getFavorites();
    let isNowFav = false;
    if (favorites.includes(movieId)) {
      favorites = favorites.filter(id => id !== movieId);
      isNowFav = false;
    } else {
      favorites.push(movieId);
      isNowFav = true;
    }
    localStorage.setItem(this.FAVORITES_KEY, JSON.stringify(favorites));
    return isNowFav;
  },

  clearAllFavorites() {
    localStorage.removeItem(this.FAVORITES_KEY);
  },

  // --- CUSTOM MOVIES ---
  getCustomMovies() {
    try {
      const data = localStorage.getItem(this.CUSTOM_MOVIES_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Failed to read custom movies:", e);
      return [];
    }
  },

  addCustomMovie(movie) {
    const customMovies = this.getCustomMovies();
    // Ensure unique ID
    if (!movie.id) {
      movie.id = "custom-" + Date.now();
    }
    customMovies.unshift(movie);
    localStorage.setItem(this.CUSTOM_MOVIES_KEY, JSON.stringify(customMovies));
    return movie;
  },

  deleteCustomMovie(movieId) {
    let customMovies = this.getCustomMovies();
    customMovies = customMovies.filter(m => m.id !== movieId);
    localStorage.setItem(this.CUSTOM_MOVIES_KEY, JSON.stringify(customMovies));
  },

  // --- EXPORT & IMPORT ---
  exportFavoritesJSON() {
    const favorites = this.getFavorites();
    const custom = this.getCustomMovies();
    return JSON.stringify({
      exportDate: new Date().toISOString(),
      favorites,
      customMovies: custom
    }, null, 2);
  },

  importFavoritesJSON(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (Array.isArray(parsed.favorites)) {
        localStorage.setItem(this.FAVORITES_KEY, JSON.stringify(parsed.favorites));
      }
      if (Array.isArray(parsed.customMovies)) {
        localStorage.setItem(this.CUSTOM_MOVIES_KEY, JSON.stringify(parsed.customMovies));
      }
      return true;
    } catch (e) {
      console.error("Import failed:", e);
      return false;
    }
  }
};
