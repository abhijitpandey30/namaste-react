React folder structure - One components folder, or feature based - Like profile, restaurants... avoid too much nesting

Components - can have .js, .jsx, .tsx - it is the same

Never put hardcoded data in ur components

Multiple export - names export
Single export - default export

## Rect hooks
- Make page Dynamic
- onClick - takes a cb that will be executed when we click the btn
- Why react fast - faster,efficient DOM manipulation -  we have a simple JS variable, we create state variable - useState hook

A React hook - is a normal JS function - functions has utility - written inside React by Facebook devs  below most imp hooks
- useState - generate super-powerful State variables in react - u can only change it via function as second index
## - WHENEVER A STATE VARIABLE UPDATES, REACT RE-RENDERS THE COMPONENTS  - KEEPING DATA AND UI in SYNC (React Fibre) - this is where REACT is FAST
- useState returns an array  -  we destructure it
- useEffect

## React Alogrithm - Reaciliation Algo (also known as react fibre)

- Virtual DOM - not an actual DOM!!.. It is just a representation of actual DOM - Actual DOM is like <div>
- It is Tree of React elements - Try print Body comp in console

## Diff algo - Finds the diff between previous and new virtual DOM  -  so user clicks -  data changed, it will calculate the difference and then actually update the DOM on every render cycle (imagine like a git diff) - 
- Virtual DOM concept existed long time back - React used it and built it's own diff algo - React can efficiently find diff between 2 Virtual DOM and update the actual DOM - It doesn't touch the DOM much - finding out diff between 2 HTMl DOM is difficult, between 2 object is easy - that is what virtual DOM is - JS object of React Elements

- After React 16 - It is known as React Fibre algo