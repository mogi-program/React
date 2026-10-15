
import { Component } from "react";

class ConfirmButton extends Component {
    constructor(props) {
        super(props);

        this.state = { isToggleOn: true };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick} className="toggle" disabled={!this.state.isToggleOn}>
                {this.state.isToggleOn ? '켜짐' : '꺼짐'}
            </button>
        );
    }
}

export default ConfirmButton;
