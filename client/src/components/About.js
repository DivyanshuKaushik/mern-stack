import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

const About = () => {

    const history = useHistory()

    const showAbout = async()=>{
        try{
            const res = await fetch('/about',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });
            const data = await res.json()
            console.log(data)
            if(!res.status===200){
                throw new Error(res.error)
            }

        }catch(e){
            console.log(e)
            history.push('/signin')
        }
    }

    useEffect(()=>{ 
        showAbout();
         // eslint-disable-next-line
    },[])

    return (
        <div>
            my secret page
        </div>
    )
}

export default About
