import React from "react";
import {createRoot} from "react-dom/client";


const headingElement=React.createElement("h1", {id:"title"}, "igniting our app");
const root=createRoot(document.getElementById("root"));
root.render(headingElement); 

// const App=()=>{
// <div> 
//     <h1>Igniting our App Today</h1>
// </div>
// }
// const root=createRoot(document.getElementById("root"));
// root.render(App());
