const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    due: {
        type: Number,
        required: true,
    },
    paid: {
        type: Number,
        required: true,
    },
    duedate: {
        type: Date,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
});

module.exports = User = mongoose.model('user', UserSchema);
