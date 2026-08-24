import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

// A generic aerodynamic pod silhouette — rounded nose, cylindrical body,
// tapered tail. This is a body-of-revolution profile built for visual
// interest only; it is not derived from, or proportioned to match, any
// specific engineering drawing. No internal structure is modeled.
function buildPodGeometry() {
  const profile = [
    new THREE.Vector2(0.0, 0.0),
    new THREE.Vector2(0.32, 0.22),
    new THREE.Vector2(0.58, 0.55),
    new THREE.Vector2(0.78, 0.95),
    new THREE.Vector2(0.86, 1.3),
    new THREE.Vector2(0.88, 1.7),
    new THREE.Vector2(0.88, 3.3),
    new THREE.Vector2(0.84, 3.65),
    new THREE.Vector2(0.7, 3.95),
    new THREE.Vector2(0.5, 4.2),
    new THREE.Vector2(0.34, 4.38),
    new THREE.Vector2(0.36, 4.48),
  ];
  return new THREE.LatheGeometry(profile, 56);
}

// Soft round sprite, generated on a canvas so no binary texture asset is
// needed. Reused (tinted per-instance via material.color) for the engine
// glow, the AI accent node, and the trail puffs behind the tail.
function makeGlowTexture() {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  const grad = ctx.createRadialGradient(
    size / 2, size / 2, 0,
    size / 2, size / 2, size / 2
  );
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.35, "rgba(255,255,255,0.55)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

// Three flight-regime accent colors (atmospheric / hypersonic / exo-
// atmospheric) — a nod to the multi-stage concept, expressed only as a
// slow color shift on the engine glow. No mechanism, geometry, or layout
// from the underlying design is depicted.
const REGIME_COLORS = [
  new THREE.Color(0xffb454), // atmospheric — warm amber
  new THREE.Color(0xeaf3ff), // hypersonic — white-hot
  new THREE.Color(0x8a9dff), // exo-atmospheric — cool violet-blue
];

export default function PropulsionPodScene({ className = "" }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(3.0, 0.7, 7.0);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Real image-based lighting so the metal actually reflects a lit room
    // instead of relying purely on flat directional lights — this is the
    // single biggest lift for making the surface read as expensive/real.
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const envScene = new RoomEnvironment();
    const envMap = pmremGenerator.fromScene(envScene, 0.04).texture;
    scene.environment = envMap;
    pmremGenerator.dispose();

    scene.add(new THREE.AmbientLight(0x6a5a38, 0.5));

    const key = new THREE.DirectionalLight(0xffe8bd, 1.6);
    key.position.set(4, 5, 6);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0x5f7bb8, 0.5);
    fill.position.set(-5, -1, -3);
    scene.add(fill);

    const rim = new THREE.PointLight(0xf2d99b, 1.0, 20);
    rim.position.set(-3, 2, -4);
    scene.add(rim);

    // pod group, centered and laid on its side (long axis horizontal).
    // All child meshes (body, seams, band, accents) share this group's
    // coordinate space so they stay aligned after centering.
    const podGroup = new THREE.Group();
    scene.add(podGroup);

    const podGeo = buildPodGeometry();
    podGeo.rotateZ(Math.PI / 2); // lathe axis (Y) -> horizontal (X)
    podGeo.translate(2.24, 0, 0); // center the body at local origin — this IS the rotation pivot

    const bodyMat = new THREE.MeshPhysicalMaterial({
      color: 0xc9a44c,
      metalness: 0.9,
      roughness: 0.22,
      clearcoat: 0.55,
      clearcoatRoughness: 0.28,
    });
    const body = new THREE.Mesh(podGeo, bodyMat);
    podGroup.add(body);

    // purely decorative panel-seam rings — surface detail only, no
    // internal components implied. Positions shifted by the same +2.24
    // used to center the body, so everything shares one pivot at the
    // group's local origin (the geometric center, not the nose).
    const seamMat = new THREE.MeshStandardMaterial({
      color: 0x1c1710,
      metalness: 0.5,
      roughness: 0.6,
    });
    [1.19, 0.39, -0.46, -1.31].forEach((x) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.885, 0.012, 8, 60),
        seamMat
      );
      ring.rotation.y = Math.PI / 2;
      ring.position.x = x;
      podGroup.add(ring);
    });

    // tail accent band — aesthetic only
    const band = new THREE.Mesh(
      new THREE.TorusGeometry(0.86, 0.05, 10, 60),
      new THREE.MeshStandardMaterial({ color: 0x2a3a5c, metalness: 0.6, roughness: 0.4 })
    );
    band.rotation.y = Math.PI / 2;
    band.position.x = -1.86;
    podGroup.add(band);

    // --- Decorative light accents (no geometry/mechanism implied) ---
    const glowTex = makeGlowTexture();

    // Engine glow at the tail — the color slowly cycles through the three
    // regime accents above, purely as a light/color cue.
    const glowColor = REGIME_COLORS[0].clone();
    const engineLight = new THREE.PointLight(glowColor, 3.5, 6, 2);
    engineLight.position.set(-2.15, 0, 0);
    podGroup.add(engineLight);

    const engineSprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTex,
        color: glowColor,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    engineSprite.scale.set(0.5, 0.5, 1);
    engineSprite.position.set(-2.1, 0, 0);
    podGroup.add(engineSprite);

    // faint exhaust trail — a handful of static, fading puffs behind the
    // tail, tinted with the same cycling color as the engine glow.
    const trailSprites = [0.18, 0.4, 0.68, 1.0].map((d, i) => {
      const s = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: glowTex,
          color: glowColor,
          transparent: true,
          opacity: 0.32 - i * 0.06,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      );
      const scale = 0.34 + d * 0.5;
      s.scale.set(scale, scale, 1);
      s.position.set(-2.2 - d * 1.15, d * 0.05, 0);
      podGroup.add(s);
      return s;
    });

    // small pulsing accent node — a quiet "something's thinking in here"
    // cue, independent of the engine color cycle. Not a labeled component.
    const aiNodeColor = new THREE.Color(0xbfe3ff);
    const aiSprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTex,
        color: aiNodeColor,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    aiSprite.scale.set(0.12, 0.12, 1);
    aiSprite.position.set(0.55, 0.62, 0.35);
    podGroup.add(aiSprite);

    // sparse background starfield for atmosphere — slow, subtle, never
    // distracting from the pod itself.
    const starCount = prefersReducedMotion ? 0 : 140;
    let stars;
    if (starCount > 0) {
      const starGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(starCount * 3);
      for (let i = 0; i < starCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 26;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
        positions[i * 3 + 2] = -6 - Math.random() * 10;
      }
      starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      stars = new THREE.Points(
        starGeo,
        new THREE.PointsMaterial({
          map: glowTex,
          size: 0.05,
          color: 0xbfd4ff,
          transparent: true,
          opacity: 0.5,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      );
      scene.add(stars);
    }

    function resize() {
      const { clientWidth, clientHeight } = mount;
      if (!clientWidth || !clientHeight) return;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    }
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);

    let frameId;
    const rotSpeed = prefersReducedMotion ? 0.03 : 0.28;
    const cycleSeconds = 16; // full loop through the three regime colors
    const tmpColor = new THREE.Color();
    let elapsed = 0;

    function tick() {
      const dt = 0.016;
      elapsed += dt;

      podGroup.rotation.y += rotSpeed * dt;
      if (!prefersReducedMotion) {
        podGroup.position.y = Math.sin(elapsed * 0.5) * 0.03;
        if (stars) stars.rotation.y += 0.002 * dt * 10;
      }

      // Smoothly interpolate through the regime color sequence on a loop.
      const t = (elapsed / cycleSeconds) % 1;
      const segment = t * REGIME_COLORS.length;
      const i0 = Math.floor(segment) % REGIME_COLORS.length;
      const i1 = (i0 + 1) % REGIME_COLORS.length;
      const localT = segment - Math.floor(segment);
      tmpColor.copy(REGIME_COLORS[i0]).lerp(REGIME_COLORS[i1], localT);
      engineLight.color.copy(tmpColor);
      engineSprite.material.color.copy(tmpColor);
      trailSprites.forEach((s) => s.material.color.copy(tmpColor));

      // gentle breathing pulse on the engine glow + AI accent node
      const pulse = 0.85 + Math.sin(elapsed * 1.6) * 0.15;
      engineSprite.scale.set(0.5 * pulse, 0.5 * pulse, 1);
      engineLight.intensity = 3.5 * (0.9 + Math.sin(elapsed * 1.6) * 0.1);
      const aiPulse = 0.7 + Math.sin(elapsed * 2.4) * 0.3;
      aiSprite.material.opacity = aiPulse;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(tick);
    }
    tick();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      mount.removeChild(renderer.domElement);
      podGeo.dispose();
      bodyMat.dispose();
      seamMat.dispose();
      glowTex.dispose();
      envMap.dispose();
      if (stars) {
        stars.geometry.dispose();
        stars.material.dispose();
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className={className} />;
}

