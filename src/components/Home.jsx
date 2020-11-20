import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { login } from "../mocks/user";

export const Home = () => {
  const { user, setUser } = useContext(AuthContext);

  async function onLogin() {
    const user = await login();
    setUser(user);
  }

  function onLogout() {
      setUser(null);
  }
  
  return (
    <div>
      This is my home
      {user ? (
        <button onClick={() => onLogout()}>Logout</button>
      ) : (
        <button onClick={() => onLogin()}>Login</button>
      )}
      {user && <div>{user.name} is logged in</div>}
    </div>
  );
};
