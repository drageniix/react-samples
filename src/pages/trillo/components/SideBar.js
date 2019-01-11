import React from 'react';
import SVG from '../../../common/SVG';
import { connect } from 'react-redux';

export const SideBar = ({ data }) => (
    <nav className="sidebar">
        <ul className="side-nav">
            {data.links.map((item, index) => (
                <li key={index} className="side-nav__item">
                    <a href="#" className="side-nav__link">
                        <SVG svg={item.icon} className="side-nav__icon" />
                        <span>{item.text}</span>
                    </a>
                </li>
            ))}
        </ul>

        <div className="legal">{data.legal}</div>
    </nav>
);

const mapStateToProps = state => ({
    data: state.sideBar
});

export default connect(mapStateToProps)(SideBar);
