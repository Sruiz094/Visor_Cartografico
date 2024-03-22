import $ from "jquery";
import { Map, Marker } from "leaflet";

export function botonCoordenadas(mymap: Map) {
    let marker: Marker | null = null;

    // Manejador de evento para el botón search-btn
    $('#search-btn').click(function () {
        console.log("Botón de búsqueda clickeado"); 
        const latlng = $('#search').val() as string;
        console.log("Coordenadas ingresadas:", latlng); 
        const latlngArr = latlng.split(',');
        const lat = parseFloat(latlngArr[0]);
        const lng = parseFloat(latlngArr[1]);

        // Si el marcador no existe, créalo y añádelo al mapa
        if (!marker) {
            console.log("Creando nuevo marcador"); 
            marker = new Marker([lat, lng]).addTo(mymap);
        } else {
            // Si el marcador ya existe, actualiza su posición
            console.log("Actualizando posición del marcador"); 
            marker.setLatLng([lat, lng]);
        }

        // Establecer la vista del mapa con las coordenadas ingresadas por el usuario
        mymap.setView([lat, lng], 18);
    });

    // Manejador de evento para el campo de entrada #search
    $('#search').on('input', function() {
        console.log("Campo de búsqueda cambiado"); 
        const latlng = $('#search').val() as string;

        // Si las coordenadas están borradas, eliminar el marcador del mapa
        if (!latlng.trim() && marker) {
            console.log("Borrando marcador del mapa"); 
            mymap.removeLayer(marker);
            marker = null;
            
            // Centrar la vista del mapa a la posición inicial
            mymap.setView([2.581672, -75.523207], 9);
        }
    });
}
