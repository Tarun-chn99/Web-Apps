
async function x(){

    const res = await fetch("https://thingproxy.freeboard.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3275&lng=78.0325&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const data = res.json();

    console.log(data);


}

x();