import React from 'react'

const mystate = {
    data: ['asad']
}

export default (state = mystate, action) => {
    {
        switch (action.type) {

            case 'setdata':
                return {
                    ...mystate,
                    data: [...mystate.data,action.payload]
                }


        }

        return state
    }
}