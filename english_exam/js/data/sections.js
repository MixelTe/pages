import { themes } from "../themes.js";
export const Sections = [
    {
        name: "КМ2",
        themes: [
            { id: "p1", count: 99, name: "Аббревиатуры", color: themes.blue, items: getItemLoader("p1") },
            { id: "p2", count: 201, name: "Определения", color: themes.blue, items: getItemLoader("p2"), onlyAnswerInQList: true },
            { id: "p3", count: 280, name: "Перевод", color: themes.blue, items: getItemLoader("p3") },
        ],
    },
    {
        name: "КМ3",
        themes: [],
    },
];
function getItemLoader(name) {
    let dataCache = { items: [], success: false };
    return async function () {
        if (dataCache.success)
            return dataCache;
        try {
            const { data } = await import("./" + name + ".js");
            dataCache.items = data;
            dataCache.success = true;
        }
        catch { }
        return dataCache;
    };
}
// checkItems()
async function checkItems() {
    console.warn("checkItems enabled");
    for (const section of Sections) {
        for (const theme of section.themes) {
            let r = true;
            let id = 0;
            const { items } = await theme.items();
            for (const item of items) {
                const c = items.filter(v => v.id == item.id).length == 1;
                if (!c) {
                    r = false;
                    id = item.id;
                }
            }
            if (!r)
                console.error(`Same ids in ${theme.id}: ${id}`);
            if (items.length != theme.count)
                console.error(`Wrong count in ${theme.id}, correct: ${items.length}`);
        }
    }
}
