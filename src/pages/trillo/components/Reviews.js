import React from 'react';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Reviews = ({ data: { reviewers } }) => (
    <section className="user-reviews">
        {reviewers.map((review, index) => (
            <figure key={index} className="review">
                <blockquote className="review__text">{review.text}</blockquote>
                <figcaption className="review__user">
                    <ResponsiveImage
                        image={review.image}
                        className="review__photo"
                    />
                    <div className="review__user-box">
                        <p className="review__user-name">{review.author}</p>
                        <p className="review__user-date">{review.date}</p>
                    </div>
                    <div className="review__rating">{review.rating}</div>
                </figcaption>
            </figure>
        ))}
        <button className="btn-inline">
            Show all <span>→</span>
        </button>
    </section>
);

const mapStateToProps = state => ({
    data: state.trillo.reviews
});

Reviews.propTypes = {
    data: PropTypes.object
};

export default connect(mapStateToProps)(Reviews);
