import * as THREE from 'three';

/** Slow, low-cost casino backdrop: felt table, gold rail, drifting chips and dust. */
export class CasinoScene {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(48, 1, .1, 100);
  private chips: THREE.InstancedMesh;
  private dust: THREE.Points;
  private raf = 0; private clock = new THREE.Clock();
  constructor(private canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5));
    this.camera.position.set(0, 7, 12); this.camera.lookAt(0, 0, -2);
    this.scene.add(new THREE.AmbientLight(0xffffff, .8));
    const key = new THREE.DirectionalLight(0xffd089, 2); key.position.set(-5, 9, 6); this.scene.add(key);
    const neon = new THREE.PointLight(0xff4fae, 6, 22); neon.position.set(7, 2, -3); this.scene.add(neon);
    const cyan = new THREE.PointLight(0x4deaff, 5, 22); cyan.position.set(-7, 2, -3); this.scene.add(cyan);
    const felt = new THREE.Mesh(new THREE.CircleGeometry(11, 72), new THREE.MeshStandardMaterial({ color: 0x0a5c3c, roughness: .92 }));
    felt.rotation.x = -Math.PI/2; this.scene.add(felt);
    const rail = new THREE.Mesh(new THREE.TorusGeometry(11, .35, 12, 80), new THREE.MeshStandardMaterial({ color: 0xd6a23c, metalness: .9, roughness: .25 }));
    rail.rotation.x = Math.PI/2; this.scene.add(rail);
    const chipGeo = new THREE.CylinderGeometry(.3, .3, .08, 24);
    const chipMat = new THREE.MeshStandardMaterial({ color: 0xe6b24a, metalness: .7, roughness: .3 });
    this.chips = new THREE.InstancedMesh(chipGeo, chipMat, 24);
    const o = new THREE.Object3D();
    for (let i=0;i<24;i++) {
      const a = i*2.4, r = 3 + (i%5)*1.6;
      o.position.set(Math.cos(a)*r, .06 + (i%3)*.08, Math.sin(a)*r - 2);
      o.rotation.set(0, a, 0); o.scale.setScalar(.7 + (i%4)*.12); o.updateMatrix(); this.chips.setMatrixAt(i, o.matrix);
    }
    this.scene.add(this.chips);
    const g = new THREE.BufferGeometry(); const p = new Float32Array(180*3);
    for (let i=0;i<180;i++) { p[i*3]=(Math.random()-.5)*24; p[i*3+1]=Math.random()*7; p[i*3+2]=(Math.random()-.5)*18; }
    g.setAttribute('position', new THREE.BufferAttribute(p,3));
    this.dust = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffe0a0, size: .05, transparent: true, opacity: .55 }));
    this.scene.add(this.dust);
    const loop = () => {
      this.raf = requestAnimationFrame(loop);
      const t = this.clock.getElapsedTime();
      neon.intensity = 5.5 + Math.sin(t*1.7)*1.2; cyan.intensity = 4.5 + Math.cos(t*1.3)*1;
      this.dust.rotation.y = t*.01; this.chips.rotation.y = Math.sin(t*.12)*.03;
      this.renderer.render(this.scene, this.camera);
    };
    loop();
    new ResizeObserver(() => this.resize()).observe(canvas.parentElement || canvas);
    this.resize();
  }
  private resize() {
    const w = Math.max(1,this.canvas.clientWidth), h = Math.max(1,this.canvas.clientHeight);
    this.renderer.setSize(w,h,false); this.camera.aspect=w/h; this.camera.updateProjectionMatrix();
  }
  dispose() { cancelAnimationFrame(this.raf); this.renderer.dispose(); }
}
