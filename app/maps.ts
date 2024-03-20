import { control, map,} from "leaflet";
import { Logotipo} from "./mapsComponent/logo";
import { OpenTopoMap, mapsosm, mapsEsri_WorldImagery, } from "./mapsComponent/mapasBase";
import { departamento, municipio,UsoSueloRural, UsoSueloUrbano} from "./mapsComponent/servicioswms";
import {addLegendControl} from "./mapsComponent/leyenda"
// Inicializar el mapa
const mymap = map("map").setView([2.581672, -75.523207],9);


//Importación del logotipo de la empresa  
Logotipo().addTo(mymap); 


//Importación de mapas base 
const Topomap = OpenTopoMap();
const osm = mapsosm().addTo(mymap);
const Esri_WorldImagery = mapsEsri_WorldImagery();

//Enlazar servicios wms
const capaMunicipio = municipio().addTo(mymap);
const capaDepartamento = departamento();
const capaUsoSueloUrbano_LaPlata =  UsoSueloUrbano();
const capaUsoSueloRural_LaPlata =  UsoSueloRural();


// Tabla de controlo de capas
var baseMaps = {
    "OpenTopoMap": Topomap,
    "OpenStreetMap": osm,
    "Esri Imagery": Esri_WorldImagery,  
};

var servicioswms = {
    "departamento": capaDepartamento,
    "municipio": capaMunicipio,
    "UsoSueloUrbano_LaPlata": capaUsoSueloUrbano_LaPlata,
    "UsoSueloRural_LaPlata": capaUsoSueloRural_LaPlata,
};

const controlCapas = control.layers(baseMaps,servicioswms).addTo(mymap);

//Control de escala 
control.scale({ position: 'bottomright' }).addTo(mymap);

//Añadir leyenda 
addLegendControl(mymap, servicioswms);

