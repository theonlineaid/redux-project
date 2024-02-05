import React from 'react'

export default function Js() {

    const debounce = (callback, time = 300) => {
        let timer;
      
        return () => {
          clearTimeout(timer);
          timer = setTimeout(callback, time);
        };
      };
    // this is the function we want to debounce
    const showMessage = () => console.log("Hello Message");

    // this is the debounced function with 1 second of delay
    const debouncedMessage = debounce(showMessage, 1000);

    // we are calling it 10000 times in this loop
    for (let i = 0; i < 10000; i++) {
        setTimeout(debouncedMessage, i);
    }

    return (
        <div>Js</div>
    )
}
