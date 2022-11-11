import { lazy } from "react";
import data from "./data/data.json";

// use JS generate,based on data key-{name}
const title = ["Pick your destination", "Meet your crew", "Space launch 101"];

// each carousel constructor
const container = [
    ["Image", "Main", "SubContent"],
    ["Image", "Main"],
    ["Image", "Main"],
];

const routes = Object.entries(data).reduce((paths, [path], index) => {
    let relativePath = path.charAt(0).toUpperCase() + path.slice(1);
    paths.push({
        path: path,
        title: title[index],
        component: lazy(() => import(`./Page/${relativePath}`)),
        // compoundComponent
        carousel: lazy(() => import(`./Page/${relativePath}/Carousel.js`)),
        child: data[path].map((route) => route.name),
        // this for special section container placement : Page
        outlets: container[index],
    });
    return paths;
}, []);

export default routes;
