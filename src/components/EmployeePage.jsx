import React from 'react'
import Header from './Header';
import EmployeeContact from './EmployeeContact';


function EmployeePage({title}) {
  return (
    <div className='emp_pg'>

        EmployeePage
        <Header topic={title}/>
       
         <EmployeeContact/>
    </div>
  )
}

export default EmployeePage