const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=dd20625497c7a21095a9dfb385ef8b81&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}