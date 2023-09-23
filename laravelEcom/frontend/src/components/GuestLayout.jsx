import React from 'react'
import { Outlet } from 'react-router-dom'

function GuestLayout() {
  return (
    <div>
        <h1>Hello</h1>
        <Outlet />
    </div>
  )
}

export default GuestLayout