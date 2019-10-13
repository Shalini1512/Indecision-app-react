import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <p>These are your options</p>
            <button 
                className="button-link"
                onClick={props.handleDeleteOptions}
            >
                Remove All
            </button>
        </div>
        {
            props.options.map((option) => (
                <Option 
                    key={option} 
                    optionText={option} 
                    handleDeleteOption={props.handleDeleteOption}
                />))
        }
    </div>
);

export default Options;