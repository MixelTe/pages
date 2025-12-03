{
	const animTimeMs = 300;
	const carousel = document.getElementById("carousel");
	const items = carousel.firstElementChild;
	const btnPrev = carousel.querySelectorAll("button")[0];
	const btnNext = carousel.querySelectorAll("button")[1];
	const dots = carousel.lastElementChild;

	items.style.transition = `transform ${animTimeMs}ms`;
	btnPrev.addEventListener("click", () => showSlide(curSlide - 1));
	btnNext.addEventListener("click", () => showSlide(curSlide + 1));

	const len = items.children.length;
	for (let _ = 0; _ < 2; _++)
		for (let i = 0; i < len; i++)
			items.appendChild(items.children[i].cloneNode(true));
	for (let i = 0; i < len; i++)
	{
		const el = document.createElement("div");
		dots.appendChild(el);
		el.addEventListener("click", () => showSlide(len + i));
	}

	let curSlide = 0;
	showSlide(len, true);
	async function showSlide(i, instant = false)
	{
		const transition = items.style.transition;
		curSlide = i;
		if (instant) items.style.transition = "none";
		else
		{
			if (i >= len * 2) { await showSlide(len - 1, true); curSlide = len; }
			if (i < len) { await showSlide(len * 2, true); curSlide = len * 2 - 1; }
		}
		items.style.transform = `translateX(${-curSlide / items.children.length * 100}%)`;
		Array.from(dots.children).forEach(el => el.classList.remove("active"));
		dots.children[curSlide % len].classList.add("active");
		if (instant) return new Promise(r => setTimeout(() => { items.style.transition = transition; r(); }));
	}
}

{
	const pg25_dialog = document.getElementById("pg25_dialog");
	pg25_dialog.addEventListener("click", e =>
	{
		if (e.target === e.currentTarget)
			pg25_dialog.close()
	});
}