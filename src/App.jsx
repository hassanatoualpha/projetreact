// import Home from "./components/Home";
// import Product from "./components/Product";
// import Increment from "./components/Increment";
// import Villes from "./components/Villes";
// import Navbar from "./components/nav";
import Welcom from "./components/Welcom";
import { useState } from "react";
import Counter from "./components/counter";
import ToggleComponent from "./components/effectcomponent";
import FormComponent from "./components/Formcomponent";


function App() {

  const [pers, setPers] = useState(
    [
      { prenom: "hasna", nom: "diallo" },
      { prenom: "amadou", nom: "diallo" },
      { prenom: "moussa", nom: "diallo" },
      { prenom: "soul", nom: "diallo" },
      { prenom: "karfalla", nom: "diallo" },
      { prenom: "hasna", nom: "diallo" },
      { prenom: "hasna", nom: "diallo" },

    ]
  )


  return (
    <>
      {/* <Home></Home>
      <Increment></Increment>
      <Villes></Villes>
      <Product></Product> */}
      {/* <Welcom persons={pers}></Welcom> */}
      <Counter></Counter>
      <ToggleComponent></ToggleComponent>
      <FormComponent></FormComponent>
    </>
  )
}

export default App
