import { LOCATION_INFO_API, LOCATION_SUGGESTION_API, RES_LIST_URL, RESTAURANT_MENU_URL } from './utils/constants.mjs';
import * as functions from 'firebase-functions';
import fetch from 'node-fetch';
import cors from 'cors';

const corsHandler = cors({origin: true});

// Firebase function to handle the request
export const fetchList = functions.https.onRequest(async (req, res) => {

    corsHandler(req, res, async () => {

        try {

            const lat = req.query.lat;
            const lng = req.query.lng;
            const URL = `${RES_LIST_URL}lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

            const headers = {
                'User-Agent': 'Mozilla/5.0',
                'Accept': 'application/json',
                'Referer': 'https://www.swiggy.com',
                'Accept-Language': 'en-US,en;q=0.9',
                'Origin': 'https://www.swiggy.com',
            };

            const response = await fetch(URL, {
                method: 'GET',
                headers: headers,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            res.status(200).json(data);

        } catch (error) {
            console.error('Error fetching data:', error.message);
            res.status(500).send('Error fetching data');
        }
    });
``
});


export const fetchRestaurantMenu = functions.https.onRequest(async (req, res) => {

    corsHandler(req, res, async () => {

        try {

            const id = req.query.restaurantId;
            const URL = RESTAURANT_MENU_URL + id;

            const headers = {
                'User-Agent': 'Mozilla/5.0',
                'Accept': 'application/json',
                'Referer': 'https://www.swiggy.com',
                'Accept-Language': 'en-US,en;q=0.9',
                'Origin': 'https://www.swiggy.com',
            };

            const response = await fetch(URL, {
                method: 'GET',
                headers: headers,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            res.status(200).json(data);

        } catch (error) {
            res.status(500).send('Error fetching Menu: '+ error.message);
        }
    });
});

export const fetchLocationSuggestions = functions.https.onRequest(async (req, res) => {

    corsHandler(req, res, async () => {

        try {

            const input = req.query.input;
            const URL = LOCATION_SUGGESTION_API + input + '&types=';

            const headers = {
                'User-Agent': 'Mozilla/5.0',
                'Accept': 'application/json',
                'Referer': 'https://www.swiggy.com',
                'Accept-Language': 'en-US,en;q=0.9',
                'Origin': 'https://www.swiggy.com',
            };

            const response = await fetch(URL, {
                method: 'GET',
                headers: headers,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            res.status(200).json(data);

        } catch (error) {
            res.status(500).send('Error fetching location suggestions: '+ error.message);
        }
    });
});

export const fetchLocationInfo = functions.https.onRequest(async (req, res) => {

    corsHandler(req, res, async () => {

        try {

            const place_id = req.query.place_id;
            const URL = LOCATION_INFO_API + place_id;

            const headers = {
                'User-Agent': 'Mozilla/5.0',
                'Accept': 'application/json',
                'Referer': 'https://www.swiggy.com',
                'Accept-Language': 'en-US,en;q=0.9',
                'Origin': 'https://www.swiggy.com',
            };

            const response = await fetch(URL, {
                method: 'GET',
                headers: headers,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            res.status(200).json(data);

        } catch (error) {
            res.status(500).send('Error fetching location info: '+ error.message);
        }
    });
});








