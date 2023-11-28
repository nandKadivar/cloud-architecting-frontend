// import axios from "../customAxiosConfig/CustomAxiosConfig";
import axios from "axios";

const LoginService = (username) => {
  try {
    return axios.post(`http://public-app-nlb-992547abe09f1ef7.elb.us-east-1.amazonaws.com/login`, null, {
      params: {
        username,
      },
    });
  } catch (err) {
    let error = "";
    if (err.response) {
      error += err.response;
    }
    return error;
  }
};

export default LoginService;
