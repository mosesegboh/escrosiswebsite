import React from 'react';

function Header() {
    return (
        <div>
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
                                <img src="img/modified_logo_updated.png" alt="Apptech" />
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
                                {/*<editor-fold desc="Nav Section">*/}
                                {/*<li>*/}
                                {/*    <a data-scroll href="#screenshots">*/}
                                {/*        Screenshots*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <a data-scroll href="#testimonial">*/}
                                {/*        Testimonial*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <a data-scroll href="#pricing">*/}
                                {/*        Pricing*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                {/*</editor-fold>*/}
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
        </div>
    )
}

export default Header
