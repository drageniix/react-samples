import React from 'react';
import SVG from '../../../common/SVG';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const SideBar = ({ data: { links, legal } }) => (
    <nav className="sidebar">
        <ul className="side-nav">
            {links.map((item, index) => (
                <li key={index} className="side-nav__item">
                    <a href="#" className="side-nav__link">
                        <SVG svg={item.icon} className="side-nav__icon" />
                        <span>{item.text}</span>
                    </a>
                </li>
            ))}
        </ul>

        <div className="legal">{legal}</div>
    </nav>
);

const mapStateToProps = state => ({
    data: state.trillo.sideBar
});

SideBar.propTypes = {
    data: PropTypes.object
};

export default connect(mapStateToProps)(SideBar);
