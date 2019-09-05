import React, { useContext, useState, useEffect } from 'react';
import { AuthContext, AuthContextProvider } from '../context/AuthContext';


function Header(props) {

const [logged, setLogged] = useContext(AuthContext)

console.log(logged)

  return (
 <>
{ logged ? <p>Is logged in</p> : <p>is not logged in</p>}
 </>

  );
}

export default Header;
