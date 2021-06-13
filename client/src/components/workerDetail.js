import axios from 'axios';
import React, { useRef, useState } from 'react'

export default function WorkerDetail(props) {
    
        const [allEmploye, setAllEmploye] = useState(null)
        axios.get('http://localhost:4000/getAllEmploye').then(
            res => {
                setAllEmploye(res.data)
            },
            err => console.log(err)

        )
    
    return (
        <>
            {allEmploye &&
                <ul>
                    {allEmploye.map ((item) => <li>
                        name:{item.name} status{item.status}
                    </li>)}
                </ul>}:<div></div>
        </>
    )
}