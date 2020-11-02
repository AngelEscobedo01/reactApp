import React from 'react';
import './homeBox.css'
import img from './../../../../assets/img_vector.jpg';
import img2 from './../../../../assets/rawpixel_image2.jpg';
import img3 from './../../../../assets/rawpixel_img.jpg';
import img4 from './../../../../assets/more_img.jpg';
import img5 from './../../../../assets/vector_img.jpg';

function HomeBox() {
    return (
        <div>
            <div className="container">
                <div class="card">
                        <img className="image" src={img} alt="yes"></img>
                        <div className="card-text">
                            <h4><b>John Doe</b></h4>
                            <p>Architect & Engineer</p>
                        </div>
                </div>
                <div className="card">
                        <img className="image" src={img2} alt="yes"></img>
                        <div className="card-text">
                            <h4><b>John Doe</b></h4>
                            <p>Architect & Engineer</p>
                        </div>
                </div>
                <div className="card">
                        <img className="image" src={img3} alt="yes"></img>
                        <div className="card-text">
                            <h4><b>John Doe</b></h4>
                            <p>Architect & Engineer</p>
                        </div>
                </div>
                <div className="card">
                        <img className="image" src={img4} alt="yes"></img>
                        <div className="card-text">
                            <h4><b>John Doe</b></h4>
                            <p>Architect & Engineer</p>
                        </div>
                </div>
                <div className="card">
                        <img className="image" src={img5} alt="yes"></img>
                        <div className="card-text">
                            <h4><b>John Doe</b></h4>
                            <p>Architect & Engineer</p>
                        </div>
                </div>
            </div>
        </div>



    

    );
}

export default HomeBox;