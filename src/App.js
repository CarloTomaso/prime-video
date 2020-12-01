import React from 'react'
import Navigator from './components/Nav';
import CarouselApp from './components/Carousel';
import BodyCard from './components/BodyCard';
import FilmDetail from './components/FilmDetail';
import './App.css';
import { createUseStyles } from 'react-jss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const useStyle = createUseStyles({
  '@global html, body': {
    fontFamily: 'Helvetica Now Display',
    'font-size': 16,
    'background-color': '#0f171e'
  },

})

function App() {


  const classes = useStyle()
  return (
    <Router>
      <>

        <Navigator />
        <CarouselApp />
        <Switch>
          <Route
            path='/home'
            component={BodyCard} />
          />
          <Route
            exact path='/about/:id'
            component={FilmDetail} />
          />

        </Switch>
      </>
    </Router>
  );
}

export default App;
