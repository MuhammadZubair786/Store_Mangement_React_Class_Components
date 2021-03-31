import React from 'react'

const mystate = {
    
    data: [
        {
            name : 'ZUBAIR' ,
            email : 'mzhassan444@gmail.com'
        },
        {
            name : 'ghous Ahmed',
            email : 'ghous@gmail.com'
        }
    ]
}

export default (state = mystate, action) => {
    console.log(action)
    console.log("Store Data :",state)
    switch(action.type){
       
        case 'setdata':
            return({
             ...state,
             data : [...state.data,action.data]
            
         })

         case "DeleteData":
             return({
                ...state,
                data: state.data.filter((item, index) => index !== action.key)
             })

        default :
        return state
            
    // }
    }
}