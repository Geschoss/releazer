import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Albums } from 'pages/albums';
import { Tracks } from 'pages/tracks';

export const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/albums">
                        <Albums />
                    </Route>
                    <Route path="/tracks">
                        <Tracks />
                    </Route>
                    <Route path="/">Home</Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};
