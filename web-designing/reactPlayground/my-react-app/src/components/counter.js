import { useEffect, useReducer, useState } from 'react'
const intials=[
  {
   loading: false,
   title: 'step1',
   error: false
  },
  {
    loading: false,
    title: 'step2',
    error: false
  },
]

const reducer=(state, action)=>{
  switch(action.type){
    case 'loading':
      return state.map((value)=>{
        if(value.title === action.title){
          return {...value, loading:true}
        } else {
          return value;
        }
      })
    case 'error':
      return state.map((value)=>{
        if(value.title == action.title){
          return {...value, error:true}
        } else {
          return value;
        }
      })
    default:
      console.log(state)
      return state;
  
  }
}

export function Counter() {
   const [state, dispatch]= useReducer(reducer, intials)
    
   const handleClick=()=>{
    dispatch({type:'error',title:'step1'})
   }

   useEffect(()=>console.log(state)
    ,[state])
   return <>
      <button type='submit' onClick={handleClick} size='40px'> Click me</button>
   </>
  }

export function SecondComponent(
  prop
){
  return <>
    <div><h1>Prop from parent: {prop.name}</h1></div>
  </>
}


  const styles={
    inputBoxContainer:{
      display:'flex',
      justifyContent:'center',
      marginTop: '10%',
    },
    inputBox:{
      display:'flex',
      borderRadius:'0.1rem',
      justifyContent:'space-around',
      backgroundColor: '#6060c28a',
      height: '40px',
      width:'50%',
      alignItems:'center',
    },
    table:{
      // display:'flex',
      // alignItems:'center'
      border:'1px solid black',
      width: '50%',
      margin: '25%',
      // marginTop: '10%'
      
    },
    row:{
      border:'1px solid black',
    },
    tableHeader:{
      // display:'flex',
      border:'1px solid black',
      // justifyContent: 'space-between'
    },
  }

  