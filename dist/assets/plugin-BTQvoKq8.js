function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-BICdDgYy.js","assets/index-CSqvYB_o.js","assets/index-OTcLPDYd.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CSqvYB_o.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-BICdDgYy.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};
