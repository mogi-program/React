import React from "react";
import "./Notification.css";

class Notification extends React.Component {

    componentDidMount() {
        console.log(`${this.props.id}`);
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="notification">
                <span>
                    {this.props.notification}
                </span>
            </div>
        );
    }
}

export default Notification;