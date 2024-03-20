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

export const UsoSueloUrbano =()=>{
    return tileLayer.wms("http://localhost:8081/geoserver/UsoSueloPOT/wms?", {
    layers: "UsoSueloUrbano_LaPlata",
    format: "image/png",
    transparent: true })};

export const UsoSueloRural =()=>{
    return tileLayer.wms("http://localhost:8081/geoserver/UsoSueloPOT/wms?", {
    layers: "UsoSueloRural_LaPlata",
    format: "image/png",
    transparent: true })};