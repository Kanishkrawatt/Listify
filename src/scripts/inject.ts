const originalLog = console.log;
function myLog(...args: string[]) {
  localStorage.setItem("logData", [...(args as string[])].join(" "));
  originalLog("[NewLog Says]", ...args);
}
console.log = myLog;
