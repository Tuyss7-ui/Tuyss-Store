// Interaksi UI tambahan untuk halaman toko.
(() => {
    const header = document.getElementById("header");
    const links = document.getElementById("links");
    const menu = document.getElementById("menu");

    if (!header) return;

    const updateHeader = () => {
        header.classList.toggle("scrolled", window.scrollY > 15);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    if (menu && links) {
        menu.setAttribute("aria-expanded", "false");

        // Menu utama sudah dikendalikan oleh script toko di index.html.
        document.addEventListener("click", event => {
            if (!links.contains(event.target) && !menu.contains(event.target)) {
                links.classList.remove("open");
                menu.setAttribute("aria-expanded", "false");
            }
        });
    }

    // Menutup popup fallback dengan tombol Escape.
    document.addEventListener("keydown", event => {
        if (event.key !== "Escape") return;
        document.querySelector(".whatsapp-fallback")?.remove();
    });
})();
