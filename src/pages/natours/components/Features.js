import React from 'react';
import { connect } from 'react-redux';
import SVG from '../../../common/SVG';
import PropTypes from 'prop-types'

const Features = ({ data }) => (
    <section className="section-features" id="features">
        <div className="row">
            {data.map((item, index) => (
                <div key={index} className="col-1-of-4">
                    <div className="feature-box">
                        <SVG svg={item.icon} className="feature-box__icon" />
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            {item.title}
                        </h3>
                        <p className="feature-box__text">{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);
const mapStateToProps = state => ({
    data: state.features
});

Features.propTypes = {
    data: PropTypes.object
}


export default connect(mapStateToProps)(Features);
