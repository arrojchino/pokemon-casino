import * as THREE from 'three';

/** Low-cost gothic backdrop: moon, arches, ash and a slowly turning sigil. No casino furniture. */
export class NightScene {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(50, 1, .1, 120);
  private ash: THREE.Points;
  private ashBase: Float32Array;
  private sigil: THREE.Group;
  private violet: THREE.PointLight;
  private crimson: THREE.PointLight;
  private raf = 0;
  private clock = new THREE.Clock();
  private reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  constructor(private canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.4));
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.camera.position.set(0, 3.4, 15);
    this.camera.lookAt(0, 2.2, -8);
    this.scene.fog = new THREE.FogExp2(0x0b0614, .022);

    this.scene.add(new THREE.AmbientLight(0x8b6bb5, 1.15));
    this.violet = new THREE.PointLight(0xa45cff, 55, 55, 2);
    this.violet.position.set(-8, 8, -6);
    this.scene.add(this.violet);
    this.crimson = new THREE.PointLight(0xff2e63, 38, 46, 2);
    this.crimson.position.set(9, 3, -9);
    this.scene.add(this.crimson);

    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(4.2, 32, 24),
      new THREE.MeshBasicMaterial({ color: 0xd8c9ff, fog: false }),
    );
    moon.position.set(-9, 14, -34);
    this.scene.add(moon);

    const haloCanvas = document.createElement('canvas');
    haloCanvas.width = haloCanvas.height = 256;
    const hx = haloCanvas.getContext('2d')!;
    const glow = hx.createRadialGradient(128, 128, 12, 128, 128, 128);
    glow.addColorStop(0, 'rgba(205,175,255,.75)');
    glow.addColorStop(.4, 'rgba(150,90,255,.24)');
    glow.addColorStop(1, 'rgba(90,40,160,0)');
    hx.fillStyle = glow;
    hx.fillRect(0, 0, 256, 256);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({
      map: new THREE.CanvasTexture(haloCanvas), transparent: true, depthWrite: false, fog: false,
    }));
    halo.position.copy(moon.position);
    halo.scale.setScalar(26);
    this.scene.add(halo);

    // Pointed arches receding into the fog: two angled halves per frame.
    const archMat = new THREE.MeshStandardMaterial({
      color: 0x1b1230, emissive: 0x43226b, emissiveIntensity: .5, roughness: .85, metalness: .1,
    });
    const halfArch = new THREE.TorusGeometry(4.4, .26, 6, 20, Math.PI / 2);
    for (let i = 0; i < 7; i++) {
      const z = -6 - i * 5.2;
      const scale = 1 + i * .13;
      const left = new THREE.Mesh(halfArch, archMat);
      left.position.set(-4.4 * scale, 3.2, z);
      left.scale.setScalar(scale);
      left.rotation.z = -Math.PI / 4;
      const right = left.clone();
      right.position.x = 4.4 * scale;
      right.rotation.z = Math.PI * .75;
      this.scene.add(left, right);
      for (const x of [-8.8 * scale, 8.8 * scale]) {
        const column = new THREE.Mesh(new THREE.BoxGeometry(.42, 8, .42), archMat);
        column.position.set(x, -.6, z);
        this.scene.add(column);
      }
    }

    // Suspended sigil: two counter-rotating rings and a small core.
    this.sigil = new THREE.Group();
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xa45cff, transparent: true, opacity: .32, depthWrite: false });
    const ringA = new THREE.Mesh(new THREE.TorusGeometry(3.4, .035, 6, 72), ringMat);
    const ringB = new THREE.Mesh(new THREE.TorusGeometry(2.65, .025, 6, 72), ringMat.clone());
    (ringB.material as THREE.MeshBasicMaterial).color.setHex(0xff2e63);
    ringB.rotation.x = .7;
    const core = new THREE.Mesh(
      new THREE.OctahedronGeometry(.8, 0),
      new THREE.MeshBasicMaterial({ color: 0xc79cff, wireframe: true, transparent: true, opacity: .38 }),
    );
    this.sigil.add(ringA, ringB, core);
    this.sigil.position.set(10, 7, -16);
    this.scene.add(this.sigil);

    const count = 170;
    this.ashBase = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const violetC = new THREE.Color(0xa45cff);
    const crimsonC = new THREE.Color(0xff4f7d);
    for (let i = 0; i < count; i++) {
      this.ashBase[i * 3] = (Math.random() - .5) * 46;
      this.ashBase[i * 3 + 1] = Math.random() * 22 - 2;
      this.ashBase[i * 3 + 2] = (Math.random() - .5) * 34 - 6;
      const c = Math.random() > .72 ? crimsonC : violetC;
      colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
    }
    const ashGeo = new THREE.BufferGeometry();
    ashGeo.setAttribute('position', new THREE.BufferAttribute(this.ashBase.slice(), 3));
    ashGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    this.ash = new THREE.Points(ashGeo, new THREE.PointsMaterial({
      size: .085, vertexColors: true, transparent: true, opacity: .78, depthWrite: false, sizeAttenuation: true,
    }));
    this.scene.add(this.ash);

    const animate = () => {
      this.raf = requestAnimationFrame(animate);
      const t = this.clock.getElapsedTime();
      if (!this.reduced) {
        this.violet.intensity = 50 + Math.sin(t * .7) * 9;
        this.crimson.intensity = 35 + Math.cos(t * .9) * 7;
        this.sigil.rotation.y = t * .12;
        this.sigil.rotation.z = Math.sin(t * .35) * .12;
        const pos = this.ash.geometry.attributes.position as THREE.BufferAttribute;
        for (let i = 0; i < count; i++) {
          const y = this.ashBase[i * 3 + 1] + ((t * (.24 + (i % 5) * .05)) % 24);
          pos.setY(i, y > 20 ? y - 24 : y);
          pos.setX(i, this.ashBase[i * 3] + Math.sin(t * .3 + i) * .35);
        }
        pos.needsUpdate = true;
      }
      this.renderer.render(this.scene, this.camera);
    };
    animate();
    new ResizeObserver(() => this.resize()).observe(canvas.parentElement || canvas);
    this.resize();
  }

  private resize() {
    const w = Math.max(1, this.canvas.clientWidth);
    const h = Math.max(1, this.canvas.clientHeight);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  dispose() {
    cancelAnimationFrame(this.raf);
    this.scene.traverse(obj => {
      const mesh = obj as THREE.Mesh;
      if (mesh.geometry) mesh.geometry.dispose();
      const mat = mesh.material as THREE.Material | THREE.Material[] | undefined;
      if (Array.isArray(mat)) mat.forEach(m => m.dispose());
      else mat?.dispose();
    });
    this.renderer.dispose();
  }
}
