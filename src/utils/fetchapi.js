import axios from 'axios';
// sw, ne
export const fetchUrl = async (optiontype,sw,ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${optiontype}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });
    return data
    // ?.filter((place) => (place.name )); 
    // && place.num_reviews > 0
  }
  catch (err) {
    console.log(err.message)
  }
};

