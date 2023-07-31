import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"a97d04a29a7a40f1bfb4ccbb371ae75e"
    }
})