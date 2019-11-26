const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { username, email, password } = req.body;

        if (email && password) {
            let user = await User.findOne({ email, password });

            if (!user) {
                user = { message: 'login ou password invalidos!' };
                // user = await User.create({ username, email, password });
            }
            return res.json(user);
        }
    }
};