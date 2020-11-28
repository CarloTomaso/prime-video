import React from 'react';
import { Card } from 'react-bootstrap'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom';
const useStyle = createUseStyles({
    imgCard: {
        width: '340px',
        height: '405px'
    },
    card: {

        width: '340px',
        height: '405px'
    }
})

const CardFilm = ({ filmListData }) => {
    console.log(filmListData)
    const classes = useStyle();
    return (
        filmListData.map((item) => {
            < Card className={classes.card} >
                <Link to={`/about/`}>
                    <Card.Img className={classes.imgCard} src={item.img} alt="Card image" />
                </Link>
            </Card>

        })

    )
}

export default CardFilm