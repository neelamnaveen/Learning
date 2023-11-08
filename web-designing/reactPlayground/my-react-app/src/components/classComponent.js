
import {useReducer, component} from 'react'

class LifeCycleA extends component{
    constructor(props){
        super(props);

        this.state={
            name:'naveen'
        }
    }


    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
    }

    
} 

