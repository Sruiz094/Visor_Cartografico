import { tileLayer } from "leaflet";

export const municipio = ()=>{
    return tileLayer.wms("http://localhost:8081/geoserver/Limites/wms?", {
    layers: "municipio",
    format: "image/png",
    transparent: true })}

export const departamento =()=>{
    return tileLayer.wms("http://localhost:8081/geoserver/Limites/wms?", {
        layers: "departamento",
        format: "image/png",
        transparent: true })};