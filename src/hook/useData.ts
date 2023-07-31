import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }

const useData = <T>(endoint:string,requestConfig?:AxiosRequestConfig,deps?:any[]) => {
    const [data, setdata] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading , setLoading]=useState(true)
  
    useEffect(() => {
      const controller=new AbortController();

      // setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endoint,{signal:controller.signal,...requestConfig})
        .then((res) => {setdata(res.data.results);
          setLoading(false)})
        .catch((err) => {if(err instanceof CanceledError) return
             setError(err.message)});
             setLoading(false)

        return ()=>controller.abort()
    },deps?[...deps]:[]);

  return {data,error,isLoading};
}

export default useData