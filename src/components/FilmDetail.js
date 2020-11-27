import React from 'react';
import { createUseStyles } from 'react-jss';
import { Card } from 'react-bootstrap';
import primevideocard from '../img/primevideocard.png';
const useStyle = createUseStyles({

})


const FilmDetail = () => {

    const classes = useStyle()
    return (
        <>

            <div className={classes.navDetail}>
                <Card.Img className={classes.imgCard} src='' alt="Card image" />
                <h1 className={classes.titleDetail}></h1>
            </div>
            <div className={classes.navDetail}>
                <Card.Img className={classes.imgCard} src={primevideocard} alt="Card image" />
                <h1 className={classes.titleDetail}>Loading...</h1>
            </div>


        </>
    )
}


export default FilmDetail