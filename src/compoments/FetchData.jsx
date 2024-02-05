import React, { useEffect, useState } from 'react'

export default function FetchData() {
    const [data, setData] = useState([])
 

    useEffect(() => {
        async function FTCData (){
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
                if (response.ok) {
                    console.log('Promise resolved and HTTP status is successful');
                    // ...do something with the response
                    const data = await response.json();
                    setData(data)
                } else {
                    // Custom message for failed HTTP codes
                    if (response.status === 404) throw new Error('404, Not found');
                    if (response.status === 500) throw new Error('500, internal server error');
                    // For any other server error
                    throw new Error(response.status);
                }
            } catch (error) {
                console.error('Fetch', error);
                // Output e.g.: "Fetch Error: 404, Not found"
            }
        }

        FTCData()
    }, [])

    return (
        <div>
            {data.map((d, idx) => (
                <p key={idx}>{d.title}</p>
            ))}
        </div>
    )
}
