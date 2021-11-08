import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, CardMedia, CardActionArea } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 20,
        boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.1)',
    },
    mainBlock: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        padding: 10,
        [theme.breakpoints.down('xs')]: {
            padding: 5,
            flexDirection: 'column'

        },
    },
    img: {
        width: 160,
        height: 178,
        borderRadius: 5,
        [theme.breakpoints.down('xs')]: {
            width: '100%',

        },
    },
    cardContent: {
        marginLeft: 10,
        width: '100%',
        height: 178,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    infoBlock: {
        display: 'flex'
    },
    tagsBlock: {
        display: 'flex',
        marginLeft: '-5px',
        flexWrap: 'wrap',
    },
}));
const Card = ({ img, description, title, id, date }) => {
    const classes = useStyles();
    const navigate = useNavigate()

    return (
        <Box className={classes.root}>
            <CardActionArea
                className={classes.mainBlock}
                onClick={() => navigate(`/news-inside/${id}`,
                    { id: id },
                )}
            >
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    image={img}
                    className={classes.img}
                />
                <Box className={classes.cardContent}>
                    <Typography variant="h6">
                        {title}
                    </Typography>
                    <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                        {date}
                    </Typography>
                    <Typography variant="body1">
                        {description}
                    </Typography>
                </Box>
            </CardActionArea>
        </Box>
    );
}

export default Card