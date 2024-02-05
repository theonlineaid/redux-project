import React from 'react'

const Button = (({onClick, Text}) => {
    return (
        <button type="submit" onClick={onClick}>{Text}</button>
    )
})

export default Button