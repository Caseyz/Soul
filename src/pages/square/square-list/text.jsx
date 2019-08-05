import React, {useState,useRef} from 'react'

export default (text)=>{
    const [textHeight, setTextHeight] = useState(null);
    const textEl = useRef(null);
    return (
        <h6 ref={ textEl }>
            {text}
        </h6>
    )
}