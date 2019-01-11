import React from 'react';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';
import { connect } from 'react-redux';

export const Description = ({ data }) => (
    <section className="description">
        {data.summary.map((item, index) => (
            <p className="paragraph" key={index}>
                {item}
            </p>
        ))}
        <ul className="list">
            {data.features.map((item, index) => (
                <li className="list__item" key={index}>
                    {item}
                </li>
            ))}
        </ul>
        <div className="recommend">
            <p className="recommend__count">{data.recommendations.text}</p>
            <div className="recommend__friends">
                {data.recommendations.images.map((item, index) => (
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
    data: state.description
});

export default connect(mapStateToProps)(Description);
