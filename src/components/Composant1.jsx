
import {useEffect } from "react";


function Composant1() {
    useEffect( ()=>{
        setTimeout(() => {
            document.title="premier composant"
        }, 5000);
    })
    return <div>ceci est un autre composant</div>
    
}
export default Composant1