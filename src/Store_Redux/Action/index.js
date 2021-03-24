const set_data =  (data)=>{
return(dispatch)=>{
    dispatch({type:'setdata',data:data})
    console.log(data)
}
}

export {set_data}