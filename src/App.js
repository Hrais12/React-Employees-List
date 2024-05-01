
import './App.css';
import Homepage from './components/Homepage';



// this is the main [CEO] file ---> primery state lives here

//                             ---> components are housed here
                              // ---> hooks === useState, useEffect


 import EmployeePage from './components/EmployeePage';
 


function App() {
  const topics = ["Employee Directory", "Employee"]
  // data that will be distributed through to the components below
  
  // 1- Make Employee Data
  let allEmployees = [
    {
      name: "James King",
      position: "President [CEO]",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzFrKK1qOuOVGPBGLTxdHRm-RkRNP0JwU6VKj8vAnHCA&s"
    },
    {
      name: "Juli Taylor",
      position: "VP of Marketing",
      image:"https://cdn-icons-png.flaticon.com/512/6813/6813541.png"
    },
    {
      name: "Jhon Williams",
      position: "Vp of Sales",
      image:""
    },
    {
      name: "Ray Moore",
      position: "VP of sales",
      image:""
    },
    {
      name: "Paul Jones",
      position: "QA Manager",
      image:""
    }
  ]
  return (
    // what we wanna see displayed on screnn
    <div className="App">
     <Homepage title={topics[0]} workers={allEmployees} />

     {/* passing state to other componenets {props:} */}
     <EmployeePage title={topics[1]} workers={allEmployees} />

     {/* componenets */}
    </div>
  );
}

export default App;
