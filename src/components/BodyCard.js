import React, { useState, useEffect } from 'react';

import { Card } from 'react-bootstrap'
import { createUseStyles } from 'react-jss'
import prime from '../img/prime.png'
import primevideocard from '../img/primevideocard.png';
import { Link } from 'react-router-dom';
import firebase from '../firebase'
const useStyle = createUseStyles({
    imgCard: {
        width: '340px',
        height: '405px'
    },
    card: {

        width: '340px',
        height: '405px'
    },
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

    const cardFilm = () => {
        if (filmListData) {
            return
            filmListData.map((item) => {
                < Card className={classes.card} >
                    <Link to={`/about/`}>
                        <Card.Img className={classes.imgCard} src={item.img} alt="Card image" />
                    </Link>
                </Card>

            })
        }

    }

    return (
        <>
            <div className={classes.wrapCard}>
                <div className={classes.wrapTitle}>

                    <img className={classes.logoTitleCard} src={prime} alt="" />
                    <h1 className={classes.titleCard}>Film consigliati per te</h1>
                </div>
                <div >
                    {cardFilm}
                </div>
            </div>
        </>
    )
}

export default BodyCard