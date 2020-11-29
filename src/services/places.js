import axios from 'axios';

const bareUrl = 'https://travellove-cndd.herokuapp.com/places';
export const getPlaces = async (token) => {
  try {
    const response = await axios.get(bareUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getPlaceById = async (id, token) => {
  try {
    const response = await axios.get(`${bareUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
