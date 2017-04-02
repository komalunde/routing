import React from 'react';
import browserHistory from "react-router-dom";
//  class User extends React.Component{
//   onNavigateHome(){
//     browserHistory.push("/home");
//   }
//   render(){
//     return (
//       <div>
//       <h3> The User page</h3>
//       <p>User Id: {this.props.params.id}</p>
//       <button onClick={this.onNavigateHome} className="btn btn-primary">Go Home!</button>
//       </div>
//     );
//   }
// }
const User = () => {
  return (
    <div>
      <h3> The User page</h3>
      <p>User Id: {this.props.params.id}</p>
      <button onClick={this.onNavigateHome} className="btn btn-primary">Go Home!</button>
    </div>
  );
}
export default User;
