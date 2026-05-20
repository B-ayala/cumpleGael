/**
 * Motor de sonido sintetizado con Web Audio API (sin archivos de audio externos).
 * Todos los efectos se generan en runtime: silbato, gol, festejo y clicks.
 * Se inicializa recién en el primer gesto del usuario (política de autoplay).
 */

type SoundName = "whistle" | "goal" | "cheer" | "click" | "pop";

class SoundEngine {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private enabled = false;

  private ensureContext(): AudioContext | null {
    if (typeof window === "undefined") return null;
    const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    if (!this.ctx) {
      this.ctx = new Ctor();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.5;
      this.master.connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") void this.ctx.resume();
    return this.ctx;
  }

  setEnabled(value: boolean): void {
    this.enabled = value;
    if (value) this.ensureContext();
  }

  isEnabled(): boolean {
    return this.enabled;
  }

  play(name: SoundName): void {
    if (!this.enabled) return;
    const ctx = this.ensureContext();
    if (!ctx || !this.master) return;
    switch (name) {
      case "whistle":
        this.tone(ctx, 1900, 0.18, "square", 0.18);
        break;
      case "click":
        this.tone(ctx, 660, 0.07, "triangle", 0.12);
        break;
      case "pop":
        this.tone(ctx, 880, 0.09, "sine", 0.16);
        break;
      case "goal":
        this.goalHorn(ctx);
        break;
      case "cheer":
        this.crowd(ctx);
        break;
    }
  }

  private tone(ctx: AudioContext, freq: number, dur: number, type: OscillatorType, gain: number): void {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    g.gain.setValueAtTime(gain, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
    osc.connect(g).connect(this.master as GainNode);
    osc.start();
    osc.stop(ctx.currentTime + dur);
  }

  private goalHorn(ctx: AudioContext): void {
    const notes = [392, 392, 523, 659];
    notes.forEach((freq, i) => {
      const start = ctx.currentTime + i * 0.16;
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.value = freq;
      g.gain.setValueAtTime(0.0001, start);
      g.gain.exponentialRampToValueAtTime(0.22, start + 0.03);
      g.gain.exponentialRampToValueAtTime(0.0001, start + 0.22);
      osc.connect(g).connect(this.master as GainNode);
      osc.start(start);
      osc.stop(start + 0.24);
    });
  }

  private crowd(ctx: AudioContext): void {
    const duration = 1.4;
    const buffer = ctx.createBuffer(1, ctx.sampleRate * duration, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) {
      const envelope = Math.min(1, i / (data.length * 0.2)) * (1 - i / data.length);
      data[i] = (Math.random() * 2 - 1) * envelope * 0.5;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 1000;
    filter.Q.value = 0.7;
    noise.connect(filter).connect(this.master as GainNode);
    noise.start();
  }
}

export const soundEngine = new SoundEngine();
export type { SoundName };
