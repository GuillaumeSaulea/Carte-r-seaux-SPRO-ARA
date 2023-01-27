var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SIAEdesHautsdeFrance_1 = new ol.format.GeoJSON();
var features_SIAEdesHautsdeFrance_1 = format_SIAEdesHautsdeFrance_1.readFeatures(json_SIAEdesHautsdeFrance_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIAEdesHautsdeFrance_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SIAEdesHautsdeFrance_1.addFeatures(features_SIAEdesHautsdeFrance_1);cluster_SIAEdesHautsdeFrance_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_SIAEdesHautsdeFrance_1
});
var lyr_SIAEdesHautsdeFrance_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_SIAEdesHautsdeFrance_1, 
                style: style_SIAEdesHautsdeFrance_1,
                interactive: true,
                title: '<img src="styles/legend/SIAEdesHautsdeFrance_1.png" /> SIAE des Hauts-de-France'
            });

lyr_OSMStandard_0.setVisible(true);lyr_SIAEdesHautsdeFrance_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_SIAEdesHautsdeFrance_1];
lyr_SIAEdesHautsdeFrance_1.set('fieldAliases', {'Raison sociale': 'Raison sociale', 'Type de conventionnement': 'Type de conventionnement', 'SIRET': 'SIRET', 'Adresse': 'Adresse', 'latitude': 'latitude', 'longitude': 'longitude', 'Effectifs': 'Effectifs', 'Secteur d\'activité': 'Secteur d\'activité', });
lyr_SIAEdesHautsdeFrance_1.set('fieldImages', {'Raison sociale': 'TextEdit', 'Type de conventionnement': 'TextEdit', 'SIRET': 'TextEdit', 'Adresse': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Effectifs': 'TextEdit', 'Secteur d\'activité': 'TextEdit', });
lyr_SIAEdesHautsdeFrance_1.set('fieldLabels', {'Raison sociale': 'inline label', 'Type de conventionnement': 'inline label', 'SIRET': 'no label', 'Adresse': 'inline label', 'latitude': 'no label', 'longitude': 'no label', 'Effectifs': 'inline label', 'Secteur d\'activité': 'inline label', });
lyr_SIAEdesHautsdeFrance_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});