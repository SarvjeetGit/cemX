import axios from 'axios';

const showData = async (number) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const body = JSON.stringify({ number });
    return await axios.post('/user/find', body, config);
};

export default showData;
