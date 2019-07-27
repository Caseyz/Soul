
const asyncLoadFocusListData =(dispatch)=>{
    fetch(url).then((response)=>{
        return response.json
    }).then((ret)=>{
        dispatch(ret) 
    })
}

export{

}