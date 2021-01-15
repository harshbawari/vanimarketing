import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import ContactScreen from '../screens/ContactScreen';
import HomeScreen from '../screens/HomeScreen';


function MainComponent(props) {
    return (
        <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/contact' component={ContactScreen} />
        </Switch>
    );
}

export default MainComponent;