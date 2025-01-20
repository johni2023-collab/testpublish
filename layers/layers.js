ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32748").setExtent([715441.341495, 9305157.403451, 722332.808482, 9311490.306848]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Landcover_1 = new ol.format.GeoJSON();
var features_Landcover_1 = format_Landcover_1.readFeatures(json_Landcover_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_Landcover_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landcover_1.addFeatures(features_Landcover_1);
var lyr_Landcover_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Landcover_1, 
                style: style_Landcover_1,
                popuplayertitle: "Landcover",
                interactive: true,
    title: 'Landcover<br />\
    <img src="styles/legend/Landcover_1_0.png" /> Kebun/Ladang<br />\
    <img src="styles/legend/Landcover_1_1.png" /> Makam<br />\
    <img src="styles/legend/Landcover_1_2.png" /> Pemukiman<br />\
    <img src="styles/legend/Landcover_1_3.png" /> Taman<br />\
    <img src="styles/legend/Landcover_1_4.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Landcover_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Landcover_1];
lyr_Landcover_1.set('fieldAliases', {'FID': 'FID', 'name': 'name', 'lctype': 'lctype', 'RuleID': 'RuleID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Landcover_1.set('fieldImages', {'FID': 'TextEdit', 'name': 'TextEdit', 'lctype': 'TextEdit', 'RuleID': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Landcover_1.set('fieldLabels', {'FID': 'header label - visible with data', 'name': 'no label', 'lctype': 'no label', 'RuleID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Landcover_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});