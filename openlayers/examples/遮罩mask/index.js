import turfMask from '@turf/mask'
import {
  Vector as VectorLayer
} from 'ol/layer';
import {
  Vector as VectorSource
} from 'ol/source';
import Feature from "ol/Feature";
import {
  Polygon,
  MultiPolygon
} from "ol/geom";
import {
  Fill,
  Stroke,
  Style
} from "ol/style";
import json from './360000.json'

export default {
  createLayerMask() {
    let codes = [360100, 360400, 360500]
    let maskFeatures = []
    let features = []

    codes.map(code => {
      let feature = json.features.filter(feature => {
        return feature.properties.adcode === code
      })
      // mask
      maskFeatures.push(feature[0])
      // each
      let eachPolygon = {
        "type": "FeatureCollection",
        "features": feature
      }
      let eachFeature = new Feature({
        geometry: new MultiPolygon(eachPolygon.features[0].geometry.coordinates),
      });
      eachFeature.setStyle(
        new Style({
          stroke: new Stroke({
            width: 3, //边界宽度
            color: [71, 137, 227, 1], //边界颜色
          }),
        })
      );
      features.push(eachFeature)
    })

    // mask
    let maskPolygon = {
      "type": "FeatureCollection",
      "features": maskFeatures
    }
    const masked = turfMask(maskPolygon);
    let maskFeature = new Feature({
      geometry: new Polygon(masked.geometry.coordinates),
    });
    maskFeature.setStyle(
      new Style({
        fill: new Fill({
          color: "#fff", //填充颜色
        }),
        stroke: new Stroke({
          width: 3, //边界宽度
          color: [71, 137, 227, 1], //边界颜色
        }),
      })
    );
    features.push(maskFeature)

    // source
    const source = new VectorSource({
      features: features
    });
    const vectorLayer = new VectorLayer({
      source,
    });
    return vectorLayer
  }
}
// 使用
// map.addLayer(createLayerMask())