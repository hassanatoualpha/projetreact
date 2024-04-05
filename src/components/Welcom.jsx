

function Welcom({persons}) {
    return( <>
        <h2>BIENVENUE {} </h2>
        <div>
            
                <ul>
                    {
                        persons.map((person)=>{
                            return <li key={person.id}>{person.nom} </li>
                        }
                        )
                    }
                </ul>
            </div>
            </>
    )
    
}
export default Welcom