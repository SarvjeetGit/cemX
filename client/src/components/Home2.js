import React, { Fragment, useState } from 'react';
import { NavLink, Route } from 'react-router-dom';
import showData from '../actions/showData';
import Details2 from './Details2';
import firebase from '../firebase';
import './Home.css';
const Home = () => {
    const [formData, setFormData] = useState({
        number: '',
        loaded: false,
        payload: {},
    });
    let code = null;
    const htm = `<input placeholder='enter OTP' />`;
    const { number } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    var res = null;
    var data;
    const onSubmit = (e) => {
        e.preventDefault();
        let num = '+91' + number;
        let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
        firebase
            .auth()
            .signInWithPhoneNumber(num, recaptcha)
            .then(function (e) {
                document.querySelector('.recaptcha').innerHTML = htm;
                // let code = prompt('enter the otp', '');
                // if (code == null) return;
                e.confirm(code)
                    .then(async function () {
                        res = await showData(number);
                        data = await res.data;
                        setFormData({
                            ...formData,
                            loaded: true,
                            payload: await data,
                        });
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
            });
    };
    if (formData.loaded) {
        return <Route render={() => <Details2 {...formData.payload} />} />;
    } else {
        return (
            <Fragment>
                <div className='container' id='form'>
                    <div
                        className=''
                        style={{
                            textAlign: 'center',
                            fontSize: '40px',
                            fontWeight: 'bold',
                            color: '#841f27',
                            paddingTop: '50px',
                        }}
                    >
                        <span style={{ color: 'gray' }}>Credit</span> Portal
                    </div>
                    <div className='card letsgo formwala'>
                        <div className='card-bodyb'>
                            <br />
                            <form onSubmit={(e) => onSubmit(e)}>
                                <div
                                    className='form-group'
                                    style={{ marginTop: '20px' }}
                                >
                                    <input
                                        align='middle'
                                        type='tel'
                                        size={
                                            window.screen.width > 576
                                                ? `90`
                                                : `30`
                                        }
                                        placeholder='Your Phone Number'
                                        required
                                        pattern='[0-9]{10}'
                                        name='number'
                                        value={number}
                                        onChange={(e) => onChange(e)}
                                    />
                                </div>
                                <div className='submit-container'>
                                    <input
                                        type='submit'
                                        className='submit btn btn-primary'
                                        value='Login'
                                    />
                                </div>
                            </form>
                        </div>
                        <div className='recaptcha-holder'>
                            <div className='recaptcha' id='recaptcha'></div>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <small>
                            Enter your phone number without country code,
                            example: 9876543210
                        </small>
                        {/* <NavLink to='/admin' className='nav-link'>
                            Admin Panel<i className='fa fa-sign-in'></i>
                        </NavLink> */}
                    </div>
                </div>
            </Fragment>
        );
    }
};

export default Home;
