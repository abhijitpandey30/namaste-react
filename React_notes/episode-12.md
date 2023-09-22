# Redux works on data layer - not mandatory
- 3rd party, not part of React
- Zustand - also used for state management
- a standard way to update data
- makes debugging our apps easier
- Redux toolkit & React-redux - a new way of writing Redux toolkit - not vanilla redux (https://redux-toolkit.js.org/)

# Redux Store - A big JS object stored at a central place
- ok to have a large JS object
- we can slices to the store - logical partitions - cart slice, user slice to store loggedInuser info, theme slice
- we can't directly upadate slice - dispatch action - it will call a function - that function will modify the cart
- this fn is a Reducer - which upates the slice of the redux store
- Read data - selector - will update our react component - this phenomenon is known as "subscribe to our store"- header comp is subscribed to the the store using a selector

# Redux toolkit
- Install libs - @reduxjs/toolkit and react-redux,
- Build our store - using @reduxjs/toolkit - configure store
- Connect our store to our app => Provide store to react app - use react-redux (bridge=>provider)
- Create a cart slice (cartSlice)
- Dispatch action   
-  Selector - is nothing but a hook inside React - useSelector - comes from react-redux lib

# -app store will have it's ONE big reducer - combination of small reducers of different slices

# ALWAYS subscribe to the right portion of the store - imp for performance
- const store = useSelector((store)=> store); => this will subscribe to whole store!, anythimg changes it will re calculate
- const cartItems = store.cart.items

- # Vanilla redux - don't mutate state

- Read about RTK query - make API call - https://redux-toolkit.js.org/rtk-query/overview