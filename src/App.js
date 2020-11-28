import Navigator from './components/Nav'
import CarouselApp from './components/Carousel';
import BodyCard from './components/BodyCard';
import FilmDetail from './components/FilmDetail';
import './App.css';
import { createUseStyles } from 'react-jss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const useStyle = createUseStyles({
  wrapper: {
    backgroundColor: "#0f171e"
  }
})

function App() {

  const classes = useStyle()
  return (
    <Router>
      <>
        <div className={classes.wrapper}>
          <Navigator />
          <CarouselApp />
          <Switch>
            <Route path='/home' component={BodyCard} />
       
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
