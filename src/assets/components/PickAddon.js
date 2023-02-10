import React from 'react'
import "../css/PickAddon.css"
const PickAddon = ({toggle,onlineService,setOnlineService,largerStorage,customisable,setLargerStorage,setCustomisable}) => {

  
  return (
    <div>
      {!toggle ? (<Monthly onlineService={onlineService} setOnlineService={setOnlineService} largerStorage={largerStorage} customisable={customisable} setLargerStorage={setLargerStorage} setCustomisable={setCustomisable}     />) : (<Yearly  />)}

 </div>
  )
}



const Monthly = ({onlineService,setOnlineService,largerStorage,customisable,setLargerStorage,setCustomisable}) => {

  const onlineservice = () =>{
    setOnlineService(!onlineService)
   
  }

  
  const largerstorage = () =>{
    setLargerStorage(!largerStorage)
    console.log(`Larger ${largerStorage}`);
  }

  const customizable = () =>{
    setCustomisable(!customisable)
    console.log(`custom ${customisable}`);
  }

  return (
    <div className='pickAddon'>
 <h2> Pick add-ons</h2>
      <p> Add-ons help enhance your gaming experience.</p>

<div className={`box ${!onlineService?"":"toggle-select"}`}>

  <input
  type='checkbox'
  value={onlineService}
  onClick={onlineservice}
  />
   <div>
  <p className='p1'> Online service</p>
  <p className='p2'> Access to multiplayer games</p>
  </div>
  <p className='p3'> +$1/mo</p>
</div>



<div className={`box ${!largerStorage?"":"toggle-select"}`}>
  <input 
  type='checkbox'
  value={largerStorage}
  onClick={largerstorage}
  />
  <div className='boxx' >
  <p className='p1'> Larger Storage</p>
  <p className='p2'> Etra 1TB of cloud save</p>
  </div>
  <p className='p3'> +$2/mo</p>
</div>

<div className={`box ${!customisable?"":"toggle-select"}`} >
  <input 
  type='checkbox'
  value={customisable}
  onClick={customizable}
  />
   <div>
  <p className='p1'> Customizable profile</p>
  <p className='p2'> Custom theme on your profile</p>
  </div>
  <p className='p3'> +2/mo</p>
</div>

  </div>
  )


}

const Yearly = () => {
  return (
    <div className='pickAddon'>
 <h2> Pick add-ons</h2>
      <p> Add-ons help enhance your gaming experience.</p>

<div className='box' >
  <input 
  type='checkbox'
  />
   <div>
  <p className='p1'> Online service</p>
  <p className='p2'> Access to multiplayer games</p>
  </div>
  <p className='p3'> +$10/mo</p>
</div>

<div className='box' >
  <input 
  type='checkbox'
  />
   <div className='boxx'>
  <p className='p1'> Larger Storage</p>
  <p className='p2'> Etra 1TB of cloud save</p>
  </div>
  <p className='p3'> +$20/mo</p>
</div>

<div className='box' >
  <input 
  type='checkbox'
  />
   <div>
  <p className='p1'> Customizable profile</p>
  <p className='p2'> Custom theme on your profile</p>
  </div>
  <p className='p3'> +20/mo</p>
</div>

  </div>
  )
}

export default PickAddon