import React from 'react';

const Option = (props) => (
    <div className="option">
        <p className="option__text">
            {props.optionText}
        </p>
        <button 
            className="button button-link"
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            &times;
        </button>
    </div>
);

export default Option;