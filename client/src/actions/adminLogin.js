import axios from 'axios';

const adminLogin = async (username, password) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const body = JSON.stringify({ username, password });
    return await axios.post('/admin/login', body, config);
};

export default adminLogin;
