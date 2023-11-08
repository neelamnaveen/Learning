import react, { useState } from 'react' 
import { useReducer, useEffect, useRef } from 'react'

export function ReducerTest(){

    const [countdown, setCountDown]= useState(1);
    const rand1= useRef(1);

    // useEffect(
    //     ()=>{setTimeout(()=>setCountDown(prev=>prev+1),100)},
    //     [countdown]
    // )
    const handleClick=()=>{window.location.reload()};
    useEffect(
        ()=>{setTimeout(()=>rand1.current+=1,100) },
        [rand1]
    )

    return <>
        <p style={{fontSize:'10rem'}}>Timer is this : {countdown}</p>
        <p style={{fontSize:'10rem'}}>Ref T is this : {rand1.current}</p>

        <button onClick={handleClick}>clicckj me rey</button>
    </>

}



