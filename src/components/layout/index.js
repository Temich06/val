import React, { useReducer } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import Notification from '../UI/notification'
import { stateReducer } from '../../reducer'

import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

import { DispatchContext, StateContext, defaultStore } from '../../store/index'

const useStyles = makeStyles(() => ({
    container: {
        minHeight: 600
    }
}))

const Layout = ({ children }) => {
    const [state, dispatch] = useReducer(stateReducer, defaultStore)
    const classes = useStyles()
    const navigate = useParams()
    console.log(navigate)
    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                <Header />
                <Notification />
                <Box className={classes.container}>
                    {children}
                </Box>
            </StateContext.Provider>
        </DispatchContext.Provider >
    )
}

export default Layout