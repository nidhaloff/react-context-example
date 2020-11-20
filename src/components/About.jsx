import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const About = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      This is the about page
      {user && <div>user name: {user.name} is logged in</div>}
    </div>
  );
};
