import React from 'react';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Description = ({
    data: { summary, features, recommendations }
}) => (
    <section className="description">
        {summary.map((item, index) => (
            <p className="paragraph" key={index}>
                {item}
            </p>
        ))}
        <ul className="list">
            {features.map((item, index) => (
                <li className="list__item" key={index}>
                    {item}
                </li>
            ))}
        </ul>
        <div className="recommend">
            <p className="recommend__count">{recommendations.text}</p>
            <div className="recommend__friends">
                {recommendations.images.map((item, index) => (
                    <ResponsiveImage
                        className="recommend__photo"
                        key={index}
                        image={item}
                    />
                ))}
            </div>
        </div>
    </section>
);

const mapStateToProps = state => ({
    data: state.trillo.description
});

Description.propTypes = {
    data: PropTypes.object
};

export default connect(mapStateToProps)(Description);
