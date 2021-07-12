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
    }
    else {
        document.body.classList.remove("lightTheme");
        document.body.classList.add("darkTheme");
    }
}