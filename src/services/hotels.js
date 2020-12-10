import axios from 'axios';

export const getHotels = async (id, token) => {
  try {
    const response = await axios.get(
      `https://travellove-cndd.herokuapp.com/places/${id}/hotels`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
export const getHotelDetail = async (id, hotelId, token) => {
  try {
    const response = await axios.get(
      `https://travellove-cndd.herokuapp.com/places/${id}/hotplaces/${hotelId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
