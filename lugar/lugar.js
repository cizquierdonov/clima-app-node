const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://geocode.xyz/${encodedUrl}?json=1`,
        headers: {}
    });

    const resp = await instance.get();

    if (resp.data.matches === null) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const ciudad = resp.data.standard.city;
    const lat = resp.data.latt;
    const lng = resp.data.longt;

    // .then(resp => {
    //     console.log(resp.data);
    // })
    // .catch(err => {
    //     console.log('ERROR!', err);
    // });

    return {
        direccion: ciudad,
        lat,
        lng
    };

}

module.exports = {
    getLugarLatLng
}