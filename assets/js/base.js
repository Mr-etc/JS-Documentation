window.addEventListener("load", function (event) {
    scroll();
    burger_press();
});
function scroll() {
    document.querySelectorAll(".nav-link__item a[href*='#']").forEach((link) => {
        link.addEventListener('click', function (e) {
            let navbar = document.querySelector("nav.navbar");
            e.preventDefault();
            const id = e.target.getAttribute('href');
            if (navbar.classList.contains("navbar-opened")) {
                document.querySelector("div.navbar__toggle").click();
                setTimeout(() => {
                    document.querySelector(id).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 500);
            } else
                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
        });
    });
}
function burger_press() {
    document.querySelector("div.navbar__toggle").addEventListener("click", () => { /* by passing the parameter 'e' we get false positives */
        let e = document.querySelector("div.navbar__toggle");
        e.classList.contains("navbar__toggle-pressed") ? (e.classList.remove("navbar__toggle-pressed"), e.parentElement.classList.remove("navbar-opened")) : (e.classList.add("navbar__toggle-pressed"), e.parentElement.classList.add("navbar-opened"));
    });
}