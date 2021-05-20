const staticMoodmap = "dev-MoodMap-site-v1"
const assets = [
  "/",
  "./index.html",
  "/404.html",
  "/images/omm.png"
//   "/stats.html",
//   // "/signup.html",
//   // "/pay.html",
//   // "/assets/noscript.css",
//   // "/assets/main.css",
//   "/assets/main.min.js",
//   "/assets/LovelyChart.custom.js",
//   "/assets/icons.svg",
//   "/assets/images/image01.jpg",
//   "/assets/images/image02.jpg",
//   "/assets/images/share.jpg",
//   "/assets/images/_image02.svg",
//   "/assets/images/favicon.png",
//   "/assets/images/apple-touch-icon.png",
//   "/assets/videos/video01.mp4.jpg",
//   "/assets/images/video01.mp4",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticMoodmap).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
