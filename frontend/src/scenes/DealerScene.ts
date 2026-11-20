import * as THREE from 'three';

/** Animated 8-frame goth oracle on a subdivided plane. No rings over the character. */
export class DealerScene {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(36, 1, .1, 50);
  private texture: THREE.CanvasTexture;
  private geom: THREE.PlaneGeometry;
  private mesh: THREE.Mesh;
  private base: Float32Array;
  private frame = 0; private last = 0;
  private t = 0; private raf = 0;
  private px = 0; private py = 0; private sway = 0; private sv = 0; private nod = 0; private nv = 0;
  private reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  private disc = { x: 0, y: 0 };
  private onPointer: (e: PointerEvent) => void;
  private clock = new THREE.Clock();

  constructor(private host: HTMLElement, private canvas: HTMLCanvasElement, atlas: HTMLImageElement) {
    const fc = document.createElement('canvas'); fc.width = 600; fc.height = 400;
    const ctx = fc.getContext('2d', { alpha: false })!;
    this.texture = new THREE.CanvasTexture(fc);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    const paint = (i: number) => {
      ctx.clearRect(0, 0, 600, 400);
      // Fill the panel edge to edge: crop the 444px frame vertically instead of letterboxing.
      ctx.drawImage(atlas, (i % 4) * 444, Math.floor(i / 4) * 444 + 74, 444, 296, 0, 0, 600, 400);
      this.texture.needsUpdate = true;
    };
    paint(0);
    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.7));
    this.renderer.setClearColor(0x080914, 0);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.geom = new THREE.PlaneGeometry(4.95, 3.3, 40, 24);
    this.base = (this.geom.attributes.position.array as Float32Array).slice();
    this.mesh = new THREE.Mesh(this.geom, new THREE.MeshBasicMaterial({ map: this.texture }));
    this.mesh.position.z = -.25; this.scene.add(this.mesh);
    const warm = new THREE.PointLight(0xa45cff, 9, 8); warm.position.set(-2, 1.4, 2.2); this.scene.add(warm);
    const pink = new THREE.PointLight(0xff2e63, 7, 7); pink.position.set(2.1, -.7, 1.8); this.scene.add(pink);
    const cyan = new THREE.PointLight(0x8a6bff, 6, 7); cyan.position.set(-1.8, -1.2, 1.6); this.scene.add(cyan);
    this.scene.add(new THREE.AmbientLight(0xffffff, .9));
    this.onPointer = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      this.px = ((e.clientX - r.left) / r.width - .5) * 2;
      this.py = ((e.clientY - r.top) / r.height - .5) * 2;
    };
    host.addEventListener('pointermove', this.onPointer);
    host.addEventListener('pointerleave', () => { this.px = this.py = 0; });
    host.classList.add('three-ready');
    this.resize();
    new ResizeObserver(() => this.resize()).observe(host);
    const animate = () => {
      this.raf = requestAnimationFrame(animate);
      const dt = Math.min(this.clock.getDelta(), .04); this.t += dt;
      if (!this.reduced) {
        if (this.t - this.last > .145) { this.frame = (this.frame + 1) % 8; paint(this.frame); this.last = this.t; }
        const ts = Math.sin(this.t * 1.55) * .035 + this.px * .045;
        const tn = Math.sin(this.t * 1.95 + .5) * .022 - this.py * .025;
        this.sv += (ts - this.sway) * 15.5 * dt; this.sv *= Math.exp(-6.8 * dt); this.sway += this.sv * dt;
        this.nv += (tn - this.nod) * 15.5 * dt; this.nv *= Math.exp(-6.8 * dt); this.nod += this.nv * dt;
        this.mesh.rotation.set(this.nod, 0, this.sway);
        this.mesh.position.y = Math.sin(this.t * 1.8) * .035 + this.nod * .12;
        this.mesh.position.x = Math.sin(this.t * .76) * .025 + this.px * .025;
        const pos = this.geom.attributes.position as THREE.BufferAttribute;
        for (let i = 0; i < pos.count; i++) {
          const x = this.base[i*3], y = this.base[i*3+1];
          const w = Math.max(0, 1 - Math.abs(x)/2.5) * Math.max(.35, 1 - Math.abs(y)/1.7);
          pos.setZ(i, this.base[i*3+2] + Math.sin(this.t*2 + x*1.35 + y*1.85) * .018 * w);
        }
        pos.needsUpdate = true; this.geom.computeVertexNormals();
        warm.intensity = 9 + Math.sin(this.t*2.1)*1.4;
        pink.intensity = 6 + Math.sin(this.t*2.8+1.2)*1.3;
        cyan.intensity = 5 + Math.cos(this.t*2.3);
      }
      this.renderer.render(this.scene, this.camera);
    };
    animate();
  }
  private resize() {
    const w = Math.max(1, this.host.clientWidth), h = Math.max(1, this.host.clientHeight);
    this.renderer.setSize(w, h, false); this.camera.aspect = w/h;
    this.camera.position.z = w/h < 1 ? 5.8 : 5.15; this.camera.updateProjectionMatrix();
    this.disc.x = w; this.disc.y = h;
  }
  dispose() {
    cancelAnimationFrame(this.raf); this.host.removeEventListener('pointermove', this.onPointer);
    this.geom.dispose(); this.texture.dispose(); this.renderer.dispose();
  }
}
