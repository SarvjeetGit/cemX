import React, { Fragment, useState } from 'react';
import { NavLink, Route } from 'react-router-dom';
import showData from '../actions/showData';
import Details2 from './Details2';
const Home = () => {
    const [formData, setFormData] = useState({
        number: '',
        loaded: false,
        payload: {},
    });

    const { number } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    var res = null;
    var data;
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(window.screen.width);
        res = await showData(number);
        data = await res.data;
        setFormData({ ...formData, loaded: true, payload: await data });
    };
    if (formData.loaded) {
        return <Route render={() => <Details2 {...formData.payload} />} />;
        // return (
        //     <Redirect
        //         to={{ pathname: '/details', state: { ...formData.payload },  }}
        //     />
        // );
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
                        <div className='card-body'>
                            <br />
                            <form onSubmit={(e) => onSubmit(e)}>
                                <div className='form-group'>
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

                                <input
                                    type='submit'
                                    className='submit btn btn-primary'
                                    value='Login'
                                />
                            </form>
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
