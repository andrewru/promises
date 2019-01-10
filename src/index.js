import "./styles.css";
import { getDataCallback, getDataPromise } from "./getData";
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

function clickHandler() {
  console.log("handled");
  getDataCallback("main", (error, response) => {
    console.log("got data", response);
  });
}

document
  .getElementById("callbackClickBtn")
  .addEventListener("click", clickHandler);

document.getElementById("promiseClickBtn").addEventListener("click", () => {
  getDataPromise("main").then(() => {});
});
