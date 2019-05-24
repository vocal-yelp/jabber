import React from 'react';
import {Route, Switch} from 'react-router-dom';
import JabberMainPage from './components/JabberMainPage';
import FirebaseLogin from './components/FirebaseLogin';

export default (
    <Switch>
        <Route path='/JabberMainPage' component={JabberMainPage}/>
        <Route path='/' component={FirebaseLogin}/>
    </Switch>
)


