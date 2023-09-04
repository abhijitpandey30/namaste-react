## Class based components

- Functional comp - just a JS func that returns a piece of JSX
- Class based - A class which extends React.Component - has a render method which returns a piece of JSX
-  => super(props) is mandatory

- hooks are new concept - 

- Loading a class based comp on webpage - we are creating an instance of a class - Loading a functional comp - we are invoking/calling (mounting) it on the web page

- Never update state varibles directly - this.state is a big object - this.setState will update only the variables we pass in it, not all state  (it finds the diff and re renders the comp).. also call setState once with all vriables 

- componentDidMount - called after comp rendered.
- Parent componentDidMount will called after child's componentDidMount - 
- We make API call inside it, just like useEffect - so first render - basic skeleton, then make API call and re render again

-- if we have multiple child - below is the sequence - componentDidMount is called afterwards - React is just optimising - React life cycle has 2 phases - Rendering and Commit - visit - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ - React will patch the render phases of both child, and then the commit phase will be patched together - why? bcoz render phase is faster - commit takes time - in render phase finds the diff between previous and new virtual DOM

Parent constructor
Parent render

Child 1 constructor
Child 1 render

Child 2 constructor
Child 2 render

Child 1 CompDidMount
Child 2 CompDidMount

/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      ccomponentDid Update