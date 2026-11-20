import * as THREE from 'three';

const TAU = Math.PI * 2;
const VIOLET = 0xa45cff;
const CRIMSON = 0xff2e63;
const RADIUS = 1.25;
const THICK = 0.18;
const TOSS = 1.55;
const PARTICLES = 96;
const FACE_PX = 512;

type Side = 'heads' | 'tails';

/** Paints one coin face. Pass glow=true for the emissive (black-background) map. */
function paintFace(ctx: CanvasRenderingContext2D, side: Side, glow: boolean): void {
  const c = FACE_PX / 2;
  const accent = side === 'heads' ? '#a45cff' : '#ff2e63';
  const second = side === 'heads' ? '#ff2e63' : '#a45cff';

  ctx.save();
  if (glow) {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, FACE_PX, FACE_PX);
  } else {
    const bg = ctx.createRadialGradient(c - 90, c - 110, 12, c, c, FACE_PX * 0.72);
    bg.addColorStop(0, '#2a2540');
    bg.addColorStop(0.42, '#131122');
    bg.addColorStop(1, '#040308');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, FACE_PX, FACE_PX);
    ctx.globalAlpha = 0.16;
    const sheen = ctx.createLinearGradient(0, 0, FACE_PX, FACE_PX);
    sheen.addColorStop(0, '#8f7fc0');
    sheen.addColorStop(0.5, '#000000');
    sheen.addColorStop(1, '#5a2b6e');
    ctx.fillStyle = sheen;
    ctx.fillRect(0, 0, FACE_PX, FACE_PX);
    ctx.globalAlpha = 1;
  }

  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  const lit = (col: string, blur: number) => {
    ctx.shadowColor = col;
    ctx.shadowBlur = glow ? blur : blur * 0.45;
  };

  // Brushed steel outer rim (albedo only).
  if (!glow) {
    const rim = ctx.createLinearGradient(0, c - FACE_PX / 2, 0, c + FACE_PX / 2);
    rim.addColorStop(0, '#6b6880');
    rim.addColorStop(0.5, '#1c1a28');
    rim.addColorStop(1, '#4b4760');
    ctx.strokeStyle = rim;
    ctx.lineWidth = 24;
    ctx.beginPath(); ctx.arc(c, c, FACE_PX * 0.457, 0, TAU); ctx.stroke();
    ctx.strokeStyle = '#0a0810';
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(c, c, FACE_PX * 0.475, 0, TAU); ctx.stroke();
  }

  // Engraved glowing rings.
  lit(accent, 22);
  ctx.strokeStyle = accent;
  ctx.lineWidth = glow ? 5 : 3;
  ctx.beginPath(); ctx.arc(c, c, FACE_PX * 0.395, 0, TAU); ctx.stroke();

  lit(second, 16);
  ctx.strokeStyle = second;
  ctx.lineWidth = glow ? 4 : 2;
  ctx.setLineDash([5, 15]);
  ctx.beginPath(); ctx.arc(c, c, FACE_PX * 0.35, 0, TAU); ctx.stroke();
  ctx.setLineDash([]);

  // Rune ticks around the rim.
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * TAU - Math.PI / 2;
    const col = i % 2 ? accent : second;
    lit(col, 14);
    ctx.strokeStyle = col;
    ctx.lineWidth = i % 3 === 0 ? 5 : 2.5;
    const r0 = FACE_PX * 0.405;
    const r1 = FACE_PX * (i % 3 === 0 ? 0.445 : 0.43);
    ctx.beginPath();
    ctx.moveTo(c + Math.cos(a) * r0, c + Math.sin(a) * r0);
    ctx.lineTo(c + Math.cos(a) * r1, c + Math.sin(a) * r1);
    ctx.stroke();
  }
  ctx.shadowBlur = 0;

  // Crescent above the label.
  lit(accent, glow ? 26 : 12);
  ctx.fillStyle = accent;
  ctx.save();
  ctx.translate(c, c - 104);
  ctx.rotate(-0.35);
  ctx.beginPath();
  ctx.arc(0, 0, 44, Math.PI * 0.38, Math.PI * 1.62, false);
  ctx.arc(44 * 0.46, 0, 44 * 0.94, Math.PI * 1.62, Math.PI * 0.38, true);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  // Interlocking-triangle sigil below the label.
  const sx = c, sy = c + 118, sr = 30;
  lit(second, glow ? 24 : 10);
  ctx.strokeStyle = second;
  ctx.lineWidth = glow ? 4 : 2.5;
  for (const dir of [1, -1]) {
    ctx.beginPath();
    for (let k = 0; k < 3; k++) {
      const a = -Math.PI / 2 + dir * k * TAU / 3;
      const px = sx + Math.cos(a) * sr;
      const py = sy + Math.sin(a) * sr;
      if (k === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.arc(sx, sy, sr * 0.2, 0, TAU);
  ctx.fillStyle = second;
  ctx.fill();
  ctx.shadowBlur = 0;

  // Readable HEADS / TAILS label.
  const label = side.toUpperCase();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = '900 86px Georgia, "Times New Roman", serif';
  lit(accent, glow ? 18 : 24);
  ctx.lineWidth = glow ? 5 : 8;
  ctx.strokeStyle = glow ? accent : '#07050c';
  ctx.strokeText(label, c, c + 8);
  if (glow) {
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = accent;
    ctx.fillText(label, c, c + 8);
    ctx.globalAlpha = 1;
  } else {
    ctx.shadowBlur = 0;
    const g = ctx.createLinearGradient(0, c - 40, 0, c + 55);
    g.addColorStop(0, '#ffffff');
    g.addColorStop(0.5, side === 'heads' ? '#e7d6ff' : '#ffdbe4');
    g.addColorStop(1, accent);
    ctx.fillStyle = g;
    ctx.fillText(label, c, c + 8);
  }

  ctx.shadowBlur = glow ? 10 : 6;
  ctx.shadowColor = second;
  ctx.font = '700 20px Georgia, serif';
  ctx.fillStyle = glow ? second : '#b9a9c9';
  ctx.fillText('· C V R S E D ·', c, c + 168);

  ctx.restore();
}

function makeTexture(canvas: HTMLCanvasElement): THREE.CanvasTexture {
  const t = new THREE.CanvasTexture(canvas);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

/**
 * Cursed-sigil coin. The server decides heads/tails; flip() only animates a
 * deterministic landing on that side, regardless of the current rotation.
 */
export class CoinScene {
  private readonly renderer: THREE.WebGLRenderer;
  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.PerspectiveCamera(38, 1, 0.1, 60);
  private readonly coin = new THREE.Group();
  private readonly disposables: { dispose(): void }[] = [];

  private readonly pGeo: THREE.BufferGeometry;
  private readonly pPos: THREE.BufferAttribute;
  private readonly pCol: THREE.BufferAttribute;
  private readonly vel = new Float32Array(PARTICLES * 3);
  private readonly life = new Float32Array(PARTICLES);
  private readonly maxLife = new Float32Array(PARTICLES);
  private pCursor = 0;

  private raf = 0;
  private last = 0;
  private idle = 0;
  private landedYaw = 0;

  private flipping = false;
  private fStart = 0;
  private fDur = 1750;
  private fFrom = 0;
  private fTo = 0;
  private resolve: (() => void) | null = null;

  private readonly ro: ResizeObserver;

  constructor(private readonly canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    this.renderer.setClearColor(0x000000, 0);
    this.camera.position.set(0, 1.2, 7.5);
    this.camera.lookAt(0, 0, 0);

    this.scene.add(new THREE.AmbientLight(0x9a86c9, 0.55));
    const key = new THREE.DirectionalLight(0xd9c4ff, 2.4);
    key.position.set(-3, 4, 6);
    this.scene.add(key);
    const rimLight = new THREE.DirectionalLight(CRIMSON, 1.5);
    rimLight.position.set(4, -2, -5);
    this.scene.add(rimLight);
    const fill = new THREE.DirectionalLight(VIOLET, 0.8);
    fill.position.set(2, 3, -4);
    this.scene.add(fill);

    // Faint violet aura behind the coin (1 draw call, 2 triangles).
    const auraCanvas = document.createElement('canvas');
    auraCanvas.width = auraCanvas.height = 256;
    const ax = auraCanvas.getContext('2d')!;
    const ag = ax.createRadialGradient(128, 128, 8, 128, 128, 128);
    ag.addColorStop(0, 'rgba(164,92,255,0.55)');
    ag.addColorStop(0.45, 'rgba(120,40,180,0.18)');
    ag.addColorStop(1, 'rgba(0,0,0,0)');
    ax.fillStyle = ag;
    ax.fillRect(0, 0, 256, 256);
    const auraMat = this.track(new THREE.MeshBasicMaterial({
      map: this.track(makeTexture(auraCanvas)),
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.5,
    }));
    const aura = new THREE.Mesh(this.track(new THREE.PlaneGeometry(4.4, 4.4)), auraMat);
    aura.position.z = -0.75;
    this.scene.add(aura);

    // Obsidian body. The cylinder axis must point along Z so its caps face the camera.
    const bodyMat = this.track(new THREE.MeshStandardMaterial({
      color: 0x0a0912, metalness: 0.88, roughness: 0.28,
      emissive: 0x160a24, emissiveIntensity: 0.35,
    }));
    const body = new THREE.Mesh(
      this.track(new THREE.CylinderGeometry(RADIUS, RADIUS, THICK, 64)), bodyMat,
    );
    body.rotation.x = Math.PI / 2;
    this.coin.add(body);

    // Two readable faces with emissive rune maps.
    for (const side of ['heads', 'tails'] as const) {
      const cc = document.createElement('canvas');
      cc.width = cc.height = FACE_PX;
      paintFace(cc.getContext('2d')!, side, false);
      const gc = document.createElement('canvas');
      gc.width = gc.height = FACE_PX;
      paintFace(gc.getContext('2d')!, side, true);
      const mat = this.track(new THREE.MeshStandardMaterial({
        map: this.track(makeTexture(cc)),
        emissiveMap: this.track(makeTexture(gc)),
        emissive: 0xffffff,
        emissiveIntensity: side === 'heads' ? 1.05 : 1.15,
        metalness: 0.55, roughness: 0.35,
      }));
      const face = new THREE.Mesh(
        this.track(new THREE.CircleGeometry(RADIUS - 0.04, 64)), mat,
      );
      face.position.z = side === 'heads' ? THICK / 2 + 0.001 : -(THICK / 2 + 0.001);
      if (side === 'tails') face.rotation.y = Math.PI;
      this.coin.add(face);
    }

    // Thin glowing rims: violet on heads, crimson on tails.
    for (const [z, color] of [[THICK / 2 + 0.004, VIOLET], [-(THICK / 2 + 0.004), CRIMSON]] as const) {
      const m = this.track(new THREE.MeshBasicMaterial({
        color, transparent: true, opacity: 0.85,
        blending: THREE.AdditiveBlending, depthWrite: false,
      }));
      const ring = new THREE.Mesh(this.track(new THREE.TorusGeometry(RADIUS - 0.005, 0.014, 6, 64)), m);
      ring.position.z = z;
      this.coin.add(ring);
    }
    this.scene.add(this.coin);

    // Pooled particle burst: positions + RGBA colors, alpha fades with lifetime.
    this.pGeo = this.track(new THREE.BufferGeometry());
    this.pPos = new THREE.BufferAttribute(new Float32Array(PARTICLES * 3), 3);
    this.pCol = new THREE.BufferAttribute(new Float32Array(PARTICLES * 4), 4);
    this.pPos.setUsage(THREE.DynamicDrawUsage);
    this.pCol.setUsage(THREE.DynamicDrawUsage);
    this.pGeo.setAttribute('position', this.pPos);
    this.pGeo.setAttribute('color', this.pCol);
    const pMat = this.track(new THREE.PointsMaterial({
      size: 0.085, sizeAttenuation: true, vertexColors: true,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    }));
    const points = new THREE.Points(this.pGeo, pMat);
    points.frustumCulled = false;
    this.scene.add(points);

    this.ro = new ResizeObserver(() => this.resize());
    this.ro.observe(this.canvas.parentElement || this.canvas);
    this.resize();
    this.last = performance.now();
    this.raf = requestAnimationFrame(this.loop);
  }

  private track<T extends { dispose(): void }>(d: T): T {
    this.disposables.push(d);
    return d;
  }

  private reducedMotion(): boolean {
    return typeof window !== 'undefined'
      && typeof window.matchMedia === 'function'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  private readonly loop = () => {
    this.raf = requestAnimationFrame(this.loop);
    const now = performance.now();
    let dt = (now - this.last) / 1000;
    this.last = now;
    if (!Number.isFinite(dt) || dt < 0) dt = 0;
    dt = Math.min(dt, 0.05);
    this.idle += dt;
    const motion = this.reducedMotion() ? 0.3 : 1;

    if (this.flipping) {
      const p = Math.min(1, (now - this.fStart) / this.fDur);
      // Gentle power ease-out for the spin, plus a tiny damped settle in the last 18%.
      const spin = 1 - Math.pow(1 - p, 2.2);
      const s = Math.max(0, (p - 0.82) / 0.18);
      const settle = Math.sin(s * TAU) * 0.018 * (1 - s) * (1 - s);
      this.coin.rotation.y = this.fFrom + (this.fTo - this.fFrom) * (spin + settle);
      // Vertical toss arc, then a squash-and-stretch landing.
      const arc = Math.sin(Math.PI * Math.min(1, p / 0.92)) * TOSS;
      const sq = p > 0.9 ? Math.sin(((p - 0.9) / 0.1) * Math.PI) * 0.14 : 0;
      this.coin.position.y = arc - sq * 0.1;
      this.coin.rotation.z = Math.sin(p * TAU * 2) * 0.11 * (1 - p) * motion;
      this.coin.scale.set(1 + sq * 0.35, 1 - sq, 1 + sq * 0.35);
      if (p >= 1) this.completeFlip();
    } else {
      this.coin.rotation.y = this.landedYaw + Math.sin(this.idle * 0.9) * 0.1 * motion;
      this.coin.position.y = Math.sin(this.idle * 1.35) * 0.045 * motion;
      this.coin.rotation.z = Math.sin(this.idle * 0.6) * 0.045 * motion;
      this.coin.scale.set(1, 1, 1);
    }

    this.updateParticles(dt);
    this.renderer.render(this.scene, this.camera);
  };

  private completeFlip(): void {
    this.coin.rotation.y = this.fTo;
    this.coin.position.y = 0;
    this.coin.rotation.z = 0;
    this.coin.scale.set(1, 1, 1);
    this.landedYaw = this.fTo;
    this.idle = 0;
    this.flipping = false;
    this.burst();
    const done = this.resolve;
    this.resolve = null;
    done?.();
  }

  private burst(): void {
    const violet = new THREE.Color(VIOLET);
    const crimson = new THREE.Color(CRIMSON);
    for (let k = 0; k < PARTICLES; k++) {
      const i = this.pCursor % PARTICLES;
      this.pCursor++;
      const a = Math.random() * TAU;
      const r = Math.random() * 0.35;
      this.pPos.setXYZ(i, Math.cos(a) * r, 0.12, Math.sin(a) * r);
      const sp = 0.9 + Math.random() * 1.5;
      this.vel[i * 3] = Math.cos(a) * sp;
      this.vel[i * 3 + 1] = 1.3 + Math.random() * 1.9;
      this.vel[i * 3 + 2] = Math.sin(a) * sp;
      const life = 0.55 + Math.random() * 0.6;
      this.life[i] = life;
      this.maxLife[i] = life;
      const col = Math.random() < 0.5 ? violet : crimson;
      this.pCol.setXYZW(i, col.r, col.g, col.b, 1);
    }
    this.pPos.needsUpdate = true;
    this.pCol.needsUpdate = true;
  }

  private updateParticles(dt: number): void {
    let changed = false;
    for (let i = 0; i < PARTICLES; i++) {
      if (this.life[i] <= 0) {
        if (this.pCol.getW(i) !== 0) { this.pCol.setW(i, 0); changed = true; }
        continue;
      }
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        this.pCol.setW(i, 0);
        changed = true;
        continue;
      }
      this.vel[i * 3 + 1] -= 3.6 * dt;
      this.pPos.setXYZ(
        i,
        this.pPos.getX(i) + this.vel[i * 3] * dt,
        this.pPos.getY(i) + this.vel[i * 3 + 1] * dt,
        this.pPos.getZ(i) + this.vel[i * 3 + 2] * dt,
      );
      const t = this.life[i] / this.maxLife[i];
      this.pCol.setW(i, t * t);
      changed = true;
    }
    if (changed) {
      this.pPos.needsUpdate = true;
      this.pCol.needsUpdate = true;
    }
  }

  private resize(): void {
    const w = Math.max(1, this.canvas.clientWidth);
    const h = Math.max(1, this.canvas.clientHeight);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  flip(result: Side): Promise<void> {
    // Clean restart: any in-flight flip resolves immediately so callers never hang.
    if (this.resolve) {
      const pending = this.resolve;
      this.resolve = null;
      pending();
    }
    this.flipping = false;

    const reduced = this.reducedMotion();
    this.fDur = reduced ? 650 : 1750;
    const turns = reduced ? 3 : 5;
    const side = result === 'tails' ? Math.PI : 0;
    const from = this.coin.rotation.y;
    // Largest congruent angle <= from; adding whole turns guarantees the side.
    const base = Math.floor((from - side) / TAU) * TAU + side;
    this.fFrom = from;
    this.fTo = base + turns * TAU;
    if (this.fTo - from < TAU) this.fTo += TAU;
    this.fStart = performance.now();
    this.flipping = true;
    this.idle = 0;
    return new Promise<void>(resolve => { this.resolve = resolve; });
  }

  dispose(): void {
    cancelAnimationFrame(this.raf);
    this.ro.disconnect();
    if (this.resolve) {
      const pending = this.resolve;
      this.resolve = null;
      pending();
    }
    for (const d of this.disposables) d.dispose();
    this.renderer.dispose();
  }
}
