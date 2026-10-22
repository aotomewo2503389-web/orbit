const CACHE_NAME = "orbit-shell-v2";
const APP_SHELL = ["/", "/manifest.webmanifest", "/orbit-pwa-icon-192.png", "/orbit-pwa-icon-512.png", "/orbit-pwa-icon-maskable-512.png"];
const STATIC_ASSET = /\.(?:css|js|json|svg|png|jpe?g|webmanifest|woff2?)$/i;

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key.startsWith("orbit-shell-") && key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);
  if(request.method !== "GET" || url.origin !== self.location.origin) return;

  if(request.mode === "navigate"){
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      try{
        const response = await fetch(request);
        if(response.ok && !url.search && url.pathname === "/") await cache.put("/", response.clone());
        return response;
      }catch(error){
        const cached = await cache.match("/");
        if(cached) return cached;
        throw error;
      }
    })());
    return;
  }

  if(url.pathname.endsWith(".json")){
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      try{
        const response = await fetch(request);
        if(response.ok) await cache.put(request, response.clone());
        return response;
      }catch(error){
        const cached = await cache.match(request);
        if(cached) return cached;
        throw error;
      }
    })());
    return;
  }

  if(url.pathname.startsWith("/_next/static/") || STATIC_ASSET.test(url.pathname)){
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request);
      if(cached) return cached;
      const response = await fetch(request);
      if(response.ok) await cache.put(request, response.clone());
      return response;
    })());
  }
});
