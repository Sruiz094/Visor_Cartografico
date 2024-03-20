import { Control, DomUtil, Map } from "leaflet";

export function addLegendControl(map: Map, servicioswms: {[key: string]: any}) {
    const legend = new Control({ position: 'bottomleft' });

    legend.onAdd = function (map: Map) {
        const div = DomUtil.create('div', 'info legend');

        function updateLegend() {
            div.innerHTML = '';

            const activeLayers: string[] = [];
            for (const [layerName, layer] of Object.entries(servicioswms)) {
                if (map.hasLayer(layer)) {
                    activeLayers.push(layerName);
                }
            }

            if (activeLayers.length > 0) {
                div.innerHTML += '<h3 style="background-color: white; padding: 5px;">LEYENDA</h3>';

                for (const layerName of activeLayers) {
                    div.innerHTML +=
                        `<div style="margin-bottom: 0px;">
                            <img alt="${layerName}" src="http://localhost:8081/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=${layerName}" style="width: 500; height: 500;" />
                        </div>`;
                }
            }
        }

        map.on('overlayadd', updateLegend);
        map.on('overlayremove', updateLegend);

        updateLegend();

        return div;
    };

    legend.addTo(map);
}
