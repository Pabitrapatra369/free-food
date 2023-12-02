import UserClass from "./UserClass";
import User from "./User";
import { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);

        // console.log("Parent Constructor");
    }
    componentDidMount() {
        //API Call always make here in class based component
        // console.log("Parent didMounted");
    }
  render() {
    // console.log("parent render")
    return (
      <div>
        <h1>About</h1>
        <p>this is about page</p>
        <div className="user-container">
          <User name={"Akshaya saini"} Location={"Dehradun"} />
          <UserClass name={"Pabitra Patra"} Location={"Bhubaneswar"} />
        </div>
      </div>
    );
  }
}

export default About;
