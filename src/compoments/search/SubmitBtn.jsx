import React from 'react'

const SubmitBtn = (({onClick, Text}) => {
    return (
        <button type="submit" onClick={onClick}>{Text}</button>
    )
})

export default SubmitBtn