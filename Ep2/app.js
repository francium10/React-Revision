import React from "react";
import {createRoot} from "react-dom/client";


const headingElement=React.createElement("h1",{id:"title"}, "Igniting our app");
const root=createRoot(document.getElementById("root"));
root.render(headingElement); 

