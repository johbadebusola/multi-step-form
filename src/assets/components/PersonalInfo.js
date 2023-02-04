import React, { useRef } from 'react'

const PersonalInfo = ({ formValue, setFormValue, active, setActive }) => {
  const inputValue = useRef()
  const names = (e) => {
    
    const { name, value } = e.target
    setFormValue({ ...formValue, [name]: value })
  }

  return (
    <div className='select-plan-container'>
      <h2> Personal info</h2>
      <p> Please provide your name, email address, and phone number. </p>
      <label> Name</label>
      <br />
      <input
      
        type="text"
        name='username'
        ref={inputValue}
        placeholder='e.g. Stephen King'
        onChange={() => setFormValue({ ...formValue, username: inputValue.current.value })}
        value={formValue.username}
      />
      <br />
      <label>Email Address </label>
      <br />
      <input

        type="text"
        name='email'
        placeholder='e.g. Stephenking@lorem.com'
        onChange={names}
        value={formValue.email}
      />
      <br />
      <div className='phoneNo' >
        <p> Phone Number</p>
        <p className={
        active?"errorclear":"error"
    }> This field is required</p> </div>
      <br />
      <input
       className={
        active?"":"styles"
    }
        type="text"
        name='phoneNo'
        onChange={names}
        value={formValue.phoneNo}
        placeholder='e.g. +1 234 567 890' />
    </div>
  )
}

export default PersonalInfo