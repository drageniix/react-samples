import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Footer extends Component {
    static propTypes = {
        data: PropTypes.object
    };

    render() {
        const {
            data: { contacts }
        } = this.props;
        return (
            <foorer className="footer">
                {contacts.map((contact, index) => (
                    <p key={index}>
                        <a href={contact.url}>{contact.display}</a>
                    </p>
                ))}{' '}
            </foorer>
        );
    }
}

const mapStateToProps = state => ({ data: state.home.brief });

export default connect(mapStateToProps)(Footer);
