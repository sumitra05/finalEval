import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    margin-top: 10px;
    margin: 8px;
    color:white;
    

`;
const Navdiv = styled.div`
     width:100%;
     height:60px;
     background-color:teal;


`

const Navbar = () => {
  return (
    <div>
        <Navdiv>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/register">Register</StyledLink>
            <StyledLink to="/employees">Employees</StyledLink>
        </Navdiv>
        
    </div>
  )
}

export default Navbar;