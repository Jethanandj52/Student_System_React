 import React from 'react'
import Home from './Components/Home'
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddStudents from './Components/AddStudents';
import Records from './Components/Records';
 
import ComputerScience from './Components/Dashboard/ComputerScience';
import IT from './Components/Dashboard/IT';
import AI from './Components/Dashboard/AI';
 
 const App = () => {
   return (
     <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addStudents" element={<AddStudents />} />
        <Route path="/records" element={<Records />} />
       

        <Route path="/computerScience" element={<ComputerScience />} />

        <Route path="/IT" element={<IT />} />


        <Route path="/AI" element={<AI />} />





         

      </Routes>
    </Router>
     </>
   )
 }
 
 export default App