import React from 'react';
import { Carousel } from 'react-bootstrap';
import futurama from '../img/futurama.webp';
import joker from '../img/joker.webp';
import lupin from '../img/lupin.webp'
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({
    postersFilm: {
        width: "100%"
    }
})
const CarouselApp = () => {
    const classes = useStyles()
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className={classes.postersFilm}
                        src={futurama}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={classes.postersFilm}
                        src={joker}
                        alt="Third slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={classes.postersFilm}
                        src={lupin}
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>

        </>
    )


}
export default CarouselApp;