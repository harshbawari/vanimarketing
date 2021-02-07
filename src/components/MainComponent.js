import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import ContactScreen from '../screens/ContactScreen';
import HomeScreen from '../screens/HomeScreen';
import FlatsScreen from '../screens/FlatsScreen';
import CommercialsScreen from '../screens/CommercialsScreen';
import UpcomingScreen from '../screens/UpcomingScreen';
import UnderConstructionScreen from '../screens/UnderConstructionScreen';


function MainComponent(props) {
    return (
        <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/upcoming' component={UpcomingScreen} />
            <Route exact path='/contact' component={ContactScreen} />
            <Route exact path='/under_construction' component={UnderConstructionScreen} />
            <Route exact path='/flats' component={FlatsScreen} />
            <Route exact path='/commercial' component={CommercialsScreen} />
        </Switch>
    );
}

export default MainComponent;