import React from 'react'

function EmployeeListItem({info}) {
  return (
    <div className='empListItem'>


        <img src={info.image} alt="" className='profilePic'/>
        <div>
            <p><strong>{info.name}</strong></p>
            <p>{info.position}</p>
        </div>


      
         
        
    </div>
  )
}

export default EmployeeListItem