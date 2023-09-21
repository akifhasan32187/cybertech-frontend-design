document.addEventListener("DOMContentLoaded", function() {
    const submenuItems = document.querySelectorAll(".has-submenu");

    submenuItems.forEach(item => {
        const submenuToggle = item.querySelector(".submenu-toggle");
        const submenu = item.querySelector(".submenu");

        submenuToggle.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });
});
