import { useState } from "react"

function Villes() {

    const [villes, setvilles]=useState(
        [
            {id:1,nom:"conakry"},
            {id:2,nom:"dakar"},
            {id:3,nom:"paris"},
            {id:4,nom:"nework"},
            {id:5,nom:"london"},
            {id:6,nom:"berlin"},
            {id:7,nom:"pita"},
            {id:8,nom:"rome"},
        ]
    )
    
    

    // //function handleplus(){
    //     return(
    //         setnbr(nbr+1)
    //     )

    // }
    // function handlemoins() {
    //     return(
    //         setnbr(nbr-1)
    //     )
        
    // }
    return (
        <>
            {/* <p> {nbr} </p>
            <button onClick={handleplus}>+</button>
            <button onClick={handlemoins}>-</button> */}

           <div>
            
                <ul>
                    {
                        villes.map((ville)=>{
                            return <li key={ville.id}>{ville.nom} </li>
                        }
                        )
                    }
                </ul>
            </div>
        </>
    )
    
    
}
export default Villes