
import { Control, DomUtil, PosAnimation, control, map, tileLayer, Map, DomEvent, marker, latLng} from "leaflet";
import { Logotipo} from "./mapsComponent/logo";
import { OpenTopoMap, mapsosm, mapsEsri_WorldImagery, } from "./mapsComponent/mapasBase";
import { departamento, municipio} from "./mapsComponent/servicioswms";
//import { coordenadas } from "./mapsComponent/botoncoordenadas";


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

const controlCapas = control.layers(baseMaps,servicioswms).addTo(mymap);

//Control de escala 
control.scale().addTo(mymap);

//Selector de capas para mi boton de coordenadas 
//var puntoCoordenada = coordenadas().addTo(mymap);

// Manejar evento del botón para crear marcador de coordenadas
const crearMarcadorBtn = document.getElementById('btn');
crearMarcadorBtn.addEventListener('click', () => {
    const latitudInput = document.getElementById('latitud') as HTMLInputElement;
    const longitudInput = document.getElementById('longitud') as HTMLInputElement;
    
    const latitud = parseFloat(latitudInput.value);
    const longitud = parseFloat(longitudInput.value);
    
    if (!isNaN(latitud) && !isNaN(longitud)) {
        const coordenadas = latLng(latitud, longitud); 
        const marcador = marker(coordenadas).addTo(mymap); 
    } else {
        alert('Por favor verifique que esten escritas correctamente sus coordenadas en latitud y longitud');
    }
});







