import React, { Fragment } from 'react';
import './Footer.css';

const Footer = () => {
    return (
        // <footer
        //     classNameName='foot'
        //     style={{
        //         backgroundColor: '#841f27',
        //         color: '#fff',
        //         textAlign: 'center',
        //     }}
        // >
        //     Hexford Ventures Pvt. Ltd.
        // </footer>
        <Fragment>
            {/* contacts */}
            <section className='contact boxs'>
                <div className='container'>
                    <div className='contact_inner boxs'>
                        <div className='row nomargin'>
                            <div className='col-md-3'>
                                <div className='contact_left boxs'>
                                    <p>Contact Us</p>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='contact_middle boxs'>
                                    <h3>Mobile</h3>
                                    <a href='tel:+917044448650'>
                                        <p>(+91)7044448650</p>
                                    </a>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='contact_right boxs'>
                                    <h3>Email</h3>
                                    <a href='mailto:info@cemx.in'>
                                        <p>info@cemX.in</p>
                                    </a>
                                </div>
                            </div>

                            <div className='col-md-3'>
                                <div className='contact_right12fa boxs'>
                                    <a
                                        href='https://www.facebook.com/cemx.in/'
                                        target='_blank'
                                    >
                                        <i
                                            className='fab fa-facebook'
                                            aria-hidden='true'
                                        ></i>
                                    </a>
                                    <a
                                        href='https://twitter.com/_cemX?s=08'
                                        target='_blank'
                                    >
                                        <i
                                            className='fab fa-twitter'
                                            aria-hidden='true'
                                        ></i>
                                    </a>
                                    <a
                                        href='https://www.instagram.com/invites/contact/?i=1nflnpykhrndx&utm_content=72nxres'
                                        target='_blank'
                                    >
                                        <i
                                            className='fab fa-instagram'
                                            aria-hidden='true'
                                        ></i>
                                    </a>
                                    <a
                                        href='https://www.linkedin.com/company/cemx'
                                        target='_blank'
                                    >
                                        <i
                                            className='fab fa-linkedin'
                                            aria-hidden='true'
                                        ></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* footer */}
            <section class='footer boxs'>
                <div class='container'>
                    <div class='row nomargin decrease'>
                        <div class='col-md-3 col-sm-6 nopadding'>
                            <div class='india_cm boxs'>
                                <a href='https://www.cemx.in/'>
                                    <img
                                        src='https://www.cemx.in/front/img/logo.png'
                                        class='img-fluid'
                                        alt='cemx'
                                    />
                                </a>
                                <p
                                    style={{
                                        textAlign: 'center',
                                        fontWeight: '400',
                                    }}
                                >
                                    cemX is India’s first online platform
                                    <br /> with offline extension stores where
                                    <br /> a customer can buy cement of
                                    <br /> different brands available at the
                                    <br /> cheapest price.{' '}
                                </p>
                            </div>
                        </div>

                        <div class='col-md-3 col-sm-6 nopadding'>
                            <div class='Popular boxs pop'>
                                <ul>
                                    <li className='didit done'>
                                        {' '}
                                        Popular Brands
                                    </li>
                                    <li className='didit'>
                                        <a href='https://www.cemx.in/product-listing/0e40db072c440666568b1f0057fd5b35'>
                                            Dalmia PSC
                                        </a>
                                    </li>
                                    <li className='didit'>
                                        <a href='https://www.cemx.in/product-listing/0e40db072c440666568b1f0057fd5b34'>
                                            Dalmia DSP
                                        </a>
                                    </li>
                                    <li className='didit'>
                                        <a href='https://www.cemx.in/product-listing/0e40db072c440666568b1f0057fd5b33'>
                                            ACC Gold
                                        </a>
                                    </li>
                                    <li className='didit'>
                                        <a href='https://www.cemx.in/product-listing/0e40db072c440666568b1f0057fd5b29'>
                                            Konark
                                        </a>
                                    </li>
                                    <li className='didit'>
                                        <a href='https://www.cemx.in/product-listing/0e40db072c440666568b1f0057fd5b25'>
                                            Ultratech
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class='col-md-3 col-sm-6 nopadding' style={{}}>
                            <div class='Popular boxs quick'>
                                <ul>
                                    <li className='didit done'> Quick Links</li>
                                    <li className='didit'>
                                        <a href='https://www.cemx.in/about'>
                                            About Us
                                        </a>
                                    </li>
                                    <li className='didit'>
                                        <a href='https://www.cemx.in/contact_us'>
                                            Contact Us
                                        </a>
                                    </li>
                                    <li className='didit'>
                                        <a href='https://www.cemx.in/faq'>
                                            FAQ
                                        </a>
                                    </li>
                                    <li className='didit'>
                                        <a href='https://www.cemx.in/edealder-register'>
                                            Become E-Dealer
                                        </a>
                                    </li>
                                    <li className='didit'>
                                        <a href='https://www.cemx.in/location'>
                                            Store Location
                                        </a>
                                    </li>
                                    <li className='didit'>
                                        <a href='https://www.cemx.in/career'>
                                            Careers
                                        </a>
                                    </li>
                                    <li className='didit'>
                                        <a href='https://www.cemx.in/businessWithus'>
                                            Business with Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class='col-md-3 col-sm-6 nopadding'>
                            <div class='Popular boxs service'>
                                <ul>
                                    <li className='didit done'>Our Services</li>
                                    <li className='didit'>
                                        <a href='https://www.cemx.in/return_policy'>
                                            Return & Refund Policy
                                        </a>
                                    </li>
                                    <li className='didit'>
                                        <a href='https://www.cemx.in/privacy'>
                                            Privacy Policy
                                        </a>
                                    </li>

                                    <li className='didit'>
                                        <a href='https://www.cemx.in/store_policy'>
                                            Store Policy
                                        </a>
                                    </li>
                                    <li className='didit'>
                                        <a href='https://www.cemx.in/terms'>
                                            Terms & Conditions
                                        </a>
                                    </li>
                                    <li className='didit'>
                                        <a href='https://www.cemx.in/payment_method'>
                                            Payments Methods
                                        </a>
                                    </li>
                                    <li className='didit'>
                                        <a href='https://www.cemx.in/press'>
                                            Press release
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class='footerbtm  boxs'>
                <div class='container-fluid'>
                    <div class='btmleft d-inline-block '>
                        <p>
                            <span>
                                <i
                                    class='fa fa-copyright'
                                    aria-hidden='true'
                                ></i>
                            </span>{' '}
                            Hexford Ventures Pvt. Ltd.
                        </p>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Footer;
