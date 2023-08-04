import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }

export default axios.create({
    baseURL:"https://api.rawg.io/apim",
    params:{
        key:"a97d04a29a7a40f1bfb4ccbb371ae75e"
    }
})