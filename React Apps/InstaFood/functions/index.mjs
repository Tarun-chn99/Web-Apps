import { RES_LIST_URL } from './utils/constants.mjs';
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.get('/getRestaurantList', async (req, res) => {

        try {

            const lat = req.query.lat;
            const lng = req.query.lng;
            const URL = RES_LIST_URL +'lat='+lat+'&lng='+lng+'&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
            const headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept': 'application/json',
                'Referer': 'https://www.swiggy.com',
                'Accept-Language': 'en-US,en;q=0.9',
                'Origin': 'https://www.swiggy.com'
            };

            const response = await fetch(URL, {
                method: 'GET',
                headers: headers
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            // Return the response from Swiggy's API to the client
            res.status(200).json(data);
        } 
        catch (error) {
                console.error('Error fetching data from Swiggy:', error.message);
                res.status(500).send('Error fetching data');
            }
    }
);

app.listen(port,()=>{
    console.log("App is listening on port : ",port);
});
  
















