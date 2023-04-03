import React, { useEffect } from 'react'
import { useState } from 'react';

function Council({ onBack, characters }) {

    const [myCouncil, setMyCouncil] = useState([])
    const [input, setInput] = useState("");
    const [select, setSelect] = useState(undefined)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/characters');
            const data = await res.json();
            setMyCouncil(data);
        }
        fetchData()
    }, [])

    const handleChange = (value) => {
        setInput(value);




        const result = characters.filter((element) => {
            return (
                value &&
                element &&
                element.fullName &&
                element.fullName.toLowerCase().includes(value.toLowerCase())
            );
        });
        setSelect(result)
        console.log(select)

    };

    function handleAddMemberToCouncli(addMember) {
        // fetch(`/api/council/${addMember}` , {method:'POST'})
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
            {select && select.map((element) =>

            (<h1>{element.fullName}
                <button onClick={() => handleAddMemberToCouncli(element.fullName)}>Add To Council</button>
            </h1>
            ))}

            {myCouncil && Array.isArray(myCouncil) && myCouncil.map((member) => (
                <h1>
                    {member.fullName}
                    <button>Kill</button>
                </h1>
            ))}
        </div>
        
    );
};



export default Council
