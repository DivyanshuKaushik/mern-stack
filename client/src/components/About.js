import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

const About = () => {

    const history = useHistory()

    const [user, setUser] = useState({})
    const showAbout = async () => {
        try {
            const res = await fetch('/api/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json()
            // console.log(data)
            setUser(data)
            if (!res.status === 200) {
                throw new Error(res.error)
            }

        } catch (e) {
            console.log(e)
            history.push('/signin')
        }
    }

    useEffect(() => {
        showAbout();
        // eslint-disable-next-line
    }, [])

    return (
        <div className="flex justify-center items-center h-64">
            {user &&
                <div>
                    <h3>{user.name}</h3>
                    <h3>{user.email}</h3>
                    <h3>{user.phone}</h3>
                </div>}
        </div>
    )
}

export default About
