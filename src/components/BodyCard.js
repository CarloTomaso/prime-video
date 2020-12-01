import React, { useState, useEffect } from 'react';
import CardFilm from './CardFilm'
import { createUseStyles } from 'react-jss'
import firebase from '../firebase'

const useStyle = createUseStyles({

    wrapCard: {
        width: '100%',
        padding: '100px',
        paddingTop: '50px'
    },

})






const BodyCard = () => {
    const classes = useStyle()
    const [filmListData, setFilmListData] = useState()
    const [loading, setLoading] = useState(false)
    const ref = firebase.firestore().collection("film");
    useEffect(() => {
        getFilm();
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

    return (
        <>
            {filmListData ?
                <div className={classes.wrapCard}>
                    <CardFilm filmListData={filmListData} src={filmListData.id} />
                </div> :
                <h1>{loading}</h1>
            }
        </>
    )
}

export default BodyCard