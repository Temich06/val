import React from 'react'
import { Container, Grid, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        flexDirection: 'column',
        textAlign: 'center',
        paddingBottom: 200,
        color: 'black',
        paddingTop: 100
    },
    title__blue: {
        color: '#6658EA',
        textTransform: 'uppercase'
    },
    title: {
        marginBottom: 30,
        color: 'white',
        textShadow: '0px 2px 3px rgba(0, 0, 0, 0.25)',

    },
    line: {
        height: 65,
        border: "1px solid #DCE0F3",
        [theme.breakpoints.down('sm')]: {
            border: 'none',
            marginTop: 50
        },
    },
    Grid_Card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            marginTop: 10,
            marginBottom: 20
        },
    },
    Grid_Box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        backgroundColor: 'white',
        paddingTop: 40,
        paddingBottom: 40,
        borderRadius: 25,
        width: '90%'
    }
}));


const FirstBlog = () => {
    const classes = useStyles()
    let showChange = (param) => {
        if (window.innerWidth <= param) {
            return false
        } else {
            return true
        }
    }
    const object = [
        {
            description: 'мasdasdasdasd',
            number: '4',
            show: showChange(599)
        },
        {
            description: 'asdasdasdasd',
            number: '2020',
            show: showChange(599)
        },
        {
            description: 'иasdasdasd',
            number: '60000$',
            show: showChange(960)
        },
        {
            description: 'asdasdasdasd',
            number: '12',
            show: false,
        },
    ]
    return (
        <div>
            <Container className={classes.container}>
                <Typography variant="h3" className={classes.title}>Слоган команды<br />Мы сделаем все, что в наших руках</Typography>
                <Grid container className={classes.Grid_Box}>
                    {object.map((item, index) => (
                        <Grid item className={classes.Grid_Card} key={index} lg={3} xl={3} sm={4} md={3} xs={6}>
                            <Box style={{ marginRight: 50, marginLeft: 50 }}>
                                <Typography variant="h4">
                                    {item.number}
                                </Typography>
                                <Typography style={{ color: 'gray' }}>
                                    {item.description}
                                </Typography>
                            </Box>
                            {item.show &&
                                < Box className={classes.line}>
                                </Box>
                            }
                        </Grid>
                    ))
                    }
                </Grid>
            </Container>
        </div >
    )
}

export default FirstBlog