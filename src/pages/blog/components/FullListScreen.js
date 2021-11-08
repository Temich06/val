import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid, Typography } from '@material-ui/core'

import DataBlog from '../../../Data/BlogData'
import { CardBlog, Button } from '../../../components'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: 40,
        marginBottom: 20,
    },
    content: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 20
    },
    Grid: {
        width: '100%',
        height: 440,
        overflow: 'hidden',
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
    titleBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}))

const FullListScreen = () => {
    const [change, setChange] = useState(true)
    const classes = useStyles()
    const added = () => {
        document.getElementById('Content').style.overflow = 'auto'
        document.getElementById('Content').style.height = '100%'
        setChange(false)
    }
    const remove = () => {
        document.getElementById('Content').style.overflow = 'hidden'
        document.getElementById('Content').style.height = '430px'
        setChange(true)
    }
    return (
        <Box className={classes.root}>
            <Box className={classes.titleBox}>
                <Typography variant="h5">Все блоги</Typography>
                {change ?
                    <Button text="Покозать все" onClick={() => added()} />
                    : <Button text="Закрыть" onClick={() => remove()} />}
            </Box>
            <Grid container className={classes.Grid} id="Content">
                {DataBlog.map((item, index) => (
                    <Grid item lg={3} xl={3} sm={4} xs={10} md={3} style={{ marginTop: 20, }}>
                        <CardBlog key={index} img={item.img} title={item.title} description={item.description} id={item.id} date={item.date} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default FullListScreen