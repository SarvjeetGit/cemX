const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.post('/', async (req, res) => {
    const { name, due, paid, duedate, number } = req.body;
    user = new User({
        name,
        due,
        paid,
        duedate,
        number,
    });

    await user.save();
    res.send('user registered');
});

router.get('/:user_id', async (req, res) => {
    const user = await User.find({ _id: req.params.user_id });

    res.json(user);
});
//most important
router.post('/find', async (req, res) => {
    const { number } = req.body;
    const user = await User.findOne({ number: number });

    res.json(user);
});

router.get('/', async (req, res) => {
    try {
        const users = await User.find();

        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
