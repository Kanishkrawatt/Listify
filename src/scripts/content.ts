const script = document.createElement("script");
script.src = chrome.runtime.getURL("../../dist/inject.bundle.js");
document.body.appendChild(script);

console.log("Content Script Loaded");
console.log("[data from Inject Script]", localStorage.getItem("logData"));

chrome.runtime.sendMessage({
  message: "GET_LOGS",
  data: localStorage.getItem("logData"),
});
