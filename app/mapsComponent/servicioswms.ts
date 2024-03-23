import { tileLayer } from "leaflet";

export const vias = ()=>{
    return tileLayer.wms("http://localhost:8081/geoserver/CartoBase/wms?", {
    layers: "Vias",
    format: "image/png",
    transparent: true })}

export const drenaje = ()=>{
    return tileLayer.wms("http://localhost:8081/geoserver/CartoBase/wms?", {
    layers: "Drenaje_Sencillo",
    format: "image/png",
    transparent: true })}
    
export const represa = ()=>{
    return tileLayer.wms("http://localhost:8081/geoserver/CartoBase/wms?", {
    layers: "Represa",
    format: "image/png",
    transparent: true })}

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

export const AreasProtegidas =()=>{
    return tileLayer.wms("http://localhost:8081/geoserver/Ambiental/wms?", {
    layers: "AreasProtegidas",
    format: "image/png",
    transparent: true })};

export const UsoSueloUrbano_LaPlata =()=>{
    return tileLayer.wms("http://localhost:8081/geoserver/POT/wms?", {
    layers: "UsoSueloUrbano_LaPlata",
    format: "image/png",
    transparent: true })};

export const UsoSueloRural_LaPlata =()=>{
    return tileLayer.wms("http://localhost:8081/geoserver/POT/wms?", {
    layers: "UsoSueloRural_LaPlata",
    format: "image/png",
    transparent: true })};

export const UsoSueloUrbano_LaArgentina =()=>{
    return tileLayer.wms("http://localhost:8081/geoserver/POT/wms?", {
    layers: "UsoSueloUrbano_LaArgentina",
    format: "image/png",
    transparent: true })};
    
export const UsoSueloRural_LaArgentina =()=>{
    return tileLayer.wms("http://localhost:8081/geoserver/POT/wms?", {
    layers: "UsoSueloRural_LaArgentina",
    format: "image/png",
    transparent: true })};

export const UsoSueloUrbano_Pital =()=>{
    return tileLayer.wms("http://localhost:8081/geoserver/POT/wms?", {
    layers: "UsoSueloUrbano_Pital",
    format: "image/png",
    transparent: true })};