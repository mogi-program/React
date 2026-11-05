import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
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
// import Accommodate from './07/Accommodate';
// import ToggleTest from './08/ToggleTest'
// import MyButtonTest from './08/MyButtonTest'
// import MyButtonTest2 from './08/MyButtonTest2'
// import ConfirmButton from "./08/ConfirmButton";
// import ConfirmButton2 from "./08/ConfirmButton2";
// import ListerTest from "./08/ListenerTest"
// import Greeting from './09/ex1/Greeting'
// import LogInControl from './09/ex2/LogInControl';
// import Mailbox from './09/ex3/Mailbox';
// import MainPage from "./09/ex4/MainPage";
// import LandingPage from './09/finalex/LandingPage'
// import MapTest from './10/MapTest';\
// import AttendanceBook from "./10/AttendanceBook";

// import AttendanceCardBook from "./10/AttendanceCardBook";
// import FruitSelect from "./11/FruitSelect";
import Reservation from "./11/Reservation";



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
                {/*<Accommodate />*/}
                {/*<ToggleTest />*/}
                {/*<MyButtonTest/>*/}
                {/*<MyButtonTest2/>*/}
                {/*<ConfirmButton/>*/}
                {/*<ConfirmButton2/>*/}
                {/*<Mailbox />*/}
                {/*<LogInControl />*/}
                {/*<MainPage/>*/}
                {/*<LandingPage />*/}
                {/*<MapTest />*/}
                {/*<AttendanceBook/>*/}
                {/*<AttendanceCardBook/>*/}
                <Reservation/>
            </React.StrictMode>
        );

    }
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
