// DOM vollständig laden
document.addEventListener("DOMContentLoaded", function () {

    const vorOrt = document.getElementById("vorOrt");
    const abholung = document.getElementById("abholung");
    const adressBlock = document.getElementById("adressBlock");

    // Event Listener für Radiobuttons
    vorOrt.addEventListener("change", function () {
        if (vorOrt.checked) {
            adressBlock.style.display = "none";
        }
    });

    abholung.addEventListener("change", function () {
        if (abholung.checked) {
            adressBlock.style.display = "block";
        }
    });

});