// src/pages/HomePage.js

import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

 
function HomePage() {
  const {user} = useContext(AuthContext)
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    );
  }
   
  export default HomePage;