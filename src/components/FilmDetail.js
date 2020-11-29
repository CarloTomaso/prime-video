import React from 'react';
import { createUseStyles } from 'react-jss';
import { Card } from 'react-bootstrap';
import primevideocard from '../img/primevideocard.png';
const useStyle = createUseStyles({

})
const FilmDetail = ({ filmListData }) => {
    console.log(filmListData)
    const classes = useStyle()
    return (
        <>
            {filmListData ?
                <Card.Img className={classes.imgCard} src={filmListData.img} alt="Card image" /> :
                <h1>Loading...</h1>
            }
        </>
    )
}


export default FilmDetail