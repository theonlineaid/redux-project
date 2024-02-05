import React, { memo, useCallback } from 'react'

// https://medium.com/globant/javascript-optimization-techniques-20d8d167dadd 

import { useEffect, useState} from "react";

// this is our child component we want to optimize
const ChildComponent = memo(({ callback }) => {
  console.log("Child was rendered...");
  return <button onClick={callback}>Click me!</button>;
});


export default function ReactCallBack(props) {
   // here we have some states and variables.
   const [color, setColor] = useState("#ff22ff");
   const [otherState, setOtherState] = useState(false);
   const otherVariables = "other variables...";
 
  //  // this is our callback we want to cache.
  //  const callbackFn = () => {
  //    console.log("Hello, you clicked!");
  //  };
   
   // this is our callback we want to cache.
  const callbackFn = useCallback(() => {
    console.log("Hello, you clicked!");
  }, [props, otherState, otherVariables]); 
   

   // this is for trigger a re-render by updating state.
   useEffect(() => {
     setTimeout(() => {
       setColor("#00ddd2");
     }, 3000);
   }, []);
 
   // this is our child component, with the callback passed as prop.
   return <ChildComponent callback={callbackFn} />;
}
