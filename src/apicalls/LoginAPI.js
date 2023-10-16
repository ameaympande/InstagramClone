import axios from "axios";

const LoginAPI = async (username, password) => {
  try {
    const body = {
      username: username,
      password: password,
    };

    const url = "http://localhost:3000/login";

    const response = await axios.post(url, body);

    if (response.status === 200) {
      return response.data;
    } else if (response.status === 400) {
      console.error("Bad Request:", response.message);
    } else if (response.status === 500) {
      console.error("Internal Server Error:", response.message);
    } else {
      console.warn("Unexpected response:", response.status, response.data);
    }
  } catch (error) {
    console.error("Request failed:", error.message);
  }
};

export default LoginAPI;
