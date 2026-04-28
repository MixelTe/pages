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
    "./js/data/sections.js",
    "./js/pages/about.js",
    "./js/pages/dayStats.js",
    "./js/pages/qlist.js",
    "./js/pages/settings.js",
    "./js/pages/switchPage.js",
    "./js/confetti.js",
    "./js/dayStatistics.js",
    "./js/docBuilder.js",
    "./js/formulasBuilder.js",
    "./js/functions.js",
    "./js/keys.js",
    "./js/littleLib.js",
    "./js/main.js",
    "./js/metrika.js",
    "./js/popup.js",
    "./js/tester.js",
    "./js/testerItems.js",
    "./js/themes.js",
    "./js/trainer.js",
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
