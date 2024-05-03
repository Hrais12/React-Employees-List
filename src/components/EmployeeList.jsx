import React from "react";
import EmployeeListItem from "./EmployeeListItem";

function EmployeeList({ workers, setSelectedEmployee }) {
  return (
    <div className="employeeList">
      {workers.map((worker, index) => {
        return (
          <EmployeeListItem
            key={index}
            info={worker}
            setSelectedEmployee={setSelectedEmployee}
          />
        );
        // we are mapping through the data and creating individual instances of Employ.ListItem
        // components and passing specific props for each instance.
      })}
    </div>
  );
}

export default EmployeeList;
