import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import ContactScreen from '../screens/ContactScreen';
import HomeScreen from '../screens/HomeScreen';
import FlatsScreen from '../screens/FlatsScreen';
import CommercialScreen from '../screens/Commercial';


function MainComponent(props) {
    return (
        <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/contact' component={ContactScreen} />
            <Route exact path='/flats' component={FlatsScreen} />
            <Route exact path='/commercial' component={CommercialScreen} />
        </Switch>
    );
}

export default MainComponent;