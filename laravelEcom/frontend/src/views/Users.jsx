import React, { useEffect, useState } from 'react'
import axiosClient from '../axios-client';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUser()
  }, [])

  const getUser = () => {
    setLoading(true)
    axiosClient.get('/users')
      .then(([data]) => {
        setLoading(false)
        console.log(data)
      })
      .catch(()=>{
        setLoading(false)
      })
  }

  return (
    <div>Users Dashboard</div>
  )
}

export default Users