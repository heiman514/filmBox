import axios from "axios";

export default axios.create({
    baseURL:'http://pcpdfilm.starsknights.com:18888',
    headers:{
        'Content-type':'application/json'
    }
})

