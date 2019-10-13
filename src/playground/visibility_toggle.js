class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            visibility: false
        };
    }

    toggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.toggle}>{this.state.visibility ? 'Hide' : 'Show'}</button>
                { this.state.visibility && 
                    (
                        <div>
                            <p>Show me what you got!!</p>
                        </div>
                    )
                }
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));