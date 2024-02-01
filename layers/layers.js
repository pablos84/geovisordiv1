var wms_layers = [];


        var lyr_blanco_0 = new ol.layer.Tile({
            'title': 'blanco',
            'type': 'base',
            'opacity': 0.100000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_TOPOGRAFICO_2 = new ol.layer.Tile({
            'title': 'TOPOGRAFICO',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_SATELITAL_3 = new ol.layer.Tile({
            'title': 'SATELITAL',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_150000_4 = new ol.format.GeoJSON();
var features_150000_4 = format_150000_4.readFeatures(json_150000_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_150000_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_150000_4.addFeatures(features_150000_4);
var lyr_150000_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_150000_4, 
                style: style_150000_4,
                interactive: true,
                title: '<img src="styles/legend/150000_4.png" /> 1:50000'
            });
var format_DEPARTAMENTAL_5 = new ol.format.GeoJSON();
var features_DEPARTAMENTAL_5 = format_DEPARTAMENTAL_5.readFeatures(json_DEPARTAMENTAL_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPARTAMENTAL_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPARTAMENTAL_5.addFeatures(features_DEPARTAMENTAL_5);
var lyr_DEPARTAMENTAL_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DEPARTAMENTAL_5, 
                style: style_DEPARTAMENTAL_5,
                interactive: true,
                title: '<img src="styles/legend/DEPARTAMENTAL_5.png" /> DEPARTAMENTAL'
            });
var format_HITOS_6 = new ol.format.GeoJSON();
var features_HITOS_6 = format_HITOS_6.readFeatures(json_HITOS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HITOS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HITOS_6.addFeatures(features_HITOS_6);
var lyr_HITOS_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HITOS_6, 
                style: style_HITOS_6,
                interactive: true,
                title: '<img src="styles/legend/HITOS_6.png" /> HITOS'
            });
var format_PPUU_7 = new ol.format.GeoJSON();
var features_PPUU_7 = format_PPUU_7.readFeatures(json_PPUU_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PPUU_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPUU_7.addFeatures(features_PPUU_7);
var lyr_PPUU_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PPUU_7, 
                style: style_PPUU_7,
                interactive: true,
                title: '<img src="styles/legend/PPUU_7.png" /> PP. UU.'
            });
var format_UUMM_8 = new ol.format.GeoJSON();
var features_UUMM_8 = format_UUMM_8.readFeatures(json_UUMM_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UUMM_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UUMM_8.addFeatures(features_UUMM_8);
var lyr_UUMM_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UUMM_8, 
                style: style_UUMM_8,
                interactive: true,
                title: '<img src="styles/legend/UUMM_8.png" /> UU. MM.'
            });
var format_DIVMEC1_9 = new ol.format.GeoJSON();
var features_DIVMEC1_9 = format_DIVMEC1_9.readFeatures(json_DIVMEC1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DIVMEC1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIVMEC1_9.addFeatures(features_DIVMEC1_9);
var lyr_DIVMEC1_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DIVMEC1_9, 
                style: style_DIVMEC1_9,
                interactive: true,
                title: '<img src="styles/legend/DIVMEC1_9.png" /> DIVMEC-1'
            });
var format_HITOS_10 = new ol.format.GeoJSON();
var features_HITOS_10 = format_HITOS_10.readFeatures(json_HITOS_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HITOS_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HITOS_10.addFeatures(features_HITOS_10);
var lyr_HITOS_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HITOS_10, 
                style: style_HITOS_10,
                interactive: true,
                title: '<img src="styles/legend/HITOS_10.png" /> HITOS'
            });
var format_PPUU_11 = new ol.format.GeoJSON();
var features_PPUU_11 = format_PPUU_11.readFeatures(json_PPUU_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PPUU_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPUU_11.addFeatures(features_PPUU_11);
var lyr_PPUU_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PPUU_11, 
                style: style_PPUU_11,
                interactive: true,
                title: '<img src="styles/legend/PPUU_11.png" /> PP. UU.'
            });
var format_UUMM_12 = new ol.format.GeoJSON();
var features_UUMM_12 = format_UUMM_12.readFeatures(json_UUMM_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UUMM_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UUMM_12.addFeatures(features_UUMM_12);
var lyr_UUMM_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UUMM_12, 
                style: style_UUMM_12,
                interactive: true,
                title: '<img src="styles/legend/UUMM_12.png" /> UU. MM.'
            });
var format_DIVMEC1_13 = new ol.format.GeoJSON();
var features_DIVMEC1_13 = format_DIVMEC1_13.readFeatures(json_DIVMEC1_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DIVMEC1_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIVMEC1_13.addFeatures(features_DIVMEC1_13);
var lyr_DIVMEC1_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DIVMEC1_13, 
                style: style_DIVMEC1_13,
                interactive: true,
                title: '<img src="styles/legend/DIVMEC1_13.png" /> DIVMEC-1'
            });
var format_ELEVACIONES_14 = new ol.format.GeoJSON();
var features_ELEVACIONES_14 = format_ELEVACIONES_14.readFeatures(json_ELEVACIONES_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ELEVACIONES_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ELEVACIONES_14.addFeatures(features_ELEVACIONES_14);
var lyr_ELEVACIONES_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ELEVACIONES_14, 
                style: style_ELEVACIONES_14,
                interactive: true,
                title: '<img src="styles/legend/ELEVACIONES_14.png" /> ELEVACIONES'
            });
var format_COTAS_15 = new ol.format.GeoJSON();
var features_COTAS_15 = format_COTAS_15.readFeatures(json_COTAS_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COTAS_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COTAS_15.addFeatures(features_COTAS_15);
var lyr_COTAS_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COTAS_15, 
                style: style_COTAS_15,
                interactive: true,
                title: '<img src="styles/legend/COTAS_15.png" /> COTAS'
            });
var format_LAGOS_16 = new ol.format.GeoJSON();
var features_LAGOS_16 = format_LAGOS_16.readFeatures(json_LAGOS_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAGOS_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAGOS_16.addFeatures(features_LAGOS_16);
var lyr_LAGOS_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LAGOS_16, 
                style: style_LAGOS_16,
                interactive: true,
                title: '<img src="styles/legend/LAGOS_16.png" /> LAGOS'
            });
var format_RIOSSECUNDARIOS_17 = new ol.format.GeoJSON();
var features_RIOSSECUNDARIOS_17 = format_RIOSSECUNDARIOS_17.readFeatures(json_RIOSSECUNDARIOS_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RIOSSECUNDARIOS_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RIOSSECUNDARIOS_17.addFeatures(features_RIOSSECUNDARIOS_17);
var lyr_RIOSSECUNDARIOS_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RIOSSECUNDARIOS_17, 
                style: style_RIOSSECUNDARIOS_17,
                interactive: true,
                title: '<img src="styles/legend/RIOSSECUNDARIOS_17.png" /> RIOS SECUNDARIOS'
            });
var format_RIOSPRINCIPALES_18 = new ol.format.GeoJSON();
var features_RIOSPRINCIPALES_18 = format_RIOSPRINCIPALES_18.readFeatures(json_RIOSPRINCIPALES_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RIOSPRINCIPALES_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RIOSPRINCIPALES_18.addFeatures(features_RIOSPRINCIPALES_18);
var lyr_RIOSPRINCIPALES_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RIOSPRINCIPALES_18, 
                style: style_RIOSPRINCIPALES_18,
                interactive: true,
                title: '<img src="styles/legend/RIOSPRINCIPALES_18.png" /> RIOS PRINCIPALES'
            });
var format_CENTROSEDUCATIVOS_19 = new ol.format.GeoJSON();
var features_CENTROSEDUCATIVOS_19 = format_CENTROSEDUCATIVOS_19.readFeatures(json_CENTROSEDUCATIVOS_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CENTROSEDUCATIVOS_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSEDUCATIVOS_19.addFeatures(features_CENTROSEDUCATIVOS_19);
var lyr_CENTROSEDUCATIVOS_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CENTROSEDUCATIVOS_19, 
                style: style_CENTROSEDUCATIVOS_19,
                interactive: true,
                title: '<img src="styles/legend/CENTROSEDUCATIVOS_19.png" /> CENTROS EDUCATIVOS'
            });
var format_VEGETACION_20 = new ol.format.GeoJSON();
var features_VEGETACION_20 = format_VEGETACION_20.readFeatures(json_VEGETACION_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VEGETACION_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VEGETACION_20.addFeatures(features_VEGETACION_20);
var lyr_VEGETACION_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VEGETACION_20, 
                style: style_VEGETACION_20,
                interactive: true,
    title: 'VEGETACION<br />\
    <img src="styles/legend/VEGETACION_20_0.png" /> Bosque denso siempre verde<br />\
    <img src="styles/legend/VEGETACION_20_1.png" /> Herbacea graminoide baja<br />\
    <img src="styles/legend/VEGETACION_20_2.png" /> Herbacea graminoide baja estacional<br />\
    <img src="styles/legend/VEGETACION_20_3.png" /> Herbacea graminoide baja estacional, Matorral deciduo<br />\
    <img src="styles/legend/VEGETACION_20_4.png" /> Herbacea graminoide intermedia<br />\
    <img src="styles/legend/VEGETACION_20_5.png" /> Hidromorfica de agua dulce, Matorral deciduo<br />\
    <img src="styles/legend/VEGETACION_20_6.png" /> Matorral deciduo<br />\
    <img src="styles/legend/VEGETACION_20_7.png" /> Matorral enano deciduo<br />\
    <img src="styles/legend/VEGETACION_20_8.png" /> Matorral enano siempre verde<br />\
    <img src="styles/legend/VEGETACION_20_9.png" /> Matorral ralo deciduo<br />\
    <img src="styles/legend/VEGETACION_20_10.png" /> <br />'
        });
var format_VIASDECOMUNICACIN_21 = new ol.format.GeoJSON();
var features_VIASDECOMUNICACIN_21 = format_VIASDECOMUNICACIN_21.readFeatures(json_VIASDECOMUNICACIN_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIASDECOMUNICACIN_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIASDECOMUNICACIN_21.addFeatures(features_VIASDECOMUNICACIN_21);
var lyr_VIASDECOMUNICACIN_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VIASDECOMUNICACIN_21, 
                style: style_VIASDECOMUNICACIN_21,
                interactive: true,
                title: '<img src="styles/legend/VIASDECOMUNICACIN_21.png" /> VIAS DE COMUNICACIÓN'
            });
var format_POBLACIONESnombres_22 = new ol.format.GeoJSON();
var features_POBLACIONESnombres_22 = format_POBLACIONESnombres_22.readFeatures(json_POBLACIONESnombres_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POBLACIONESnombres_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POBLACIONESnombres_22.addFeatures(features_POBLACIONESnombres_22);
var lyr_POBLACIONESnombres_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POBLACIONESnombres_22, 
                style: style_POBLACIONESnombres_22,
                interactive: true,
                title: '<img src="styles/legend/POBLACIONESnombres_22.png" /> POBLACIONES (nombres)'
            });
var format_POBLACIONES_23 = new ol.format.GeoJSON();
var features_POBLACIONES_23 = format_POBLACIONES_23.readFeatures(json_POBLACIONES_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POBLACIONES_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POBLACIONES_23.addFeatures(features_POBLACIONES_23);
var lyr_POBLACIONES_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POBLACIONES_23, 
                style: style_POBLACIONES_23,
                interactive: true,
                title: '<img src="styles/legend/POBLACIONES_23.png" /> POBLACIONES'
            });
var group_DRENAJES = new ol.layer.Group({
                                layers: [lyr_LAGOS_16,lyr_RIOSSECUNDARIOS_17,lyr_RIOSPRINCIPALES_18,],
                                title: "DRENAJES"});
var group_RELIEVE = new ol.layer.Group({
                                layers: [lyr_ELEVACIONES_14,lyr_COTAS_15,],
                                title: "RELIEVE"});
var group_JURISDICCIN = new ol.layer.Group({
                                layers: [lyr_HITOS_10,lyr_PPUU_11,lyr_UUMM_12,lyr_DIVMEC1_13,],
                                title: "JURISDICCIÓN"});
var group_LIMITES = new ol.layer.Group({
                                layers: [lyr_DEPARTAMENTAL_5,lyr_HITOS_10,lyr_PPUU_11,lyr_UUMM_12,lyr_DIVMEC1_13,],
                                title: "LIMITES"});
var group_NDICECARTOGRFICO = new ol.layer.Group({
                                layers: [lyr_150000_4,],
                                title: "ÍNDICE CARTOGRÁFICO"});
var group_MAPABASE = new ol.layer.Group({
                                layers: [lyr_blanco_0,lyr_OpenStreetMap_1,lyr_TOPOGRAFICO_2,lyr_SATELITAL_3,],
                                title: "MAPA BASE"});

lyr_blanco_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_TOPOGRAFICO_2.setVisible(true);lyr_SATELITAL_3.setVisible(true);lyr_150000_4.setVisible(false);lyr_DEPARTAMENTAL_5.setVisible(false);lyr_HITOS_6.setVisible(false);lyr_PPUU_7.setVisible(false);lyr_UUMM_8.setVisible(false);lyr_DIVMEC1_9.setVisible(false);lyr_HITOS_10.setVisible(true);lyr_PPUU_11.setVisible(true);lyr_UUMM_12.setVisible(true);lyr_DIVMEC1_13.setVisible(true);lyr_ELEVACIONES_14.setVisible(false);lyr_COTAS_15.setVisible(false);lyr_LAGOS_16.setVisible(false);lyr_RIOSSECUNDARIOS_17.setVisible(false);lyr_RIOSPRINCIPALES_18.setVisible(false);lyr_CENTROSEDUCATIVOS_19.setVisible(false);lyr_VEGETACION_20.setVisible(false);lyr_VIASDECOMUNICACIN_21.setVisible(false);lyr_POBLACIONESnombres_22.setVisible(false);lyr_POBLACIONES_23.setVisible(false);
var layersList = [group_MAPABASE,group_NDICECARTOGRFICO,group_LIMITES,group_RELIEVE,group_DRENAJES,lyr_CENTROSEDUCATIVOS_19,lyr_VEGETACION_20,lyr_VIASDECOMUNICACIN_21,lyr_POBLACIONESnombres_22,lyr_POBLACIONES_23];
lyr_150000_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_DEPARTAMENTAL_5.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'DESCRIPCIO': 'DESCRIPCIO', });
lyr_HITOS_6.set('fieldAliases', {'PAIS_VECIN': 'PAIS_VECIN', 'HITO': 'HITO', 'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'TIPO_2': 'TIPO_2', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTURA': 'ALTURA', 'LATITUD1': 'LATITUD1', 'LONGITUD1': 'LONGITUD1', 'FUERZA': 'FUERZA', 'UNIDAD': 'UNIDAD', 'PMA_': 'PMA_', 'GGUU': 'GGUU', });
lyr_PPUU_7.set('fieldAliases', {'PPUUCC': 'PPUUCC', 'GGUUCC': 'GGUUCC', });
lyr_UUMM_8.set('fieldAliases', {'G_U_C_': 'G_U_C_', 'NOMBRE_UNI': 'NOMBRE_UNI', 'DENOMINATI': 'DENOMINATI', 'UBICACIÓN': 'UBICACIÓN', });
lyr_DIVMEC1_9.set('fieldAliases', {'GGUUCC': 'GGUUCC', });
lyr_HITOS_10.set('fieldAliases', {'PAIS_VECIN': 'PAIS_VECIN', 'HITO': 'HITO', 'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'TIPO_2': 'TIPO_2', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTURA': 'ALTURA', 'LATITUD1': 'LATITUD1', 'LONGITUD1': 'LONGITUD1', 'FUERZA': 'FUERZA', 'UNIDAD': 'UNIDAD', 'PMA_': 'PMA_', 'GGUU': 'GGUU', });
lyr_PPUU_11.set('fieldAliases', {'PPUUCC': 'PPUUCC', 'GGUUCC': 'GGUUCC', });
lyr_UUMM_12.set('fieldAliases', {'G_U_C_': 'G_U_C_', 'NOMBRE_UNI': 'NOMBRE_UNI', 'DENOMINATI': 'DENOMINATI', 'UBICACIÓN': 'UBICACIÓN', });
lyr_DIVMEC1_13.set('fieldAliases', {'GGUUCC': 'GGUUCC', });
lyr_ELEVACIONES_14.set('fieldAliases', {'Shape_Area': 'Shape_Area', });
lyr_COTAS_15.set('fieldAliases', {'Nombre': 'Nombre', });
lyr_LAGOS_16.set('fieldAliases', {'TIPO': 'TIPO', 'AREA': 'AREA', 'NOMBRE': 'NOMBRE', });
lyr_RIOSSECUNDARIOS_17.set('fieldAliases', {'CAUDAL': 'CAUDAL', 'NOMBRE': 'NOMBRE', });
lyr_RIOSPRINCIPALES_18.set('fieldAliases', {'TYPO_HYP': 'TYPO_HYP', 'NOMBRE': 'NOMBRE', });
lyr_CENTROSEDUCATIVOS_19.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'DISTRITO': 'DISTRITO', 'ZONA': 'ZONA', 'DIRECCION': 'DIRECCION', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'CODIGO_UE': 'CODIGO_UE', 'NOMBRE UE': 'NOMBRE UE', 'COD_EDIF_E': 'COD_EDIF_E', 'COD_DEPA': 'COD_DEPA', 'DEPA': 'DEPA', 'COD_PROV': 'COD_PROV', 'PROV': 'PROV', 'COD_MUNI': 'COD_MUNI', 'MUNI': 'MUNI', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_VEGETACION_20.set('fieldAliases', {'TIPOS_VEG': 'TIPOS_VEG', });
lyr_VIASDECOMUNICACIN_21.set('fieldAliases', {'Tipo': 'Tipo', 'Longitud': 'Longitud', 'TIPO_RST': 'TIPO_RST', 'OBJETO': 'OBJETO', 'TEMA': 'TEMA', 'CLASE': 'CLASE', 'ITINERARIO': 'ITINERARIO', });
lyr_POBLACIONESnombres_22.set('fieldAliases', {'nombre_dep': 'nombre_dep', 'nombre_c_1': 'nombre_c_1', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_POBLACIONES_23.set('fieldAliases', {'nombre_dep': 'nombre_dep', 'nombre_c_1': 'nombre_c_1', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_150000_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_DEPARTAMENTAL_5.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'DESCRIPCIO': 'TextEdit', });
lyr_HITOS_6.set('fieldImages', {'PAIS_VECIN': 'TextEdit', 'HITO': 'TextEdit', 'NOMBRE': 'TextEdit', 'TIPO': 'TextEdit', 'TIPO_2': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTURA': 'TextEdit', 'LATITUD1': 'TextEdit', 'LONGITUD1': 'TextEdit', 'FUERZA': 'TextEdit', 'UNIDAD': 'TextEdit', 'PMA_': 'TextEdit', 'GGUU': 'TextEdit', });
lyr_PPUU_7.set('fieldImages', {'PPUUCC': 'TextEdit', 'GGUUCC': 'TextEdit', });
lyr_UUMM_8.set('fieldImages', {'G_U_C_': 'TextEdit', 'NOMBRE_UNI': 'TextEdit', 'DENOMINATI': 'TextEdit', 'UBICACIÓN': 'TextEdit', });
lyr_DIVMEC1_9.set('fieldImages', {'GGUUCC': 'TextEdit', });
lyr_HITOS_10.set('fieldImages', {'PAIS_VECIN': 'TextEdit', 'HITO': 'TextEdit', 'NOMBRE': 'TextEdit', 'TIPO': 'TextEdit', 'TIPO_2': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTURA': 'TextEdit', 'LATITUD1': 'TextEdit', 'LONGITUD1': 'TextEdit', 'FUERZA': 'TextEdit', 'UNIDAD': 'TextEdit', 'PMA_': 'TextEdit', 'GGUU': 'TextEdit', });
lyr_PPUU_11.set('fieldImages', {'PPUUCC': 'TextEdit', 'GGUUCC': 'TextEdit', });
lyr_UUMM_12.set('fieldImages', {'G_U_C_': 'TextEdit', 'NOMBRE_UNI': 'TextEdit', 'DENOMINATI': 'TextEdit', 'UBICACIÓN': 'TextEdit', });
lyr_DIVMEC1_13.set('fieldImages', {'GGUUCC': 'TextEdit', });
lyr_ELEVACIONES_14.set('fieldImages', {'Shape_Area': 'TextEdit', });
lyr_COTAS_15.set('fieldImages', {'Nombre': 'TextEdit', });
lyr_LAGOS_16.set('fieldImages', {'TIPO': 'TextEdit', 'AREA': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_RIOSSECUNDARIOS_17.set('fieldImages', {'CAUDAL': '', 'NOMBRE': 'TextEdit', });
lyr_RIOSPRINCIPALES_18.set('fieldImages', {'TYPO_HYP': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_CENTROSEDUCATIVOS_19.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'DISTRITO': 'TextEdit', 'ZONA': 'TextEdit', 'DIRECCION': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'CODIGO_UE': 'TextEdit', 'NOMBRE UE': 'TextEdit', 'COD_EDIF_E': 'TextEdit', 'COD_DEPA': 'TextEdit', 'DEPA': 'TextEdit', 'COD_PROV': 'TextEdit', 'PROV': 'TextEdit', 'COD_MUNI': 'TextEdit', 'MUNI': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_VEGETACION_20.set('fieldImages', {'TIPOS_VEG': 'TextEdit', });
lyr_VIASDECOMUNICACIN_21.set('fieldImages', {'Tipo': 'TextEdit', 'Longitud': 'TextEdit', 'TIPO_RST': 'TextEdit', 'OBJETO': 'TextEdit', 'TEMA': 'TextEdit', 'CLASE': 'TextEdit', 'ITINERARIO': 'TextEdit', });
lyr_POBLACIONESnombres_22.set('fieldImages', {'nombre_dep': 'TextEdit', 'nombre_c_1': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_POBLACIONES_23.set('fieldImages', {'nombre_dep': 'TextEdit', 'nombre_c_1': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_150000_4.set('fieldLabels', {});
lyr_DEPARTAMENTAL_5.set('fieldLabels', {});
lyr_HITOS_6.set('fieldLabels', {});
lyr_PPUU_7.set('fieldLabels', {});
lyr_UUMM_8.set('fieldLabels', {});
lyr_DIVMEC1_9.set('fieldLabels', {});
lyr_HITOS_10.set('fieldLabels', {});
lyr_PPUU_11.set('fieldLabels', {});
lyr_UUMM_12.set('fieldLabels', {});
lyr_DIVMEC1_13.set('fieldLabels', {});
lyr_ELEVACIONES_14.set('fieldLabels', {});
lyr_COTAS_15.set('fieldLabels', {});
lyr_LAGOS_16.set('fieldLabels', {});
lyr_RIOSSECUNDARIOS_17.set('fieldLabels', {});
lyr_RIOSPRINCIPALES_18.set('fieldLabels', {});
lyr_CENTROSEDUCATIVOS_19.set('fieldLabels', {'DEPARTAMEN': 'no label', 'DISTRITO': 'no label', 'ZONA': 'no label', 'DIRECCION': 'no label', 'LATITUD': 'no label', 'LONGITUD': 'no label', 'CODIGO_UE': 'no label', 'NOMBRE UE': 'inline label', 'COD_EDIF_E': 'no label', 'COD_DEPA': 'no label', 'DEPA': 'no label', 'COD_PROV': 'no label', 'PROV': 'no label', 'COD_MUNI': 'no label', 'MUNI': 'no label', 'LAT': 'no label', 'LONG': 'no label', });
lyr_VEGETACION_20.set('fieldLabels', {'TIPOS_VEG': 'inline label', });
lyr_VIASDECOMUNICACIN_21.set('fieldLabels', {'Tipo': 'no label', 'Longitud': 'no label', 'TIPO_RST': 'no label', 'OBJETO': 'no label', 'TEMA': 'no label', 'CLASE': 'no label', 'ITINERARIO': 'inline label', });
lyr_POBLACIONESnombres_22.set('fieldLabels', {'nombre_dep': 'no label', 'nombre_c_1': 'inline label', 'LAT': 'no label', 'LONG': 'no label', });
lyr_POBLACIONES_23.set('fieldLabels', {'nombre_dep': 'no label', 'nombre_c_1': 'inline label', 'LAT': 'no label', 'LONG': 'no label', });
lyr_POBLACIONES_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});