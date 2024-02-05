import React from 'react'

const SearchField = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props} />
    )
})

export default SearchField