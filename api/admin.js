const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const Admin = require('../models/Admin');

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    admin = new Admin({
        username,
        password,
    });

    const salt = await bcrypt.genSalt(10);

    admin.password = await bcrypt.hash(password, salt);

    await admin.save();

    res.send('admin registered');
});
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    let admin = await Admin.findOne({ username });
    if (!admin) {
        return res.json({
            authentication: false,
        });
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
        return res.json({
            authentication: false,
        });
    }
    res.json({ authentication: true });
});
module.exports = router;
