import React from "react";
import Header from "./Header";
import EmployeeContact from "./EmployeeContact";

function EmployeePage({ title, selectedEmployee }) {
  return (
    <div className="emp_pg">
      EmployeePage
      <Header topic={title} />
      <EmployeeContact selectedEmployee={selectedEmployee} />
    </div>
  );
}

export default EmployeePage;
