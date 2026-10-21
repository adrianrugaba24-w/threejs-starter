# Three.js Starter

Vite + Three.js project, set up for editing in Google Antigravity.

## Run
```bash
npm install
npm run dev
```

## Deploy (GitHub Pages)
1. Push the project to a GitHub repo on the `main` branch.
2. In the repo go to Settings > Pages > Source and choose **GitHub Actions**.
3. Every push to `main` builds and deploys. The URL appears in the Actions run and under Settings > Pages.

Pull requests only run the build as a check. Each run also saves the `dist` folder as a downloadable `game-build` artifact.

## Structure
```
.agent/
  rules/project-rules.md     Rules the agent follows in this workspace
  workflows/add-object.md    Reusable /add-object workflow
public/
  models/                    .glb / .gltf files
  textures/                  images
src/
  main.js                    Entry point, wires everything
  style.css
  core/                      renderer, scene, camera, controls, loop
  objects/                   cube, lights (one factory per file)
  utils/                     resize, loaders
index.html
.github/workflows/deploy.yml  CI/CD pipeline
vite.config.js
package.json
```
