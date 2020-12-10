import axios from 'axios';
export const getCommentsByFood = async (foodId, token) => {
  try {
    const response = await axios.get(
      `https://travellove-cndd.herokuapp.com/foods/${foodId}`,
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
