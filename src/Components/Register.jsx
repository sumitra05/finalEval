import React from 'react'
import { Link } from "react-router-dom";

const Register = () => {

    const handleSubmit = (e) =>{
        e.prevenDefault();
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
          <h1>Registration Page</h1>
          <input type="text" placeholder='name'/><br/>
          <input type="text" placeholder='email'/><br/>
          <input type="password" placeholder='password'/><br/>
          <input type="text" placeholder='Username'/><br/>
          <input type="number" placeholder='Mobile number'/><br/>
          <input type="text" placeholder='Description'/><br/><br/>
          <input type="submit" value="SUBMIT"/>
      </form>
        <Link to="/login"><button>Redirect to Login</button></Link>
    </>
  )
}

export default Register ;

