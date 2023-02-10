import React from 'react'

import "../css/FinishingUp.css"
const FinishingUp = ({setnum,billing}) => {
    return (
        <div className='Finishing-container'>
            <h2> Finishing up</h2>
            <p> Double-check everything looks Ok before confirming.</p>
<div className='box'>
    <div>
    <p className='p1'>Arcade (Monthly)</p>
<p className='p2' style={{textDecoration:"underline"}} onClick={() => setnum(2)}> Change</p>
    </div>
 <p className='p3'>{billing}</p>
</div>

        </div>
    )
}

export default FinishingUp