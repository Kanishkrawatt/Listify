(()=>{const o=console.log;console.log=function(...e){window.postMessage({type:"NEW_LOG",text:e.join("")},"*"),o("[NewLog Says]",...e)}})();