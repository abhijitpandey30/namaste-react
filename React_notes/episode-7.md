## useEffect - called after every time comp rendered. But the dependency array changes it's behavior
- # If no dependency array, useEffect is called on every comp rendered
- # If empty array is passed as dependency, it is called only once on first render
- # If array has a dependency array like btnNameReact - useEffect is called every time btnNameReact changes

## Always create useState only inside the comp function, and always on top
- # Never create useState inside if else, for loop, or inside another function

## Routing 
- npm in react-router-dom
- createBrowserRouter, RouterProvider - from it, creat route config - and provide that config to App - render app  not directly but by RouterConfig
- we have different kind of routers - but createBrowserRouter is default
- useRouteError - use this hook for more error
- If we want header to stay intact when we go to about, contact page, thrn we use children route
- Never use anchor tag to switch routes - it will do whole page refresh - instead use Link component

## Two sides of routing in web apps
- Server side routing - network call  for html page from server, full page refresh
- Client side routing - no network call, just oulet part is refreshed

# Every restaurant page has dynamic routing in swiggy
- Link behind the scenes wraps around a anchor tag