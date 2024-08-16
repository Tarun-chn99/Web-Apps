export const MENU_LOGO = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOS9EEOhmjbrqupspcZiT1URXVGR7EGcs6AQ&s';
export const YOUTUBE_LOGO = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJrpSqrv7Va8wkAJCoRTsHWDJyXJEe_ypDw&s';
export const SEARCH_LOGO = 'https://t3.ftcdn.net/jpg/05/99/84/86/360_F_599848646_MdK7wVDJQZygObyKEahVkOuhh0IGdTt3.jpg'
export const SVG_LINK = 'http://www.w3.org/2000/svg';

export let panelMenus = [
    {
        heading: "",
        links: ['Home','Shorts','Subscription','YouTube Music']
    },
    {
        heading: "You >",
        links: ['Your Channel','History','Playlists','Watch Later','Liked videos','Downloads','Your CLips']
    },
    {
        heading: "Explore",
        links: ['Trending','Shopping','Music','Movies','Live','Gaming','News','Sports','Podcasts']
    }
];

export const YOUTUBE_VIDEO_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=';
export const YOUTUBE_SUGGESTIONS_API = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';