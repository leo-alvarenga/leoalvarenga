function getCurrentRef() {
  return window.currentRef;
}

function setCurrentRef() {
  const ref = location.pathname;
  if (ref === getCurrentRef()) return;


  window.currentRef = ref;
}

function firePageRefEvent(mode = "before") {
  document.dispatchEvent(new Event(`${mode}_page_ref`));
}

function setupPageRef(delay = 0) {
  firePageRefEvent("before");
  setTimeout(setCurrentRef, delay);
  firePageRefEvent("after");
}

setupPageRef(500);
