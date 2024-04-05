import { useState } from "react"

function Increment() {

    const [nbr, setnbr]=useState(0)
    
    

    function handleplus(){
        return(
            setnbr(nbr+1)
        )

    }
    function handlemoins() {
        return(
            setnbr(nbr-1)
        )
        
    }
    return (
        <>
            <p> {nbr} </p>
            <button onClick={handleplus}>+</button>
            <button onClick={handlemoins}>-</button>
        </>
    )
    
    
}
export default Increment