import React from "react";
class UserClass extends React.Component {
  constructor(props) {
      super(props);
    //   console.log(props);
    
      //console.log("child constructor" + props.sequence)
    //   this.state = {
    //       name:"",

    //       count:0,
    //     count2: 2
    //   }

    this.state = {
        userInfo:{
            name:"Dummt",
            loaction:"Dummy",
            contact:"",
        }
    }
  }

  async componentDidMount() {
      const data = await fetch("https://api.github.com/users/akshaymarch7");
      const json = await data.json();
    //console.log("Child Comp did mount")

    

    this.setState({
            userInfo:json
    })
  }

  render() {
    // const {count, count2, sequence} = this.state;
    // console.log("child render"+sequence)
    const {name, location, avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
          {/* <h2>Count : {count}</h2>
          <button onClick={()=>{
              this.setState({
                  count: this.state.count + 1,
                //   count2: this.state.count2++
              })
          }}>Increment</button> */}
          {/* <h2>Count 2: {count2}</h2> */}
          <img src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @akshaymarch7 </h4>
      </div>
    );
  }
}

export default UserClass;
