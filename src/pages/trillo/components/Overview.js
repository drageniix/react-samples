import React from 'react';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';
import { connect } from 'react-redux';
import SVG from '../../../common/SVG';

export const Overview = ({ data }) => {
    const stars = [];
    for (let x = 0; x < data.stars; x++) {
        stars.push(<SVG key={x} svg="star" className="overview__icon-star" />);
    }

    return (
        <section>
            <section className="gallery">
                {data.gallery.map((item, index) => (
                    <figure key={index} className="gallery__item">
                        <ResponsiveImage
                            className="gallery__photo"
                            image={item}
                        />
                    </figure>
                ))}
            </section>

            <section className="overview">
                <h1 className="overview__heading">{data.title}</h1>
                <div className="overview__stars">{stars}</div>
                <div className="overview__location">
                    <SVG svg="location" className="overview__icon-location" />
                    <button className="btn-inline">{data.location}</button>
                </div>
                <div className="overview__rating">
                    <div className="overview__rating--average">
                        {data.userRating.average}
                    </div>
                    <div className="overview__rating--count">
                        {data.userRating.count} Votes
                    </div>
                </div>
            </section>
        </section>
    );
};

const mapStateToProps = state => ({
    data: state.overview
});

export default connect(mapStateToProps)(Overview);
