function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-C1dBVW8x.js","assets/index-BVr5DAqn.js","assets/index-DB7w6YLs.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BVr5DAqn.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-C1dBVW8x.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
