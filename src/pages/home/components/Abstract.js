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
                <h4 className="brief__summary">{summary}</h4>
                <h4 className="brief__links">
                    {links.map((link, index) => (
                        <p key={index}>
                            <a href={link.url}>{link.display}</a>
                        </p>
                    ))}
                </h4>
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
