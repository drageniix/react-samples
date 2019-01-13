import React from 'react';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';
import { connect } from 'react-redux';
import SVG from '../../../common/SVG';
import PropTypes from 'prop-types';

//FIX: new array forces rerender

export const Overview = ({
    data: { stars, gallery, title, location, userRating }
}) => (
    <section>
        <section className="gallery">
            {gallery.map((item, index) => (
                <figure key={index} className="gallery__item">
                    <ResponsiveImage className="gallery__photo" image={item} />
                </figure>
            ))}
        </section>

        <section className="overview">
            <h1 className="overview__heading">{title}</h1>
            <div className="overview__stars">
                {new Array(stars).map((_, index) => (
                    <SVG
                        key={index}
                        svg="star"
                        className="overview__icon-star"
                    />
                ))}
            </div>
            <div className="overview__location">
                <SVG svg="location" className="overview__icon-location" />
                <button className="btn-inline">{location}</button>
            </div>
            <div className="overview__rating">
                <div className="overview__rating--average">
                    {userRating.average}
                </div>
                <div className="overview__rating--count">
                    {userRating.count} Votes
                </div>
            </div>
        </section>
    </section>
);

const mapStateToProps = state => ({
    data: state.trillo.overview
});

Overview.propTypes = {
    data: PropTypes.object
};

export default connect(mapStateToProps)(Overview);
