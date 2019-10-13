class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleSubOne = this.handleSubOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        };
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleSubOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleSubOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter />, document.getElementById('app'));