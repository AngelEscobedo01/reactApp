import React from 'react';

function FormList(props) {

    const listOfUser = props.data.List.map(snapshot => 
        <h1>{props.data.firstName} {props.data.lastName}</h1>
    );

    return (
        <div>{listOfUser}</div>
    )
}

export default FormList;