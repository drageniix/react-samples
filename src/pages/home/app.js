import React from 'react';
import './styles/index.scss';
import Works from './components/Works';
import SkillSet from './components/SkillSet';
import Abstract from './components/Abstract';
import Footer from './components/Footer';

const App = () => {
    return (
        <main className="home">
            <div className="content">
                <section className="summary">
                    <Abstract />
                    <SkillSet />
                </section>
                <Works />
            </div>
            <Footer />
        </main>
    );
};

export default App;
