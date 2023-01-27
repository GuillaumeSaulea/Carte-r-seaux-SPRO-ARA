var wms_layers = [];


        var lyr_Fondcarte_0 = new ol.layer.Tile({
            'title': 'Fond carte',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RseauxduSPROenAuvergneRhneAlpes_1 = new ol.format.GeoJSON();
var features_RseauxduSPROenAuvergneRhneAlpes_1 = format_RseauxduSPROenAuvergneRhneAlpes_1.readFeatures(json_RseauxduSPROenAuvergneRhneAlpes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RseauxduSPROenAuvergneRhneAlpes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RseauxduSPROenAuvergneRhneAlpes_1.addFeatures(features_RseauxduSPROenAuvergneRhneAlpes_1);cluster_RseauxduSPROenAuvergneRhneAlpes_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_RseauxduSPROenAuvergneRhneAlpes_1
});
var lyr_RseauxduSPROenAuvergneRhneAlpes_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_RseauxduSPROenAuvergneRhneAlpes_1, 
                style: style_RseauxduSPROenAuvergneRhneAlpes_1,
                interactive: true,
                title: '<img src="styles/legend/RseauxduSPROenAuvergneRhneAlpes_1.png" /> Réseaux du SPRO en Auvergne-Rhône-Alpes'
            });

lyr_Fondcarte_0.setVisible(true);lyr_RseauxduSPROenAuvergneRhneAlpes_1.setVisible(true);
var layersList = [lyr_Fondcarte_0,lyr_RseauxduSPROenAuvergneRhneAlpes_1];
lyr_RseauxduSPROenAuvergneRhneAlpes_1.set('fieldAliases', {'NOM': 'NOM', 'SIGLE EF': 'SIGLE EF', 'ADR 1 EF': 'ADR 1 EF', 'ADR 2 EF': 'ADR 2 EF', 'CP EF': 'CP EF', 'COMMUNE EF': 'COMMUNE EF', 'ADRESSE': 'ADRESSE', 'TEL EF': 'TEL EF', 'MAIL EF': 'MAIL EF', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_RseauxduSPROenAuvergneRhneAlpes_1.set('fieldImages', {'NOM': 'TextEdit', 'SIGLE EF': 'TextEdit', 'ADR 1 EF': 'TextEdit', 'ADR 2 EF': 'TextEdit', 'CP EF': 'Range', 'COMMUNE EF': 'TextEdit', 'ADRESSE': 'TextEdit', 'TEL EF': 'TextEdit', 'MAIL EF': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_RseauxduSPROenAuvergneRhneAlpes_1.set('fieldLabels', {'NOM': 'inline label', 'SIGLE EF': 'inline label', 'ADR 1 EF': 'no label', 'ADR 2 EF': 'no label', 'CP EF': 'no label', 'COMMUNE EF': 'no label', 'ADRESSE': 'inline label', 'TEL EF': 'inline label', 'MAIL EF': 'inline label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_RseauxduSPROenAuvergneRhneAlpes_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});