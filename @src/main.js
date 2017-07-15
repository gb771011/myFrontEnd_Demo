function prettifyHtmlConvert() {
    var langHtml = document.getElementsByClassName("lang-html"), i;
    for (i = 0; i < langHtml.length; i++) {
        langHtml[i].innerHTML = langHtml[i].innerHTML.replace(/</g, "&lt;");
    }
}