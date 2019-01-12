import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Navigation extends React.Component {
    state = { checked: false };

    toggleState = () => {
        this.setState({ checked: !this.state.checked });
    };

    render() {
        const { data } = this.props;
        return (
            <div className="navigation">
                <input
                    type="checkbox"
                    className="navigation__checkbox"
                    id="nav-toggle"
                    checked={this.state.checked}
                    onChange={this.toggleState.bind(this)}
                />
                <label htmlFor="nav-toggle" className="navigation__button">
                    <span className="navigation__icon" />
                </label>

                <div className="navigation__background" />

                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        {data.map((item, index) => (
                            <li className="navigation__item" key={index}>
                                <a
                                    className="navigation__link"
                                    href={item.link}
                                    onClick={this.toggleState}
                                >
                                    <span>{`0${index}`}</span>
                                    {`${item.name}`}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.natours.navigation
});

Navigation.propTypes = {
    data: PropTypes.array
};

export default connect(mapStateToProps)(Navigation);
