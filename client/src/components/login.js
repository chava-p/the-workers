import axios from 'axios';
import React, { useRef } from 'react'

export default function Login(props)
{
    let email=useRef('');
    let password=useRef('')
    function checkPermission(){
        axios.post('http://localhost:4000/checkPermission',{password:password.current.value,email:email.current.value}).then(
            res=>{
                localStorage.setItem('current',JSON.stringify({tafkid:res.data.tafkid,currentWorker:res.data.worker}) )
                //alert(res)
            },
            err=>console.log(err)

        )
    }
    return(
        <>
            <label>
                email:<input ref={email}></input>
            </label>
            <label>
                password:<input ref={password}></input>
            </label>
            <br />
            <button onClick={checkPermission}>send</button>
        </>
    )
}