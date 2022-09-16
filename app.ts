import "ol/ol.css";
import "ol-layerswitcher/dist/ol-layerswitcher.css";
import { Map, View } from "ol";
import LayerSwitcher, { type BaseLayerOptions } from "ol-layerswitcher";
import { fromLonLat } from "ol/proj";
import { Tile as TileLayer } from "ol/layer";
import { OSM } from "ol/source";
import { defaults } from "ol/control";

export const initMap = (target: keyof HTMLElementTagNameMap) => {
  const map = new Map({
    target: target,
    view: new View({
      center: fromLonLat([-2.4673, 52.6776]),
      zoom: 12
    }),
    layers: [
      new TileLayer({
        title: "Open Street Map",
        type: "base",
        source: new OSM(),
        visible: true
      } as BaseLayerOptions)
    ],
    controls: defaults().extend([new LayerSwitcher()])
  });
};
