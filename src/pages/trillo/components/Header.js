import React from 'react';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';
import { connect } from 'react-redux';
import SVG from '../../../common/SVG';

export const Header = ({ data }) => (
    <header className="header">
        <ResponsiveImage image={data.logo} className="logo" />
        <form action="" className="search">
            <input
                type="text"
                className="search__input"
                placeholder="search hotels"
            />
            <button className="search__button">
                <SVG svg="search" className="search__icon" />
            </button>
        </form>

        <nav className="user-nav">
            <div className="user-nav__icon-box">
                <SVG svg="bookmark" className="user-nav__icon" />
                <span className="user-nav__notification">7</span>
            </div>
            <div className="user-nav__icon-box">
                <SVG svg="chat" className="user-nav__icon" />
                <span className="user-nav__notification">13</span>
            </div>
            <div className="user-nav__user">
                <ResponsiveImage
                    image={data.user}
                    className="user-nav__user-photo"
                />
                <span className="user-nav__user-name">{data.name}</span>
            </div>
        </nav>
    </header>
);
const mapStateToProps = state => ({
    data: state.header
});

export default connect(mapStateToProps)(Header);
