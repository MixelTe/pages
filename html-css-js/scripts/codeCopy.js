const preAll = document.getElementsByTagName("pre");
for (let i = 0; i < preAll.length; i++) {
    const pre = preAll[i];
    const preDiv = document.createElement("div");
    pre.before(preDiv);
    preDiv.appendChild(pre);
    preDiv.classList.add("pre-container");
    preDiv.appendChild(createCopyButton(pre));
}

function createCopyButton(pre) {
    const btn = document.createElement("button");
    btn.classList.add("copy");

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    btn.appendChild(svg);
    svg.setAttribute("viewBox", "0 0 24 24");
    createPath(svg, "M0 0h24v24H0V0z").setAttribute("fill", "none");
    createPath(svg, "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z");
    btn.addEventListener("click", copyPre.bind(undefined, btn, pre));
    return btn;
}
function createPath(svg, d) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svg.appendChild(path);
    path.setAttribute("d", d);
    return path;
}

function copyPre(btn, pre) {
    btn.classList.add("copied");
    setTimeout(() => btn.classList.remove("copied"), 1000);
    copy(pre.innerText);
}
function copy(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.style.zIndex = "99999";
    textarea.style.position = "fixed";
    textarea.style.top = "-999999px";
    var result = document.execCommand('copy');
    document.body.removeChild(textarea);
    return result;
}