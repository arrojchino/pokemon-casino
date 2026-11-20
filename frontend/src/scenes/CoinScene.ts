import * as THREE from 'three';

function faceTexture(text: string, accent: string) {
  const c = document.createElement('canvas'); c.width = c.height = 512;
  const x = c.getContext('2d')!;
  const g = x.createRadialGradient(180, 150, 20, 256, 256, 250);
  g.addColorStop(0, '#fff4c8'); g.addColorStop(.5, '#e8b950'); g.addColorStop(1, '#8f5414');
  x.fillStyle = g; x.fillRect(0, 0, 512, 512);
  x.strokeStyle = accent; x.lineWidth = 10; x.beginPath(); x.arc(256, 256, 226, 0, Math.PI*2); x.stroke();
  x.setLineDash([12, 12]); x.lineWidth = 5; x.beginPath(); x.arc(256, 256, 196, 0, Math.PI*2); x.stroke();
  x.setLineDash([]); x.fillStyle = '#4a2608'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.font = '900 118px Georgia'; x.fillText(accent, 256, 205);
  x.font = '900 62px monospace'; x.fillText(text, 256, 320);
  x.font = '700 22px monospace'; x.fillText('POKE CASINO', 256, 386);
  return new THREE.CanvasTexture(c);
}

/** Deterministic result: the animation only decorates the server-chosen side. */
export class CoinScene {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(38, 1, .1, 50);
  private coin = new THREE.Group();
  private particles: THREE.Points;
  private pvel = new Float32Array(120*3);
  private t = 0; private raf = 0; private flipping = false; private target = 0; private start = 0;
  private resolve: (() => void) | null = null;

  constructor(private canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.6));
    this.camera.position.set(0, 1.2, 7.5); this.camera.lookAt(0, 0, 0);
    this.scene.add(new THREE.AmbientLight(0xffffff, 1.1));
    const key = new THREE.DirectionalLight(0xffdf9b, 3.2); key.position.set(-3, 5, 5); this.scene.add(key);
    const rim = new THREE.DirectionalLight(0x66e6ff, 1.6); rim.position.set(3, -2, -4); this.scene.add(rim);
    const gold = new THREE.MeshStandardMaterial({ color: 0xe6ad34, metalness: .95, roughness: .22 });
    const edge = new THREE.Mesh(new THREE.CylinderGeometry(1.35, 1.35, .16, 64), gold);
    edge.rotation.z = Math.PI/2; this.coin.add(edge);
    for (const [text, accent, z] of [['HEADS','♠',.09],['TAILS','♦',-.09]] as const) {
      const m = new THREE.Mesh(new THREE.CircleGeometry(1.28, 64), new THREE.MeshStandardMaterial({ map: faceTexture(text, accent), metalness: .55, roughness: .3 }));
      m.position.z = z; if (z < 0) m.rotation.y = Math.PI; this.coin.add(m);
    }
    this.scene.add(this.coin);
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(120*3),3));
    this.particles = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffd777, size: .12, transparent: true, opacity: .9, depthWrite: false }));
    this.scene.add(this.particles);
    const loop = () => {
      this.raf = requestAnimationFrame(loop);
      this.t += .016;
      if (this.flipping) {
        const p = Math.min(1, (performance.now() - this.start) / 1900);
        const e = 1 - Math.pow(1 - p, 3);
        this.coin.rotation.y = this.startRotation + (this.target - this.startRotation) * e;
        this.coin.position.y = Math.sin(p * Math.PI) * 2.3 - Math.sin(p * Math.PI*3) * .18 * (1-p);
        this.coin.rotation.z = Math.sin(p * Math.PI*2) * .22 * (1-p);
        if (p >= 1) { this.flipping = false; this.coin.position.y = 0; this.burst(); this.resolve?.(); this.resolve = null; }
      } else if (!this.flipping && this.target) {
        this.coin.rotation.z *= .9;
      }
      const pos = this.particles.geometry.attributes.position as THREE.BufferAttribute;
      for (let i=0;i<120;i++) {
        if (this.pvel[i*3+1] === 0) continue;
        this.pvel[i*3+1] -= .006;
        pos.setXYZ(i, pos.getX(i)+this.pvel[i*3], pos.getY(i)+this.pvel[i*3+1], pos.getZ(i)+this.pvel[i*3+2]);
      }
      pos.needsUpdate = true;
      this.renderer.render(this.scene, this.camera);
    };
    loop();
    new ResizeObserver(() => this.resize()).observe(canvas.parentElement || canvas);
    this.resize();
  }
  private startRotation = 0;
  private resize() {
    const w = Math.max(1, this.canvas.clientWidth), h = Math.max(1, this.canvas.clientHeight);
    this.renderer.setSize(w, h, false); this.camera.aspect = w/h; this.camera.updateProjectionMatrix();
  }
  private burst() {
    const pos = this.particles.geometry.attributes.position as THREE.BufferAttribute;
    for (let i=0;i<120;i++) {
      pos.setXYZ(i, 0, 0, 0);
      const a = Math.random()*Math.PI*2, s = .04 + Math.random()*.1;
      this.pvel[i*3] = Math.cos(a)*s; this.pvel[i*3+1] = .05+Math.random()*.12; this.pvel[i*3+2] = Math.sin(a)*s;
    }
    pos.needsUpdate = true;
  }
  flip(result: 'heads' | 'tails'): Promise<void> {
    this.startRotation = this.coin.rotation.y;
    const base = Math.round(this.startRotation / (Math.PI*2)) * Math.PI*2;
    this.target = base + Math.PI*2*5 + (result === 'tails' ? Math.PI : 0);
    if (this.target <= this.startRotation) this.target += Math.PI*2;
    this.start = performance.now(); this.flipping = true;
    return new Promise(r => { this.resolve = r; });
  }
  dispose() { cancelAnimationFrame(this.raf); this.renderer.dispose(); }
}
