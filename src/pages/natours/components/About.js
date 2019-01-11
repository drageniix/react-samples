import React from 'react';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';
import { connect } from 'react-redux';

const About = ({ data }) => (
    <section className="section-about" id="about">
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">{data.tagline}</h2>
        </div>
        <div className="row">
            <div className="col-1-of-2">
                {data.blurbs.map((item, index) => (
                    <section className="section-about__blurb" key={index}>
                        <h3 className="u-margin-bottom-small heading-tertiary">
                            {item.title}
                        </h3>
                        <p className="paragraph">
                            {item.text.substring(0, 200)}...
                        </p>
                    </section>
                ))}
                <a href="#" className="btn-text">
                    {data.more}
                </a>
            </div>
            <div className="col-1-of-2">
                <div className="composition">
                    {data.images.map((item, index) => (
                        <ResponsiveImage
                            key={index}
                            image={item}
                            className={
                                'composition__photo composition__photo--p' +
                                (index + 1)
                            }
                        />
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const mapStateToProps = state => ({
    data: state.about
});

export default connect(mapStateToProps)(About);
