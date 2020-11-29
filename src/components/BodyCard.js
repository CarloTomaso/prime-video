import React, { useState, useEffect } from 'react';
import CardFilm from './CardFilm'
import { createUseStyles } from 'react-jss'
import firebase from '../firebase'
import FilmDetail from './FilmDetail';
const useStyle = createUseStyles({

    wrapCard: {
        width: '100%',
        padding: '100px',
        paddingTop: '50px'
    },

})




const BodyCard = ({ filmListData }) => {
    const classes = useStyle()

    return (
        <>
            {filmListData ?
                <div className={classes.wrapCard}>
                    <CardFilm filmListData={filmListData} />
                </div> :
                <h1>Loading...</h1>
            }
        </>
    )
}

export default BodyCard