const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=60b09ee8bbf87a4673e0b44fbca3b241&units=metric`);

    return resp.data.main.temp;
}

module.exports = { getClima };