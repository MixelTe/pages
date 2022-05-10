import { Div, Img } from "./functions.js";
import { G, ModGroup, Mods } from "./modlist.js";

const groupEls: HTMLDivElement[] = [];

document.body.appendChild(Div("container", [
	Div("header", [], "Список модов"),
	Div("modlist", createModlist()),
]));


function createModlist()
{
	const groupEls: HTMLDivElement[] = [];
	for (let i = 0; i < G.length; i++) groupEls.push(addModGroup(G[i]));
	return groupEls;
}
function addModGroup(group: ModGroup)
{
	const content = Div("group-content");
	for (let i = 0; i < Mods.length; i++)
	{
		const mod = Mods[i];
		if (mod.group == group.id || (mod.group instanceof Array && mod.group.indexOf(group.id) >= 0))
		{
			const imgs = Div("item-imgs");
			mod.imgs.forEach(img => imgs.appendChild(Img([], `imgs/${img}`)))
			content.appendChild(Div("item", [
				Div("item-header", [
					Div("item-title", [], mod.title),
					Div("item-desc", [], mod.desc),
				]),
				imgs,
			]));
		}
	}
	const header = Div("group-header", [], group.title);
	const groupEl = Div("group", [
		header,
		content,
	]);
	header.addEventListener("click", () => colapse(content))
	groupEls.push(content);
	return groupEl;
}
function colapse(groupEl: HTMLDivElement)
{
	const open = groupEl.classList.contains("open");
	for (let i = 0; i < groupEls.length; i++)
	{
		const el = groupEls[i];
		if (el.classList.contains("open"))
		{
			closeGroup(el);
		}
	}
	if (!open) openGroup(groupEl);
}
function openGroup(el: HTMLDivElement)
{
	el.classList.add("open");
	const height = el.getBoundingClientRect().height;
	el.style.height = "0px";
	setTimeout(() =>
	{
		el.style.height = `${height}px`;
	}, 1);
	setTimeout(() =>
	{
		if (!el.classList.contains("close")) el.style.height = "";
	}, 500);
}
function closeGroup(el: HTMLDivElement)
{
	el.classList.add("close");
	const height = el.getBoundingClientRect().height;
	el.style.height = `${height}px`;
	setTimeout(() =>
	{
		el.style.height = "0px";
	}, 1);
	setTimeout(() =>
	{
		el.classList.remove("close");
		el.classList.remove("open");
		el.style.height = "";
	}, 500);
}