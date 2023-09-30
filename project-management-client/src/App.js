 
import "./App.css";
import { Routes, Route } from "react-router-dom"; // <== IMPORT
 
import Navbar from "./components/Navbar";     // <== IMPORT
import HomePage from "./pages/HomePage";     // <== IMPORT
import ProjectsList from "./pages/ProjectsList";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import AddProject from "./pages/AddProject";
import EditProject from "./pages/EditProject";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";


/* 
Objective: Full CRUD with my react application
*/


function App() {
  return (
    <div className="App">
      
     {/* Below: ADD <Navbar>, <Routes> & <Route> */}
      <Navbar />
 
      <Routes>      
        <Route path="/" element={ <HomePage /> } />
        <Route path='/projects' element={<IsPrivate><ProjectsList/></IsPrivate>}/>
        <Route path="/projects/:id" element={<IsPrivate><ProjectDetailsPage/></IsPrivate>}></Route>
        {/* <Route path="/projects/add" element={<AddProject></AddProject>}></Route> */}
        <Route path="/projects/:id/edit" element={<IsPrivate><EditProject/> </IsPrivate>}></Route>
        <Route path="/signup" element={<IsAnon><SignupPage/></IsAnon>}/>
        <Route path="/login" element={<IsAnon><LoginPage/></IsAnon>}/>
      </Routes>
      
    </div>
  );
}
 
export default App;