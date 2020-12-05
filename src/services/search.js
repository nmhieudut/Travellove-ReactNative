import axios from 'axios';

function search(values) {
  console.log('register:', values);
  return new Promise((resolve, reject) => {
    axios
      .post('https://travellove-cndd.herokuapp.com/users/register', userConfig)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}
export default {
  search,
};
