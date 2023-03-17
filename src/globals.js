import * as L from "leaflet";

//Firebase settings
//Node version 16.16.0

export const firebaseConfig = {
  apiKey: "AIzaSyDwadcmkbLR_mQ6TzKXWkX7nhw5DD6Ew38",
  authDomain: "shenandoah-230301.firebaseapp.com",
  databaseURL: "https://shenandoah-230301-default-rtdb.firebaseio.com",
  projectId: "shenandoah-230301",
  storageBucket: "shenandoah-230301.appspot.com",
  messagingSenderId: "802386923566",
  appId: "1:802386923566:web:6b4309c95816f7f0234fbf"
};

//icons

export const iconTypes = ["Special_Places", "Connections", "General_Ideas", "Potential_Issues", "engagement", "helloWorld"]

//mapbox
export const mapboxURL =
    "https://api.mapbox.com/styles/v1/landaudesign/cla7aexpo000x14qv2ikoqduz/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGFuZGF1ZGVzaWduIiwiYSI6ImNrZ3F4dDIyeTBsMXIyenIzd2EwdnBsZTQifQ.MOBff0ku-Z960ubZPr3b6g";

//icons that are loaded on each user end on first load
export const icons = {
    Special_Places: L.Icon.extend({
        options: {
            iconUrl:
            "./icons/Special Places-01.png",
            iconAnchor: new L.Point(38, 18),
            iconSize: new L.Point(76, 76),
        },
    }),

    Connections: L.Icon.extend({
        options: {
            iconUrl: "./icons/Connections-01.png",
            iconAnchor: new L.Point(38, 18),
            iconSize: new L.Point(75, 75),
        },
    }),
    General_Ideas: L.Icon.extend({
        options: {
            iconUrl: "./icons/General Ideas-01.png",
            iconAnchor: new L.Point(38, 22),
            iconSize: new L.Point(75, 75),
        },
    }),
    Potential_Issues: L.Icon.extend({
        options: {
            iconUrl: "./icons/Potential Issues-01.png",
            iconAnchor: new L.Point(38, 22),
            iconSize: new L.Point(75, 75),
        },
    }),
    engagement: L.Icon.extend({
        options: {
            iconUrl: "./icons/transparency.png",
            iconAnchor: new L.Point(38, 22),
            iconSize: new L.Point(75, 75),
        },
    }),
    helloWorld: L.Icon.extend({
        options: {
            iconUrl:
                "https://www.freecodecamp.org/news/content/images/2022/06/helloWorld.png",
            iconAnchor: new L.Point(38, 22),
            iconSize: new L.Point(75, 75),
        },
    }),
};

//icons 
//toolbar icons are found in the globals.css