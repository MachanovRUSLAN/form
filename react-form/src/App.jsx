import React, { useState } from 'react';
import Login from './components/Login';
import Todo from './Todo';
import "./App.css"




function App() {
  
  const [login,setLogin] = useState(false);
  const [userId, setUserId] = useState(null);


  return (
    <>
    {login? <Todo userId={userId}/> : <Login setUserId={setUserId} setLogin={setLogin}/>}
    
    </>
  )
}

export default App
