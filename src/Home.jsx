// import './App.css'
import React from 'react';

function Home() {
    return (
        <>

            <div id="preloader">
                <div className="loader">
                    <img src="img/three-dots.svg" width="60" alt="" />
                </div>
            </div>


            <header id="header" className="header_section">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-header">
                            <button
                                type="button"
                                className="nav-btn navbar-toggle collapsed"
                                data-toggle="collapse"
                                data-target="#navbar"
                                aria-expanded="false"
                                aria-controls="navbar"
                            >
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a href="#" className="brand logo-light">
                                <img src="img/logo-light.png" alt="Apptech" />
                            </a>
                            <a href="#" className="brand logo-dark">
                                <img src="img/logo-dark.png" alt="Apptech" />
                            </a>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse navbar-right">
                            <ul className="nav navbar-nav nav-menu">
                                <li className="active">
                                    <a data-scroll href="#home">
                                        Home <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li>
                                    <a data-scroll href="#features">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a data-scroll href="#screenshots">
                                        Screenshots
                                    </a>
                                </li>
                                <li>
                                    <a data-scroll href="#testimonial">
                                        Testimonial
                                    </a>
                                </li>
                                <li>
                                    <a data-scroll href="#pricing">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a data-scroll href="#download">
                                        Download
                                    </a>
                                </li>
                                <li>
                                    <a data-scroll href="#subscribe">
                                        Subscribe
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>


            <section id="home" className="hero_section">
                <div id="particles-js"></div>
                {/* Particle */}
                <div className="display-table">
                    <div className="table-cell">
                        <div className="container">
                            <div className="hero_content align-center">
                                <h1 className="text-white">
                                    Escrosis <br />Payments
                                </h1>
                                <p className="mb-30">
                                    Ensuring secure transactions <br />
                                    with ease and convinience
                                </p>
                                <div className="btn_group">
                                    <a href="#" className="dl_btn">
                                        <i className="fa fa-apple"></i>
                                        <span className="sm_txt">Download On The</span>
                                        <span className="big_txt">App Store</span>
                                    </a>
                                    <a href="#" className="dl_btn">
                                        <i className="fa fa-android"></i>
                                        <span className="sm_txt">Get It On</span>
                                        <span className="big_txt">Play Store</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="features" className="feature_section padding">
                <div className="container">
                    <div className="col-sm-4 col-xs-6 xs-padding">
                        <ul className="feature_lists feature-right wow fadeInRight" data-wow-delay="0ms" data-wow-duration="2000ms">
                            <li className="feature_item">
                                <i className=" icon-bargraph"></i>
                                <div className="clearfix"></div>
                                <h4>Simple and frendly interface</h4>
                                <p>
                                    Secure transactions easily and conviniently in the shortest possiblt time.
                                </p>
                            </li>
                            <li className="feature_item">
                                <i className=" icon-download"></i>
                                <div className="clearfix"></div>
                                <h4>All your data in cloud</h4>
                                <p>
                                    Security is our utmost concern, be rest assured your transactions and data are secured with our state of the art cloud solutions .
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-4 hidden-xs">
                        <div className="feature_moc wow fadeInUp" data-wow-delay="0ms" data-wow-duration="2000ms">
                            <img src="img/feature-moc.png" alt="Feature Mockup" />
                        </div>
                    </div>
                    <div className="col-sm-4 col-xs-6 xs-padding">
                        <ul className="feature_lists wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="2000ms">
                            <li className="feature_item">
                                <i className=" icon-chat"></i>
                                <div className="clearfix"></div>
                                <h4>Personalized User Support</h4>
                                <p>
                                    Out 24/7 support specialists are ever ready to settle any transaction disputes and enquiries.
                                </p>
                            </li>
                            <li className="feature_item">
                                <i className=" icon-profile-male"></i>
                                <div className="clearfix"></div>
                                <h4>Great Community</h4>
                                <p>
                                    .
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>


            <section id="testimonial" className="testimonial_section overlay">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div id="testimonial_carousel" className="carousel slide testimonial" data-ride="carousel">
                            {/* Indicators */}
                            <ul className="client_thumb carousel-indicators">
                                <li data-target="#testimonial_carousel" data-slide-to="0" className="active">
                                    <img src="img/testimonial-1.jpg" alt="Client Thumb" />
                                </li>
                                <li data-target="#testimonial_carousel" data-slide-to="1">
                                    <img src="img/testimonial-2.jpg" alt="Client Thumb" />
                                </li>
                                <li data-target="#testimonial_carousel" data-slide-to="2">
                                    <img src="img/testimonial-3.jpg" alt="Client Thumb" />
                                </li>
                            </ul>

                            {/* Wrapper for slides */}
                            <div className="carousel-inner" role="listbox">
                                <div className="item active">
                                    <div className="testi_content">
                                        <h3>MICHEL BROWN | FACEBOOK</h3>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and <br />
                                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testi_content">
                                        <h3>ANGELINA ROSE | TWITTER</h3>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and <br />
                                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
                                        </p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testi_content">
                                        <h3>STEPHEN ROBERTS | GOOGLE</h3>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and <br />
                                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Controls */}
                            <div className="testi_control">
                                <a className="carousel-control left_arrow" href="#testimonial_carousel" data-slide="prev">
                                    <i className="fa fa-chevron-left"></i>
                                </a>
                                <a className="carousel-control right_arrow" href="#testimonial_carousel" data-slide="next">
                                    <i className="fa fa-chevron-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="pricing" className="pricing_section padding">
                <div className="container">
                    <div className="section_heading align-center mb-40">
                        <h2>Ready To Purchase?</h2>
                        <p>Is amazing, modern and clean landing page for showcase your app.</p>
                    </div>
                    {/* Section Heading */}
                    <ul className="pricing_tables">
                        <li
                            className="col-md-3 col-xs-6 wow fadeInLeft"
                            data-wow-delay="0ms"
                            data-wow-duration="2000ms"
                        >
                            <div className="pricing_table align-center">
                                <div className="pricing_head">
                                    <h4>STARTER</h4>
                                    <span className="price">$49</span>
                                    <h4>PER MONTH</h4>
                                </div>
                                <ul>
                                    <li>1GB File storage</li>
                                    <li>Unlimited products</li>
                                    <li>Free Updates</li>
                                    <li>New Offer Free</li>
                                    <li>24/7 Support</li>
                                </ul>
                                <div className="pricing_footer">
                                    <a href="#" className="fs_btn">
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                        </li>
                        {/* table 1 */}
                        <li
                            className="col-md-3 col-xs-6 wow fadeInLeft"
                            data-wow-delay="100ms"
                            data-wow-duration="2000ms"
                        >
                            <div className="pricing_table align-center">
                                <div className="pricing_head">
                                    <h4>BASIC</h4>
                                    <span className="price">$99</span>
                                    <h4>PER MONTH</h4>
                                </div>
                                <ul>
                                    <li>1GB File storage</li>
                                    <li>Unlimited products</li>
                                    <li>Free Updates</li>
                                    <li>New Offer Free</li>
                                    <li>24/7 Support</li>
                                </ul>
                                <div className="pricing_footer">
                                    <a href="#" className="fs_btn">
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                        </li>
                        {/* table 2 */}
                        <li
                            className="col-md-3 col-xs-6 wow fadeInLeft"
                            data-wow-delay="300ms"
                            data-wow-duration="2000ms"
                        >
                            <div className="pricing_table align-center">
                                <div className="pricing_head">
                                    <h4>PREMIUM</h4>
                                    <span className="price">$249</span>
                                    <h4>PER MONTH</h4>
                                </div>
                                <ul>
                                    <li>1GB File storage</li>
                                    <li>Unlimited products</li>
                                    <li>Free Updates</li>
                                    <li>New Offer Free</li>
                                    <li>24/7 Support</li>
                                </ul>
                                <div className="pricing_footer">
                                    <a href="#" className="fs_btn">
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                        </li>
                        {/* table 3 */}
                        <li
                            className="col-md-3 col-xs-6 wow fadeInLeft"
                            data-wow-delay="400ms"
                            data-wow-duration="2000ms"
                        >
                            <div className="pricing_table align-center">
                                <div className="pricing_head">
                                    <h4>BUSINESS</h4>
                                    <span className="price">$499</span>
                                    <h4>PER MONTH</h4>
                                </div>
                                <ul>
                                    <li>1GB File storage</li>
                                    <li>Unlimited products</li>
                                    <li>Free Updates</li>
                                    <li>New Offer Free</li>
                                    <li>24/7 Support</li>
                                </ul>
                                <div className="pricing_footer">
                                    <a href="#" className="fs_btn">
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                        </li>
                        {/* table 4 */}
                    </ul>
                </div>
            </section>


            <section id="download" className="dl_section overlay padding">
                <div className="container">
                    <div className="col-sm-4 hidden-xs">
                        <div className="dl_moc">
                            <img src="img/dl-moc-front.png" alt="CTA Mockup" className="dl_moc_1" />
                            <img src="img/dl-moc-back.png" alt="CTA Mockup" className="dl_moc_2 wow fadeInLeft" />
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="dl_content">
                            <h2 className="text-white">Get Your Apptech App today!</h2>
                            <p>
                                Customers have been downloaded and actively using our app <br />
                                successfully.GET STARTED FOR FREE.
                            </p>
                            <div className="btn_group">
                                <a href="#" className="dl_btn">
                                    <i className="fa fa-apple"></i>
                                    <span className="sm_txt">Download On The</span>
                                    <span className="big_txt">App Store</span>
                                </a>
                                <a href="#" className="dl_btn">
                                    <i className="fa fa-android"></i>
                                    <span className="sm_txt">Get It On</span>
                                    <span className="big_txt">Play Store</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="subscribe" className="subscribe_section padding">
                <div className="container">
                    <div className="col-sm-5 xs-padding">
                        <h2>About Apptech App.</h2>
                        <p>
                            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                        </p>
                        <ul className="social_link">
                            <li>
                                <a href="#">
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-google-plus"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-skype"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-7 xs-padding">
                        <div className="section_heading mb-25">
                            <h2>Subscribe To Our NewsLetter</h2>
                            <p>Get inspired by a complete new way to showcase your app.</p>
                        </div>
                        <div className="subscribe_wrap">
                            <form action="#" className="subscribe_form">
                                <input
                                    type="email"
                                    name="email"
                                    id="subs-email"
                                    className="form_input"
                                    placeholder="Enter Your Email Address..."
                                />
                                <button type="submit" className="submit">
                                    SUBSCRIBE
                                </button>
                                <div className="clearfix"></div>
                                <div id="subscribe-result">
                                    <p className="subscription-success"></p>
                                    <p className="subscription-error"></p>
                                </div>
                            </form>
                        </div>
                        {/* /.subscribe_wrap */}
                    </div>
                </div>
            </section>


            <footer className="footer_section">
                <p>&copy; 2017 Apptech Powered by AlexaTheme.</p>
            </footer>

            <a data-scroll href="#header" id="scroll-to-top">
                <i className="arrow_carrot-up"></i>
            </a>





        </>
    )
}

export default Home
