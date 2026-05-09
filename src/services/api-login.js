import axios from "axios";

const API = "https://dummyjson.com/auth/login";

export const ApiLogin = async (username,password) => {

    const response = await axios.post(API,{
        username,
        password
    });

    return response.data;
}