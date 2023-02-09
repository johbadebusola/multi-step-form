import React from 'react'
import "../css/personalInfo.css"
import "../css/selectPlan.css"
import arcade from "../images/arcade.svg"
import advance from "../images/advance.svg"
import pro from "../images/pro.svg"
const SelectPlan = ({toggle,setToggle}) => {
const togg = (e) =>{
setToggle(!toggle)
}
console.log(toggle)
  return (
    <div className='select-plan-container'>
     
      {!toggle?( <MonthlyPlan />): (<YearlyPlan />) }
      <input 
      type="checkbox"
      value={toggle}
      onClick={togg}
      />
    </div>
  )
}



const MonthlyPlan = () => {
  return (
    <div className='monthly'>
      <h2> Select your plan</h2>
      <p> You have the option of monthly or yearly billing.</p>

      <div className='box' >
        <img src={arcade} alt="arcade" />
        <div>
          <p className='p1'>Arcade</p>
          <p className='p2'>$9/mo</p>
        </div>

      </div>

      <div className='box'>
        <img src={advance} alt="advance" />
        <div>
          <p className='p1'>Advanced</p>
          <p className='p2'>$12/mo</p>
        </div>
      </div>

      <div className='box'>
        <img src={pro} alt="pro" />
        <div>
          <p className='p1'>Pro</p>
          <p className='p2'>$15/mo</p>
        </div>

      </div>
    </div>
  )
}


const YearlyPlan = () => {
  return (
    <div className='monthly'>
      <h2> Select your plan</h2>
      <p> You have the option of monthly or yearly billing.</p>

      <div className='box' >
        <img src={arcade} alt="arcade" />
        <div>
          <p className='p1'>Arcade</p>
          <p className='p2'>$90/yr</p>
          <p className='p3'>2 months free</p>
        </div>

      </div>

      <div className='box'>
        <img src={advance} alt="advance" />
        <div>
          <p className='p1'>Advanced</p>
          <p className='p2'>$120/yr</p>
          <p className='p3'>2 months free</p>
        </div>
      </div>

      <div className='box'>
        <img src={pro} alt="pro" />
        <div>
          <p className='p1'>Pro</p>
          <p className='p2'>$150/yr</p>
          <p className='p3'>2 months free</p>
        </div>

      </div>
    </div>
  )
}


export default SelectPlan