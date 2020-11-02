import React from 'react';
import './homeFooter.css';

function HomeFooter(){
    return (
        <div className="container-f">
            <div className="column">
                <h3>Services & support</h3>
                <p>Help center</p>
                <p>Find a store</p>
                <p>Forgot password</p>
            </div>
            <div className="column">
                <h3>Shipping and handling & returns</h3>
                <p>Returns</p>
                <p>Shipping and handling rates and times</p>
                <p>Shipping and handling FAQs</p>
                <p>Our guarantee  </p>
            </div>
            <div className="column">       
                <h3>Terms & conditions</h3>
                <p>Website terms of use</p>
                <p>Supply chain transparency</p>
                <p>Pricing Policy</p>
                <p>Privacy Policy</p>
            </div>
            <div className="column">                       
                <h3>Sell us your stuff</h3>
                <p>Stuff We Buy</p>
                <p>Buying Policy</p>
            </div>
            <div className="column">
                <h3>Company info</h3>
                <p>About</p>
                <p>Press</p>
                <p>Jobs</p>
                <p>Blog</p>
                <p>Educator Discount</p>
                <p>Donations</p>
            </div>
        </div>
    );
}

export default HomeFooter;