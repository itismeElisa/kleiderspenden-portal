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

       const plzInput = document.getElementById("plz");
const plzError = document.getElementById("plzError");

// Reset Status
plzInput.classList.remove("is-invalid");

const plz = plzInput.value.trim();

// 5-stellig numerisch prüfen
if (!/^\d{5}$/.test(plz)) {
    plzInput.classList.add("is-invalid");
    plzError.textContent = "Bitte geben Sie eine gültige 5-stellige Postleitzahl ein.";
    event.preventDefault();
    return;
}

// Zuständigkeitsprüfung
if (!plz.startsWith("80")) {
    plzInput.classList.add("is-invalid");
    plzError.textContent = "Die Abholadresse liegt nicht im Zuständigkeitsbereich (80xxx).";
    event.preventDefault();
    return;
}
    }

});
});