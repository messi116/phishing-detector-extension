function checkLinks() {
    let links = document.querySelectorAll("a");

    links.forEach(link => {
        let url = link.href.toLowerCase();

        if (
            url.includes("login") ||
            url.includes("verify") ||
            url.includes("free-money") ||
            url.includes("secure")
        ) {
            link.style.border = "3px solid red";
        }
    });
}

// Run on page load
checkLinks();

// 👇 NEW: detect dynamically added links
const observer = new MutationObserver(() => {
    checkLinks();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});