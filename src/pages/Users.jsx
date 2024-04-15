import Link, { useParams } from 'react-router-dom';
import { useState } from 'react';

function Users () {
    const {id} = useParams()
    const [user, setUser] = useState({})

    async function fetchUser() {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    }
}

export default Users;