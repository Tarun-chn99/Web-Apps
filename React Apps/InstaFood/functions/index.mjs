import { RES_LIST_URL } from "./utils/constants";

// Cloud Function to handle API proxy
exports.getRestaurantList = async (req, res) => {
    try {

        const lat = req.query.lat;
        const lng = req.query.lng;

        // Make the request to Swiggy's API using fetch
        const response = await fetch(RES_LIST_URL +'lat='+lat+'&lng='+lng+'&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
        });

        const data = await response.json();

        // Return the response from Swiggy's API to the client
        res.status(200).json(data);
        } catch (error) {
            console.error('Error fetching data from Swiggy:', error);
            res.status(500).send('Error fetching data');
        }
};
  