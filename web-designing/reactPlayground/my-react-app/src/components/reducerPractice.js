import {useEffect, useReducer, useState} from 'react'

const reducerIntials={
    loading: false,
    downloading: false,
    downloaded: false
}

function reducerFunction(state, action){
    switch(action.process){
        case 'loading':
            return {...state, loading: true}
        case 'downloading':
            return {...state, downloading:true, loading: false}
        case 'downloaded':
            return {...state, downloading:false, downloaded: true}
        default:
            return state
    }
}


export function Reducer2(){
    const[state, changeState] = useReducer(reducerFunction, reducerIntials);

    async function handleClick(){
        changeState({process:'loading'})

        await setTimeout(()=>changeState({process:'downloading'}),1000)

        await setTimeout(()=>changeState({process:'downloaded'}),2000)
        
    }

    // function myCalculator(num1, num2, myCallback) {
    //     let sum = num1 + num2;
    //     myCallback(sum);
    //   }
      
    console.table(state)

    return <>
        <div style={styles.root}>
            <button  style={{fontSize: '2rem',backgroundColor:'greenyellow',border:'2px dotted red'}} onClick={handleClick}>click me to start download</button>

            {state.loading && (<h1>Loading</h1>)}
            {state.downloading && (<h1>Downloading</h1>)}
            {state.downloaded && (<h1>Downloaded</h1>)}
        </div>
    </>

}


const styles={
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'column',
        marginTop: '100px',
    }
}