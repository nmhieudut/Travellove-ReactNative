import axios from 'axios';

const getBestPlaces = async () => {
  try {
    const response = await axios.get(
      'https://travellove-cndd.herokuapp.com/bestplaces',
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
export default {getBestPlaces};
