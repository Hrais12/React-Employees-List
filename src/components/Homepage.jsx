import React from "react";
import Header from "./Header";
import Searchbar from "./Searchbar";
import EmployeeList from "./EmployeeList";

function Homepage({ title, workers, setSelectedEmployee }) {
  return (
    <div className="homepage">
      Homepage
      <Header topic={title} />
      <Searchbar />
      <EmployeeList staff={workers} setSelectedEmployee={setSelectedEmployee} />
    </div>
  );
}

export default Homepage;
