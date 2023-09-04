import React from "react";
import User from "./user";
import UserClass from "./UserClass";

class About extends React.Component {


  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("Parent Comp did mount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Swiggy custom APP</h2>
        {/* <User name={"Abhijit"}/> */}

        <UserClass sequence={"1"} name={"Abhijit"} />
        {/* <UserClass sequence={"2"} name={"Abhijit"} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Swiggy custom APP</h2>
//       {/* <User name={"Abhijit"}/> */}

//       <UserClass name={"Abhijit"} />
//     </div>
//   );
// };

export default About;
