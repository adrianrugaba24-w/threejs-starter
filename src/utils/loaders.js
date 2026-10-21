import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TextureLoader } from 'three';

const gltfLoader = new GLTFLoader();
const textureLoader = new TextureLoader();

// Files in /public are served from the root, e.g. loadModel('/models/robot.glb')
export const loadModel = (url) => gltfLoader.loadAsync(url);
export const loadTexture = (url) => textureLoader.loadAsync(url);
