import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const CallToAction = ({ data: { text, button } }) => (
    <section className="cta">
        <h2 className="cta__book-now">{text}</h2>
        <button className="btn">
            <span className="btn__visbile">{button.visible}</span>
            <span className="btn__hidden">{button.hidden}</span>
        </button>
    </section>
);

const mapStateToProps = state => ({
    data: state.trillo.cta
});

CallToAction.propTypes = {
    data: PropTypes.object
};

export default connect(mapStateToProps)(CallToAction);
