import { useState } from "react"

export default function Team(){

    const [team , SetTeam] = useState(11);

    const handleAdd = () => {
        const newTeam = team + 1 ;
        SetTeam(newTeam);
    }
    const handleRemove = () => {
        const newTeam = team - 1 ;
        SetTeam(newTeam);
    }

    const teamStyle = {
        margin: '20px',
        padding:'20px',
        border: '2px solid red',
        boxShadow:'0px 0px 30px red',
        borderRadius:'20px'
    }

    return (
        <div style={teamStyle}>
            <h2>Player : {team}</h2>
            <button onClick={handleAdd} >ADD</button>
            <button onClick={handleRemove} >Remove</button>
        </div>
    )
}