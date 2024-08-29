import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
class About extends Component{
    constructor(props){
        super(props);
        // console.log("Parent Constructor");
    }

    componentDidMount(){
        // console.log("parent did mount");
    }
    render(){
        // console.log("parent render");
        return(
            
            <div className="title">
                <h1>About Page</h1>
                <div className="">
                    <p>LoggedIn User</p>
                     <UserContext.Consumer>
                        {({loggedInUser})=><h1>{loggedInUser}</h1> }
                     </UserContext.Consumer>
                </div>
                <p>Hey this is rakesh elarkuu vanakkam</p>
                {/* <User name="rakesh Vanam"/> */}
                <UserClass name="rakesh Vanam"/>
            </div>
        );
        
    }
}

export default About;