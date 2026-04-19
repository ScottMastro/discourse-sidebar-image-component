import { apiInitializer } from "discourse/lib/api";

function dayOfYear(date) {
  const start = Date.UTC(date.getUTCFullYear(), 0, 0);
  return Math.floor((date.getTime() - start) / 86400000);
}

function pickUrl(settings) {
  if (settings.override_image_url) {
    return settings.override_image_url;
  }
  const pool = (settings.image_urls || "")
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean);
  if (pool.length === 0) {
    return null;
  }
  const index =
    settings.rotation_mode === "random"
      ? Math.floor(Math.random() * pool.length)
      : dayOfYear(new Date()) % pool.length;
  return pool[index];
}

export default apiInitializer((api) => {
  const url = pickUrl(settings);
  const root = document.documentElement;

  api.onPageChange((path) => {
    const inAdmin = path.startsWith("/admin");
    if (url && !inAdmin) {
      root.style.setProperty("--sidebar-image", `url("${url}")`);
    } else {
      root.style.removeProperty("--sidebar-image");
    }
  });
});
