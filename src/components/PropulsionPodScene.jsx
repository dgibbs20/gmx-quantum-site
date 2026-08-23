import { useEffect, useRef } from "react";
import * as THREE from "three";

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

    scene.add(new THREE.AmbientLight(0x6a5a38, 0.85));

    const key = new THREE.DirectionalLight(0xffe8bd, 2.2);
    key.position.set(4, 5, 6);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0x5f7bb8, 0.6);
    fill.position.set(-5, -1, -3);
    scene.add(fill);

    const rim = new THREE.PointLight(0xf2d99b, 1.2, 20);
    rim.position.set(-3, 2, -4);
    scene.add(rim);

    // pod group, centered and laid on its side (long axis horizontal).
    // All child meshes (body, seams, band) share this group's coordinate
    // space so they stay aligned with each other after centering.
    const podGroup = new THREE.Group();
    scene.add(podGroup);

    const podGeo = buildPodGeometry();
    podGeo.rotateZ(Math.PI / 2); // lathe axis (Y) -> horizontal (X)
    podGeo.translate(2.24, 0, 0); // center the body at local origin — this IS the rotation pivot

    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0xc9a44c,
      metalness: 0.88,
      roughness: 0.3,
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

    // podGroup itself stays at the scene origin — the geometry-level
    // translate above already centered every mesh, so rotation.y now
    // pivots around the pod's own middle instead of sweeping it through
    // a wide arc off-screen.

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
    const speed = prefersReducedMotion ? 0.03 : 0.28;
    function tick() {
      podGroup.rotation.y += speed * 0.016;
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
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className={className} />;
}
