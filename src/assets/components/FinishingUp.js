import React from 'react'

import "../css/FinishingUp.css"
const FinishingUp = ({ setnum, billing, toggle, onlineService, largerStorage, customisable, onlineServiceBilling, largerStorageBilling, customisableBilling,totalBilling,setTotalBilling }) => {
let bills = billing + onlineServiceBilling + largerStorageBilling + customisableBilling 

setTotalBilling(bills)

    return (
        <div className='Finishing-container'>
            <h2> Finishing up</h2>
            <p> Double-check everything looks Ok before confirming.</p>
            <div className='box'>
                <div>
                    <p className='p1'>Arcade (Monthly)</p>
                    <p className='p2' style={{ textDecoration: "underline" }} onClick={() => setnum(2)}> Change</p>
                </div>
                {
                    !toggle ? (<p className='p3'>{`$${billing}/mo`}</p>) : (<p className='p3'> {`$${billing}/yr`} </p>)
                }
            </div>
            <hr />

            <div>
                {
                    onlineService & !toggle ? (
                        <div className='double-check-cont'>
                            <div className='double-check' >
                                <p>Online service</p>
                            </div>
                            <p className='p3'>{`+$${onlineServiceBilling}/mo`}</p>
                        </div>

                    ) : ""
                }

                {
                    largerStorage & !toggle ? (
                        <div className='double-check-cont' >
                            <div className='double-check'>
                                <p>Larger storage</p>
                            </div>
                            <p className='p3'>{`+$${largerStorageBilling}/mo`}</p>
                        </div>

                    ) : ""
                }

                {
                    customisable & !toggle ? (

                        <div className='double-check-cont' >
                            <div className='double-check'>
                                <p>Customizable</p>
                            </div>
                            <p className='p3'>{`+$${customisableBilling}/mo`}</p>
                        </div>

                    ) : ""
                }

                <div>
                    {
                        !toggle ? (
                            <div className='double-check-total' >
                            <div className='double-check'>
                                <p>Total(per month)</p>
                            </div>
                            <p className='p3'>{`+$${totalBilling}/mo`}</p>
                        </div>
                       
                        
                        ) : (
                            <div className='double-check-total' >
                            <div className='double-check'>
                                <p>Total(per year)</p>
                            </div>
                            <p className='p3'>{`+$${totalBilling}/yr`}</p>
                        </div>
                        )
                    }

                </div>

            </div>



        </div>
    )
}

export default FinishingUp