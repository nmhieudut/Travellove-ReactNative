import axios from 'axios';

function login(email, password) {
  const userConfig = {
    email: email,
    password: password,
  };
  return new Promise((resolve, reject) => {
    axios
      .post('https://travellove-cndd.herokuapp.com/users/login', userConfig)
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
  login,
};
