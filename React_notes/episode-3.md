DOM element - HTML element
React.createElement - React element - object -> render-> HTML element
ReactDOM.createRoot(document.getElementById('#root')) -> root.render(reactElement)=> replaces inside root
const heading = React.createElement('h1', {}, 'Hello World from React!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

JSX - JS syntax which is easier to create React element, JSX is not part of REACT, we can creat REACT app without JSX. It just makes it easier - merge HTML and JS together

JSX is not HTML inside JS - it is HTML like syntax in JS. 
Are you writing code for humans or machine - well both - coz others dev gonna read it, it should be more readable

JSX - is it valid JS - it is and it is not. JS engine does not understand it - NO, it only understands ECMA script - so how it works? - PARCEL does it behind the scenes -  Code is transpiled before it goes to browser - PARCEL actually delegates this job to BABEL - BABEL was installed by PARCEL - it is transpiler - convert code so JS engine, browser understand

JSX code - > coneverted to REACT.createElement done by BABEL-> render-> HTML
BABEL also converts code that older browser understands

In JSX - we use className instead of class
Attributes - JSX is camelCase - tabindex in html, tabIndex in JSX


## React Component - Everything is a component in React
- Class bases components - old way of writing
- Functional component - new way 

# Functional component - a normal JS function that returns a JSX, a normal JS function that returns a React element - use Capital name

- how to render it -root.render(<headingComponent/>) -that's how BABEL understands it
- component inside a component - Component composition

- {} - inside curly braces - we can execute any JS expression,
    => JSX takes care of cross-site scripting attacks inside curly braces - {} , it will eccape, sanitise it