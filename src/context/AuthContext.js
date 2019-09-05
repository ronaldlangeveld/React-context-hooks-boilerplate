import React, { createContext, useState } from 'react';
export const AuthContext = createContext();

export const AuthContextProvider = (props) => {

    const [logged, setLogged] = useState(false)



    return <AuthContext.Provider value={[logged, setLogged]}>

        {props.children}

    </AuthContext.Provider>

};

