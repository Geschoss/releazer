import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Albums } from 'pages/albums';
import { Tracks } from 'pages/tracks';

import { StoreProvider } from 'domain/store';
import { Authentication } from 'components/Authentication/Authentication';

export const App = () => {
    return (
        <StoreProvider>
            <Authentication>
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route path="/albums">
                            <Albums/>
                        </Route>
                        <Route path="/tracks">
                            <Tracks/>
                        </Route>
                        <Route path="/">Home</Route>
                    </Switch>
                </BrowserRouter>
            </Authentication>
        </StoreProvider>
    );
};
