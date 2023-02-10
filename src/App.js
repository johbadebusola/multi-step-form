import React, { useState } from 'react';
import './App.css';
import "./assets/css/formStep.css"
import PersonalInfo from "./assets/components/PersonalInfo"
import SelectPlan from "./assets/components/SelectPlan"
import "./assets/css/sidebar.css"
import PickAddon from "./assets/components/PickAddon"


function App() {

  // State for Holding the form input information
  const [formValue, setFormValue] = useState({
    username: "",
    email: "",
    phoneNo: ""
  })

  const [active, setActive] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [billing,setBilling] = useState(0)

console.log(toggle)

  const [component] = useState(
    [
      <PersonalInfo formValue={formValue} setFormValue={setFormValue} active={active} setActive={setActive} />, <SelectPlan toggle={toggle} setToggle={setToggle} billing={billing} setBilling={setBilling} />, <PickAddon />
    ]
  )


  // FOR CYCLING THROUGH THE PAGES
  const PageToggle = () => {
    if (num === 1) {
      return <PersonalInfo formValue={formValue} setFormValue={setFormValue} active={active} setActive={setActive} />
    }
    else if (num === 2) {
      return <SelectPlan toggle={toggle} setToggle={setToggle}  billing={billing} setBilling={setBilling}  />
    }
    else {
      return <PickAddon toggle={toggle}/>
    }
  }
  const [num, setNum] = useState(1)



// for next button
  const next = (e) => {
    if (num === component.length) {
      return
    }

    if (formValue.phoneNo.trim() === "") {

      setActive(false)

      return
    }

    setActive(true)

    setNum(num + 1)
  }

// for previous button
  const prev = () => {
    setNum(num - 1)
    setFormValue({ ...formValue, username: "kfkfk" })

  }



  return (
    <div className='container' >
      <div className='box1' >
        {/* <pre> {JSON.stringify(formValue,undefined,2)}</pre> */}
           {/* <pre> {JSON.stringify(billing,undefined,2)}</pre> */}
        <div className='formStep' >
          <div className={num >= 1 ? "completed" : ""} > 1 </div>
          <div className={num >= 2 ? "completed" : ""}> 2 </div>
          <div className={num >= 3 ? "completed" : ""}> 3 </div>
          <div className={num === 4 ? "completed" : ""} > 4 </div>
        </div>
      </div>
      <div className='box2' >


        <div>
          {PageToggle()}
          {/* <SelectPlan toggle={toggle} setToggle={setToggle} billing={billing} setBilling={setBilling} /> */}
          {/* <PickAddon  toggle={toggle}  /> */}
        </div>
        <footer className='footer'>
          <button onClick={prev} className='button1' disabled={num === 1}> Go Back   </button>
          <button onClick={next} className='button2'> Next Step</button>
        </footer>
      </div>


    </div>
  );
}

export default App;
