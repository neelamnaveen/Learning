import React from 'react'
import {useEffect, useState} from 'react'

function Counter2() {
    const[counter, incCounter] = useState(1);

    useEffect(
        ()=>{
            const interval= setInterval(()=>incCounter(prev=>prev+1),1000)

            return ()=>{clearInterval(interval)}

        }
        ,[])

    
  return (
    <div>Counter value is : {counter}</div>
  )
}

export default Counter2