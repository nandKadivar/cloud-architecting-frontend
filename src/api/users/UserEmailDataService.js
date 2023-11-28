import axios from "axios";

const UserEmailDataService = async (email) => {
  try {
    return axios.post(`http://public-app-nlb-992547abe09f1ef7.elb.us-east-1.amazonaws.com/notification`, null, {
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
