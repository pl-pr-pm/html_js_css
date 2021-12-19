document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".animate-title");
  const str = el.textContent.trim().split('');
  el.innerHTML  = str.reduce((acc, crr) => {
    crr = crr.replace(' ', "&nbsp;");
    return `${acc}<span class="char">${crr}</span>`;
  },"");
})