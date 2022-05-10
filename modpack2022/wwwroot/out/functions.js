export function Div(classes, children, innerText) {
    return initEl("div", classes, children, innerText);
}
export function Span(classes, children, innerText) {
    return initEl("span", classes, children, innerText);
}
export function H1(classes, children, innerText) {
    return initEl("h1", classes, children, innerText);
}
export function Input(classes, type, placeholder) {
    const input = initEl("input", classes, undefined, undefined);
    if (type)
        input.type = type;
    if (placeholder)
        input.placeholder = placeholder;
    return input;
}
export function Button(classes, innerText, clickListener) {
    const button = initEl("button", classes, undefined, innerText);
    if (clickListener)
        button.addEventListener("click", clickListener.bind(undefined, button));
    return button;
}
export function Img(classes, src) {
    const img = initEl("img", classes, undefined, undefined);
    img.src = src;
    const img2 = initEl("img", classes, undefined, undefined);
    img2.src = src;
    const popup = Div("fullImg", [img2]);
    function onClick() {
        popup.removeEventListener("click", onClick);
        document.body.removeChild(popup);
    }
    img.addEventListener("click", () => {
        popup.addEventListener("click", onClick);
        document.body.appendChild(popup);
    });
    return img;
}
function initEl(tagName, classes, children, innerText) {
    const el = document.createElement(tagName);
    if (classes) {
        if (typeof classes == "string")
            el.classList.add(classes);
        else
            classes.forEach(cs => el.classList.add(cs));
    }
    if (innerText)
        el.innerText = innerText;
    if (children)
        children.forEach(ch => el.appendChild(ch));
    return el;
}
