import React from 'react';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';
import PropTypes from 'prop-types';

const Popup = ({
    data: { closeMethodClick, images, title, subtitle, text, button }
}) => (
    <div className="popup" onClick={closeMethodClick}>
        <div className="popup__content">
            <div className="popup__left">
                {images.map((item, index) => (
                    <ResponsiveImage
                        className="popup__img"
                        key={index}
                        image={item}
                    />
                ))}
            </div>
            <div className="popup__right">
                <h2 className="heading-secondary u-margin-bottom-small">
                    {title}
                </h2>
                <h3 className="heading-tertiary u-margin-bottom-small">
                    {subtitle}
                </h3>
                <p className="popup__text">{text}</p>
                <div className="popup__button">
                    <a href="#" className="btn btn--green">
                        {button}
                    </a>
                </div>
            </div>
        </div>
    </div>
);

Popup.propTypes = {
    data: PropTypes.object
};

export default Popup;
