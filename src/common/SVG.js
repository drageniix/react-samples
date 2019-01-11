import React from 'react';
import { connect } from 'react-redux';

export const SVG = ({ icon, title, className = '' }) => (
    <svg className={className} viewBox={icon.viewbox}>
        <title>{title}</title>
        <path d={icon.path} />
    </svg>
);

const mapStateToProps = (state, { svg = 'unknown' }) => {
    console.log(state.icons, svg);
    return {
        icon: state.icons[svg],
        title: svg + ' icon'
    };
};

export default connect(mapStateToProps)(SVG);
