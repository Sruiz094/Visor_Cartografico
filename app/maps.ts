
import { Control, DomUtil, PosAnimation, control, map, tileLayer, Map, DomEvent} from "leaflet";
import { Logotipo} from "./mapsComponent/logo";
import { OpenTopoMap, mapsosm, mapsEsri_WorldImagery, } from "./mapsComponent/mapasBase";
import { departamento, municipio} from "./mapsComponent/servicioswms";
import { coordenadas } from "./mapsComponent/botoncoordenadas";


// Inicializar el mapa
const mymap:Map = map("map").setView([2.581672, -75.523207],9);

//Importación del logotipo de la empresa  
Logotipo().addTo(mymap); 


//Importación de mapas base 
const Topomap = OpenTopoMap();
const osm = mapsosm().addTo(mymap);
const Esri_WorldImagery = mapsEsri_WorldImagery();

//Enlazar servicios wms
const capaMunicipio = municipio().addTo(mymap);
const capaDepartamento = departamento().addTo(mymap);



// Tabla de controlo de capas
var baseMaps = {
    "OpenTopoMap": Topomap,
    "OpenStreetMap": osm,
    "Esri Imagery": Esri_WorldImagery,  
};

var servicioswms = {
    "departamento": capaDepartamento,
    "municipio": capaMunicipio
};

const controlCapas = control.layers(baseMaps, servicioswms).addTo(mymap);


//Selector de capas para mi boton de coordenadas 
var puntoCoordenada = coordenadas().addTo(mymap);

//Central el mapa con base en las coordenadas ingresadas a traves del boton de coordenadas 
mymap.fitBounds([[puntoCoordenada.getLatLng().lat, puntoCoordenada.getLatLng().lng]]);

//Agregando evento para mover marcador 
puntoCoordenada.on("move", ()=>{
    console.log("Coordenada eliminada coordenada");
    mymap.removeLayer(puntoCoordenada);});
