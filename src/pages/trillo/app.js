import React from 'react';

import Header from './components/Header';
import SideBar from './components/SideBar';
import Overview from './components/Overview';
import Description from './components/Description';
import Reviews from './components/Reviews';
import CallToAction from './components/CallToAction';

import './styles/index.scss';

const Trillo = () => (
    <div className="container">
        <Header />
        <div className="content">
            <SideBar />
            <main className="hotel-view">
                <Overview />
                <section className="detail">
                    <Description />
                    <Reviews />
                </section>
                <CallToAction />
            </main>
        </div>
    </div>
);

export default Trillo;
