let lightTheme = localStorage.getItem("lightTheme");
if (lightTheme == null) {
    lightTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
else {
    lightTheme = lightTheme == "false";
}
changeTheme();
function changeTheme() {
    lightTheme = !lightTheme;
    localStorage.setItem("lightTheme", lightTheme ? "true" : "false");
    if (lightTheme) {
        document.body.classList.add("lightTheme");
        document.body.classList.remove("darkTheme");
        changeHeaderColor("#fff7e5")
    }
    else {
        document.body.classList.remove("lightTheme");
        document.body.classList.add("darkTheme");
        changeHeaderColor("#1e1e1e")
    }
}

function changeHeaderColor(color)
{
    let items = [
        "theme-color",
        "msapplication-navbutton-color",
        "apple-mobile-web-app-status-bar-style",
    ]
    for (const item of items)
    {
        let el = document.querySelector(`meta[name="${item}"]`)
        if (el)
        {
            el.setAttribute('content', color)
        }
    }
}
