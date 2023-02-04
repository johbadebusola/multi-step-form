import React,{useState} from 'react'
import "../css/personalInfo.css"
import "../css/selectPlan.css"
const SelectPlan = () => {
 
  return(
    <div >
   <MonthlyPlan />
      </div>
  )
}



const MonthlyPlan = () => {
  return(
    <div className='select-plan-container'>
   <h2> Select your plan</h2>
      <p> You have the option of monthly or yearly billing</p>

      <div> 
<p>Arcade</p>
<p>$9/mo</p>
      </div>

      <div> 
      <p>Advance</p>
<p>$12/mo</p>
     
        </div>

        <div> 
        <p>Pro</p>
<p>$15/mo</p>
        </div>
      </div>
  )
}


export default SelectPlan