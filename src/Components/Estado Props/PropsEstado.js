import React from 'react'

export const PropsEstado = ({ isActive, onShow, title, children, buttonName}) => {
  return (
    <section className='flex flex-col  items-center'>
        <h1>{title}</h1>
        {isActive? (
          <h2>{children}</h2>
        ) : (
          <button style={{color:'gray'}} onClick={onShow}>{buttonName}</button>
        )}
    </section>
  )
}
