import React, { useState, useEffect } from 'react'
import Navigator from './components/Nav';
import CarouselApp from './components/Carousel';
import BodyCard from './components/BodyCard';
import FilmDetail from './components/FilmDetail';
import './App.css';
import firebase from './firebase'
import { createUseStyles } from 'react-jss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CardFilm from './components/CardFilm';
const useStyle = createUseStyles({
  '@global html, body': {
    fontFamily: 'Helvetica Now Display',
    'font-size': 16,
    'background-color': '#0f171e'
  },

})

function App() {
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
  const classes = useStyle()
  return (
    <Router>
      <>

        <Navigator />
        <CarouselApp />
        <BodyCard filmListData={filmListData} />
        <Switch>
          <Route
            path='/home'
            render={(props) => (
              <CardFilm{...props} filmListData={filmListData} />
            )}
          />
          <Route
            exact path='/about'
            render={(props) => (
              <FilmDetail{...props} filmListData={filmListData} />
            )}
          />

        </Switch>
      </>
    </Router>
  );
}

export default App;
