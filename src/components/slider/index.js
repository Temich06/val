import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Typography } from '@material-ui/core'
import Slider from 'react-slick'

import { CardUsefulLink } from '../index'

const useStyles = makeStyles(() => ({
    titleBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 30
    }
}))

const SliderCustom = () => {
    const [slidesToShow, setSlidesToShow] = useState()
    const classes = useStyles()
    const settings = {
        dots: false,
        centerMode: true,
        centerPadding: "0px",
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
    };
    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 960 && window.innerWidth >= 600) {
                setSlidesToShow(2)
            }
            else if (window.innerWidth < 600) {
                setSlidesToShow(1)
            } else {
                setSlidesToShow(3)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
    })
    const array = [
        {
            img: '/image/Group-367.png',
            description: 'Правительство Республики Саха (Якутия)',
            Link: 'https://www.sakha.gov.ru/'
        },
        {
            img: '/image/Group-369.png',
            description: 'Министерство здравоохранения Российской Федерации',
            Link: 'https://minzdrav.gov.ru/'
        },
        {
            img: '/image/Group-367.png',
            description: 'Министерство здравоохранения Республики Саха (Якутия)',
            Link: 'https://minzdrav.sakha.gov.ru/'
        },
        {
            img: '/image/Group-369.png',
            description: 'Министерство здравоохранения Российской Федерации',
            Link: 'https://minzdrav.gov.ru/'
        },
    ]

    return (
        <Box style={{ overflow: 'hidden', }}>
            <Container>
                <Box className={classes.titleBox}>
                    <Typography variant="h5" >Полезные ссылки</Typography>
                    <Typography variant="body1">на партнеров проекта</Typography>
                </Box>
                <Slider {...settings} >
                    {array.map((item, index) => (
                        <Box key={index} >
                            <CardUsefulLink img={item.img} description={item.description} link={item.Link} />
                        </Box>
                    ))}
                </Slider>
            </Container>
        </Box>
    )
}

export default SliderCustom