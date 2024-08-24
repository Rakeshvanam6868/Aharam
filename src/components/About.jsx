import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("parent did mount");
    }
    render(){
        console.log("parent render");
        return(
            
            <div className="title">
                <h1>About Page</h1>
                <p>Hey this is rakesh elarkuu vanakkam</p>
                {/* <User name="rakesh Vanam"/> */}
                <UserClass name="rakesh Vanam"/>
            </div>
        );
        
    }
}

export default About;