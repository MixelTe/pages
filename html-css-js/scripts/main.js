const getPage = (i) => document.getElementById(`pg${i}`);
const pageName = document.getElementById("pageName");
let pageCur = -1;

if (typeof history.state == "number") setPage(history.state);
else setPage(tryGetPageFromUrl());

window.addEventListener("popstate", () =>
{
    const state = history.state;
    if (typeof state == "number") setPage(state);
    else toPage(0);
});

document.querySelectorAll("[data-link]").forEach(link =>
    link.addEventListener("click", e =>
    {
        e.preventDefault();
        toPage(parseInt(link.dataset.link), new URL(link.href).hash);
    })
);

function setPage(pg)
{
    window.scrollTo(0, 0);
    if (pageCur == pg) return;
    getPage(pageCur)?.classList?.remove?.("visible");
    pageCur = pg;
    const pageEl = getPage(pageCur)
    if (!pageEl)
    {
        console.error(`no page ${pageCur}`);
        toPage(0);
        return;
    }
    pageEl.classList.add("visible");
    pageName.innerText = pageEl.dataset.shortname || "";
    let title = pageEl.dataset.name || "";
    if (title) title += " | "
    document.title = title + "Основы HTML, CSS и javascript"
    window.scrollTo(0, 0);
}
function toPage(pg, hash)
{
    const url = new URL(window.location.href);
    url.searchParams.set("pg", pg);
    url.hash = hash || "";
    history.pushState(pg, "", url.toString());
    setPage(pg);
    if (hash) document.querySelector(hash)?.scrollIntoView?.({ block: "start" });
    yaHit(url.toString())
}
function tryGetPageFromUrl()
{
    const url = new URL(window.location.href);
    const page = parseInt(url.searchParams.get("pg"));
    if (isNaN(page)) return 0;
    return page;
}

function yaHit(url)
{
    try
    {
        ym(96633773, "hit", url);
    }
    catch (e) { }
}