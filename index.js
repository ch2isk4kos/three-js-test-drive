import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);

const init = () => {
  const container = document.querySelector("#container");
  console.log("initialized");
  console.log(container);
  // scene.add(camera);
};

init();
