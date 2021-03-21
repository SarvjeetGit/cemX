import React, { Fragment, useState, useEffect } from 'react';
import './Header.css';
// import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    useEffect(() => {
        const onScroll = (e) => {
            setScrollTop(e.target.documentElement.scrollTop);
            setScrolling(e.target.documentElement.scrollTop > scrollTop);
        };
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [scrolling]);

    return (
        <Fragment>
            <div
                className={
                    scrolling
                        ? `navbar navbar-default sticky-top bottom`
                        : `navbar navbar-default sticky-top `
                }
                style={{ paddingTop: 0 }}
            >
                <div className='d-flex align-items-center justify-content-between boxs'>
                    <div className='navbar-header navyheadu'>
                        <a className='navbar-brand' href='https://www.cemx.in/'>
                            <img
                                src='https://www.cemx.in/front/img/logo.png'
                                className=''
                                alt='logo'
                            />
                        </a>
                    </div>
                    <ul className='nav_head d-flex justify-content-between'>
                        <li>
                            <a href='https://www.cemx.in/location'>
                                Store Locator
                            </a>
                        </li>

                        <li className='doit'>
                            <a href='https://www.cemx.in/login'>Login</a>
                            {'       '}|{'       '}
                            <a href='https://www.cemx.in/customer-register'>
                                Signup
                            </a>
                        </li>
                        {/* <li className='details'>
                            <i className='fas fa-info-circle'></i>
                        </li> */}
                    </ul>
                    <div className='details'>
                        <i className='fas fa-info-circle'></i>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Header;
