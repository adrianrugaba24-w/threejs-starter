import './style.css';
import { createRenderer } from './core/renderer.js';
import { createScene } from './core/scene.js';
import { createCamera } from './core/camera.js';
import { createControls } from './core/controls.js';
import { startLoop } from './core/loop.js';
import { handleResize } from './utils/resize.js';
import { createCube } from './objects/cube.js';
import { createLights } from './objects/lights.js';

const canvas = document.querySelector('#app');

const renderer = createRenderer(canvas);
const scene = createScene();
const camera = createCamera();
const controls = createControls(camera, canvas);

// Add objects here
const cube = createCube();
scene.add(cube, ...createLights());

handleResize({ renderer, camera });

// Anything that needs per-frame updates goes in this array.
const updatables = [
  (delta) => {
    cube.rotation.x += delta * 0.5;
    cube.rotation.y += delta * 0.8;
  },
  () => controls.update(),
];

startLoop({ renderer, scene, camera, updatables });
