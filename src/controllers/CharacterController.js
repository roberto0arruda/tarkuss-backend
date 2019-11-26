const axios = require('axios');

module.exports = {
    async index(req, res) {
        const { page } = req.query;
        let url = typeof page !== "undefined" ? `https://swapi.co/api/people/?format=json&page=${page}` : 'https://swapi.co/api/people/?format=json';

        const { data } = await axios.get(url);

        data.results.map(result => {
            let characterIndex = result.url.split('/')[result.url.split('/').length - 2];
            result.imageUrl = `//starwars-visualguide.com/assets/img/characters/${characterIndex}.jpg`;
        });

        return res.json(data);
    },
}