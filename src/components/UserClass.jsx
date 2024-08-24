import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:2
        }
        console.log("Child Constructor");
    }
    
    componentDidMount(){
        console.log("child did mount");
    }
    render(){
        console.log("Child render");
        const {name}=this.props;
        const {count,count2}=this.state;
        return(
            <div className="">
            
            <h1>Name: {name}</h1>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1,
                })
            }}>Add</button>
            <p>Count={count}</p>
            <h2>Frontend Developer</h2>
            <h3>SR University</h3>
            </div>
        );
    }
}

export default UserClass;