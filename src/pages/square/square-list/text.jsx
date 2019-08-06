import React, {useState, useEffect} from 'react'

  function useShow(elHeight){
    const [show, setshow] = useState(false);
    useEffect(()=>{
        function showClick(){
            console.log(1,elHeight)
            setshow(!show)
            if(show){
                elHeight.style.height = "500px"
            }else{
                elHeight.style.height = "100px"
    
            }
        }
    })

    return showClick
}

export default useShow