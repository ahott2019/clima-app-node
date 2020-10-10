const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${ encodeUrl }`,
        headers: { 'X-RapidAPI-Key': 'e62a009d51msh9a892960ec00c89p1c27c4jsn35cc45b7bd5d' }
    });

    const resp = await instance.get();

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}