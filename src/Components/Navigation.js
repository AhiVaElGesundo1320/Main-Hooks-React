import React from 'react'
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Efecto } from './Efecto'
import { Contexto } from './Contexto'
import { Ref } from './Ref'
import { Reducer } from './Reducer'
import { Layout } from './Layout'
import { Main } from './Main'
import { Estado } from './Estado'
import { TaskList } from './TaskList con Reducer/TaskList'
import { LoginSingin } from './Estado Props/LoginSingin'
import { PruebaDeContexto } from './ContextoEjemplo/PruebaDeContexto'
import { Principal } from './ContextoEjemplo/ContextoFolder/Principal'
import { Timer } from './EfectoTimer/Timer'
import { Counter } from './Counter/Counter'
import { CounterWithRef } from './Ref ejemplos/CounterWithRef'
import { Cronometro } from './Ref ejemplos/Cronometro'
import { Focus } from './Ref ejemplos/Focus'
import { Mensaje } from './Ref ejemplos/Mensaje'
//import { TaskList } from './TaskList con Reducer/TaskList'
export const Navigation = () => {
  return (
    
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Main />}/>
                    <Route path='estado' element={<Estado />}/>
                    <Route path='efecto' element={<Efecto />}/>
                    <Route path='contexto' element={<Contexto />}/>
                    <Route path='ref' element={<Ref />}/>
                    <Route path='reducer' element={<Reducer />}/>
                    <Route path='taskList' element={<TaskList/>}/>
                    <Route path='loginSingin' element={<LoginSingin/>}/>
                    <Route path='pruebadecontenxto' element={<PruebaDeContexto/>}/>
                    <Route path='principal' element={<Principal/>}/>
                    <Route path='timer' element={<Timer/>}/>
                    <Route path='counter' element={<Counter/>}/>
                    <Route path='contadorRef' element={<CounterWithRef/>}/>
                    <Route path='cronometro' element={<Cronometro/>}/>
                    <Route path='focus' element={<Focus/>}/>
                    <Route path='mensaje' element={<Mensaje/>}/>
                </Route>
            </Routes>
        </BrowserRouter>

        
    </div>

  )
}
