function toggleAccordion(id) {
    const button = document.getElementById(id);
    const panel = button.nextElementSibling;
    button.classList.toggle("open");
    panel.classList.toggle("active");
}