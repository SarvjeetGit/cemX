import React, { Fragment, useState } from 'react';
// import { Redirect, Route } from 'react-router-dom';
import adminLogin from '../actions/adminLogin';
import AdminDataEntry from './AdminDataEntry';

const AdminPanel = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        auth: false,
        loaded: false,
    });
    const { username, password } = formData;
    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = async (e) => {
        e.preventDefault();
        var res = await adminLogin(username, password);
        var data = await res.data.authentication;
        // console.log(res.data.authentication);
        setFormData({ ...formData, loaded: true, auth: await data });
    };
    if (formData.loaded) {
        if (formData.auth) {
            return <AdminDataEntry></AdminDataEntry>;
        } else {
            return <div>Invalid Credentials</div>;
        }
    }
    return (
        <Fragment>
            <div className='container'>
                <h3 style={{ textAlign: 'center', marginTop: '10px' }}>
                    Welcome to Admin Panel
                </h3>
                <div className='card formwala'>
                    <div className='card-body'>
                        <form className='form' onSubmit={(e) => onSubmit(e)}>
                            <div className='form-group'>
                                <input
                                    size='30'
                                    type='username'
                                    placeholder='Admin UserName'
                                    required
                                    name='username'
                                    value={username}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    size='30'
                                    type='password'
                                    required
                                    placeholder='Password'
                                    name='password'
                                    value={password}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>
                            <div className='btn-holder'>
                                <input
                                    type='submit'
                                    className='submit btn btn-primary btn-lg'
                                    value='Login'
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default AdminPanel;
