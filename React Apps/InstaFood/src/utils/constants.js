export const LOGO_URL = "https://static.vecteezy.com/system/resources/thumbnails/007/500/121/small_2x/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg";
export const RES_IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const RES_LIST_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3670355&lng=79.4304381&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
export const RES_LIST_UPDATE_URL = "https://www.swiggy.com/api/seo/getListing?lat=28.367089147492962&lng=79.43669938061011";
export const RESTAURANT_MENU_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.3670355&lng=79.4304381&restaurantId=";

export const RESLIST_UPDATE_REQ_BODY = {
    filters: {},
    lat: 28.3670355,
    lng: 79.4304381,
    nextOffset: "CJhlELQ4KIDImKyUvMuQBjCnEzgD",
    page_type: "DESKTOP_WEB_LISTING",
    seoParams: {
        apiName: "FoodHomePage",
        pageType: "FOOD_HOMEPAGE",
        seoUrl: "https://www.swiggy.com/",
    },
    widgetOffset: {

        NewListingView_category_bar_chicletranking_TwoRows: "",
        NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
        Restaurant_Group_WebView_SEO_PB_Theme: "",
        collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "24",
        inlineFacetFilter: "",
        restaurantCountWidget: "",
    },
        _csrf: "H6QNQpQOuHQP-3TjeEU7jHe-0Vs3eaDOWvq6PGe8"
}
export const RESLIST_UPDATE_CONFIG = {
    ":authority":"www.swiggy.com",
    ":method":"POST",
    ":path":"/dapi/restaurants/list/update",
    ":scheme":"https",
    "__fetch_req__":"true",
    "Accept":'*/*',
    "Accept-Encoding":"gzip, deflate, br, zstd",
    "Accept-Language":"en-US,en;q=0.9",
    "Content-Length":577,
    "Content-Type":"application/json",
    "Cookie":
    "__SW=EPb9i6UelL0GLUkunHWVtoYZkARARr6R; _guest_tid=b2b98a93-2edc-4dca-ad4a-e402eccecf4b; _device_id=df51491d-d10c-701f-5f5a-1a531f61c266; _sid=evt24209-6627-4c10-833b-9687d0aa6cf0; fontsLoaded=1; _gcl_au=1.1.1540493225.1720611140; _gid=GA1.2.400127098.1720611141; dadl=true; userLocation={%22lat%22:28.3670355%2C%22lng%22:79.4304381%2C%22address%22:%22Bareilly%2C%20Uttar%20Pradesh%2C%20India%22%2C%22area%22:%22%22%2C%22showUserDefaultAddressHint%22:false}; _gat_0=1; _ga_34JYJ0BCRN=GS1.1.1720611140.1.1.1720612956.0.0.0; _ga=GA1.1.1371534890.1720611140",
    "Origin":"https://www.swiggy.com",
    "Priority":"u=1, i",
    "Referer":"https://www.swiggy.com/",
    "Sec-Ch-Ua":'"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    "Sec-Ch-Ua-Mobile":"?0",
    "Sec-Ch-Ua-Platform":"Windows",
    "Sec-Fetch-Dest":"empty",
    "Sec-Fetch-Mode":"cors",
    "Sec-Fetch-Site":"same-origin",
    "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
}
