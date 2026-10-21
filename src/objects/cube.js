import { Mesh, BoxGeometry, MeshStandardMaterial } from 'three';

export function createCube() {
  const mesh = new Mesh(
    new BoxGeometry(1, 1, 1),
    new MeshStandardMaterial({ color: '#4f8cff', roughness: 0.4, metalness: 0.2 })
  );
  mesh.position.y = 0.5;
  return mesh;
}
