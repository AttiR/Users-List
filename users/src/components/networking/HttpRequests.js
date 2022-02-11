
import axios from 'axios';

export const getUsersData = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
    return []
  }
};
