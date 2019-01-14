import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ResponsiveImage from 'responsive-json-webpack-plugin/react';

export class Works extends Component {
    static propTypes = {
        info: PropTypes.object
    };

    render() {
        const {
            info: { works }
        } = this.props;
        return (
            <section className="works">
                <div className="works__items">
                    {works.map((work, index) => (
                        <article
                            key={index}
                            className="works__items--item"
                            onClick={() => window.location.assign(work.url)}
                        >
                            {work.image && (
                                <ResponsiveImage image={work.image} />
                            )}
                            <h1 className="works__items--title">{work.name}</h1>
                        </article>
                    ))}
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({ info: state.home.works });

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Works);
