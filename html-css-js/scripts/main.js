const getEl = (i) => document.getElementById(`pg${i}`);
const pageName = document.getElementById("pageName");
const pageNames = [null, 
    "Основы: 1.1", "Основы: 1.2", "Основы: 1.3", "Основы: 1.4", "Основы: 1.5", "Основы: 1.6", "Основы: 1.7",
    "Css: 2.1", "Css: 2.2", "Css: 2.3", "Css: 2.4", "Css: 2.5",
    "Javascript: 3.1", "Javascript: 3.2", "Javascript: 3.3",
    "Подробнее о разном: 4.1", "Подробнее о разном: 4.2", "Подробнее о разном: 4.3", "Подробнее о разном: 4.4", "Подробнее о разном: 4.5",
    "Дополнительно: 5.1", "Дополнительно: 5.2", "Дополнительно: 5.3", "Дополнительно: 5.4",
];
const _pageNames = [null, 
    "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7",
    "2.1", "2.2", "2.3", "2.4", "2.5",
    "3.1", "3.2", "3.3",
    "4.1", "4.2", "4.3", "4.4", "4.5",
    "5.1", "5.2", "5.3", "5.4",
];
let pageCur = 0;
if (typeof history.state == "number") setPage(history.state);
else setPage(tryGetPageFromUrl());
window.addEventListener("popstate", (e) =>
    {
        const state = history.state;
        if (typeof state == "number") setPage(state);
        else toPage(0);
    });
function setPage(pg) {
    try {
        getEl(pageCur).classList.remove("visible");
    } catch (e) {
        console.error(e);
        pageCur = 0;
        toPage(0);
    }
    try {
        pageCur = pg;
        getEl(pageCur).classList.add("visible");
    } catch (e) {
        console.error(e);
        pageCur = 0;
        getEl(0).classList.add("visible");
        toPage(0);
    }
    try {
        pageName.innerText = "";
        const text = pageNames[pageCur] ?? "";
        pageName.innerText = text;
    } catch (e) {
        console.error(e);
    }
    window.scrollTo(0, 0);
}
function toPage(pg) {
    if (pg == pageCur) return;
    const url = new URL(window.location.href);
    url.searchParams.set("pg", pg);
    history.pushState(pg, "", url.toString());
    setPage(pg);
}
function tryGetPageFromUrl() {
    const url = new URL(window.location.href);
    const page = parseInt(url.searchParams.get("pg"));
    if (isNaN(page)) return 0;
    return page;
}