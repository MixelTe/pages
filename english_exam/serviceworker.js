const cacheName = "offline";
const host = location.host;

const urlsToCache = [
    "./",
    "./manifest.json",
    "./favicon.ico",
    "https://fonts.googleapis.com/css?family=PT+Sans|Comfortaa|Arimo",
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded",
    "./styles/base.css",
    "./styles/popup.css",
    "./styles/themes.css",
    "./styles/pageSwitch.css",
    "./styles/confetti.css",
    "./styles/formulas.css",
    "./styles/doc.css",
    "./styles/p-start.css",
    "./styles/p-tester.css",
    "./styles/p-stats.css",
    "./styles/p-qlists.css",
    "./styles/p-dayStats.css",
    "./styles/p-about.css",
    "./styles/p-settings.css",
    "./_js/data/sections.js",
    "./_js/pages/about.js",
    "./_js/pages/dayStats.js",
    "./_js/pages/qlist.js",
    "./_js/pages/settings.js",
    "./_js/pages/stats.js",
    "./_js/pages/switchPage.js",
    "./_js/confetti.js",
    "./_js/dayStatistics.js",
    "./_js/docBuilder.js",
    "./_js/formulasBuilder.js",
    "./_js/functions.js",
    "./_js/keys.js",
    "./_js/littleLib.js",
    "./_js/main.js",
    "./_js/metrika.js",
    "./_js/popup.js",
    "./_js/tester.js",
    "./_js/testerItems.js",
    "./_js/themes.js",
    "./_js/trainer.js",
    "./imgs/github_black.svg",
    "./imgs/github_white.svg",
    "./imgs/mixelDev.png",
    "./imgs/telegram.svg",
    "./imgs/vertic.jpg",
    "./imgs/vk.svg",
];
self.addEventListener("install", e =>
    e.waitUntil(
        caches.open(cacheName).then(cache =>
            cache.addAll(urlsToCache)
        )
    )
);

self.addEventListener("fetch", (e) =>
{
    const reqHost = new URL(e.request.url).host;
    if (reqHost != host) return;

    e.respondWith((async () =>
    {
        const cache = await caches.open(cacheName);
        try
        {
            const fetchedResponse = await fetch(e.request.url);
            cache.put(e.request, fetchedResponse.clone());
            return fetchedResponse;
        }
        catch
        {
            return await cache.match(e.request.url);
        }
    })());
});
