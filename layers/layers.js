ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32632").setExtent([257496.662124, 640898.501526, 296266.237740, 680732.340003]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_merged_4_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'merged_4<br />\
    <img src="styles/legend/merged_4_1_0.png" /> -14<br />\
    <img src="styles/legend/merged_4_1_1.png" /> 558<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/merged_4_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [667916.944760, 557305.257275, 890555.926346, 781182.214188]
        })
    });
var lyr_Nnewi_flow_accumulation_mask_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Nnewi_flow_accumulation_mask<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_mask_2_0.png" /> 0<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_mask_2_1.png" /> 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Nnewi_flow_accumulation_mask_2.png",
            attributions: ' ',
            projection: 'EPSG:32632',
            alwaysInRange: true,
            imageExtent: [258063.716800, 646861.342800, 291240.406700, 674011.497700]
        })
    });
var lyr_Nnewi_flow_accumulation_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Nnewi_flow_accumulation<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_3_0.png" /> -34104.7 - -9783.15<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_3_1.png" /> -9783.15 - -983.617<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_3_2.png" /> -983.617 - -98.9048<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_3_3.png" /> -98.9048 - -24.926<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_3_4.png" /> -24.926 - -1<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_3_5.png" /> -1 - 1<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_3_6.png" /> 1 - 24.926<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_3_7.png" /> 24.926 - 98.9048<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_3_8.png" /> 98.9048 - 983.617<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_3_9.png" /> 983.617 - 9783.15<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_3_10.png" /> 9783.15 - 456516<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Nnewi_flow_accumulation_3.png",
            attributions: ' ',
            projection: 'EPSG:32632',
            alwaysInRange: true,
            imageExtent: [258063.716798, 646861.342799, 291240.406702, 674011.497743]
        })
    });
var lyr_Nnewi_flow_accumulation_mask_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Nnewi_flow_accumulation_mask<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_mask_4_0.png" /> 0<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_mask_4_1.png" /> 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Nnewi_flow_accumulation_mask_4.png",
            attributions: ' ',
            projection: 'EPSG:32632',
            alwaysInRange: true,
            imageExtent: [258063.716800, 646861.342800, 291240.406700, 674011.497700]
        })
    });
var lyr_Nnewi_flow_accumulation_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Nnewi_flow_accumulation<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_5_0.png" /> -34104.7 - -9783.15<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_5_1.png" /> -9783.15 - -983.617<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_5_2.png" /> -983.617 - -98.9048<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_5_3.png" /> -98.9048 - -24.926<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_5_4.png" /> -24.926 - -1<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_5_5.png" /> -1 - 1<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_5_6.png" /> 1 - 24.926<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_5_7.png" /> 24.926 - 98.9048<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_5_8.png" /> 98.9048 - 983.617<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_5_9.png" /> 983.617 - 9783.15<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_5_10.png" /> 9783.15 - 456516<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Nnewi_flow_accumulation_5.png",
            attributions: ' ',
            projection: 'EPSG:32632',
            alwaysInRange: true,
            imageExtent: [258063.716798, 646861.342799, 291240.406702, 674011.497743]
        })
    });
var lyr_T32NKM_20260205T095109_B04_10m_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'T32NKM_20260205T095109_B04_10m<br />\
    <img src="styles/legend/T32NKM_20260205T095109_B04_10m_6_0.png" /> 691<br />\
    <img src="styles/legend/T32NKM_20260205T095109_B04_10m_6_1.png" /> 9703<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/T32NKM_20260205T095109_B04_10m_6.png",
            attributions: ' ',
            projection: 'EPSG:32632',
            alwaysInRange: true,
            imageExtent: [199980.000000, 590220.000000, 309780.000000, 700020.000000]
        })
    });
var lyr_T32NKM_20260205T095109_B08_10m_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'T32NKM_20260205T095109_B08_10m<br />\
    <img src="styles/legend/T32NKM_20260205T095109_B08_10m_7_0.png" /> 862<br />\
    <img src="styles/legend/T32NKM_20260205T095109_B08_10m_7_1.png" /> 10002<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/T32NKM_20260205T095109_B08_10m_7.png",
            attributions: ' ',
            projection: 'EPSG:32632',
            alwaysInRange: true,
            imageExtent: [199980.000000, 590220.000000, 309780.000000, 700020.000000]
        })
    });
var lyr_Nnewi_NS_AOI_repro_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Nnewi_N&S_AOI_repro<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_8_0.png" /> 0<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_8_1.png" /> 380.984<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Nnewi_NS_AOI_repro_8.png",
            attributions: ' ',
            projection: 'EPSG:32632',
            alwaysInRange: true,
            imageExtent: [258063.716798, 646861.342799, 291240.406702, 674011.497743]
        })
    });
var lyr_Nnewi_NS_AOI_repro_filled_DEM_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Nnewi_N&S_AOI_repro_filled_DEM<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_0.png" /> 0 - 1.50846<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_1.png" /> 1.50846 - 3.01692<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_2.png" /> 3.01692 - 4.52538<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_3.png" /> 4.52538 - 6.03769<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_4.png" /> 6.03769 - 7.54615<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_5.png" /> 7.54615 - 9.05461<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_6.png" /> 9.05461 - 10.5631<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_7.png" /> 10.5631 - 12.0715<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_8.png" /> 12.0715 - 13.58<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_9.png" /> 13.58 - 15.0923<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_10.png" /> 15.0923 - 16.6008<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_11.png" /> 16.6008 - 18.1092<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_12.png" /> 18.1092 - 19.6177<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_13.png" /> 19.6177 - 21.1261<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_14.png" /> 21.1261 - 22.6346<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_15.png" /> 22.6346 - 24.1469<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_16.png" /> 24.1469 - 25.6554<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_17.png" /> 25.6554 - 27.1638<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_18.png" /> 27.1638 - 28.6723<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_19.png" /> 28.6723 - 30.1808<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_20.png" /> 30.1808 - 31.6892<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_21.png" /> 31.6892 - 33.1977<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_22.png" /> 33.1977 - 34.71<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_23.png" /> 34.71 - 36.2184<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_24.png" /> 36.2184 - 37.7269<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_25.png" /> 37.7269 - 39.2354<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_26.png" /> 39.2354 - 40.7438<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_27.png" /> 40.7438 - 42.2523<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_28.png" /> 42.2523 - 43.7646<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_29.png" /> 43.7646 - 45.2731<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_30.png" /> 45.2731 - 46.7815<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_31.png" /> 46.7815 - 48.29<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_32.png" /> 48.29 - 49.7984<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_33.png" /> 49.7984 - 51.3069<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_34.png" /> 51.3069 - 52.8154<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_35.png" /> 52.8154 - 54.3277<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_36.png" /> 54.3277 - 55.8361<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_37.png" /> 55.8361 - 57.3446<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_38.png" /> 57.3446 - 58.853<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_39.png" /> 58.853 - 60.3615<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_40.png" /> 60.3615 - 61.87<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_41.png" /> 61.87 - 63.3823<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_42.png" /> 63.3823 - 64.8907<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_43.png" /> 64.8907 - 66.3992<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_44.png" /> 66.3992 - 67.9077<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_45.png" /> 67.9077 - 69.4161<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_46.png" /> 69.4161 - 70.9246<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_47.png" /> 70.9246 - 72.4369<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_48.png" /> 72.4369 - 73.9453<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_49.png" /> 73.9453 - 75.4538<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_50.png" /> 75.4538 - 76.9623<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_51.png" /> 76.9623 - 78.4707<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_52.png" /> 78.4707 - 79.9792<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_53.png" /> 79.9792 - 81.4876<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_54.png" /> 81.4876 - 83<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_55.png" /> 83 - 84.5084<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_56.png" /> 84.5084 - 86.0169<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_57.png" /> 86.0169 - 87.5253<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_58.png" /> 87.5253 - 89.0338<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_59.png" /> 89.0338 - 90.5423<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_60.png" /> 90.5423 - 92.0546<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_61.png" /> 92.0546 - 93.563<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_62.png" /> 93.563 - 95.0715<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_63.png" /> 95.0715 - 96.5799<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_64.png" /> 96.5799 - 98.0884<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_65.png" /> 98.0884 - 99.5969<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_66.png" /> 99.5969 - 101.109<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_67.png" /> 101.109 - 102.618<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_68.png" /> 102.618 - 104.126<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_69.png" /> 104.126 - 105.635<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_70.png" /> 105.635 - 107.143<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_71.png" /> 107.143 - 108.651<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_72.png" /> 108.651 - 110.16<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_73.png" /> 110.16 - 111.672<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_74.png" /> 111.672 - 113.181<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_75.png" /> 113.181 - 114.689<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_76.png" /> 114.689 - 116.198<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_77.png" /> 116.198 - 117.706<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_78.png" /> 117.706 - 119.215<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_79.png" /> 119.215 - 120.727<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_80.png" /> 120.727 - 122.235<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_81.png" /> 122.235 - 123.744<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_82.png" /> 123.744 - 125.252<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_83.png" /> 125.252 - 126.761<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_84.png" /> 126.761 - 128.269<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_85.png" /> 128.269 - 129.778<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_86.png" /> 129.778 - 131.29<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_87.png" /> 131.29 - 132.798<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_88.png" /> 132.798 - 134.307<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_89.png" /> 134.307 - 135.815<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_90.png" /> 135.815 - 137.324<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_91.png" /> 137.324 - 138.832<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_92.png" /> 138.832 - 140.345<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_93.png" /> 140.345 - 141.853<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_94.png" /> 141.853 - 143.361<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_95.png" /> 143.361 - 144.87<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_96.png" /> 144.87 - 146.378<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_97.png" /> 146.378 - 147.887<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_98.png" /> 147.887 - 149.399<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_99.png" /> 149.399 - 150.908<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_100.png" /> 150.908 - 152.416<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_101.png" /> 152.416 - 153.925<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_102.png" /> 153.925 - 155.433<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_103.png" /> 155.433 - 156.941<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_104.png" /> 156.941 - 158.45<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_105.png" /> 158.45 - 159.962<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_106.png" /> 159.962 - 161.471<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_107.png" /> 161.471 - 162.979<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_108.png" /> 162.979 - 164.488<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_109.png" /> 164.488 - 165.996<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_110.png" /> 165.996 - 167.505<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_111.png" /> 167.505 - 169.017<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_112.png" /> 169.017 - 170.525<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_113.png" /> 170.525 - 172.034<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_114.png" /> 172.034 - 173.542<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_115.png" /> 173.542 - 175.051<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_116.png" /> 175.051 - 176.559<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_117.png" /> 176.559 - 178.071<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_118.png" /> 178.071 - 179.58<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_119.png" /> 179.58 - 181.088<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_120.png" /> 181.088 - 182.597<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_121.png" /> 182.597 - 184.105<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_122.png" /> 184.105 - 185.614<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_123.png" /> 185.614 - 187.122<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_124.png" /> 187.122 - 188.635<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_125.png" /> 188.635 - 190.143<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_126.png" /> 190.143 - 191.651<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_127.png" /> 191.651 - 193.16<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_128.png" /> 193.16 - 194.668<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_129.png" /> 194.668 - 196.177<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_130.png" /> 196.177 - 197.689<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_131.png" /> 197.689 - 199.198<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_132.png" /> 199.198 - 200.706<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_133.png" /> 200.706 - 202.214<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_134.png" /> 202.214 - 203.723<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_135.png" /> 203.723 - 205.231<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_136.png" /> 205.231 - 206.74<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_137.png" /> 206.74 - 208.252<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_138.png" /> 208.252 - 209.761<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_139.png" /> 209.761 - 211.269<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_140.png" /> 211.269 - 212.778<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_141.png" /> 212.778 - 214.286<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_142.png" /> 214.286 - 215.794<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_143.png" /> 215.794 - 217.307<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_144.png" /> 217.307 - 218.815<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_145.png" /> 218.815 - 220.324<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_146.png" /> 220.324 - 221.832<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_147.png" /> 221.832 - 223.341<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_148.png" /> 223.341 - 224.849<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_149.png" /> 224.849 - 226.361<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_150.png" /> 226.361 - 227.87<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_151.png" /> 227.87 - 229.378<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_152.png" /> 229.378 - 230.887<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_153.png" /> 230.887 - 232.395<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_154.png" /> 232.395 - 233.904<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_155.png" /> 233.904 - 235.412<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_156.png" /> 235.412 - 236.924<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_157.png" /> 236.924 - 238.433<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_158.png" /> 238.433 - 239.941<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_159.png" /> 239.941 - 241.45<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_160.png" /> 241.45 - 242.958<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_161.png" /> 242.958 - 244.467<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_162.png" /> 244.467 - 245.979<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_163.png" /> 245.979 - 247.488<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_164.png" /> 247.488 - 248.996<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_165.png" /> 248.996 - 250.504<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_166.png" /> 250.504 - 252.013<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_167.png" /> 252.013 - 253.521<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_168.png" /> 253.521 - 255.034<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_169.png" /> 255.034 - 256.542<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_170.png" /> 256.542 - 258.051<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_171.png" /> 258.051 - 259.559<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_172.png" /> 259.559 - 261.068<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_173.png" /> 261.068 - 262.576<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_174.png" /> 262.576 - 264.084<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_175.png" /> 264.084 - 265.597<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_176.png" /> 265.597 - 267.105<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_177.png" /> 267.105 - 268.614<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_178.png" /> 268.614 - 270.122<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_179.png" /> 270.122 - 271.631<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_180.png" /> 271.631 - 273.139<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_181.png" /> 273.139 - 274.651<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_182.png" /> 274.651 - 276.16<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_183.png" /> 276.16 - 277.668<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_184.png" /> 277.668 - 279.177<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_185.png" /> 279.177 - 280.685<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_186.png" /> 280.685 - 282.194<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_187.png" /> 282.194 - 283.702<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_188.png" /> 283.702 - 285.214<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_189.png" /> 285.214 - 286.723<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_190.png" /> 286.723 - 288.231<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_191.png" /> 288.231 - 289.74<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_192.png" /> 289.74 - 291.248<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_193.png" /> 291.248 - 292.757<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_194.png" /> 292.757 - 294.269<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_195.png" /> 294.269 - 295.778<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_196.png" /> 295.778 - 297.286<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_197.png" /> 297.286 - 298.794<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_198.png" /> 298.794 - 300.303<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_199.png" /> 300.303 - 301.811<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_200.png" /> 301.811 - 303.324<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_201.png" /> 303.324 - 304.832<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_202.png" /> 304.832 - 306.341<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_203.png" /> 306.341 - 307.849<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_204.png" /> 307.849 - 309.358<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_205.png" /> 309.358 - 310.866<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_206.png" /> 310.866 - 312.374<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_207.png" /> 312.374 - 313.887<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_208.png" /> 313.887 - 315.395<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_209.png" /> 315.395 - 316.904<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_210.png" /> 316.904 - 318.412<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_211.png" /> 318.412 - 319.921<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_212.png" /> 319.921 - 321.429<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_213.png" /> 321.429 - 322.941<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_214.png" /> 322.941 - 324.45<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_215.png" /> 324.45 - 325.958<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_216.png" /> 325.958 - 327.467<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_217.png" /> 327.467 - 328.975<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_218.png" /> 328.975 - 330.484<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_219.png" /> 330.484 - 331.996<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_220.png" /> 331.996 - 333.504<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_221.png" /> 333.504 - 335.013<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_222.png" /> 335.013 - 336.521<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_223.png" /> 336.521 - 338.03<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_224.png" /> 338.03 - 339.538<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_225.png" /> 339.538 - 341.047<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_226.png" /> 341.047 - 342.559<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_227.png" /> 342.559 - 344.067<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_228.png" /> 344.067 - 345.576<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_229.png" /> 345.576 - 347.084<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_230.png" /> 347.084 - 348.593<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_231.png" /> 348.593 - 350.101<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_232.png" /> 350.101 - 351.614<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_233.png" /> 351.614 - 353.122<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_234.png" /> 353.122 - 354.631<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_235.png" /> 354.631 - 356.139<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_236.png" /> 356.139 - 357.647<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_237.png" /> 357.647 - 359.156<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_238.png" /> 359.156 - 360.664<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_239.png" /> 360.664 - 362.177<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_240.png" /> 362.177 - 363.685<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_241.png" /> 363.685 - 365.194<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_242.png" /> 365.194 - 366.702<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_243.png" /> 366.702 - 368.211<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_244.png" /> 368.211 - 369.719<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_245.png" /> 369.719 - 371.231<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_246.png" /> 371.231 - 372.74<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_247.png" /> 372.74 - 374.248<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_248.png" /> 374.248 - 375.757<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_249.png" /> 375.757 - 377.265<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_250.png" /> 377.265 - 378.774<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_251.png" /> 378.774 - 380.286<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_252.png" /> 380.286 - 381.794<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_253.png" /> 381.794 - 383.303<br />\
    <img src="styles/legend/Nnewi_NS_AOI_repro_filled_DEM_9_254.png" /> 383.303 - 384.811<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Nnewi_NS_AOI_repro_filled_DEM_9.png",
            attributions: ' ',
            projection: 'EPSG:32632',
            alwaysInRange: true,
            imageExtent: [258063.716798, 646861.342799, 291240.406702, 674011.497743]
        })
    });
var lyr_Nnewi_NS_AOI_slope_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Nnewi_N&S_AOI_slope<br />\
    <img src="styles/legend/Nnewi_NS_AOI_slope_10_0.png" /> 0<br />\
    <img src="styles/legend/Nnewi_NS_AOI_slope_10_1.png" /> 79.386<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Nnewi_NS_AOI_slope_10.png",
            attributions: ' ',
            projection: 'EPSG:32632',
            alwaysInRange: true,
            imageExtent: [258063.716798, 646861.342799, 291240.406702, 674011.497743]
        })
    });
var lyr_Nnewi_direction_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Nnewi_direction<br />\
    <img src="styles/legend/Nnewi_direction_11_0.png" /> -8 - 0<br />\
    <img src="styles/legend/Nnewi_direction_11_1.png" /> 0 - 8<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Nnewi_direction_11.png",
            attributions: ' ',
            projection: 'EPSG:32632',
            alwaysInRange: true,
            imageExtent: [258063.716798, 646861.342799, 291240.406702, 674011.497743]
        })
    });
var lyr_Nnewi_flow_accumulation_mask_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Nnewi_flow_accumulation_mask<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_mask_12_0.png" /> 0<br />\
    <img src="styles/legend/Nnewi_flow_accumulation_mask_12_1.png" /> 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Nnewi_flow_accumulation_mask_12.png",
            attributions: ' ',
            projection: 'EPSG:32632',
            alwaysInRange: true,
            imageExtent: [258063.716800, 646861.342800, 291240.406700, 674011.497700]
        })
    });
var format_stream_polygons_13 = new ol.format.GeoJSON();
var features_stream_polygons_13 = format_stream_polygons_13.readFeatures(json_stream_polygons_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_stream_polygons_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stream_polygons_13.addFeatures(features_stream_polygons_13);
var lyr_stream_polygons_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_stream_polygons_13, 
                style: style_stream_polygons_13,
                popuplayertitle: 'stream_polygons',
                interactive: true,
                title: '<img src="styles/legend/stream_polygons_13.png" /> stream_polygons'
            });
var lyr_Nnewi_raster_river_base_14 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Nnewi_raster_river_base<br />\
    <img src="styles/legend/Nnewi_raster_river_base_14_0.png" /> 1<br />\
    <img src="styles/legend/Nnewi_raster_river_base_14_1.png" /> 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Nnewi_raster_river_base_14.png",
            attributions: ' ',
            projection: 'EPSG:32632',
            alwaysInRange: true,
            imageExtent: [258063.716800, 646861.497700, 291243.716800, 674011.497700]
        })
    });
var lyr_Nnewi_promixity_map_15 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Nnewi_promixity_map<br />\
    <img src="styles/legend/Nnewi_promixity_map_15_0.png" /> 0<br />\
    <img src="styles/legend/Nnewi_promixity_map_15_1.png" /> 173.217<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Nnewi_promixity_map_15.png",
            attributions: ' ',
            projection: 'EPSG:32632',
            alwaysInRange: true,
            imageExtent: [258063.716800, 646861.497700, 291243.716800, 674011.497700]
        })
    });
var lyr_Nnewi_promixity_risk_45m_16 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Nnewi_promixity_risk_45m<br />\
    <img src="styles/legend/Nnewi_promixity_risk_45m_16_0.png" /> 0<br />\
    <img src="styles/legend/Nnewi_promixity_risk_45m_16_1.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Nnewi_promixity_risk_45m_16.png",
            attributions: ' ',
            projection: 'EPSG:32632',
            alwaysInRange: true,
            imageExtent: [258063.716800, 646861.497700, 291243.716800, 674011.497700]
        })
    });
var lyr_slope_risk_zone_17 = new ol.layer.Image({
        opacity: 1,
        
    title: 'slope_risk_zone<br />\
    <img src="styles/legend/slope_risk_zone_17_0.png" /> 0<br />\
    <img src="styles/legend/slope_risk_zone_17_1.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/slope_risk_zone_17.png",
            attributions: ' ',
            projection: 'EPSG:32632',
            alwaysInRange: true,
            imageExtent: [258063.716798, 646861.342799, 291240.406702, 674011.497743]
        })
    });
var format_Nnewi_NS_18 = new ol.format.GeoJSON();
var features_Nnewi_NS_18 = format_Nnewi_NS_18.readFeatures(json_Nnewi_NS_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_Nnewi_NS_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nnewi_NS_18.addFeatures(features_Nnewi_NS_18);
var lyr_Nnewi_NS_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nnewi_NS_18, 
                style: style_Nnewi_NS_18,
                popuplayertitle: 'Nnewi_N&S',
                interactive: true,
                title: '<img src="styles/legend/Nnewi_NS_18.png" /> Nnewi_N&S'
            });
var lyr_NDVI_CLIPPED_19 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI_CLIPPED<br />\
    <img src="styles/legend/NDVI_CLIPPED_19_0.png" /> -0.205665<br />\
    <img src="styles/legend/NDVI_CLIPPED_19_1.png" /> 0.629438<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI_CLIPPED_19.png",
            attributions: ' ',
            projection: 'EPSG:32632',
            alwaysInRange: true,
            imageExtent: [264489.970914, 652211.429949, 285060.133605, 671797.668535]
        })
    });
var lyr_final_flood_risk_map_20 = new ol.layer.Image({
        opacity: 1,
        
    title: 'final_flood_risk_map<br />\
    <img src="styles/legend/final_flood_risk_map_20_0.png" /> Very High Risk<br />\
    <img src="styles/legend/final_flood_risk_map_20_1.png" /> High Risk<br />\
    <img src="styles/legend/final_flood_risk_map_20_2.png" /> Moderate Risk<br />\
    <img src="styles/legend/final_flood_risk_map_20_3.png" /> Low Risk<br />\
    <img src="styles/legend/final_flood_risk_map_20_4.png" /> Very Low Risk<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/final_flood_risk_map_20.png",
            attributions: ' ',
            projection: 'EPSG:32632',
            alwaysInRange: true,
            imageExtent: [258063.716800, 646861.342800, 291240.406700, 674011.497700]
        })
    });
var lyr_final_erosion_risk_map_21 = new ol.layer.Image({
        opacity: 1,
        
    title: 'final_erosion_risk_map<br />\
    <img src="styles/legend/final_erosion_risk_map_21_0.png" /> Very High Risk<br />\
    <img src="styles/legend/final_erosion_risk_map_21_1.png" /> High Risk<br />\
    <img src="styles/legend/final_erosion_risk_map_21_2.png" /> Moderate Risk<br />\
    <img src="styles/legend/final_erosion_risk_map_21_3.png" /> Low Risk<br />\
    <img src="styles/legend/final_erosion_risk_map_21_4.png" /> Very Low Risk<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/final_erosion_risk_map_21.png",
            attributions: ' ',
            projection: 'EPSG:32632',
            alwaysInRange: true,
            imageExtent: [258063.716800, 646861.342800, 291240.406700, 674011.497700]
        })
    });
var lyr_clipped_DEM_22 = new ol.layer.Image({
        opacity: 1,
        
    title: 'clipped_DEM<br />\
    <img src="styles/legend/clipped_DEM_22_0.png" /> 0<br />\
    <img src="styles/legend/clipped_DEM_22_1.png" /> 302<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/clipped_DEM_22.png",
            attributions: ' ',
            projection: 'EPSG:32632',
            alwaysInRange: true,
            imageExtent: [264486.741193, 652201.128451, 285066.229455, 671805.087048]
        })
    });
var format_NNEWI_NORTH_AND_SOUTH_NGA_ADMIN2nga_admin2_23 = new ol.format.GeoJSON();
var features_NNEWI_NORTH_AND_SOUTH_NGA_ADMIN2nga_admin2_23 = format_NNEWI_NORTH_AND_SOUTH_NGA_ADMIN2nga_admin2_23.readFeatures(json_NNEWI_NORTH_AND_SOUTH_NGA_ADMIN2nga_admin2_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_NNEWI_NORTH_AND_SOUTH_NGA_ADMIN2nga_admin2_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NNEWI_NORTH_AND_SOUTH_NGA_ADMIN2nga_admin2_23.addFeatures(features_NNEWI_NORTH_AND_SOUTH_NGA_ADMIN2nga_admin2_23);
var lyr_NNEWI_NORTH_AND_SOUTH_NGA_ADMIN2nga_admin2_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NNEWI_NORTH_AND_SOUTH_NGA_ADMIN2nga_admin2_23, 
                style: style_NNEWI_NORTH_AND_SOUTH_NGA_ADMIN2nga_admin2_23,
                popuplayertitle: 'NNEWI_NORTH_AND_SOUTH_NGA_ADMIN2 — nga_admin2',
                interactive: true,
                title: '<img src="styles/legend/NNEWI_NORTH_AND_SOUTH_NGA_ADMIN2nga_admin2_23.png" /> NNEWI_NORTH_AND_SOUTH_NGA_ADMIN2 — nga_admin2'
            });
var lyr_final_erosion_risk_map_clipped_24 = new ol.layer.Image({
        opacity: 1,
        
    title: 'final_erosion_risk_map_clipped<br />\
    <img src="styles/legend/final_erosion_risk_map_clipped_24_0.png" /> Very High Risk<br />\
    <img src="styles/legend/final_erosion_risk_map_clipped_24_1.png" /> High Risk<br />\
    <img src="styles/legend/final_erosion_risk_map_clipped_24_2.png" /> Moderate Risk<br />\
    <img src="styles/legend/final_erosion_risk_map_clipped_24_3.png" /> Low Risk<br />\
    <img src="styles/legend/final_erosion_risk_map_clipped_24_4.png" /> High Risk<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/final_erosion_risk_map_clipped_24.png",
            attributions: ' ',
            projection: 'EPSG:32632',
            alwaysInRange: true,
            imageExtent: [264489.970914, 652211.429949, 285060.133605, 671797.668535]
        })
    });
var lyr_final_flood_risk_map_clipped_25 = new ol.layer.Image({
        opacity: 1,
        
    title: 'final_flood_risk_map_clipped<br />\
    <img src="styles/legend/final_flood_risk_map_clipped_25_0.png" /> Very High Risk<br />\
    <img src="styles/legend/final_flood_risk_map_clipped_25_1.png" /> High Risk<br />\
    <img src="styles/legend/final_flood_risk_map_clipped_25_2.png" /> Moderate Risk<br />\
    <img src="styles/legend/final_flood_risk_map_clipped_25_3.png" /> Low Risk<br />\
    <img src="styles/legend/final_flood_risk_map_clipped_25_4.png" /> Very Low risk<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/final_flood_risk_map_clipped_25.png",
            attributions: ' ',
            projection: 'EPSG:32632',
            alwaysInRange: true,
            imageExtent: [264489.970914, 652211.429949, 285060.133605, 671797.668535]
        })
    });

lyr_OpenStreetMap_0.setVisible(true);lyr_merged_4_1.setVisible(true);lyr_Nnewi_flow_accumulation_mask_2.setVisible(true);lyr_Nnewi_flow_accumulation_3.setVisible(true);lyr_Nnewi_flow_accumulation_mask_4.setVisible(true);lyr_Nnewi_flow_accumulation_5.setVisible(true);lyr_T32NKM_20260205T095109_B04_10m_6.setVisible(true);lyr_T32NKM_20260205T095109_B08_10m_7.setVisible(true);lyr_Nnewi_NS_AOI_repro_8.setVisible(true);lyr_Nnewi_NS_AOI_repro_filled_DEM_9.setVisible(true);lyr_Nnewi_NS_AOI_slope_10.setVisible(true);lyr_Nnewi_direction_11.setVisible(true);lyr_Nnewi_flow_accumulation_mask_12.setVisible(true);lyr_stream_polygons_13.setVisible(true);lyr_Nnewi_raster_river_base_14.setVisible(true);lyr_Nnewi_promixity_map_15.setVisible(true);lyr_Nnewi_promixity_risk_45m_16.setVisible(true);lyr_slope_risk_zone_17.setVisible(true);lyr_Nnewi_NS_18.setVisible(true);lyr_NDVI_CLIPPED_19.setVisible(true);lyr_final_flood_risk_map_20.setVisible(true);lyr_final_erosion_risk_map_21.setVisible(true);lyr_clipped_DEM_22.setVisible(true);lyr_NNEWI_NORTH_AND_SOUTH_NGA_ADMIN2nga_admin2_23.setVisible(true);lyr_final_erosion_risk_map_clipped_24.setVisible(true);lyr_final_flood_risk_map_clipped_25.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_merged_4_1,lyr_Nnewi_flow_accumulation_mask_2,lyr_Nnewi_flow_accumulation_3,lyr_Nnewi_flow_accumulation_mask_4,lyr_Nnewi_flow_accumulation_5,lyr_T32NKM_20260205T095109_B04_10m_6,lyr_T32NKM_20260205T095109_B08_10m_7,lyr_Nnewi_NS_AOI_repro_8,lyr_Nnewi_NS_AOI_repro_filled_DEM_9,lyr_Nnewi_NS_AOI_slope_10,lyr_Nnewi_direction_11,lyr_Nnewi_flow_accumulation_mask_12,lyr_stream_polygons_13,lyr_Nnewi_raster_river_base_14,lyr_Nnewi_promixity_map_15,lyr_Nnewi_promixity_risk_45m_16,lyr_slope_risk_zone_17,lyr_Nnewi_NS_18,lyr_NDVI_CLIPPED_19,lyr_final_flood_risk_map_20,lyr_final_erosion_risk_map_21,lyr_clipped_DEM_22,lyr_NNEWI_NORTH_AND_SOUTH_NGA_ADMIN2nga_admin2_23,lyr_final_erosion_risk_map_clipped_24,lyr_final_flood_risk_map_clipped_25];
lyr_stream_polygons_13.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Nnewi_NS_18.set('fieldAliases', {'fid': 'fid', });
lyr_NNEWI_NORTH_AND_SOUTH_NGA_ADMIN2nga_admin2_23.set('fieldAliases', {'fid': 'fid', 'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'sendist_en': 'sendist_en', 'sendistpco': 'sendistpco', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_stream_polygons_13.set('fieldImages', {'fid': '', 'DN': '', });
lyr_Nnewi_NS_18.set('fieldImages', {'fid': '', });
lyr_NNEWI_NORTH_AND_SOUTH_NGA_ADMIN2nga_admin2_23.set('fieldImages', {'fid': '', 'adm2_name': '', 'adm2_name1': '', 'adm2_name2': '', 'adm2_name3': '', 'adm2_pcode': '', 'adm1_name': '', 'adm1_name1': '', 'adm1_name2': '', 'adm1_name3': '', 'adm1_pcode': '', 'adm0_name': '', 'adm0_name1': '', 'adm0_name2': '', 'adm0_name3': '', 'adm0_pcode': '', 'valid_on': '', 'valid_to': '', 'area_sqkm': '', 'version': '', 'lang': '', 'lang1': '', 'lang2': '', 'lang3': '', 'adm2_ref_n': '', 'sendist_en': '', 'sendistpco': '', 'center_lat': '', 'center_lon': '', });
lyr_stream_polygons_13.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Nnewi_NS_18.set('fieldLabels', {'fid': 'no label', });
lyr_NNEWI_NORTH_AND_SOUTH_NGA_ADMIN2nga_admin2_23.set('fieldLabels', {'fid': 'no label', 'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm2_ref_n': 'no label', 'sendist_en': 'no label', 'sendistpco': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_NNEWI_NORTH_AND_SOUTH_NGA_ADMIN2nga_admin2_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});