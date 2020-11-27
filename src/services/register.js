import axios from 'axios';

function register(values) {
  console.log('register:', values);
  const userConfig = {
    email: values.email,
    password: values.password,
    name: values.name,
    gender: values.gender,
    birthday: values.birthday,
  };
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
  register,
};
