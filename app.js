import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://dynamic.brandcrowd.com/asset/logo/7f982a19-779d-4dd3-b533-7a9f66474000/logo-search-grid-1x?logoTemplateVersion=1&v=637810055012670000"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const resList = [
    {
    info: {
    id: "23705",
    name: "McDonald's",
    cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
    locality: "Pimple Saudagar",
    areaName: "Pimple Saudagar",
    costForTwo: "₹400 for two",
    cuisines: [
    "Burgers",
    "Beverages",
    "Cafe",
    "Desserts"
    ],
    avgRating: 4.3,
    feeDetails: {
    restaurantId: "23705",
    fees: [
    {
    name: "BASE_DISTANCE",
    fee: 3200
    },
    {
    name: "BASE_TIME"
    },
    {
    name: "ANCILLARY_SURGE_FEE"
    }
    ],
    totalFee: 3200
    },
    parentId: "630",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
    deliveryTime: 13,
    lastMileTravel: 0.9,
    serviceability: "SERVICEABLE",
    slaString: "13 mins",
    lastMileTravelString: "0.9 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2023-09-01 23:45:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "10% OFF",
    subHeader: "ABOVE ₹999",
    discountTag: "FLAT DEAL",
    discountCalloutInfo: {
    message: "Free Delivery",
    logoCtx: {
    logo: "v1655895371/free_delivery_logo_hqipbo.png"
    }
    }
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { }
    },
    analytics: {
    context: "seo-data-bdd99341-25a4-457d-8a42-dfd0d5baaeca"
    },
    cta: {
    link: "https://www.swiggy.com/restaurants/mcdonalds-pimple-saudagar-pune-23705",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    info: {
    id: "22152",
    name: "Maha Khavaiyye (Pimple Saudagar)",
    cloudinaryImageId: "ndovabledfiwkwa0jnof",
    locality: "Kunal Icon Road",
    areaName: "Pimple Saudagar",
    costForTwo: "₹250 for two",
    cuisines: [
    "Maharashtrian"
    ],
    avgRating: 4.1,
    veg: true,
    feeDetails: {
    restaurantId: "22152",
    fees: [
    {
    name: "BASE_DISTANCE",
    fee: 3200
    },
    {
    name: "BASE_TIME"
    },
    {
    name: "ANCILLARY_SURGE_FEE"
    }
    ],
    totalFee: 3200
    },
    parentId: "3299",
    avgRatingString: "4.1",
    totalRatingsString: "10K+",
    sla: {
    deliveryTime: 24,
    lastMileTravel: 1.1,
    serviceability: "SERVICEABLE",
    slaString: "24 mins",
    lastMileTravelString: "1.1 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2023-09-01 22:00:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "₹100 OFF",
    subHeader: "ABOVE ₹499",
    discountTag: "FLAT DEAL",
    discountCalloutInfo: {
    message: "Free Delivery",
    logoCtx: {
    logo: "v1655895371/free_delivery_logo_hqipbo.png"
    }
    }
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { }
    },
    analytics: {
    context: "seo-data-bdd99341-25a4-457d-8a42-dfd0d5baaeca"
    },
    cta: {
    link: "https://www.swiggy.com/restaurants/maha-khavaiyye-pimple-saudagar-kunal-icon-road-pimple-saudagar-pune-22152",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    info: {
    id: "429603",
    name: "Nakshatra Pure Veg",
    cloudinaryImageId: "eldyxkh4fkqarj7z38a9",
    locality: "Ganesh Park",
    areaName: "Pimple Saudagar",
    costForTwo: "₹400 for two",
    cuisines: [
    "Indian"
    ],
    avgRating: 4.1,
    veg: true,
    feeDetails: {
    restaurantId: "429603",
    fees: [
    {
    name: "BASE_DISTANCE",
    fee: 3200
    },
    {
    name: "BASE_TIME"
    },
    {
    name: "ANCILLARY_SURGE_FEE"
    }
    ],
    totalFee: 3200
    },
    parentId: "17122",
    avgRatingString: "4.1",
    totalRatingsString: "500+",
    sla: {
    deliveryTime: 24,
    lastMileTravel: 1.1,
    serviceability: "SERVICEABLE",
    slaString: "24 mins",
    lastMileTravelString: "1.1 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2023-09-01 23:00:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    discountCalloutInfo: {
    message: "Free Delivery",
    logoCtx: {
    logo: "v1655895371/free_delivery_logo_hqipbo.png"
    }
    }
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { }
    },
    analytics: {
    context: "seo-data-bdd99341-25a4-457d-8a42-dfd0d5baaeca"
    },
    cta: {
    link: "https://www.swiggy.com/restaurants/nakshatra-pure-veg-ganesh-park-pimple-saudagar-pune-429603",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    info: {
    id: "24434",
    name: "Domino's Pizza",
    cloudinaryImageId: "dk5nnh5w4jdqdrmvwgji",
    locality: "Rahatani Road",
    areaName: "Pimple Saudagar",
    costForTwo: "₹400 for two",
    cuisines: [
    "Pizzas",
    "Italian",
    "Pastas",
    "Desserts"
    ],
    avgRating: 4.2,
    feeDetails: {
    restaurantId: "24434",
    fees: [
    {
    name: "BASE_DISTANCE",
    fee: 3200
    },
    {
    name: "BASE_TIME"
    },
    {
    name: "ANCILLARY_SURGE_FEE"
    }
    ],
    totalFee: 3200
    },
    parentId: "2456",
    avgRatingString: "4.2",
    totalRatingsString: "10K+",
    sla: {
    deliveryTime: 25,
    serviceability: "SERVICEABLE",
    slaString: "25 mins",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2023-09-02 02:59:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "₹100 OFF",
    subHeader: "ABOVE ₹999",
    discountTag: "FLAT DEAL"
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { }
    },
    analytics: {
    context: "seo-data-bdd99341-25a4-457d-8a42-dfd0d5baaeca"
    },
    cta: {
    link: "https://www.swiggy.com/restaurants/dominos-pizza-rahatani-road-pimple-saudagar-pune-24434",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    info: {
    id: "538367",
    name: "Great Indian Khichdi by EatFit",
    cloudinaryImageId: "0da26e86f4490626665f0b1d8810906e",
    locality: "Bhat Nagar",
    areaName: "Pimpri",
    costForTwo: "₹200 for two",
    cuisines: [
    "Indian",
    "Home Food",
    "Healthy Food",
    "Snacks"
    ],
    avgRating: 4.1,
    veg: true,
    feeDetails: {
    restaurantId: "538367",
    fees: [
    {
    name: "BASE_DISTANCE",
    fee: 3800
    },
    {
    name: "BASE_TIME"
    },
    {
    name: "ANCILLARY_SURGE_FEE"
    }
    ],
    totalFee: 3800
    },
    parentId: "319582",
    avgRatingString: "4.1",
    totalRatingsString: "500+",
    sla: {
    deliveryTime: 21,
    lastMileTravel: 3.9,
    serviceability: "SERVICEABLE",
    slaString: "21 mins",
    lastMileTravelString: "3.9 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2023-09-01 23:00:00",
    opened: true
    },
    badges: {
    textExtendedBadges: [
    {
    iconId: "guiltfree/GF_Logo_android_3x",
    shortDescription: "options available",
    fontColor: "#7E808C"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: {
    badgeObject: [
    {
    attributes: {
    description: "",
    fontColor: "#7E808C",
    iconId: "guiltfree/GF_Logo_android_3x",
    shortDescription: "options available"
    }
    }
    ]
    }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "40% OFF",
    subHeader: "UPTO ₹100",
    discountCalloutInfo: {
    message: "Free Delivery",
    logoCtx: {
    logo: "v1655895371/free_delivery_logo_hqipbo.png"
    }
    }
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { }
    },
    analytics: {
    context: "seo-data-bdd99341-25a4-457d-8a42-dfd0d5baaeca"
    },
    cta: {
    link: "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-bhat-nagar-pimpri-pune-538367",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    info: {
    id: "688720",
    name: "Big Bowl",
    cloudinaryImageId: "546730f50d0c2b6e9a1446022a08ed21",
    locality: "Rahatan",
    areaName: "Pimple Saudagar",
    costForTwo: "₹250 for two",
    cuisines: [
    "North Indian",
    "Chinese",
    "Tibetan",
    "Desserts"
    ],
    avgRating: 3.5,
    feeDetails: {
    restaurantId: "688720",
    fees: [
    {
    name: "BASE_DISTANCE",
    fee: 3200
    },
    {
    name: "BASE_TIME"
    },
    {
    name: "ANCILLARY_SURGE_FEE"
    }
    ],
    totalFee: 3200
    },
    parentId: "434792",
    avgRatingString: "3.5",
    totalRatingsString: "100+",
    sla: {
    deliveryTime: 17,
    lastMileTravel: 0.9,
    serviceability: "SERVICEABLE",
    slaString: "17 mins",
    lastMileTravelString: "0.9 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2023-09-02 00:00:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "60% OFF",
    subHeader: "UPTO ₹120",
    discountCalloutInfo: {
    message: "Free Delivery",
    logoCtx: {
    logo: "v1655895371/free_delivery_logo_hqipbo.png"
    }
    }
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    isNewlyOnboarded: true,
    restaurantOfferPresentationInfo: { }
    },
    analytics: {
    context: "seo-data-bdd99341-25a4-457d-8a42-dfd0d5baaeca"
    },
    cta: {
    link: "https://www.swiggy.com/restaurants/big-bowl-rahatan-pimple-saudagar-pune-688720",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    info: {
    id: "16061",
    name: "KFC",
    cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
    locality: "Spot 18 Mall",
    areaName: "Pimple Saudagar",
    costForTwo: "₹400 for two",
    cuisines: [
    "Burgers",
    "Biryani",
    "American",
    "Snacks",
    "Fast Food"
    ],
    avgRating: 4,
    feeDetails: {
    restaurantId: "16061",
    fees: [
    {
    name: "BASE_DISTANCE",
    fee: 3200
    },
    {
    name: "BASE_TIME"
    },
    {
    name: "ANCILLARY_SURGE_FEE"
    }
    ],
    totalFee: 3200
    },
    parentId: "547",
    avgRatingString: "4.0",
    totalRatingsString: "10K+",
    sla: {
    deliveryTime: 15,
    lastMileTravel: 1.2,
    serviceability: "SERVICEABLE",
    slaString: "15 mins",
    lastMileTravelString: "1.2 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2023-09-02 01:00:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "40% OFF",
    subHeader: "UPTO ₹80",
    discountCalloutInfo: {
    message: "Free Delivery",
    logoCtx: {
    logo: "v1655895371/free_delivery_logo_hqipbo.png"
    }
    }
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { }
    },
    analytics: {
    context: "seo-data-bdd99341-25a4-457d-8a42-dfd0d5baaeca"
    },
    cta: {
    link: "https://www.swiggy.com/restaurants/kfc-spot-18-mall-pimple-saudagar-pune-16061",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    info: {
    id: "233324",
    name: "Burger King",
    cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    locality: "Rahatani Road",
    areaName: "Rahatani",
    costForTwo: "₹350 for two",
    cuisines: [
    "Burgers",
    "American"
    ],
    avgRating: 4,
    feeDetails: {
    restaurantId: "233324",
    fees: [
    {
    name: "BASE_DISTANCE",
    fee: 3200
    },
    {
    name: "BASE_TIME"
    },
    {
    name: "ANCILLARY_SURGE_FEE"
    }
    ],
    totalFee: 3200
    },
    parentId: "166",
    avgRatingString: "4.0",
    totalRatingsString: "10K+",
    sla: {
    deliveryTime: 16,
    lastMileTravel: 0.9,
    serviceability: "SERVICEABLE",
    slaString: "16 mins",
    lastMileTravelString: "0.9 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2023-09-02 03:50:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "EVERY ITEM",
    subHeader: "@ ₹129",
    discountCalloutInfo: {
    message: "Free Delivery",
    logoCtx: {
    logo: "v1655895371/free_delivery_logo_hqipbo.png"
    }
    }
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { }
    },
    analytics: {
    context: "seo-data-bdd99341-25a4-457d-8a42-dfd0d5baaeca"
    },
    cta: {
    link: "https://www.swiggy.com/restaurants/burger-king-road-rahatani-pune-233324",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    info: {
    id: "19902",
    name: "Radha Krishna Pure Veg(Hinjewadi)",
    cloudinaryImageId: "l7va77zuwafqa20wn37h",
    locality: "Hinjewadi",
    areaName: "Hinjawadi",
    costForTwo: "₹300 for two",
    cuisines: [
    "North Indian",
    "Chinese",
    "South Indian",
    "Punjabi",
    "Andhra",
    "Lucknowi",
    "Hyderabadi",
    "Indian",
    "Pan-Asian",
    "Biryani",
    "Kebabs",
    "Home Food",
    "Bengali",
    "Mangalorean"
    ],
    avgRating: 4,
    veg: true,
    feeDetails: {
    restaurantId: "19902",
    fees: [
    {
    name: "BASE_DISTANCE",
    fee: 4400
    },
    {
    name: "BASE_TIME"
    },
    {
    name: "ANCILLARY_SURGE_FEE"
    }
    ],
    totalFee: 4400
    },
    parentId: "164164",
    avgRatingString: "4.0",
    totalRatingsString: "10K+",
    sla: {
    deliveryTime: 24,
    lastMileTravel: 4.9,
    serviceability: "SERVICEABLE",
    slaString: "24 mins",
    lastMileTravelString: "4.9 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2023-09-02 00:00:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "60% OFF",
    subHeader: "UPTO ₹120",
    discountCalloutInfo: {
    message: "Free Delivery",
    logoCtx: {
    logo: "v1655895371/free_delivery_logo_hqipbo.png"
    }
    }
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { }
    },
    analytics: {
    context: "seo-data-bdd99341-25a4-457d-8a42-dfd0d5baaeca"
    },
    cta: {
    link: "https://www.swiggy.com/restaurants/radha-krishna-pure-veg-hinjewadi-hinjewadi-hinjawadi-pune-19902",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
  ]

const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = (props) => {
  const { resData:{info:{name, cuisines, avgRating, sla:{slaString}, cloudinaryImageId}} } = props;
  // console.log(resData);
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt="res-img"
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      {resList.map((res)=> <RestaurantCard key={res.info.id} resData={res} />)}
    </div>
  </div>
);



const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

root.render(<AppLayout />);
