import axios from "axios";

const URL = "http://localhost:8080/heroes.json";

export default function getHeroes() {
    return axios
        .get(URL)
        .then(res => res.data)
        .catch(error => console.log(error));
}