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
        'X-RapidAPI-Key': '3e46f89d7emsh0caf8e683397ffdp1de5b5jsn30e505a30cc7',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });
    return data?.filter((place) => (place.name )  && place.num_reviews > 0)
  }
  catch (err) {
    console.log(err.message)
  }
};

