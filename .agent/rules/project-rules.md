# Project Rules

## Stack
- Three.js (ES modules) + Vite. Plain JavaScript, no framework.
- Run `npm run dev` to start; `npm run build` to verify production build.

## Structure
- `src/main.js` is the entry point and only wires things together.
- `src/core/` holds renderer, scene, camera, controls and the render loop.
- `src/objects/` holds one file per scene object, each exporting a `createX()` factory.
- `src/utils/` holds helpers (resize, loaders).
- Static assets go in `public/models` and `public/textures`, referenced as `/models/...`.

## Conventions
- Import from `three` by name (`import { Mesh } from 'three'`), never `import * as THREE`.
- Per-frame logic goes into the `updatables` array in `main.js`, using `delta` time, never fixed increments.
- Dispose geometries, materials and textures when removing objects.
- Cap pixel ratio at 2.
- Keep functions small; prefer new files in `src/objects/` over growing `main.js`.

## Before finishing a task
- Make sure `npm run build` passes.
- Do not add dependencies without saying why.
