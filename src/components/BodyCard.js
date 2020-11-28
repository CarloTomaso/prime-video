import React, { useState, useEffect } from 'react';
import CardFilm from './CardFilm'

import { createUseStyles } from 'react-jss'
import prime from '../img/prime.png'
import primevideocard from '../img/primevideocard.png';

import firebase from '../firebase'
const useStyle = createUseStyles({

    wrapCard: {
        padding: '100px',
        paddingTop: '50px'
    },
    titleCard: {
        fontSize: '20px',
        color: 'white'
    },
    wrapTitle: {
        display: 'flex'
    },
    logoTitleCard: {
        height: '23px',
        marginRight: '5px'
    }
})




const BodyCard = () => {
    const classes = useStyle()
    const [filmListData, setFilmListData] = useState()
    const [loading, setLoading] = useState(false)
    const ref = firebase.firestore().collection("film");
    useEffect(() => {
 getFilm()
    }, [])
    const getFilm = () => {
        setLoading(true);
        ref.get()
            .then((filmItem) => {
                const items = filmItem.docs.map((doc) => doc.data())

                setFilmListData(items)
                setLoading(false)
            })
    }



    return (
        <>
            <div className={classes.wrapCard}>
                <div className={classes.wrapTitle}>

                    <img className={classes.logoTitleCard} src={prime} alt="" />
                    <h1 className={classes.titleCard}>Film consigliati per te</h1>
                </div>
                <div >
                    {filmListData ?
                        <CardFilm filmListData={filmListData} /> :
                        <h1>Loading...</h1>
                    }
                </div>
            </div>
        </>
    )
}

export default BodyCard