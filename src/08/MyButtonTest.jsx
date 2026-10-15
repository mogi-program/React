import { Component } from "react";
class MyButtonTest extends Component {
    handleClick(){
        console.log('this is:', this)
    }

    render(){
        return (
            <button onClick={()=>this.handleClick()}></button>
        )
    }
}

export default MyButtonTest;