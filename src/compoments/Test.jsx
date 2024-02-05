import React, { useEffect, useRef, useState } from 'react'
import Input from './Input';
import Button from './Button';
import RenderExample from './RenderExample';
import DependencyExample from './DependencyExample';

export default function Test() {
    const [input, setInput] = useState('');
    const count = useRef(1)

    const inputRef = useRef(1)


    useEffect(() => {
        // setCount(prevState => prevState + 1)
        count.current += 1
        console.log('test component')

    }, [])


    const inputHandler = () => {
        console.log(inputRef);

        const value = inputRef.current.value;

        if (!value) inputRef.current.focus()
        else alert(value)
        setInput("")
    }



    return (
        <div>
            {/* <App /> */}



            <div style={{
                textAlign: "center",
                padding: '100px'
            }}>
                <Input ref={inputRef} type="text" name="textName" value={input} id="ipuser" onChange={(e) => setInput(e.target.value)} />
                <Button onClick={inputHandler} Text={"Submit somthing"} />

            </div>

            <hr />

            <p>Here is your input value '{input}'</p>
            <h1>Renderrd '{count.current}'</h1>

            <RenderExample />

            <DependencyExample />
        </div>
    )
}
