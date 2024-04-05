import {useEffect} from "react";

function Composant2() {
    useEffect( ()=>{
        document.title ="deuxième composant"
    })
    return <div>ceci est le deuxième composant</div>
    
}
export default Composant2
