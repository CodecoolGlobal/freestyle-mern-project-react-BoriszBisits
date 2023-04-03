import React, { useEffect } from 'react'
import { useState } from 'react';

function Council({ onBack, characters }) {

    const [myCouncil, setMyCouncil] = useState([])
    const [input, setInput] = useState("");
    const [select, setSelect] = useState(undefined)

    useEffect(() => {
        
        
        }
    
    , [])

    const handleChange = (value) => {
        setInput(value);




        const result = characters.filter((element) => {
            return (
                value &&
                element &&
                element.name &&
                element.name.toLowerCase().includes(value.toLowerCase())
            );
        });
        setSelect(result)
        console.log(select)

    };

    function handleAddMemberToCouncli(addMember) {

        
         fetch(`/api/council/${addMember}` , {method:'POST'})
        setMyCouncil([...myCouncil, addMember])
    
        console.log(myCouncil)
    }


    return (
        <div>
            <input
                placeholder="Type for search"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
            {select && select.map((element, i) =>

            (<h1 key ={i}>{element.name}
                <button onClick={() => handleAddMemberToCouncli(element.name)}>Add To Council</button>
            </h1>
            ))}

            {myCouncil && Array.isArray(myCouncil) && myCouncil.map((member, i) => (
                <h1 key ={i}>
                    {member}
                    <button>Kill</button>
                </h1>
            ))}
        </div>
        
    );
};



export default Council
