import React from 'react';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';
import { connect } from 'react-redux';

const Header = ({ data }) => (
    <header className="header">
        <div className="header__logo-box">
            <ResponsiveImage
                image={data.logo}
                className="header__logo"
                alt="white logo"
            />
        </div>
        <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">{data.main}</span>
                <span className="heading-primary--sub">{data.sub}</span>
            </h1>
            <a className="btn btn--white btn--animated" href="#">
                {data.button}
            </a>
        </div>
    </header>
);

const mapStateToProps = state => ({
    data: state.header
});

export default connect(mapStateToProps)(Header);
