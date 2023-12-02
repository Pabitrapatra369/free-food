import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    this.state = {
      userInfo1: {
        name: "dummy name",
        location: "dummy location",
        id:"dummy id"
      },
    };
    // console.log("Child Constructor")
  }
  async componentDidMount() {
    // console.log("child didMounted")
    const data1 = await fetch("https://api.github.com/users/Pabitrapatra369");
    const json1 = await data1.json();
    console.log(json1);
    this.setState({
        userInfo1:json1,
    })
  }
  render() {
    //
    // const {name,Location}=this.props
    // console.log("child render")
    const { name, location, id, avatar_url } = this.state.userInfo1;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name :{name} </h2>
        <p> Location:Bhubaneswar</p>
        <p>Age:20</p>
        <p>Id:{id}</p>
        <p>Email:pk@gmail.com</p>
        <p>count:{this.state.count}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Inc Count
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Dec Count
        </button>
      </div>
    );
  }
}
export default UserClass;
