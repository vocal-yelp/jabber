import React from 'react';
import {Route, Switch} from 'react-router-dom';
import JabberMainPage from './components/JabberMainPage/JabberMainPage';
import FirebaseLogin from './components/FirebaseLogin';
import ProfilePage from './components/ProfilePage/ProfilePage';

export default (
    <Switch>
        <Route path='/JabberMainPage' component={JabberMainPage}/>
        <Route path='/ProfilePage' component={ProfilePage}/>
        <Route path='/' component={FirebaseLogin}/>
    </Switch>
)


