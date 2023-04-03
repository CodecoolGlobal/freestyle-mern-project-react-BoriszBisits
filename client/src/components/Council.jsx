import React from 'react'
import { useState } from 'react';

function Council({ onBack, characters }) {


    const [input, setInput] = useState("");
    const [select, setSelect] = useState(undefined)

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
   

    return (
        <div>
            <input
                placeholder="Type for search"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
            {select && select.map((element) =>

            (<h1>{element.fullName}
                <button >Add To Council</button>
            </h1>
            ))}

        </div>
    );
};



export default Council
