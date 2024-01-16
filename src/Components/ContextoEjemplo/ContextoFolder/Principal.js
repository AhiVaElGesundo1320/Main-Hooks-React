import React, { createContext, useState } from 'react'
import { Form } from './Form'

export const ThemeContext = createContext(null)

export const Principal = () => {
    const [theme, setTheme] = useState('light')
    
  return (
    <div>
        <ThemeContext.Provider value={theme}>
            <Form />
            <label>
                <input 
                    type='checkbox'
                    checked={theme === 'dark'}
                    onChange={e => {
                        setTheme(e.target.checked ? 'dark' : 'light');
                    }}
                />
                Use Dark Mode
            </label>
        </ThemeContext.Provider>
    </div>
  )
}
