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

export const getHotPlaces = async (token) => {
  try {
    const response = await axios.get(
      'https://travellove-cndd.herokuapp.com/hotplaces',
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
