import React, { Fragment, useState } from 'react';
import { NavLink, Route } from 'react-router-dom';
import showData from '../actions/showData';
import Details2 from './Details2';
import firebase from '../firebase';
import Countdown from 'react-countdown';

import './Home.css';
import { Form, FormGroup, Modal, Button } from 'react-bootstrap';
const Home = () => {
    const [formData, setFormData] = useState({
        number: '',
        loaded: false,
        error: false,
        payload: {},
    });
    const [otpData, setOtpData] = useState({
        otp: '',
    });

    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        setFormData({
            number: '',
            loaded: false,
            error: false,
            payload: {},
        });
    };
    const handleShow = () => setShow(true);

    const { number } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onChangeOTP = (e) =>
        setOtpData({ ...otpData, [e.target.name]: e.target.value });

    const { otp } = otpData;
    var res = null;
    var data;
    let coderesult;
    const onSubmit = async (e) => {
        e.preventDefault();

        let num = '+91' + number;
        document
            .querySelector('.recap-holder')
            .classList.add('recaptcha-holder');
        document.querySelector('.formwala').classList.add('letsgo');
        document.querySelector('.sub-cont').classList.add('submit-container');
        let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
        firebase
            .auth()
            .signInWithPhoneNumber(num, recaptcha)
            .then(function (confirmationResult) {
                window.grecaptcha.reset(recaptcha);

                document.querySelector('.hello').classList.add('nohello');
                document.querySelector('.recaptcha').classList.add('hello');

                document.querySelector('.didnt').classList.add('did');
                window.confirmationResult = confirmationResult;
                window.coderesult = confirmationResult;
                console.log(window.coderesult);
            });
    };

    const onSubmitNew = async (e) => {
        e.preventDefault();
        let num = '+91' + number;
        document
            .querySelector('.recap-holder')
            .classList.add('recaptcha-holder');
        document.querySelector('.formwala').classList.add('letsgo');
        document.querySelector('.sub-cont').classList.add('submit-container');
        document.querySelector('.hello').classList.remove('.nohello');
        document.querySelector('.recaptcha').classList.remove('.hello');
        let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
        firebase
            .auth()
            .signInWithPhoneNumber(num, recaptcha)
            .then(function (confirmationResult) {
                document.querySelector('.hello').classList.add('nohello');
                document.querySelector('.recaptcha').classList.add('hello');
                // setTimeout(function () {
                //     document.querySelector('.didnt').classList.add('did');
                // }, 5000);

                document.querySelector('.didnt').classList.add('did');
                window.confirmationResult = confirmationResult;
                window.coderesult = confirmationResult;
                console.log(window.coderesult);
            });
        console.log('yoooo');
    };

    const Completionist = () => (
        <span>
            Resend
            <button onClick={(e) => onSubmitNew(e)} className='astext'>
                now!
            </button>
        </span>
    );

    // Renderer callback with condition
    const renderer = ({ seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <span>Resend in: {seconds} s</span>;
        }
    };
    const handleClick = (e) => {
        e.preventDefault();

        var otp = otpData.otp;
        console.log(otp);
        console.log(window.coderesult);
        window.coderesult
            .confirm(otp)
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
                setFormData({ ...formData, error: true });
            });
    };

    if (formData.loaded && !formData.error) {
        return <Route render={() => <Details2 {...formData.payload} />} />;
    } else if (!formData.loaded && formData.error) {
        return (
            <Modal
                show={show}
                onHide={handleClose}
                backdrop='static'
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Error!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Entered OTP is incorrect, please try again!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='primary' onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant='primary'>Understood</Button> */}
                </Modal.Footer>
            </Modal>
        );
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
                    <div className='card formwala'>
                        <div className='card-bodyb'>
                            <br />
                            <form onSubmit={(e) => onSubmit(e)}>
                                <div
                                    className='form-group'
                                    style={{ marginTop: '20px' }}
                                >
                                    <input
                                        id='telinp'
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
                                <div className='sub-cont'>
                                    <input
                                        type='submit'
                                        className='submit btn btn-primary'
                                        value='Login'
                                    />
                                </div>
                            </form>
                        </div>
                        <div className='recap-holder'>
                            <div className='recaptcha' id='recaptcha'></div>
                            <div className='recaptcha2' id='recaptcha2'></div>

                            <Form className='hello otp'>
                                <FormGroup>
                                    <label>Enter OTP:</label>
                                    <input
                                        type='text'
                                        placeholder='123456'
                                        name='otp'
                                        value={otp}
                                        pattern='[0-9]{6}'
                                        onChange={(e) => onChangeOTP(e)}
                                    ></input>
                                </FormGroup>
                                <FormGroup>
                                    <button
                                        className=' btn btn-primary'
                                        onClick={handleClick}
                                    >
                                        {' '}
                                        Verify{' '}
                                    </button>
                                </FormGroup>
                            </Form>
                            <div className='didnt'>
                                <strong>
                                    Didnt receive the code?
                                    <Countdown
                                        date={Date.now() + 20000}
                                        renderer={renderer}
                                    />
                                </strong>
                            </div>
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
