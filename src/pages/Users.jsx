import Link, { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Users () {
    const {id} = useParams()
    const [user, setUser] = useState({})

    async function fetchUser() {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setUser(data)
    }
    useEffect(()=> {
        fetchUser()
    },[])
}

export default Users;