import React, { useState, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import logo from '../img/amazon_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useForm, Controller } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import firebase from '../firebase';

const useStyle = createUseStyles({

    nav: {
        display: "flex",
        alignItems: "baseline",
        height: "80px",
        backgroundColor: "#0f171e",
        width: "100%"

    },

    logoNav: {
        width: "110px",
        height: "40px",
        padding: "20px",

    },


    linkItem: {
        textDecoration: "none",
        color: "white",
        marginLeft: "20px",
        fontFamily: "Arial, Helvetica, sans-serif"
    },

    search: {

        display: "flex",
        textDecoration: "none",
        color: "white",
        marginLeft: "700px",
        fontFamily: "Arial, Helvetica, sans-serif",
        width: "200px",

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
        ref.where("titolo","==","Avengers - infinity war")
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
                <Nav.Link className={classes.linkItem} eventKey="link-1">Categoria</Nav.Link>
                <Form className={classes.search} onSubmit={handleSubmit(handleData)}>
                    <Button className={classes.buttonNav} type="submit"><FontAwesomeIcon className={classes.faSearch} icon={faSearch} /></Button>
                    <Form.Group className={classes.formControl} controlId="formBasicEmail">
                        <Controller className={classes.controller} type="text" name="cerca" placeholder="Cerca Film" control={control} as={Form.Control} defaultValue=""
                        />
                    </Form.Group>
                </Form>

            </Navbar>
        </>
    );
}

export default Navigator;