import { NavBar } from "./components/NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import { Title } from "./components/Title";
import { About } from "./components/About";
import { Home } from "./components/Home";
import React, { useState } from "react";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const [user, setUser] = useState(null);
  const contextValues = { user, setUser };

  return (
    <>
      <Title />
      <BrowserRouter>
        <NavBar />
        <AuthContext.Provider value={contextValues}>
          <Route path="/home" exact component={Home} />
          <Route path="/about" component={About} />
        </AuthContext.Provider>
        
      </BrowserRouter>
    </>
  );
}

export default App;
