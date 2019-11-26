const axios = require('axios');

module.exports = {
    async index(req, res) {
        const { data } = await axios.get('https://swapi.co/api/people/?format=json');

        data.results.map(result => {
            let characterIndex = result.url.split('/')[result.url.split('/').length - 2];
            result.imageUrl = `//starwars-visualguide.com/assets/img/characters/${characterIndex}.jpg`;
        });

        return res.json(data);
    },
}