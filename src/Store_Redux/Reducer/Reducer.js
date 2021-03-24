import React from 'react'

const my_state={
    data : [1,2,3,4,5]
}

export default (state=my_state,action)=>{
{
    console.log(action)
    switch(action.type){
        case 'setdata':
            console.log("Yes Call Me")
            return({
                ...state,
                data : action.data
            })
    }

    return state
}}