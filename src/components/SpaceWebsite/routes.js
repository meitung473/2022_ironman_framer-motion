import { lazy } from "react";
import data from "./data/data.json";

const title = ["Pick your destination", "Meet your crew", "Space launch 101"];

const routes = Object.entries(data).reduce((paths, [path], index) => {
    let relativePath = path.charAt(0).toUpperCase() + path.slice(1);
    paths.push({
        path: path,
        title: title[index],
        component: lazy(() => import(`./Page/${relativePath}`)),
        carousel: lazy(() => import(`./Page/${relativePath}/Carousel.js`)),
        child: data[path].map((route) => route.name),
    });
    return paths;
}, []);

export default routes;
