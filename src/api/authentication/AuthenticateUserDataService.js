import axios from "axios";

const AuthenticateUserDataService = (username, password) => {
  return axios
    .post(`http://backend-nlb-c78efa861b0e6cc0.elb.us-east-1.amazonaws.com:8080/authenticate`, {
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
