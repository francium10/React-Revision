import React, { Component } from "react";
import {createRoot} from "react-dom/client";


// const headingElement=React.createElement(
// "h1",
// {id:"title"},
// "Our element in react");
// This is how you create an element(object of key value pairs in curly brackets) in React 

// const jsxHeadingHeading=(
// <h1 id="" className="title"> Here is jsx Heading</h1>
// );
// This is how you create an element(object of key value pairs in curly brackets) in Jsx syntax both in give the 
// same object We can console.log(heading) and console.log(jsxHeading);
// Babel converts jsx code to react element in order for browsers to understand. it is transpiler/compiler

// Functional components
// Use normal Js functions preferably arrow functions const App=()=>(code to be executed) and wrap everything in one div 
// with id"container" and add any other tags and to render it just Wrap App variable <App/> in render()

// Within the App Component, you can render as many other component as possible or use as many tags as you wish
// const HeadingComponent=()=>(
//     <div id="container">
//      <h1 className="title"> Here is Functional Heading component</h1>
//    </div>
// );

// Dealing with multiple components

const Title=()=>(
    <div id="container">
     <h1 className="title"> Here is Second Functional Heading component</h1>
   </div>
);

const number=1000 // Components can accept javascript files provided it is in {number} any js code can be written
// functions/console.logs,variables etc that is why jsx element can be wrapped.

const HeadingComponent=()=>(
    <div id="container">
        {number } 
          <Title/>
     <h1 className="title"> Here is Functional Heading component</h1>
   
   </div>
);

// Other ways of rendering reusable Components
//  <Title/>
//   <Title><Title/>
// {Title}


//Note: everything jsx elements, components and js code can be rendered with one another   


const root=createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

