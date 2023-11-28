import axios from "axios";

const UserEmailDataService = async (email) => {
  try {
    return axios.post(`http://backend-nlb-c78efa861b0e6cc0.elb.us-east-1.amazonaws.com:8080/notification`, null, {
      params: {
        email,
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

export default UserEmailDataService;
