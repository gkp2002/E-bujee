function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-2CsmjqzX.js","assets/index-BVr5DAqn.js","assets/index-DB7w6YLs.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-BVr5DAqn.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-2CsmjqzX.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
