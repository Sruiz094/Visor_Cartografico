import { control, Map, marker, LatLngBounds, latLngBounds } from "leaflet";
import { Logotipo} from "./mapsComponent/logo";
import { OpenTopoMap, mapsosm, mapsEsri_WorldImagery, mapsGoogleMaps, mapsGoogleSatellite,} from "./mapsComponent/mapasBase";
import { vias, drenaje, represa, municipio, departamento, AreasProtegidas, UsoSueloUrbano_LaPlata, UsoSueloRural_LaPlata, UsoSueloUrbano_LaArgentina, UsoSueloRural_LaArgentina, UsoSueloUrbano_Pital} from "./mapsComponent/servicioswms";
import { addLegendControl} from "./mapsComponent/leyenda"
import { botonCoordenadas } from "./mapsComponent/botonCoordenadas";

// Inicializar el mapa
const mymap = new Map("map").setView([2.581672, -75.523207],8);

//Importación del logotipo de la empresa  
Logotipo().addTo(mymap); 

//Importación de mapas base 
const Topomap = OpenTopoMap();
const osm = mapsosm().addTo(mymap);
const Esri_WorldImagery = mapsEsri_WorldImagery();
const GoogleMaps = mapsGoogleMaps();
const GoogleSatellite = mapsGoogleSatellite();

//Enlazar servicios wms
const capavias = vias();
const capadrenaje = drenaje();
const caparepresa = represa();
const capaMunicipio = municipio().addTo(mymap);
const capaDepartamento = departamento();
const capaAreasProtegidas = AreasProtegidas();
const capaUsoSueloUrbano_LaPlata = UsoSueloUrbano_LaPlata();
const capaUsoSueloRural_LaPlata = UsoSueloRural_LaPlata();
const capaUsoSueloUrbano_LaArgentina = UsoSueloUrbano_LaArgentina();
const capaUsoSueloRural_LaArgentina = UsoSueloRural_LaArgentina();
const capaUsoSueloUrbano_Pital = UsoSueloUrbano_Pital();

// Tabla de controlo de capas
var baseMaps = {
    "OpenTopoMap": Topomap,
    "OpenStreetMap": osm,
    "Esri Imagery": Esri_WorldImagery,  
    "Google Maps": GoogleMaps,
    "Google Satellite": GoogleSatellite,
};

var servicioswms = {
    "vias": capavias,
    "drenajes": capadrenaje,
    "represa": caparepresa,
    "municipio": capaMunicipio,
    "departamento": capaDepartamento,
    "AreasProtegidas": capaAreasProtegidas,
    "UsoSueloUrbano_LaPlata": capaUsoSueloUrbano_LaPlata,
    "UsoSueloRural_LaPlata": capaUsoSueloRural_LaPlata,
    "UsoSueloUrbano_LaArgentina": capaUsoSueloUrbano_LaArgentina,
    "UsoSueloRural_LaArgentina": capaUsoSueloRural_LaArgentina,
    "UsoSueloUrbano_Pital": capaUsoSueloUrbano_Pital,
    
};

const controlCapas = control.layers(baseMaps, servicioswms).addTo(mymap);

//Control de escala 
control.scale({ position: 'bottomright' }).addTo(mymap);

//Añadir leyenda 
addLegendControl(mymap, servicioswms);

// Crea un marcador inicialmente en [0, 0]
var marcador = marker([0, 0]).addTo(mymap);

// Configurar el botón de búsqueda
botonCoordenadas(mymap);

