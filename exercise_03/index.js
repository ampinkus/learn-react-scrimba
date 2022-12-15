/* const h1 = document.createElement("h1");
h1.textContent = "Hello world";
h1.className = "header";
console.log(h1);

const element = <h1 className="header">This is JSX</h1>; // in JSX we use className instead of class
console.log(element);

// JSX

{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {className: "header", children: "This is JSX"}, 
    _owner: null, 
    _store: {}
}

ReactDOM.render(element, document.getElementById("root")); */

/* ReactDOM.render(
    <h1 className="header">This is JSX</h1><p>This is a paragraph</p>, // this is not allowed, we can render only one sibling element
  document.getElementById("root")
);


ReactDOM.render(
  // this is allowed because inside the div I can put more thn one sibling.  The div is only one sibling
  <div>
    <h1 className="header">This is JSX</h1>
    <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
);

const page = // I can put all the JSX code in one variable, note that it renders only the second ReactDOM
  (
    <div>
      <h1 className="header">This is JSX again</h1>
      <p>This is a paragraph</p>
    </div>
  );
console.log(page);
ReactDOM.render(page, document.getElementById("root"));

*/

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const nav = (
  <div>
    <h1>My site</h1>
    <nav>
      <ul>
        <li>
          <a href="/pricing/">Pricing</a>
        </li>
        <li>
          <a href="/about/">About</a>
        </li>
        <li>
          <a href="/contact/">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
);

ReactDOM.render(nav, document.getElementById("root"));
