import React from "react";

function EmployeeListItem({ info, setSelectedEmployee }) {
  function changeEmployee() {
    setSelectedEmployee({ info });
  }

  return (
    <div onClick={changeEmployee} className="empListItem">
      <img src={info.image} alt="" className="profilePic" />
      <div>
        <p>
          <strong>{info.name}</strong>
        </p>
        <p>{info.position}</p>
      </div>
    </div>
  );
}

export default EmployeeListItem;
