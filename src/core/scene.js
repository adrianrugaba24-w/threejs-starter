import { Scene, Color, GridHelper } from 'three';

export function createScene() {
  const scene = new Scene();
  scene.background = new Color('#0b0d12');
  scene.add(new GridHelper(20, 20, 0x444444, 0x222222));
  return scene;
}
