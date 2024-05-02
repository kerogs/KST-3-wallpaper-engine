// coordinates
function generateRandomCoordinates() {
    // Générer des coordonnées aléatoires en X et Y
    var x = Math.random() * 360 - 180; // -180 à 180
    var y = Math.random() * 180 - 90;  // -90 à 90

    // Afficher les coordonnées dans l'élément avec l'ID "coo"
    var coordinates = x.toFixed(4) + ", " + y.toFixed(4);
    document.getElementById("coo").innerText = coordinates;
}

// Exécuter la fonction initiale
generateRandomCoordinates();

// Définir un intervalle de temps aléatoire entre 1 et 3 minutes pour changer les coordonnées
var interval = Math.floor(Math.random() * (180000 - 60000 + 1)) + 60000;

// Exécuter la fonction generateRandomCoordinates() à intervalle régulier
setInterval(generateRandomCoordinates, interval);