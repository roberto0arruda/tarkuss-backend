const axios = require('axios');

module.exports = {
    async index(req, res) {
        const { data } = await axios.get('https://swapi.co/api/people/?format=json');

        return res.json(data);
    }
}