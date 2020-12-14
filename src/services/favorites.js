import axios from 'axios';
export const getFavorites = async (userId, token) => {
  try {
    const response = await axios.get(
      `https://travellove-cndd.herokuapp.com/favourite/${userId}`,
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
