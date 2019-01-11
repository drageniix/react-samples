import React from 'react';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';
import { connect } from 'react-redux';

function portionArray(arr, length) {
    if (arr.length >= length) {
        const elements = new Set();
        for (let i = 0; i < length * 10; i++) {
            const index = Math.floor(Math.random() * arr.length);
            elements.add(arr[index]);
            if (elements.size == length) {
                return Array.from(elements);
            }
        }
    }
    return arr;
}

const Stories = ({ data }) => (
    <section className="section-stories" id="stories">
        <div className="bg-video">
            <video loop autoPlay muted className="bg-video__content">
                <source src={data.background_video} type="video/mp4" />
                Your Browser does not support embedded videos!
            </video>
        </div>
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">{data.title}</h2>
        </div>
        <div className="row">
            {portionArray(data.stories, 2).map((item, index) => (
                <div key={index} className="story">
                    <figure className="story__shape">
                        <ResponsiveImage
                            className="story__img"
                            image={item.image}
                        />
                        <figcaption className="story__caption">
                            {item.caption}
                        </figcaption>
                    </figure>
                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            {item.title}
                        </h3>
                        <p>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="u-center-text u-margin-top-hude">
            <a href="#" className="btn-text">
                {data.button}
            </a>
        </div>
    </section>
);

const mapStateToProps = state => ({
    data: state.stories
});

export default connect(mapStateToProps)(Stories);
