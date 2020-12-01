import React, { useState, useEffect } from 'react';
import firebase from '../firebase'
import { createUseStyles } from 'react-jss';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const useStyle = createUseStyles({
    wrapDetail: {
        display: 'flex',
        padding: '3%',

    },

    imgDetail: {
        display: 'flex',
        height: "500px",
        width: "400px",
        marginRight: "50px",
        boxShadow: "15px 15px 10px black"


    },
    wrapDescription: {
        backgroundColor: "#1b2530",
        padding: "10px",
        marginTop: "6%"
    },
    imgTitle: {
        fontSize: '5em',
        color: 'white',
        textShadow: '9px 9px 5px black'
    },
    wrapDescription: {
        boxShadow: "9px 9px 5px black"
    },
    spanGenre: {
        color: "#8197a4"
    },
    spanYear: {
        color: "#8197a4"
    },
    genre: {
        color: "white"
    },
    year: {
        color: "white "
    },
    plot: {
        color: "white",
        fontSize: "1.3em"
    }

})
const FilmDetail = () => {

    const [filmListData, setFilmListData] = useState()
    const [loading, setLoading] = useState(false)
    const ref = firebase.firestore().collection("film");
    useEffect(() => {
        getFilm()
    }, [])
    const getFilm = () => {
        setLoading(`Loading...`);
        ref.get()
            .then((filmItem) => {
                const items = filmItem.docs.map((doc) => doc.data())
                setFilmListData(items)
                setLoading(false)
            })
    }

    let { id } = useParams();
    console.log(id)
    const classes = useStyle()
    return (
        <>
            {filmListData ?
                <div className={classes.wrapDetail}>
                    <div className={classes.wrapTitle}>
                        <Card.Img className={classes.imgDetail} alt="Card image" src={filmListData[id].img} />
                    </div>
                    <div className={classes.wrapContent}>
                        <Card.Title className={classes.imgTitle}>{filmListData[id].titolo}</Card.Title>
                        <div className={classes.wrapDescription}>
                            <p className={classes.genre}><span className={classes.spanGenre}>Genere:</span> {filmListData[id].genere}</p>
                            <p className={classes.year}><span className={classes.spanYear}>Anno:</span> {filmListData[id].anno}</p>
                            <p className={classes.plot}>{filmListData[id].trama}</p>
                        </div>
                    </div>
                </div>
                :
                <h1>{loading}</h1>

            }

        </>

    )
}


export default FilmDetail