import { useEffect, useState } from 'react';
import axios from 'axios';

export const useAxiosGet = (url) => {
  const [request, setRequest] = useState([]);

  

  useEffect(() => {
    const getBreweryData = async () => {
        try {
          const res = await axios.get(url);
          setRequest(res.data);
        } catch (error) {
          console.log(error);
        }
      };
      getBreweryData();
   
  }, [url]);


  return request;
};
