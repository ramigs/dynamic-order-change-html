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

// watch the media query
window.matchMedia(mobile).addEventListener("change", setFirstChild);
