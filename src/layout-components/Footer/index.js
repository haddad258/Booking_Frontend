import React, { Fragment } from 'react';

import clsx from 'clsx';

import { Paper, List, ListItem, ListItemText } from '@material-ui/core';

import { connect } from 'react-redux';

const Footer = props => {
  const { footerFixed } = props;
  return (
    <Fragment>
      <div>
                {/* Footer */}
                <section className="section-padding bg-white border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="feature-box">
                                    <i className="mdi mdi-truck-fast" />
                                    <h6>Free &amp; Next Day Delivery</h6>
                                    <p>Lorem ipsum dolor sit amet, cons...</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="feature-box">
                                    <i className="mdi mdi-basket" />
                                    <h6>100% Satisfaction Guarantee</h6>
                                    <p>Rorem Ipsum Dolor sit amet, cons...</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="feature-box">
                                    <i className="mdi mdi-tag-heart" />
                                    <h6>Great Daily Deals Discount</h6>
                                    <p>Sorem Ipsum Dolor sit amet, Cons...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-padding footer bg-white border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <h4 className="mb-5 mt-0"><a className="logo" href="index.html"><img src="img/logo-footer.png" alt="CitwaShop" /></a></h4>
                                <p className="mb-0"><a className="text-dark" href="#"><i className="mdi mdi-phone" /> +61 525 240 310</a></p>
                                <p className="mb-0"><a className="text-dark" href="#"><i className="mdi mdi-cellphone-iphone" /> 12345 67890, 56847-98562</a></p>
                            </div>
                            <div className="col-lg-2 col-md-2">
                                <h6 className="mb-4">TOP CITIES </h6>
                                <ul>
                                    <li><a href="#">Tunisia</a></li>
                                    <li><a href="#">france</a></li>
                                  
                                    <ul>
                                    </ul></ul></div>
                            <div className="col-lg-2 col-md-2">
                                <h6 className="mb-4">type of rservation</h6>
                                <ul>
                                    <li><a href="#">hotels</a></li>
                                    <li><a href="#">meeting rooms </a></li>
                                    <li><a href="#">cars </a></li>
                                    <li><a href="#">equipment</a></li>
                                    
                                    <ul>
                                    </ul></ul></div>
                            <div className="col-lg-2 col-md-2">
                                <h6 className="mb-4">ABOUT US</h6>
                                <ul>
                                    <li><a href="#">Company Information</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Store Location</a></li>
                                    <li><a href="#">Affillate Program</a></li>
                                    <li><a href="#">Copyright</a></li>
                                    <ul>
                                    </ul></ul></div>
                            <div className="col-lg-3 col-md-3">
                                <h6 className="mb-4">Download App</h6>
                                <div className="app">
                                    <a href="#"><img src="img/google.png" alt /></a>
                                    <a href="#"><img src="img/apple.png" alt /></a>
                                </div>
                                <h6 className="mb-3 mt-4">GET IN TOUCH</h6>
                                <div className="footer-social">
                                    <a className="btn-facebook" href="#"><i className="mdi mdi-facebook" /></a>
                                    <a className="btn-twitter" href="#"><i className="mdi mdi-twitter" /></a>
                                    <a className="btn-instagram" href="#"><i className="mdi mdi-instagram" /></a>
                                    <a className="btn-whatsapp" href="#"><i className="mdi mdi-whatsapp" /></a>
                                    <a className="btn-messenger" href="#"><i className="mdi mdi-facebook-messenger" /></a>
                                    <a className="btn-google" href="#"><i className="mdi mdi-google" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Footer */}
                {/* Copyright */}
                
                {/* End Copyright */}
            </div>
        
    </Fragment>
  );
};

const mapStateToProps = state => ({
  footerFixed: state.ThemeOptions.footerFixed
});
export default connect(mapStateToProps)(Footer);
