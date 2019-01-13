import React from 'react';
import './styles/index.scss';
import Works from './components/Works';
import SkillSet from './components/SkillSet';
import Abstract from './components/Abstract';

const App = () => {
    return (
        <main className="home">
            <div className="content">
                <Works />
                <section className="summary">
                    <Abstract />
                    <SkillSet />
                </section>
            </div>
        </main>
    );
};

export default App;
