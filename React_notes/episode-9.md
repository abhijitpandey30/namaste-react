## Single Responsibility Principle
- Each comp should have a single responsisbilty - more modular, more testable - bugs are caught easily
- more reusable, maintable, testatble
- make sure comp is as light as possible

## Custom hooks
- Hooks are utility, simple JS func - use hooks to make our code modular, readable
- just like useParams -it's just giving me the url params - how it reading it from the url, the implementaion, that is hidden
- similarly RestaurantMenu can use hook to fetch data - it should only be concerned about displaying data - single responsibilty
- create separate files for separate hooks

- state variable inside hook - a local varibale inside the custom hook
- after extracting fetch logic to a hook - I have made my code more testable - so If I want to just test the fetch logic  I know which component to look, similarly RestaurantMenu is only responisble for displaying data

- how to approah auilding  custom hook - finalize the contract - what is input and what should be output.

# https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event

- Recommended to use hook which starts with "use" - 


# Chunking, Code Splitting, Dynamic Bundling, Lazy Loading, on Demand Loading, dyamic import - all same thing
- Bindler - combine all your files into one - everything happens in one js file - for a big scale app - it will be a big JS file - need to optimise - so many components - bundling  needed? - yes coz browser withh 100 network calls to fetch the files - 1  file? - too big - so need to break into smaller chunks - 

- How to think - we should have logical separation of features - a bundle should have enough code for a feature
- ex MakeMyTrip - a bundle of all comps of flights , hotels can have 1 bundle

- lazy is a function given to us by React as a named export
- On Demad loading - it is async, taks time, while react tries to render it fast - sync - we get error - "React Router caught the following error during render Error: A component suspended while responding to synchronous input"

- for this, we use Suspense - a component which React gives us - wrap our component inside Suspense -  we can also show fallback html until it loads

- This prevents app is bloating
