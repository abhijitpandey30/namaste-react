NamasteFood

Build mock UI, Wireframe before starting code

Components
## Header
-   LOGO
-   Nav Item
## Body
-   Search
-   Restaurant Container
    -  Restaurant card
        - Name of res, start rating, cuisine
  
## Footer
- Copyright
- Links
- Address
- Contact


Inline style in React is giving as style object
const styleCard = {
  backgroundColor: "#f0f0f0"
}
const RestaurantCard = ()=>(
  <div className="res-card" style={styleCard}>
    <h3>Delhi Kitchen</h3>
  </div>
)

props - pass data to comp dynamially - normal arguments to a function

- What react does, React will wrap all of props as object pass it to the component function - u can destructure on the fly

## Swiggy uses Config driven UI - It is an industry standard - our UI is driven by UI - controlling UI by data/config - Carousel will have diff data for Mumbai, Delhi, or not even have one -  red color background in Mumbai, green in Delhi, just send color in data

# what is need of key - ? if new item came, if we don't provide - it will re render whole list, because it don't know where to insert it, but with unique key, it will know. Must for performance

- NEVER use index for keys - Index as a key is an anti pattern

SWIGGY API - https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5989691&lng=73.7952368&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING