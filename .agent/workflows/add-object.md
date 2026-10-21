---
description: Add a new 3D object to the scene
---

1. Create `src/objects/<name>.js` exporting a `create<Name>()` factory that returns an Object3D.
2. Import it in `src/main.js` and add it with `scene.add(...)`.
3. If it animates, push an update function `(delta) => {}` into `updatables`.
4. Run `npm run build` to confirm nothing broke.
