import React from 'react'
import { Button } from './Button'
import { Panel } from './Panel'

export const Form = ({children}) => {
  return (
    <div>
        <form>
            <Panel title='Welcome'>
            <Button>
                Sing up
            </Button>
            <Button>
                Login
            </Button>
            </Panel>
        </form>
    </div>
  )
}
