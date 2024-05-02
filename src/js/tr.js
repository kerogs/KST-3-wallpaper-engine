// Latence MS
function generateRandomNumber() {
  // Générer un nombre aléatoire entre 10 et 80
  var randomNumber = Math.floor(Math.random() * (80 - 7 + 1)) + 7;

  // Afficher le nombre dans l'élément avec l'ID "ms"
  document.getElementById("ms").innerText = randomNumber;
}

// Exécuter la fonction initiale
generateRandomNumber();

// Définir un intervalle de temps aléatoire entre 4 et 10 secondes pour changer le nombre
var interval = Math.floor(Math.random() * (10000 - 4000 + 1)) + 4000;

// Exécuter la fonction generateRandomNumber() à intervalle régulier
setInterval(generateRandomNumber, interval);




// SRV CONNECTION
var names = ["Rory_7", "MAGPIE_alplha", "KSTSRV", "Aperture_23", "Rory_9", "Overlord_10", "AlphaCentauri7", "Starforge42", "BornFat", "GRAND_BLUE", "Albedo", "Patema-20", "Hamaoka_alpha", "PUKEI-PUKEI"];
function generateRandomName() {
  // Choisir un nom aléatoire dans le tableau
  var randomIndex = Math.floor(Math.random() * names.length);
  var randomName = names[randomIndex];
  
  // Afficher le nom dans l'élément avec l'ID "srv"
  document.getElementById("srv").innerText = randomName;
}

// Exécuter la fonction initiale
generateRandomName();

// Définir un intervalle de temps aléatoire entre 1 et 3 minutes pour changer le nom
var interval = Math.floor(Math.random() * (180000 - 60000 + 1)) + 60000;

// Exécuter la fonction generateRandomName() à intervalle régulier
setInterval(generateRandomName, interval);
















// tx rx
function generateRandomState() {
  // Générer un nombre aléatoire entre 0 et 2
  var randomNumber = Math.floor(Math.random() * 3);

  // Déterminer l'état en fonction du nombre aléatoire
  var state;
  if (randomNumber === 0) {
    state = "TX";
  } else if (randomNumber === 1) {
    state = "RX";
  } else {
    state = "STB";
  }

  // Afficher l'état dans l'élément avec l'ID "txrx"
  var txrxElement = document.getElementById("txrx");
  txrxElement.innerText = state;
  txrxElement.className = state.toLowerCase(); // Appliquer la classe CSS correspondante à l'état
}

// Exécuter la fonction initiale
generateRandomState();

// Définir un intervalle de temps aléatoire entre 5ms et 2.8s pour changer l'état
var interval = Math.floor(Math.random() * (2800 - 5 + 1)) + 5;

// Exécuter la fonction generateRandomState() à intervalle régulier
setInterval(generateRandomState, interval);




// ip
function generateRandomIP() {
  // Générer chaque partie de l'adresse IP (nombre entre 0 et 255)
  var part1 = Math.floor(Math.random() * 256);
  var part2 = Math.floor(Math.random() * 256);
  var part3 = Math.floor(Math.random() * 256);
  var part4 = Math.floor(Math.random() * 256);
  
  // Concaténer les parties pour former l'adresse IP
  var ipAddress = part1 + '.' + part2 + '.' + part3 + '.' + part4;
  
  // Afficher l'adresse IP dans l'élément avec l'ID "ip"
  document.getElementById("ip").innerText = ipAddress;
}

// Exécuter la fonction initiale
generateRandomIP();

// Définir un intervalle de temps aléatoire entre 1 et 3 minutes pour changer l'adresse IP
var interval = Math.floor(Math.random() * (180000 - 60000 + 1)) + 60000;

// Exécuter la fonction generateRandomIP() à intervalle régulier
setInterval(generateRandomIP, interval);
