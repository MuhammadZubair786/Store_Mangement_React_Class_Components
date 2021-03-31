const set_data = (data) => {
    // console.log("Dispatch Data :",data)
    return (dispatch) => {
        // console.log("Dispatch Data :",data)
        dispatch({
            type: 'setdata',
            data: data
        })
        // console.log("My data ",data)
    }
}

const delete_data = (key) =>{
    return(dispatch)=>{
        // console.log("Delete Data ",key)
        dispatch ({
            type : 'DeleteData',
            key : key
        })
    }
}

export { set_data,delete_data }