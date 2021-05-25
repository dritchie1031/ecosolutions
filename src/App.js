import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import data from './Data.json';
import Deck from './Deck';
import Rules from './Rules';
import './App.css';

function ButtonLink(props) {
  const {to, text} = props;

  const CustomLink = props => <Link to={to} {...props} />;

  return (
    <Button component={CustomLink} style={{color: "white", borderColor: 'white'}}>{text}</Button>
  );
}

export default function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography variant="h6">
            EcoSolutions
          </Typography>
          <ButtonGroup variant="outlined" color="primary">
            <ButtonLink to="/" text="Rules" />
            <ButtonLink to="/crises" text="Crises" />
            <ButtonLink to="/animalia" text="Animalia" />
            <ButtonLink to="/fungi" text="Fungi" />
            <ButtonLink to="/humanity" text="Humanity" />
            <ButtonLink to="/plantae" text="Plantae" />
            <ButtonLink to="/prokarya" text="Prokarya" />
          </ButtonGroup>
        </Toolbar>
      </AppBar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/prokarya">
          <Deck key="prokarya" data={data.prokarya} />
        </Route>
        <Route exact path="/fungi">
          <Deck key="fungi" data={data.fungi} />
        </Route>
        <Route exact path="/plantae">
          <Deck key="plantae" data={data.plantae} />
        </Route>
        <Route exact path="/animalia">
          <Deck key="animalia" data={data.animalia} />
        </Route>
        <Route exact path="/humanity">
          <Deck key="humanity" data={data.humanity} />
        </Route>
        <Route exact path="/crises">
          <Deck key="crises" data={data.crisis}/>
        </Route>
        <Route exact path="/">
          <Rules />
        </Route>
      </Switch>
    </Router>
  );
}