import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Abstract extends Component {
    static propTypes = {
        data: PropTypes.object
    };

    render() {
        const { name, summary, links } = this.props.data;
        return (
            <section className="brief">
                <h1 className="brief__name">{name}</h1>
                <p className="brief__summary">{summary}</p>
                <p className="brief__links">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            className="brief__links--link"
                        >
                            {link.display}
                        </a>
                    ))}
                </p>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    data: state.home.brief
});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Abstract);
