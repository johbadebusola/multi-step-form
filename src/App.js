import React,{useState} from 'react';
import './App.css';
import PersonalInfo from "./assets/components/PersonalInfo"
import SelectPlan from "./assets/components/SelectPlan"
import "./assets/css/sidebar.css"
import PickAddon from "./assets/components/PickAddon"
function App() {
  const [component] = useState(
    [
<PersonalInfo/>,<SelectPlan/>,<PickAddon/>
    ]
  )
  return (
    <div className='container' >
      <div className='box1' >

      </div>
      <div className='box2' >

      <div>
        {component[1]}
      </div>
        <footer className='footer'>
        <button className='button1'> Go Back</button>
        <button className='button2'> Next Step</button>
        </footer>
      </div>


    </div>
  );
}

export default App;
