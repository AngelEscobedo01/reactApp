import React from 'react';
import './Home.css';

import HomeFooter from './subComponent/homeFooter.js';
import HomeBox from './subComponent/homeBox.js';

function Home() {
    return (
        <main>
            <h1>Welcome to Silkworm Books !</h1>
            <div className="homeContainer">
                <HomeBox></HomeBox>
            </div>
            <div className="homeFooter">
                <HomeFooter></HomeFooter>
            </div>
        </main>
    );
}

export default Home;