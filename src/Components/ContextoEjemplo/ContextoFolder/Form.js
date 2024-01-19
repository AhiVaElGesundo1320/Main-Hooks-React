import React from 'react'
import { Button } from './Button'
import { Panel } from './Panel'

export const Form = ({children}) => {
  return (
    <div>
        <form>
            <Panel title='Welcome'>
            <div className='my-5'>
            <Button>
                Sing up
            </Button>
            </div>
            <Button>
                Login
            </Button>
            </Panel>
        </form>
    </div>
  )
}
