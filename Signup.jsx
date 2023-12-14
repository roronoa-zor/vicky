import React, { Component } from "react";

export default class Signup extends Component {


  render() {
    return (
        
      <div className="box">
        <h1><b>Sign Up</b></h1>
        <form>
            <h1>TRAIN TICKET BOOKING </h1>
        <br></br>
            <label><b>First Name :   </b></label>
            <input type="text" placeholder="FirstName"required></input><br></br><br></br>
            <label><b>Last Name :   </b></label>
            <input type="text" placeholder="LastName"required></input><br></br><br></br>
           
            <label><b>Email    :   </b></label>
            <input type="email" placeholder="Email"required></input><br></br><br></br>
            <label><b>Phone Number :   </b></label>
            <input type="number" placeholder="Phone Number"required></input><br></br><br></br>
           
            <label><b>Create Password:  </b>
          <input type="password"required placeholder="password" id="password"></input>
          </label>
          <br></br>  
          <br></br>
          <label><b>Confirm Password:  </b>
          <input type="password"required placeholder="password" id="password"></input>
          </label>
          <br></br>  
          <br></br>
            <b><button>Submit</button></b>
        </form>
      </div>
    );
  }
}