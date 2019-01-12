import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const SVG = ({ icon, title, className = '' }) => (
    <svg className={className} viewBox={icon.viewbox}>
        <title>{title}</title>
        <path d={icon.path} />
    </svg>
);

const mapStateToProps = (state, { svg = 'unknown' }) => ({
    icon: state.trillo.icons[svg] || state.natours.icons[svg],
    title: svg + ' icon'
});

SVG.propTypes = {
    icon: PropTypes.object,
    title: PropTypes.string,
    className: PropTypes.string
};

export default connect(mapStateToProps)(SVG);
