import { useState } from 'react';

import './App.css';
import Homepage from './components/Homepage';

import EmployeePage from './components/EmployeePage';



// this is the main [CEO] file ---> primery state lives here

//                             ---> components are housed here
                              // ---> hooks === useState, useEffect



 


function App() {
  const topics = ["Employee Directory", "Employee"]
  // data that will be distributed through to the components below
  
  // 1- Make Employee Data
  let allEmployees = [
    {
      name: "James King",
      position: "President [CEO]",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzFrKK1qOuOVGPBGLTxdHRm-RkRNP0JwU6VKj8vAnHCA&s",
      email:"JKing@email.com",
      mobile:"617-000-0002"
    },
    {
      name: "Juli Taylor",
      position: "VP of Marketing",
      image:"https://t3.ftcdn.net/jpg/05/19/03/14/360_F_519031428_KFbUxABIQxa0XUe7JLkyeITVh0diIVew.jpg",
      email: "JTaylor@email.com",
      mobile:"317-000-0002"
    },
    {
      name: "Jhon Williams",
      position: "Vp of Sales",
      image:"https://cdn-icons-png.flaticon.com/512/6813/6813541.png",
      email:"JWilliams@email.com",
      mobile:"517-000-0002"
    },
    {
      name: "Ray Moore",
      position: "VP of sales",
      image:"https://cdn5.vectorstock.com/i/1000x1000/16/49/young-and-successful-business-man-cartoon-employee-vector-15281649.jpg",
      email:"RMoore@email.com",
      mobile:"980-000-0002"
    },
    {
      name: "Paul Jones",
      position: "QA Manager",
      image:"https://www.insperity.com/wp-content/uploads/How_to_Create_an_Employee_Grievance_Policy.png",
      email:"PJones@email.com",
      mobile:"217-000-0002"
    }
  ]

  const [selectedEmployee, setSelectedEmployee] = useState(allEmployees[0])


  return (
    // what we wanna see displayed on screnn
    <div className="App">
     <Homepage title={topics[0]} workers={allEmployees} setSelectedEmployee = {setSelectedEmployee} />

     {/* passing state to other componenets {props:} */}
     <EmployeePage title={topics[1]} workers={allEmployees} selectedEmployee = {selectedEmployee} />

     {/* componenets */}
    </div>
  );
}

export default App;
