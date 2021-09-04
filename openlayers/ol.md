# OpenLayers

## 基本概念

### Map

```html
<div id="map" style="width: 100%, height: 400px"></div>
```

```js
import Map from 'ol/Map';

var map = new Map({target: 'map'});
```

### View

```js
import View from 'ol/View';

map.setView(new View({
  center: [0, 0],
  zoom: 2,
  projection: 'EPSG:3857' // 默认投影
}));
```

### Source

图层**Layer**数据，OpenLayers 使用ol/source/Source子类

```js
import OSM from 'ol/source/OSM';

var osmSource = OSM();
```

### Layer

OpenLayers 有四种基本类型的层

* ol/layer/Tile
* ol/layer/Image
* ol/layer/Vector
* ol/layer/VectorTile

```js
import TileLayer from 'ol/layer/Tile';

var osmLayer = new TileLayer({source: osmSource});
map.addLayer(osmLayer);
```

### 整合来看

```js
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';

new Map({
  layers: [
    new TileLayer({source: new OSM()})
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  }),
  target: 'map'
});
```

## 使用模块方式

```js
默认导出
import Map from 'ol/Map';
import View from 'ol/View';

命名导出
import {Map, View} from 'ol';
import {Tile, Vector} from 'ol/layer';

常量或函数作为命名导出
import {getUid} from 'ol';
import {fromLonLat} from 'ol/proj';
```
