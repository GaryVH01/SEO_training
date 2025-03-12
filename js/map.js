// Initialiser la carte
var map = L.map("map").setView([50.6305, 3.0599], 16); // Coordonnées pour Lille

// Ajouter le fond de carte OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Icône personnalisée pour le marqueur médical
var medicalIcon = L.icon({
  iconUrl: "./img/location.png", // Chemin absolu depuis la racine du serveur
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

// Ajouter un marqueur avec l'icône personnalisée
var marker = L.marker([50.6305, 3.0599], { icon: medicalIcon })
  .addTo(map)
  .bindPopup("<b>Cabinet médical</b><br>127 Boulevard de la Liberté, Lille");
