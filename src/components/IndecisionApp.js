import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(() => ({ options }));
            }
        } catch(e) {
            // Do Nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const options = JSON.stringify(this.state.options);
            localStorage.setItem('options', options);
        }
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option != optionToRemove)
        }));
    };

    handlePick = () => {
        const index = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[index];
        this.setState(() => ({
            selectedOption: option
        }));
    };

    handleAddOption = (option) => {
        if(!option) {
            return 'please enter a valid string to add';
        } else if(this.state.options.indexOf(option) >= 0) {
            return 'option already exists';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option)}));
    };

    resetSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }

    render() {
        const subtitle = 'Let us make your decisions';

        return (
            <div>
                <Header subtitle={subtitle} />

                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick} 
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options} 
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>

                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    resetSelectedOption={this.resetSelectedOption}
                />
            </div>
        );
    }
};