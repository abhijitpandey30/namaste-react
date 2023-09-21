# Higher order components
- A normal JS funcion that takes a component, it enhances that component and returns that component
- Take a res card - add promoted label and return it
- they are pure functions - don't change anything in original component, that's why pass ...props

# Data and UI layer
- Once we have opened one accordian , it should close all other
- install react developer tools - it shows all comp, it's props if youn click on it - basically the VIRTUAL DOM!


- state needs to be lifted up - currenty each compo is mamanging it's state, no aware of other comp, show and hide to parent comp

- Restaurant category - should should handle show/hide item itself, - it should take an input/props - whether it should show or hide comp or not
- Restaurant menu should manage Restaurant category
- Restaurant category is an uncontrolled comp - it had it's own state, now we lifted the state up - it is an controlled component - controlled by it's parent

- all the res category will get it's own setShowIndex - 
- https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example

# Props drilling
- Big hierarchy - deep nested comp - React has only one way data stream - parent to children - so we have pass data from resmenu to itemList - resMenu - resCategory- itemList
- Ok for 2-3 levels - but for too many levels -  we have REACT context

- Locked In usr, theme of app - we need this info in global context -  this will avoid props drilling
- createContext -useContext
- <UserContext.Provider TO SET NEW VALUE - wrap around any comp tree, it will use that value inside that tree

- Update user context - change username val from input box in body - pass setState in UserContext - everytime is called - comp is rendered.

- UserContext is a global space - we tied it to a state - userName inside App.js - so everytime state variable is updated, context will update

- For small apps - context is useful, it's provided by react, not 3rd party like redux, can also use for big apps but Redux is scalable  
