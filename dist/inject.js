(()=>{const o=console.log;console.log=function(...l){localStorage.setItem("logData",[...l].join(" ")),o("[NewLog Says]",...l)}})();