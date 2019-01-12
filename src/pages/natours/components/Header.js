import React from 'react';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Header = ({ data: { logo, main, sub, button } }) => (
    <header className="header">
        <div className="header__logo-box">
            <ResponsiveImage
                image={logo}
                className="header__logo"
                alt="white logo"
            />
        </div>
        <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">{main}</span>
                <span className="heading-primary--sub">{sub}</span>
            </h1>
            <a className="btn btn--white btn--animated" href="#">
                {button}
            </a>
        </div>
    </header>
);

const mapStateToProps = state => ({
    data: state.header
});

Header.propTypes = {
    data: PropTypes.object
};

export default connect(mapStateToProps)(Header);
