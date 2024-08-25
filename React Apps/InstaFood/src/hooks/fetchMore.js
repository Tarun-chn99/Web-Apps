import { useEffect } from "react"

const fetchMore = () => {

    const payload = {
        filters: {},
                lat: 
        28.3370271,
        lng
        : 
        79.40708560000002,
        nextOffset
        : 
        "CJhlELQ4KIDgyKWK6YfKKjCnEzgC",
        page_type
        : 
        "DESKTOP_WEB_LISTING",
        seoParams
        : 
        {seoUrl: "https://www.swiggy.com/", pageType: "FOOD_HOMEPAGE", apiName: "FoodHomePage"},
        widgetOffset
        : 
        {NewListingView_category_bar_chicletranking_TwoRows
            : 
            "",
            NewListingView_category_bar_chicletranking_TwoRows_Rendition
            : 
            "",
            Restaurant_Group_WebView_SEO_PB_Theme
            : 
            "",
            collectionV5RestaurantListWidget_SimRestoRelevance_food_seo
            : 
            "9",
            inlineFacetFilter
            : 
            "",
            restaurantCountWidget
            : 
            ""},
        _csrf
        : "MlwS2XPqzvQY-7ycpgNoX048kvQz88LALoWGJO04"
    }

    const headers = {
        "accept": "*/*",
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': "en-US,en;q=0.9",
        'Content-type': "application/json",
        'cookie': '_gcl_au=1.1.637174358.1722964667; _gid=GA1.2.711615934.1724495248; __SW=ylQdOPa2ZESnLNOTyQJ89EVSoLWOCKgY; _guest_tid=04e85e00-fccc-4a5b-b3aa-1bde46f5aa7a; _device_id=cc9fc668-276a-bb2d-73f3-4a80764070e3; _sid=fqbbc9eb-a0e4-4bac-a57e-3df951af9124; fontsLoaded=1; _ga_4BQKMMC7Y9=GS1.2.1724566545.3.1.1724566567.38.0.0; _ga_34JYJ0BCRN=GS1.1.1724566524.6.1.1724566584.0.0.0; _ga=GA1.2.1827701656.1722964668; userLocation={%22address%22:%22Subhash%20Nagar%2C%20Subhash%20Nagar%20Colony%2C%20Bareilly%2C%20Uttar%20Pradesh%2C%20India%22%2C%22area%22:%22%22%2C%22deliveryLocation%22:%22Subhash%20Nagar%20Colony%22%2C%22lat%22:28.3370271%2C%22lng%22:79.40708560000002}; dadl=true',
        "origin": 'https://www.swiggy.com',
        "referer": 'https://www.swiggy.com/',
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': "Windows",
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
    };
    
    
    const getUpdate = async () => {

        await fetch('https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/update',{
            method:'POST',
            headers: headers,
            body: JSON.stringify(payload)
        }).then(response => {
            if(response.ok) console.log(response);
            else    console.log(error);
        }).catch(error=> console.log(error))
    }

    // useEffect(()=>{
        getUpdate();
    // },[]);

}

export default fetchMore;