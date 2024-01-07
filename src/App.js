import React from "react";
import { signInWithGoogle } from './config/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./config/firebase";

function App() {
  const [user, loading, error] = useAuthState(auth);

  console.log(user);

  function handleClick(){
    signInWithGoogle();
  }
  
  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default App;