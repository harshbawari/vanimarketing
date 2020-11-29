import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeComponent from './HomeComponent';


function MainComponent(props) {
    return (
        <Switch>
            <Route exact path='/' component={HomeComponent} />
        </Switch>
    );
}

export default MainComponent;