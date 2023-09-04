## Monolith vs Microservices
# Monolith - 
    API, UI, DB , SMS - all features in 1 project
# Microservices - Different service for each - all combine forma big app - separation of concerns - single responsibility project - 
- how these service connect - they are deployed separately -  diff services to write diff services - React, JAVA, GoLang - find the feat
- all services run on different ports -  all these ports can be mapped on to the same domain name

Better UX exp - Render Basic UI first, then call API to render the comp with data, this way user don't have wait before something appears on the screen - useEffect heps in that - 

Use Effect - normal js func, with 2 arguments - first a callback fn, and other a dependency array
- callback - will be called executed after component render

# Fetch is Browser API, part of JS engine
- CORS policy - calling swiggy.com from localhost has been blocked by CORS policy - our browser is blocking us to call Swiggy's API from localhost, from one orgi to another origin

Learn more - search CORS Akshay Saini

- Shimmer UI - We can show loadier until data comes.. but it is nt good practice these days - so we have these concept - UI which resembles the UI - a version of the UI that doesn't contain actual content, but instead mimics the layout and shapes of the content that will eventually appear. -  so cards show loading the card instead of an one loader -  it is there in Swiggy, Facebook

- Login - Logout - local JS variable will change on click but not update UI on click (React has no way tracking when it changes), that is why state variables are important = > State varibale will only change when u call the setter method - re render happenns
- The whole react comp was re rendered, not just the button
- and since the whole comp re renders - we get new ref of const variable  - this is why it works - we are not resetting the original variable

- If we just set value={statevariable}, and set value to "", and we if type, nothing will show, as it is bound o state variable -  we need to setter it as well onChange - after that, on every keypress, comp is re rendered- every time a state varibale update, React triggers the Reconcialation cycle - Whole comp is re rendered, but only the changes part of DOM is updated