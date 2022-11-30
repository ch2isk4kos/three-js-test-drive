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

// Material

// const geometry = new THREE.SphereGeometry(15, 32, 16);
const geometry = new THREE.BoxGeometry(100, 100, 100);

// const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });

// const material = new THREE.MeshBasicMaterial({
//   color: 0x00ff,
//   transparent: true,
//   opacity: 1,
//   wireframe: true,
//   wireframeLinewidth: 5,
//   wireframeLinejoin: "round",
//   wireframeLinecap: "round",
// });

const material = new THREE.MeshNormalMaterial({
  color: 0x00ff00,
  transparent: true,
  opacity: 1,
});

// const material = new THREE.MeshLambertMaterial({ color: 0xffffff });

// const material = new THREE.MeshLambertMaterial({
// color: 0xf3ffe2,
// emissive: 0xff0000,
// emissiveIntensity: 0.1,
// });

// const material = new THREE.MeshPhongMaterial({
//   color: 0xf3ffe2,
//   specular: 0xff0000,
//   shininess: 30,
//   map: new THREE.TextureLoader().load(
//     "https://i0.wp.com/gostonebridge.com/wp-content/uploads/2018/02/New-Orang-Background-Wide.jpg?ssl=1"
//   ),
//   normalMap: new THREE.TextureLoader().load(
//     "http://images.freeimages.com/images/large-previews/9d9/basketball-texture-1181125.jpg"
//   ),
// });

// Mesh Standard Material is a combination of Phong & Lambert

// const material = new THREE.MeshStandardMaterial({
//   color: 0x00ff00,
//   roughness: 0.5,
//   metalness: 0.25,
// });

// const material = new THREE.SpriteMaterial({
//   map: new THREE.TextureLoader().load(
//     "https://i0.wp.com/gostonebridge.com/wp-content/uploads/2018/02/New-Orang-Background-Wide.jpg?ssl=1"
//   ),
// });

// const sprite = new THREE.Sprite(material);

const mesh = new THREE.Mesh(geometry, material);
// mesh.position.set(0, 0, -1000);
mesh.position.z = -1000;
scene.add(mesh);

const geometry2 = new THREE.SphereGeometry(65, 20, 20);
const mesh2 = new THREE.Mesh(geometry2, material);
mesh2.position.z = -1000;
mesh2.position.x = 150;
scene.add(mesh2);

const geometry3 = new THREE.ConeGeometry(60, 120, 120);
const mesh3 = new THREE.Mesh(geometry3, material);
mesh3.position.z = -1000;
mesh3.position.x = -150;
scene.add(mesh3);

const geometry4 = new THREE.PlaneGeometry(10000, 10000, 100, 100);
const mesh4 = new THREE.Mesh(geometry4, material);
mesh4.rotation.x = (-90 * Math.PI) / 180;
mesh4.position.y = -120;
scene.add(mesh4);

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
