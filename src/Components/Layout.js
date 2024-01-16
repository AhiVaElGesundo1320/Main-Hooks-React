import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className='relative'>
        <nav className='flex flex-row justify-around w-full py-5 sticky top-0' style={{backgroundColor:'gray'}}>
            <ul className='flex flex-row justify-around  w-full'>
                <li>
                    <NavLink end to='/'>Main</NavLink>
                </li>
                <li>
                    <NavLink to='/estado'>Estado</NavLink>
                </li>
                <li>
                    <NavLink to='/efecto'>Efecto</NavLink>
                </li>
                <li>
                    <NavLink to='/contexto'>Contexto</NavLink>
                </li>
                <li>
                    <NavLink to='/ref'>Ref</NavLink>
                </li>
                <li>
                    <NavLink to='/reducer'>Reducer</NavLink>
                </li>              
            </ul>
        </nav>
        <hr />
        <Outlet />
    </div>
  )
}
