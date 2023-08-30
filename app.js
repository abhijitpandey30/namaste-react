import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

console.log(heading);
// JSX
const jsxHeading = (
  <div>
    <h1 id="heading" className="head">
      Namaste React using JSX
    </h1>
  </div>
); // jsxHeading is a react element

// React functional component
const num = 1000;
const elm = <h1>React elem</h1>
const Title = () => <h1 className="title">Namaste React Title {elm}</h1>;
const HeadingComponent = () => (
  <div>
    <Title />
    {Title()}
    <h1>{num}</h1> {console.log('323')}
    <h1 className="head">Namaste React functional comp</h1>
  </div>
);

console.log(jsxHeading);
root.render(heading);

root.render(<HeadingComponent />);
