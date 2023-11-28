import axios from "axios";

const AuthenticateUserDataService = (username, password) => {
  return axios
    .post(`http://public-app-nlb-992547abe09f1ef7.elb.us-east-1.amazonaws.com/authenticate`, {
      username,
      password,
    })
    .then((res) => {
      if (res != null) {
        console.log(res);
        return res;
      }
    })
    .catch((err) => {
      let error = "";

      if (err.response) {
        error += err.response;
      }
      return error;
    });
};

export default AuthenticateUserDataService;
