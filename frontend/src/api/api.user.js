import axios from "axios";

const baseURL = 'http://localhost:5000';

export async function getUsers() {
    try {
        const { data } = await axios.get(`${baseURL}/users`);
        return data;
    } catch (error) {
        console.log(error);
    }
}