import { Clock } from 'three';

export function startLoop({ renderer, scene, camera, updatables = [] }) {
  const clock = new Clock();

  renderer.setAnimationLoop(() => {
    const delta = clock.getDelta();
    for (const update of updatables) update(delta);
    renderer.render(scene, camera);
  });
}
