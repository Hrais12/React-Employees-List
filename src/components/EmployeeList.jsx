import React from 'react'
import EmployeeListItem from './EmployeeListItem'

function EmployeeList({staff}) {
  return (
    <div className='employeeList'>




       {staff.map((worker)=>{
        return <EmployeeListItem info={worker} /> 
            // we are mapping through the data and creating individual instances of Employ.ListItem 
            // components and passing specific props for each instance.
        })}

    
    </div>
  )
}

export default EmployeeList