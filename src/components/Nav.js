import React, { useState, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import logo from '../img/amazon_logo.png';
import { useForm, Controller } from 'react-hook-form';
import firebase from '../firebase';

const useStyle = createUseStyles({

    nav: {
        display: "flex",
        alignItems: "baseline",
        height: "60px",
        width: "100%",
        position: 'fixed',
        zIndex: '9999999',
        padding: "10px",
        backgroundColor: "#1b2530"

    },


    linkItem: {
        textDecoration: "none",
        color: "white",
        marginLeft: "20px",
        fontFamily: "Arial, Helvetica, sans-serif"
    },


    buttonNav: {
        backgroundColor: "#0f171e",
        border: "0"
    },
    faSearch: {
        color: "white",
    },
    formControl: {
        border: "0.4px solid #7fffd4",
        marginTop: "20px"
    },
    controller: {

        backgroundColor: "#151c24"
    }
})

const Navigator = () => {
    const classes = useStyle()
    const ref = firebase.firestore().collection("film");
    const [filmList, setFilmList] = useState();
    const [loading, setLoading] = useState(false);
    const { control, handleSubmit, errors } = useForm({});





    useEffect(() => {

    }, [])
    const getFilm = () => {
        setLoading(true);
        ref.where("titolo", "==", "Avengers - infinity war")
            .get()

            .then((filmItem) => {
                const items = filmItem.docs.map((doc) => doc.data())

                setFilmList(items)
                setLoading(false)
            })
    }
    if (filmList) {
        console.log(filmList)
    }
    const handleData = (e) => {

        getFilm()
    }
    return (
        <>
            <Navbar className={classes.nav} variant="pills" defaultActiveKey="/home">
                <Navbar.Brand> <img
                    className="d-inline-block align-top"
                    src={logo} alt='logo'
                    width="110"
                    height="40"
                />
                </Navbar.Brand>
                <Nav.Link className={classes.linkItem} href="/home">Home</Nav.Link>
                <Nav.Link className={classes.linkItem} eventKey="link-1">Carica il tuo film</Nav.Link>
            </Navbar>
        </>
    );
}

export default Navigator;