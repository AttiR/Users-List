import { useEffect, useState } from 'react';
import axios from 'axios';

export const useGetUsers = (url) => {
  const [request, setRequest] = useState([]);

  useEffect(() => {
    const getUsersData = async () => {
        try {
          const res = await axios.get(url);
          setRequest(res.data);
        } catch (error) {
          console.log(error);
        }
      };
      
      getUsersData();
   
  }, [url]);


  return request;
};
