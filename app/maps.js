// Inicializar el mapa
var map = L.map("map").setView([2.581672, -75.523207],9);

osm = L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

//Enlazar servicios wms

municipio = L.tileLayer.wms("http://localhost:8081/geoserver/Limites/wms?", {
Layers: "municipio",
format: "image/png",
transparent: true }).addTo(map);

departamento = L.tileLayer.wms("http://localhost:8081/geoserver/Limites/wms?", {
Layers: "departamento",
format: "image/png",
transparent: true }).addTo(map);




//Tabla de controlo de capas

var baseMaps = {

    "OpenStreetMap": osm,
    "Esri Imagery": Esri_WorldImagery,
}

var wms = {
"departamento" : departamento,
"municipio": municipio,
}

L.control.layers(baseMaps, wms).addTo(map);