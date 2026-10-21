import { AmbientLight, DirectionalLight } from 'three';

export function createLights() {
  const ambient = new AmbientLight(0xffffff, 0.5);
  const sun = new DirectionalLight(0xffffff, 2);
  sun.position.set(5, 8, 4);
  return [ambient, sun];
}
