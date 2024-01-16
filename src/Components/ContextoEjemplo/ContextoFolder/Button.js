import React, { useContext } from 'react'
import { ThemeContext } from './Principal';

export const Button = ({ children}) => {
    const theme = useContext(ThemeContext)
    const className = 'button-' + theme;
  return (
    <div>
        <button className={className}>
            {children}
        </button>
    </div>
  )
}
