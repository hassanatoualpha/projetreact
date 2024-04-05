import {useState  } from "react";
import Composant1 from "./composant1";
import Composant2 from "./composant2";


function ToggleComponent() {
    const [showFirstComponent,setshowcomponent]=useState(false);
    const ToggleComponent=()=>{
        setshowcomponent(!showFirstComponent);
    };
    return(
        <div>
            <button onClick=  {ToggleComponent} >Afficher </button>
            { showFirstComponent?<Composant1></Composant1>:<Composant2></Composant2>}
        </div>
    )
    
}export default ToggleComponent

