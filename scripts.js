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
const form = document.getElementById("spendenForm");

form.addEventListener("submit", function (event) {

    // Nur prüfen, wenn Abholung gewählt wurde
    if (abholung.checked) {

        const plz = document.getElementById("plz").value;

        // PLZ muss 5-stellig sein
        if (plz.length !== 5 || isNaN(plz)) {
            alert("Bitte geben Sie eine gültige 5-stellige Postleitzahl ein.");
            event.preventDefault();
            return;
        }

        // Näheprüfung (erste zwei Ziffern = 80)
        if (plz.substring(0, 2) !== "80") {
            alert("Die Abholadresse liegt nicht im Zuständigkeitsbereich (80xxx).");
            event.preventDefault();
            return;
        }
    }

});
});