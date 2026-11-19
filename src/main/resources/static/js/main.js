
document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       1. MOBILE NAVIGATION
       ========================================= */

    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".main-nav");

    if (toggle && nav) {

        const openMenu = () => {
            nav.classList.add("nav-open");

            toggle.setAttribute("aria-expanded", "true");
            toggle.setAttribute("aria-label", "Close navigation menu");

            toggle.textContent = "×";
        };

        const closeMenu = () => {
            nav.classList.remove("nav-open");

            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "Open navigation menu");

            toggle.textContent = "☰";
        };

        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation menu");

        toggle.addEventListener("click", (event) => {

            event.stopPropagation();

            const isOpen = nav.classList.contains("nav-open");

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }

        });


        /* Close menu after selecting a navigation link */

        nav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                closeMenu();
            });

        });


        /* Close menu when clicking outside */

        document.addEventListener("click", event => {

            if (
                !nav.contains(event.target) &&
                !toggle.contains(event.target)
            ) {
                closeMenu();
            }

        });


        /* Close menu using Escape key */

        document.addEventListener("keydown", event => {

            if (event.key === "Escape") {
                closeMenu();
            }

        });


        /* Reset navigation when switching to desktop */

        window.addEventListener("resize", () => {

            if (window.innerWidth > 900) {
                closeMenu();
            }

        });

    }


    /* =========================================
       2. AUTOMATIC COPYRIGHT YEAR
       ========================================= */

    const yearElement = document.getElementById("year");

    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }


    /* =========================================
       3. SMOOTH SCROLLING
       ========================================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const href = link.getAttribute("href");

            if (!href || href === "#") {
                return;
            }

            const target = document.querySelector(href);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =========================================
       4. IMAGE LOADING FALLBACK
       ========================================= */

    document.querySelectorAll("img").forEach(img => {

        img.addEventListener("error", () => {

            img.classList.add("image-load-error");

            console.warn(
                "Safewell image could not be loaded:",
                img.getAttribute("src")
            );

        });

    });


    /* =========================================
       5. CURRENT PAGE NAVIGATION
       ========================================= */

    const currentPath = window.location.pathname.replace(/\/$/, "") || "/";

    document.querySelectorAll(".main-nav a").forEach(link => {

        const linkPath = new URL(link.href).pathname.replace(/\/$/, "") || "/";

        if (linkPath === currentPath) {

            link.classList.add("active");
            link.setAttribute("aria-current", "page");

        } else {

            link.classList.remove("active");
            link.removeAttribute("aria-current");

        }

    });

});
