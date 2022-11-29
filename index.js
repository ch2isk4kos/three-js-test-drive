import * as THREE from "./node_modules/three/build/three.module.js";

const scene = new THREE.Scene();
// const scene = new Scene();
const camera = new THREE.PerspectiveCamera(45, 1920 / 1080, 1, 1000);
// const camera = new PerspectiveCamera(45, width / height, 1, 1000);
scene.add(camera);

const init = () => {
  const container = document.querySelector("#container");
  console.log("initialized");
  console.log(container);
  console.log(container);
  // scene.add(camera);
};

init();
