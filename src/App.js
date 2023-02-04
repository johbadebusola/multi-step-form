import React, { useState} from 'react';
import './App.css';
import PersonalInfo from "./assets/components/PersonalInfo"
import SelectPlan from "./assets/components/SelectPlan"
import "./assets/css/sidebar.css"
import PickAddon from "./assets/components/PickAddon"
import Testform from './assets/components/Testform';
import Testform2 from './assets/components/Testform2';

function App() {
   
    const [formValue,setFormValue] = useState({
      username: "",
      email: "",
      phoneNo: ""
    })

    const [active, setActive] = useState(false)

    const [component] = useState(
      [
        <PersonalInfo formValue={formValue} setFormValue={setFormValue} active={active} setActive={setActive} />, <SelectPlan />, <PickAddon />
      ]
    )

    const PageToggle = () => {
        if (num === 1) {
          return  <PersonalInfo formValue={formValue} setFormValue={setFormValue} active={active} setActive={setActive} />
        }
        else if (num === 2) {
          return <SelectPlan />
        }
        else {
          return <PickAddon />
        }
      }
    const [num, setNum] = useState(1)
  



    const next = (e) => {
      if (num === component.length) {
        return
      }

      if (formValue.phoneNo.trim() === "") {
      
        setActive(false)
    
        return
      }
      console.log(formValue.username)
      setActive(true)
   
      setNum(num + 1)
    }

   
    const prev = () => {
      setNum(num - 1)
      setFormValue({ ...formValue, username: "kfkfk" })

    }

  console.log(active)
    return (
      <div className='container' >
        <div className='box1' >
          {/* <pre> {JSON.stringify(formValue,undefined,2)}</pre> */}

        </div>
        <div className='box2' >

          <div>
            {/* {PageToggle()} */}
            <SelectPlan />
          </div>
          <footer className='footer'>
            <button onClick={prev} className='button1' disabled={num === 1}> Go Back   </button>
            <button onClick={next} className='button2'> Next Step</button>
          </footer>
        </div>


      </div>
  );

  // const [data, setData] = useState({
  //   username: "",
  //   email: ""
  // })
  // const [active, setActive] = useState()


  // const PageToggle = () => {
  //   if (num === 1) {
  //     return <Testform data={data}  setData={setData} active={active} />
  //   }
  //   else if (num === 2) {
  //     return <Testform2  />
  //   }
  // }

  
  // const [num, setNum] = useState(1)

  // const next = () => {
  //   if (data.username.length === 0) {
  //     setActive(false)
  //     return
  //   }
  //   if (data.email.length === 0) {
  //     setActive(false)
  //     return
  //   }
  //   setNum(num + 1)
  //   setActive(true)

  // }

  // const prev = () => {
  //       setNum(num - 1)
        
  //     }
  // console.log(active)
  // return (
  //   <div>
  //     <pre> {JSON.stringify(data, undefined, 1)}</pre>
  //     {/* <Testform data={data} setData={setData} active={active} /> */}
  //     {PageToggle()}

  //     <button onClick={prev} className='button2'> Prev </button>
  //     <button onClick={next} className='button2'> Next Step</button>
  //   </div>
  // )
}

export default App;
