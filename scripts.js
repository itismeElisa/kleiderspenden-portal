// DOM vollständig laden
document.addEventListener("DOMContentLoaded", function () {

    const vorOrt = document.getElementById("vorOrt");
    const abholung = document.getElementById("abholung");
    const adressBlock = document.getElementById("adressBlock");
    const form = document.getElementById("spendenForm");

    // Radiobutton-Logik
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

    // Submit-Logik
    form.addEventListener("submit", function (event) {

        const plzInput = document.getElementById("plz");
        const plzError = document.getElementById("plzError");

        plzInput.classList.remove("is-invalid");

        if (abholung.checked) {

            const plz = plzInput.value.trim();

            if (!/^\d{5}$/.test(plz)) {
                plzInput.classList.add("is-invalid");
                plzError.textContent = "Bitte geben Sie eine gültige 5-stellige Postleitzahl ein.";
                event.preventDefault();
                return;
            }

            if (!plz.startsWith("80")) {
                plzInput.classList.add("is-invalid");
                plzError.textContent = "Die Abholadresse liegt nicht im Zuständigkeitsbereich (80xxx).";
                event.preventDefault();
                return;
            }
        }

        // Alles gültig → Bestätigung anzeigen
        event.preventDefault();

        const uebergabeWert = vorOrt.checked
            ? "Übergabe an der Geschäftsstelle"
            : "Abholung";

        document.getElementById("confUebergabe").textContent = uebergabeWert;
        document.getElementById("confPlz").textContent =
            abholung.checked ? plzInput.value : "-";

        document.getElementById("confKleidung").textContent =
            document.getElementById("kleidung").value;

        document.getElementById("confKrise").textContent =
            document.getElementById("krise").value;

        form.style.display = "none";
        document.getElementById("bestaetigung").style.display = "block";
    });
    const neustartBtn = document.getElementById("neustartBtn");

    neustartBtn.addEventListener("click", function () {

        // Formular zurücksetzen
        form.reset();

        // Adressblock wieder ausblenden
        adressBlock.style.display = "none";

        // Validierungszustand entfernen
        const plzInput = document.getElementById("plz");
        plzInput.classList.remove("is-invalid");

        // Bestätigung ausblenden
        document.getElementById("bestaetigung").style.display = "none";

        // Formular wieder anzeigen
        form.style.display = "block";
    });
});
