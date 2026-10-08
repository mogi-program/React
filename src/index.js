import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import TodoList from "./01/TodoList";
// import Library from "./03/enhanced_css/Library";
// import Clock from './04/Clock';
// import ConfirmDialog from "./04/ConfirmDialog";
// import ConfirmDialogList from './04/ConfirmDialogList';
// import WelcomeList from './04/WelcomeList'
// import BookList from './05/exam02/BookList'
// // import UserInfoList from "./05/exam03/UserInfoList";
// import NotificationList from './06/NotificationList';
// import CounterTest from './07/01/CounterTest';
// import TestInputWithFocusButton from "./07/02/TestInputWithFocusButton";
import Accommodate from './07/Accommodate';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(()=>{
        root.render(
            <React.StrictMode>
                {/*<App />*/}
                {/*<TodoList/>*/}
                {/*<Clock />*/}
                {/*<ConfirmDialogList />*/}
                {/*<WelcomeList />*/}
                {/*<UserInfoList/>*/}
                {/*<NotificationList />*/}
                {/*<TestInputWithFocusButton/>*/}
                <Accommodate />
            </React.StrictMode>
        );

    }
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
