import React from 'react';
import { Card } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import prime from '../img/prime.png'
const useStyle = createUseStyles({
    imgCard: {
        width: '100%',
        height: '273px'
    },
    card: {
        width: '200px',
        height: '275px'
    },
    wrapTitle: {
        display: 'flex'
    },
    logoTitleCard: {
        height: '23px',
        marginRight: '5px'
    },
    titleCard: {
        fontSize: '20px',
        color: 'white'
    },


    cardWrapMap: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    }
})

const CardFilm = ({ filmListData }) => {
    const classes = useStyle();
    return (
        <>
            {filmListData ?
                <div>
                    <div className={classes.wrapTitle}>
                        <img className={classes.logoTitleCard} src={prime} alt="" />
                        <h1 className={classes.titleCard}>Film consigliati per te</h1>
                    </div>
                    <div className={classes.cardWrapMap} >
                        {filmListData.map((item) => < Card className={classes.card} >
                            <Link to={'/about'}>
                                <Card.Img className={classes.imgCard} src={item.img} alt="Card image" />
                            </Link>
                        </Card>
                        )}
                    </div>
                </div> :
                <h1>Loading...</h1>
            }
        </>
    )


}

export default CardFilm