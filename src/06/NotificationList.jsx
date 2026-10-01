import React from "react";
import Notification from "./test/Notification";
import "./NotificationList.css";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 여러분, 반갑습니다.1"
    },
    {
        id: 2,
        message: "안녕하세요, 여러분, 반갑습니다.2"
    },
    {
        id: 3,
        message: "안녕하세요, 여러분, 반갑습니다.3"
    },
    {
        id: 4,
        message: "안녕하세요, 여러분, 반갑습니다.4"
    },
    {
        id: 5,
        message: "안녕하세요, 여러분, 반갑습니다.5"
    }
]

var timer;

class NotificationList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notifications: []
        }
    }

    render() {
        return(
            <div className="notification-list">
                {
                    this.state.notifications.map((notification) => {
                        return (
                            <Notification
                                key={notification.id}
                                id={notification.id}
                                notification={notification.message}
                            />
                        )
                    })
                }
            </div>
        );
    }

    componentDidMount() {
        const {notifications} = this.state;

        timer = setInterval(() => {
            if(notifications.length < reservedNotifications.length) {
                const index = notifications.length

                notifications.push(reservedNotifications[index]);

                this.setState({
                    notifications: notifications
                })
            } else {
                clearInterval(timer);
            }
        }, 3000)
    }

    componentWillUnmount() {
        if(timer){
            clearInterval(timer);
        }
    }
}

export default NotificationList;