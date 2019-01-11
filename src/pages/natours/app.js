import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

import About from './components/About';
import Booking from './components/Booking';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Popup from './components/Popup';
import Stories from './components/Stories';
import Tours from './components/Tours';

import './styles/index.scss';

configureStore().then(store => {
    class Natours extends React.Component {
        state = { popup: '' };

        openModal = modalData => {
            modalData.button = this.state.tours.cta.button;
            modalData.closeMethodClick = this.closeModal;
            this.setState({ popup: modalData });
        };

        closeModal = e => {
            if (!e) {
                this.setState({ popup: '' });
            } else if (e.target === e.currentTarget) {
                e.preventDefault();
                this.setState({ popup: '' });
            }
        };

        componentDidMount() {
            window.addEventListener('keydown', e => {
                if (this.state.popup && e.key === 'Escape') {
                    this.closeModal();
                }
            });
        }

        componentWillUnmount() {
            window.removeEventListener('keydown');
        }

        render() {
            return (
                <Provider store={store}>
                    <div>
                        <Navigation />
                        <Header />
                        <main>
                            {this.state.popup ? (
                                <Popup data={this.state.popup} />
                            ) : (
                                undefined
                            )}
                            <About />
                            <Features />
                            <Tours onButton={this.openModal} />
                            <Stories data={this.state.stories} />
                            <Booking />
                        </main>
                        <Footer data={this.state.footer} />
                    </div>
                </Provider>
            );
        }
    }

    ReactDOM.render(<Natours />, document.getElementById('content'));
});
