import { tileLayer} from "leaflet";


export const mapsosm = ()=>{
    return tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: 
    'OpenStreetMap'
})};

export const mapsEsri_WorldImagery = () =>{
    return tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 20,
	attribution: 'Esri'
})};

export const OpenTopoMap = ()=> {
    return tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	    maxZoom: 20,
	attribution: 'OpenStreetMap'
})};

export const mapsGoogleMaps = () => {
    return tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        attribution: 'Google Maps'
    });
};

export const mapsGoogleSatellite = () => {
    return tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        attribution: 'Google Satellite'
    });
};
