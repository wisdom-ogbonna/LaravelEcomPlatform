import React, { useEffect } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'
import axiosClient from '../axios-client'

function DefaultLayout() {
  const { user, token, setUser, setToken,} = useStateContext()
  console.log(user)

  if (!token) {
    return <Navigate to='/login' />
  }

  const onLogout = (ev)=>{
    ev.preventDefault()

    axiosClient.post('/logout')
    .then(() => {
      setUser({})
      setToken(null)
    })
  }

  useEffect(() => {
    axiosClient.get('/user')
      .then(({data}) => {
         setUser(data)
      })
  }, [])


  return (
    <div id="defaultLayout">
      <aside>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/users'>Users</Link>
      </aside>
      <div className='content'>
        <header>
          <div>
            header
          </div>
          <div>
            {user.name}
            <a href="#" onClick={onLogout} className='btn-logout'>LogOut</a>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>

    </div>
  )
}

export default DefaultLayout