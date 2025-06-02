// Creating Hello world in React
// const heading=React.createElement('h1', {id:"title", zxy:"abc"}, "Hello world from React");
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);


// Creating a more comprehensive and nested and complex html structures in react code
const parent=React.createElement('div', {}, 
[
    React.createElement("div", {id:"child1"}, [
    React.createElement("h1", {id:"heading1"}, "heading1"),
    React.createElement("h2", {id:"heading1"}, "heading12")
]),
    React.createElement("div", {id:"child1"}, [
    React.createElement("h1", {id:"heading3"}, "heading3"),
    React.createElement("h2", {id:"heading4"}, "heading4.")
])
]
);
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);