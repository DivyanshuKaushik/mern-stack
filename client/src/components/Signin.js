import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Input, Button } from './Utility'

const Signin = () => {
    
    const history = useHistory()

    const [credentials,setCredentials] = useState({
        email:"",password:""
    })

    const handleInput = (e) => {
        let name=e.target.name
        let value = e.target.value 
        setCredentials({...credentials,[name]:value})
    }
    
    const loginUser = async(e)=>{
        e.preventDefault()
        const res = await fetch("/api/signin",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(credentials)
        })
        const data = await res.json()
        alert(JSON.stringify(data))
        if(res.status===200){
            history.push('/')
        }

    } 
    return (
        <div className="grid place-items-center h-screen w-full bg-gray-200">
            {/* <h3 className="text-center text-2xl my-2 font-serif font-light text-gray-600">Sign In</h3> */}
            <div className="flex flex-col lg:flex-row justify-center items-center w-3/4 shadow-xl py-8 rounded-lg bg-white">
                <div className="h-2/3 w-2/3 lg:h-2/5 lg:w-2/5">
                    <img src="/images/signin.png" className="object-contain h-full w-full" alt="signup" />
                </div>
                <form className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/3 h-full lg:pl-8">
                    <Input type="email" value={credentials.email} func={handleInput} place="Enter Your Email" name="email" />
                    <Input type="password" value={credentials.password} func={handleInput} place="Enter Your Password" name="password" />
                    <Button name="Sign In" func={loginUser} />
                </form>
            </div>
        </div>
    )
}

export default Signin
