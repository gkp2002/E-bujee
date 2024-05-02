function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-ClrtoP1k.js","assets/index-CSqvYB_o.js","assets/index-OTcLPDYd.css","assets/index-BCE8cVTy.js","assets/index-Ds7XhMLj.js","assets/index-CdkvDK0V.js","assets/index-CeXTuCOR.js","assets/index-CsK6mRIj.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CSqvYB_o.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-ClrtoP1k.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BCE8cVTy.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Ds7XhMLj.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CdkvDK0V.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CeXTuCOR.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CsK6mRIj.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
