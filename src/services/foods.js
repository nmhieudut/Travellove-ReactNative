import axios from 'axios';

export const getFoods = async (id, token) => {
  try {
    const response = await axios.get(
      `https://travellove-cndd.herokuapp.com/places/${id}/foods`,
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
export const getFoodDetail = async (id, foodId, token) => {
  try {
    const response = await axios.get(
      `https://travellove-cndd.herokuapp.com/places/${id}/foods/${foodId}`,
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

// export const checkIsLiked = async (userId, token) => {
//   try {
//     const response = await axios.get(
//       `travellove-cndd.herokuapp.com/favourite/foods/${userId}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       },
//       {
//         params: {
//           userId,
//         },
//       },
//     );
//     return response.data;
//   } catch (e) {
//     console.log(e);
//   }
// };

export const likedFood = async (foodId, users, token) => {
  try {
    const response = await axios.put(
      `https://travellove-cndd.herokuapp.com/foods/${foodId}`,
      {
        users: users,
      },
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
