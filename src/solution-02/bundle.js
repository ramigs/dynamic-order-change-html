(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/* const throttle = require("lodash.throttle");

const setFirstChild = throttle(() => {
  const newFirst =
    window.innerWidth < 576
      ? document.getElementById("element-b")
      : document.getElementById("element-a");
  const parent = newFirst.parentNode;
  parent.insertBefore(newFirst, parent.firstChild);
}, 300);

window.onload = setFirstChild;
window.addEventListener("resize", setFirstChild); */

const mobile = "(max-width: 767px)";

function setFirstChild() {
  const matched = window.matchMedia(mobile).matches;
  const topElement = matched
    ? document.getElementById("element-b")
    : document.getElementById("element-a");
  const parent = topElement.parentNode;
  parent.insertBefore(topElement, parent.firstChild);
}

window.onload = setFirstChild;
// event to watch the media query
window.matchMedia(mobile).addEventListener("change", setFirstChild);

},{}]},{},[1]);
