import * as THREE from "./node_modules/three/build/three.module.js";

const scene = new THREE.Scene();
// const camera = new PerspectiveCamera(45, width / height, 1, 1000);
const camera = new THREE.PerspectiveCamera(45, 1920 / 1080, 1, 1000);

const init = () => {
  const container = document.querySelector("#container");
  console.log("initialized");
  scene.add(camera);
  console.log({ scene });
};

init();
