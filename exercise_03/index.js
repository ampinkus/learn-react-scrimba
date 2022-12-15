const h1 = document.createElement("h1");
h1.textContent = "Hello world";
h1.className = "header";
console.log(h1);

const element = <h1 className="header">This is JSX</h1>; // in JSX we use className instead of class
console.log(element);

// JSX
/*
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {className: "header", children: "This is JSX"}, 
    _owner: null, 
    _store: {}
}
 */
ReactDOM.render(element, document.getElementById("root"));
