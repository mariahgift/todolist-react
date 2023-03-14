import React from 'react';

function showCompletedTask(props) {
    return (
        <button onClick={props.onClick}>
            {props.label}
        </button>
    );
}

export default showCompletedTask;