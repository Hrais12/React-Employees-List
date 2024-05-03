import React from "react";

function EmployeeContact({ selectedEmployee }) {
  return (
    <div>
      <div className="empContact">
        <img
          src={selectedEmployee.image}
          alt={selectedEmployee.name}
          id="empImg"
        />
        <div>
          <p>
            <strong>{selectedEmployee.name}</strong>
          </p>
          <p> {selectedEmployee.position}</p>
        </div>
      </div>
      <div className="info">
        <div>
          <p>
            <strong>Call Office</strong>
          </p>
          <p> 781-000-0002</p>
        </div>
        <button></button>
      </div>
      <div className="info">
        <div>
          <p>
            <strong>Mobile</strong>
          </p>
          <p> {selectedEmployee.mobile}</p>
        </div>
        <button></button>
      </div>
      <div className="info">
        <div>
          <p>
            <strong>SMS</strong>
          </p>
          <p> 617-000-0002</p>
        </div>
        <button></button>
      </div>
      <div className="info">
        <div>
          <p>
            <strong>Email</strong>
          </p>
          <p> {selectedEmployee.email}</p>
        </div>
        <button></button>
      </div>
    </div>
  );
}

export default EmployeeContact;
