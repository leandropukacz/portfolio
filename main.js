const links = document.getElementsByTagName("a");

Array.from(links).map(x => {
    x.onclick = (e) => {
        e.preventDefault();
        window.open(x.href);
    } 
});