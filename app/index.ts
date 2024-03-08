import L from 'leaflet';

// Inicializar el mapa
const mymap = L.map("map").setView([2.581672, -75.523207],9);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: 
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

//Enlazar servicios wms

const municipio = L.tileLayer.wms("http://localhost:8081/geoserver/Limites/wms?", {
layers: "municipio",
format: "image/png",
transparent: true }).addTo(mymap);

const departamento = L.tileLayer.wms("http://localhost:8081/geoserver/Limites/wms?", {
layers: "departamento",
format: "image/png",
transparent: true }).addTo(mymap);




//Tabla de controlo de capas

var baseMaps = {
    "OpenStreetMap": osm,
    "Esri Imagery": Esri_WorldImagery,
}
var wms = {
"departamento" : departamento,
"municipio": municipio,
}

L.control.layers(baseMaps, wms).addTo(mymap);