function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-B8eGUkq8.js","assets/index-CSqvYB_o.js","assets/index-OTcLPDYd.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CSqvYB_o.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-B8eGUkq8.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
