import React from 'react'

const Testform = ({ data, setData, active }) => {
    const names = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    return (
        <div>
            <input
             className={
                active?"":"styles"
            }
            key={123}
                type="text"
                name='username'
                placeholder='e.g. Stephen King'
                onChange={names}
                value={data.username}
            />
            <br />
            <label>Email Address </label>
            <br />
            <input
            className={
                active?"":"styles"
            }
            key={1e23}
                type="email"
                name='email'
                placeholder='e.g. Stephenking@lorem.com'
                onChange={names}
                value={data.email}
            />
        </div>
    )
}

export default Testform