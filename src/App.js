import React, { useContext, useState, useEffect } from 'react';
import { AuthContext, AuthContextProvider } from './context/AuthContext';
import Header from './components/Header';

function App() {

  return (
    <AuthContextProvider>
      
     <Header />

    </AuthContextProvider>

  );
}

export default App;
