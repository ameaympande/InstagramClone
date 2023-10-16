import axios from "axios";

const GetAllUserAPI = async () => {
  try {
    const url = "http://localhost:3000/users";

    const response = await axios.get(url);

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

export default GetAllUserAPI;
