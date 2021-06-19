import axios from 'axios';
export const getCommentsByStuff = async (stuffId, token) => {
  try {
    const response = await axios.get(
      `https://travellove-cndd.herokuapp.com/comments/${stuffId}`,
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

export const postCommentsByStuff = async (userId, stuffId, token, content) => {
  try {
    const response = await axios.post(
      'https://travellove-cndd.herokuapp.com/comments',
      {
        userId: userId,
        ofWhatId: stuffId,
        content: content,
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
