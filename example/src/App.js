import React, { useEffect, useState } from "react";
import "./App.css";
import { useUserbase } from "react-userbase";

function App() {
  const [signIn, { response, loading, error }] = useUserbase("signIn");
  const [mySignOutFunction, { response: signOutResponse }] = useUserbase(
    "signOut"
  );
  const [signUp, signUpData] = useUserbase("signIn");
  const [username, setUname] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSignIn = () => {
    signIn({ username, password });
  };

  const handleSignUp = () => {
    signUp({ username, password });
  };

  useEffect(() => {
    console.log(response, loading, error);
  }, [response, loading, error]);

  useEffect(() => {
    console.log(signUpData);
  }, [signUpData]);

  if (loading || signUpData.loading) return <h1>Loading...</h1>;
  return (
    <div className="App">
      <h1>Userbase Hook Test</h1>
      Username: <input type="text" onChange={e => setUname(e.target.value)} />
      <br />
      Password:{" "}
      <input type="text" onChange={e => setPassword(e.target.value)} />
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Sign In</button>
      <br />
      <br />
      <button onClick={mySignOutFunction}>Sign out</button>
    </div>
  );
}

export default App;
