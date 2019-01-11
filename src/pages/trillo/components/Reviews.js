import React from 'react';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';
import { connect } from 'react-redux';

export const Reviews = ({ data }) => (
    <section className="user-reviews">
        {data.reviewers.map((item, index) => (
            <figure key={index} className="review">
                <blockquote className="review__text">{item.text}</blockquote>
                <figcaption className="review__user">
                    <ResponsiveImage
                        image={item.image}
                        className="review__photo"
                    />
                    <div className="review__user-box">
                        <p className="review__user-name">{item.author}</p>
                        <p className="review__user-date">{item.date}</p>
                    </div>
                    <div className="review__rating">{item.rating}</div>
                </figcaption>
            </figure>
        ))}
        <button className="btn-inline">
            Show all <span>→</span>
        </button>
    </section>
);

const mapStateToProps = state => ({
    data: state.reviews
});

export default connect(mapStateToProps)(Reviews);
