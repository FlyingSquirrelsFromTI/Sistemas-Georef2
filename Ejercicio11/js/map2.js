const map2 = leafletMaps[1];

// Crea polígono
L.polygon(polygonCoords, { color: 'red' }).addTo(map2);

// Operación along de TurfJS
const polygon = turf.polygon([polygonCoords]);
const center = turf.centerOfMass(polygon);

// Coloca el marcador en la coordenada calculada por centerOfMass
L.marker([center.geometry.coordinates[0], center.geometry.coordinates[1]])
    .addTo(map2)
    .bindPopup(`Un marcador colocado en el centro de masa del polígono`)
    .openPopup();
