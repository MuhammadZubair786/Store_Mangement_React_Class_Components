const set_data = (data) => {
    // console.log("Dispatch Data :",data)
    return (dispatch) => {
        dispatch({
            type: 'setdata',
            payload: data
        })
        // console.log("My data ",data)
    }
}

export { set_data }