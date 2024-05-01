import React from 'react'

function EmployeeContact() {
  return (
    <div>
        <div className='empContact'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzFrKK1qOuOVGPBGLTxdHRm-RkRNP0JwU6VKj8vAnHCA&s" alt="" id='empImg'/>
        <div>
            <p><strong>Employee Name</strong></p>
            <p> job title</p>
        </div>
       
        </div>
        <div className='info'>
            <div>
            <p><strong>Call Office</strong></p>
            <p> 781-000-0002</p>
            </div>
            <button></button>
        </div>
        <div className='info'>
            <div>
            <p><strong>Call Mobile</strong></p>
            <p> 617-000-0002</p>
            </div>
            <button></button>
        </div>
        <div className='info'>
            <div>
            <p><strong>SMS</strong></p>
            <p> 617-000-0002</p>
            </div>
            <button></button>
        </div>
        <div className='info'>
            <div>
            <p><strong>Email</strong></p>
            <p> EmployeeName@email.com</p>
            </div>
            <button></button>
        </div>
    </div>
  )
}

export default EmployeeContact