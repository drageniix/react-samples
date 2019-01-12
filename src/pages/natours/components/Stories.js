import React from 'react';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

const Stories = ({ data: { background_video, title, stories, button } }) => (
    <section className="section-stories" id="stories">
        <div className="bg-video">
            <video loop autoPlay muted className="bg-video__content">
                <source src={background_video} type="video/mp4" />
                Your Browser does not support embedded videos!
            </video>
        </div>
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">{title}</h2>
        </div>
        <div className="row">
            {portionArray(stories, 2).map((story, index) => (
                <div key={index} className="story">
                    <figure className="story__shape">
                        <ResponsiveImage
                            className="story__img"
                            image={story.image}
                        />
                        <figcaption className="story__caption">
                            {story.caption}
                        </figcaption>
                    </figure>
                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            {story.title}
                        </h3>
                        <p>{story.text}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="u-center-text u-margin-top-hude">
            <a href="#" className="btn-text">
                {button}
            </a>
        </div>
    </section>
);

const mapStateToProps = state => ({
    data: state.natours.stories
});

Stories.propTypes = {
    data: PropTypes.object
};

export default connect(mapStateToProps)(Stories);
