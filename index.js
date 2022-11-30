import * as THREE from "./node_modules/three/build/three.module.js";

// a Camera is your viewpoint of the virtual world
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  3000
);
// new THREE.PerspectiveCamera( perspective view, aspect ratio, near, far );

// a Scene is the container of the virtual world
const scene = new THREE.Scene();

// Scene Lighting
const sceneLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(sceneLight);

const pointLight = new THREE.PointLight(0xffffff, 0.5);
scene.add(pointLight);

// a Mesh is an object in the virtual world

// const geometry = new THREE.SphereGeometry(15, 32, 16);
const geometry = new THREE.BoxGeometry(100, 100, 100);

// const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const material = new THREE.MeshLambertMaterial({ color: 0xffffff });

const mesh = new THREE.Mesh(geometry, material);
// mesh.position.set(0, 0, -1000);
mesh.position.z = -1000;
scene.add(mesh);

// a Renderer displays the virtual world in the browser
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#renderer"),
  antialias: true,
});

renderer.setClearColor(0x00000);
// renderer.setClearColor(0x00ff00);
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);

const render = () => {
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(render);
};

requestAnimationFrame(render);

const init = () => {
  console.log("index.js initialized");
  renderer.render(scene, camera);
};

init();
