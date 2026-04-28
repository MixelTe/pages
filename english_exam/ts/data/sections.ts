import { TestItem } from "../tester.js"
import { Themes, themes } from "../themes.js"

export const Sections: Section[] = [
	{
		name: "КР",
		themes: [
			{ id: "p1", count: 2, name: "Аббревиатуры", color: themes.blue, items: getItemLoader("p1") },
			{ id: "p2", count: 2, name: "Определения", color: themes.blue, items: getItemLoader("p2") },
			{ id: "p3", count: 2, name: "Перевод", color: themes.blue, items: getItemLoader("p3") },
		],
	},
	{
		name: "Экзамен",
		themes: [],
	},
]


export interface Section
{
	name: string,
	themes: Theme[],
}

export interface Theme
{
	id: string,
	name: string,
	color: Themes,
	count: number,
	items: () => Promise<LoadedItems>,
	onlyAnswerInQList?: true,
	disableRepeat?: true,
}

export interface LoadedItems
{
	items: TestItem[],
	success: boolean,
}

function getItemLoader(name: string)
{
	let dataCache: LoadedItems = { items: [], success: false };
	return async function ()
	{
		if (dataCache.success) return dataCache;
		try
		{
			const { data } = await import("./" + name + ".js");
			dataCache.items = data;
			dataCache.success = true;
		} catch { }
		return dataCache;
	}
}


// checkItems()
async function checkItems()
{
	console.warn("checkItems enabled");
	for (const section of Sections)
	{
		for (const theme of section.themes)
		{
			let r = true;
			let id = 0;
			const { items } = await theme.items();
			for (const item of items)
			{
				const c = items.filter(v => v.id == item.id).length == 1;
				if (!c)
				{
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
