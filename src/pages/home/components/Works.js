import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Works extends Component {
    static propTypes = {
        info: PropTypes.object
    };

    render() {
        const {
            info: { links }
        } = this.props;
        return (
            <section className="works">
                <div className="works__items">
                    {links.map((work, index) => (
                        <article key={index} className="works__items--item">
                            <img src={work} />
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
