import axios from "axios";

const URL = "http://localhost:3000/api/heroes";
const captains = console;

export function getHeroes() {
    return axios
        .get(URL)
        .then(res => res.data)
        .catch(error => captains.error(error));
}

export function updateHero(hero) {
    return axios
        .put(URL + '/' + hero.id, hero)
        .then(res => {
            captains.log('PUT status: ' + res.data);
            return res.data;
        })
        .catch(error => captains.error(error));
}