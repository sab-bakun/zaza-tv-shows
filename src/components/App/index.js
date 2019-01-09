import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FilmDashboard from '../../containers/FilmDashboard';
import FilmList from '../../containers/FilmList';
import FilmEdit from '../../containers/FilmEdit';
import './App.css';

const App = () => (
    <div className='App'>
        <header className='App-header'>
            <Router>
                <Switch>
                    <Route path="/" exact component={ FilmList } />
                    <Route path="/list/" component={ FilmList } />
                    <Route path="/dashboard/" component={ FilmDashboard } />
                    <Route path="/edit/:id" component={ FilmEdit } />
                </Switch>
            </Router>
        </header>
    </div>
);

export default App;
