import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Input } from './Utility'

const Signup = () => {

    const history = useHistory()

    const [user,setUser] = useState({
        name:"",phone:"",email:"",password:"",cpassword:""
    })

    const handleInput = (e) => {
        // console.log(e.target.name,e.target.value)
        let name=e.target.name
        let value = e.target.value 
        setUser({...user,[name]:value})
    }
    const postData = async(e)=>{
        e.preventDefault()

        const data = await fetch("/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })
        const resp = await data.json()
        console.log(resp)
        alert(JSON.stringify(resp))
        if(data.status === 201){
            history.push("/signin")
        }
    }
    return (
        <div className="grid place-items-center h-full w-full box-border">
            <h3 className="text-center text-2xl my-2 font-serif font-light text-gray-600">Sign Up</h3>
            <div className="flex flex-col lg:flex-row justify-center items-center w-3/4 shadow-xl py-8 rounded-lg">
                <div className="h-2/3 w-2/3 lg:h-2/5 lg:w-2/5">
                    <img src="/images/signup.png" className="object-contain h-full w-full" alt="signup" />
                </div>
                <form method="POST" className="flex flex-col justify-center items-center lg:items-start w-full lg:w-2/5 h-full lg:pl-8">
                    <Input type="text" value={user.name} func={handleInput} place="Enter Your Name" name="name" />
                    <Input type="phone" value={user.phone} func={handleInput} place="Enter Your Phone" name="phone" />
                    <Input type="email" value={user.email} func={handleInput} place="Enter Your Email" name="email" />
                    <Input type="password" value={user.password} func={handleInput} place="Enter Your Password" name="password" />
                    <Input type="password" value={user.cpassword} func={handleInput} place="Confirm Password" name="cpassword" />
                    <Button name="Sign Up" func={postData} />
                </form>
            </div>
        </div>
    )
}

export default Signup

