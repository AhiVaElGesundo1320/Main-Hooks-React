import React, { useContext } from 'react'
import { ThemeContext } from './Principal';

export const Panel = ({ title, children}) => {
    const theme = useContext(ThemeContext)
    const className = 'panel-' + theme;
  return (
    <section className={className}>
        <h2>{title}</h2>
        {children}
    </section>
  )
}
