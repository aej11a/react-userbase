import React from "react";
import "./App.css";
import { RegistrationForm } from "./components/RegistrationForm";
import { SignInForm } from "./components/SignInForm";
import { useUserbase } from "react-userbase";

const App = () => {
  const [signOut] = useUserbase("signIn");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Userbase Testing</h1>
      </header>
      <RegistrationForm />
      <SignInForm />
      <button onClick={e => signOut()}>Sign out</button>
    </div>
  );
};

export default App;
