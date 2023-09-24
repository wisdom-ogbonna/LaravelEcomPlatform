import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'

function DefaultLayout() {
  const { user, token } = useStateContext()
  console.log(user)

  if (!token) {
    return <Navigate to='/login' />
  }

  const onLogout = (ev)=>{
    ev.preventDefault()
  }

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