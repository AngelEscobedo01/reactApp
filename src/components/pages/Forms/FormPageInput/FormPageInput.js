import React from 'react';

import './FormPageInput.css';

function FormPageInput(props) {
        return(
            <main>
                <form>
                    <div className="top-form">
                    <input 
                        name="firstName" 
                        value={props.data.firstName} 
                        onChange={props.handleChange} 
                        placeholder="First Name" 
                    />
                    <br />
                    
                    <input 
                        name="lastName" 
                        value={props.data.lastName}
                        onChange={props.handleChange} 
                        placeholder="Last Name" 
                    />
                    <br />
                    
                    <input 
                        name="age" 
                        value={props.data.age}
                        onChange={props.handleChange} 
                        type="number"
                        placeholder="Age" 
                    />
                    <br />
                    
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="male"
                            checked={props.data.gender === "male"}
                            onChange={props.handleChange}
                        /> Male
                    </label>
                    
                    <br />
                    
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="female"
                            checked={props.data.gender === "female"}
                            onChange={props.handleChange}
                        /> Female
                    </label>


                    <br />
                    
                    <select 
                        value={props.data.destination} 
                        name="destination" 
                        onChange={props.handleChange}
                    >
                        <option value="">-- Please Choose a destination --</option>
                        <option value="germany">Germany</option>
                        <option value="norway">Norway</option>
                        <option value="north pole">North Pole</option>
                        <option value="south pole">South Pole</option>
                    </select>
                    
                    <br />
                    
                    {/* <button>Submit</button> */}
                    </div>
                    <div className="top-form">
                    
                    <input 
                        name="address" 
                        value={props.data.address}
                        onChange={props.handleChange} 
                        placeholder="Address" 
                    />

                    <br />
                    
                    <input
                        name="state" 
                        value={props.data.state}
                        onChange={props.handleChange} 
                        placeholder="State" 
                    />
                    <br />
                    
                    <input 
                        name="zipcode"
                        type="number"
                        value={props.data.zipcode}
                        onChange={props.handleChange} 
                        placeholder="Zipcode" 
                    />
                    <br />

                    <input 
                        name="other" 
                        value={props.data.other}
                        onChange={props.handleChange} 
                        placeholder="Other" 
                    />
                    <br />
                    </div>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {props.data.firstName} {props.data.lastName}</p>
                <p>Your age: {props.data.age}</p>
                <p>Your gender: {props.data.gender}</p>
                <p>Your destination: {props.data.destination}</p>

                <p>Your address: {props.data.address}</p>
                <p>Your state: {props.data.state}</p>
                <p>Your zipcode: {props.data.zipcode}</p>


                <p>Other data: {props.data.other}</p>
                
        </main>
        );
}


export default FormPageInput;