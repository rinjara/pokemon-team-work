import { NavBar } from 'components/NavBar/NavBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const SharedLayout = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
    </div>
  )
}
