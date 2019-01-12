import React from 'react';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Footer = ({ data: { logo, links, credits } }) => (
    <footer className="footer">
        <div className="footer__logo-box">
            <ResponsiveImage image={logo} className="footer__logo" alt="logo" />
        </div>
        <div className="row">
            <div className="col-1-of-2">
                <div className="footer__navigation">
                    <ul className="footer__list">
                        {links.map((item, index) => (
                            <li key={index} className="footer__item">
                                <a href="#" className="footer__link">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="col-1-of-2">
                <p className="footer__copyright">
                    <a href="#" className="footer__link">
                        {credits}
                    </a>
                </p>
            </div>
        </div>
    </footer>
);
const mapStateToProps = state => ({
    data: state.footer
});

Footer.propTypes = {
    data: PropTypes.object
};

export default connect(mapStateToProps)(Footer);
