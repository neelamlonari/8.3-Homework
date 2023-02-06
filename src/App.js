import React from 'react';
import {useState} from 'react';
import Student from "./Components/Student"
import studentData from "./Data"
import Score from "./Components/Score"
import "./App.css"

     
    
function App() {
  const [stu, setStu] = useState(studentData);
//console.log(stu)
  return (

    <div className="App">
      <h1>Student Data sheet</h1>
      <div className='student-Info'>
      <Student studentData={stu}/>
      
      
      </div>
    </div>
  );
}
 export default App;
