/**
 * Web Audio API Cyberpunk UI Synthesizer
 * Generates futuristic sci-fi sound effects procedurally without any external audio files
 */

class CyberAudioSynth {
  constructor() {
    this.ctx = null;
    this.isMuted = localStorage.getItem("cyber_audio_muted") === "true";
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem("cyber_audio_muted", this.isMuted);
    if (!this.isMuted) {
      this.playBeep(880, 0.05, "sine", 0.1);
    }
    return this.isMuted;
  }

  /**
   * Generic procedural tone generator
   */
  playBeep(freq = 440, duration = 0.08, type = "sine", gainVal = 0.08) {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio synth suppressed:", e);
    }
  }

  /**
   * Futuristic button click
   */
  playClick() {
    if (this.isMuted) return;
    this.playBeep(1200, 0.04, "triangle", 0.06);
  }

  /**
   * Light hovering chirp
   */
  playHover() {
    if (this.isMuted) return;
    this.playBeep(640, 0.03, "sine", 0.02);
  }

  /**
   * Positive favorite chime (ascending arpeggio)
   */
  playFavorite() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + i * 0.05);
        gain.gain.setValueAtTime(0.06, now + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.05 + 0.12);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.05);
        osc.stop(now + i * 0.05 + 0.12);
      });
    } catch (e) {}
  }

  /**
   * Unfavorite tone (descending)
   */
  playUnfavorite() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      [659.25, 523.25, 392.0].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(freq, now + i * 0.04);
        gain.gain.setValueAtTime(0.04, now + i * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.04 + 0.1);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.04);
        osc.stop(now + i * 0.04 + 0.1);
      });
    } catch (e) {}
  }

  /**
   * Hologram expansion / Modal open sweep
   */
  playModalOpen() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(200, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.18);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.2);
    } catch (e) {}
  }

  /**
   * Modal dismiss sound
   */
  playModalClose() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.14);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.14);
    } catch (e) {}
  }

  /**
   * Simulated neural transmission quote speaker
   */
  playTransmissionChirp() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      for (let i = 0; i < 6; i++) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "square";
        osc.frequency.setValueAtTime(700 + Math.random() * 800, now + i * 0.05);
        gain.gain.setValueAtTime(0.03, now + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.05 + 0.04);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.05);
        osc.stop(now + i * 0.05 + 0.04);
      }
    } catch (e) {}
  }
}

const cyberAudio = new CyberAudioSynth();
