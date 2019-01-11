import React from 'react';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';

const Popup = ({ data }) => (
    <div className="popup" onClick={data.closeMethodClick}>
        <div className="popup__content">
            <div className="popup__left">
                {data.images.map((item, index) => (
                    <ResponsiveImage
                        className="popup__img"
                        key={index}
                        image={item}
                    />
                ))}
            </div>
            <div className="popup__right">
                <h2 className="heading-secondary u-margin-bottom-small">
                    {data.title}
                </h2>
                <h3 className="heading-tertiary u-margin-bottom-small">
                    {data.subtitle}
                </h3>
                <p className="popup__text">{data.text}</p>
                <div className="popup__button">
                    <a href="#" className="btn btn--green">
                        {data.button}
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default Popup;
