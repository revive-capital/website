// Loaded blocking in <head>: stored choice wins, otherwise dark; set before paint to avoid a flash.
const root = document.documentElement;
let stored = null;
try { stored = localStorage.getItem("theme"); } catch {}
root.dataset.theme = stored || "dark";

const label = () => document.querySelectorAll(".theme").forEach((b) => b.textContent = root.dataset.theme === "dark" ? "Licht" : "Donker");
document.addEventListener("DOMContentLoaded", label);
document.addEventListener("click", (e) => {
  if (!e.target.closest(".theme")) return;
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch {}
  label();
});
