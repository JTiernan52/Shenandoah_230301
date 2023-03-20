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

export const iconTypes = ["special_places", "connections", "general_ideas", "potential_issues", "engagement", "helloWorld"]

//mapbox
export const mapboxURL =
    "https://api.mapbox.com/styles/v1/landaudesign/cla7aexpo000x14qv2ikoqduz/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGFuZGF1ZGVzaWduIiwiYSI6ImNrZ3F4dDIyeTBsMXIyenIzd2EwdnBsZTQifQ.MOBff0ku-Z960ubZPr3b6g";

//icons that are loaded on each user end on first load
export const icons = {
    special_places: L.Icon.extend({
        options: {
            iconUrl:
            "./icons/special_places.png",
            iconAnchor: new L.Point(38, 18),
            iconSize: new L.Point(76, 76),
        },
    }),

    connections: L.Icon.extend({
        options: {
            iconUrl: "./icons/connections.png",
            iconAnchor: new L.Point(38, 18),
            iconSize: new L.Point(75, 75),
        },
    }),
    general_ideas: L.Icon.extend({
        options: {
            iconUrl: "./icons/general_ideas.png",
            iconAnchor: new L.Point(38, 22),
            iconSize: new L.Point(75, 75),
        },
    }),
    potential_issues: L.Icon.extend({
        options: {
            iconUrl: "./icons/potential_issues.png",
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