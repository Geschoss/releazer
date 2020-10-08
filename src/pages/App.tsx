import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Menu } from 'components/Menu/Menu';
import { Albums } from 'pages/albums';
import { Tracks } from 'pages/tracks';

import { StoreProvider } from 'domain/store';
import { Authentication } from 'components/Authentication/Authentication';

import styles from './App.module.css';

export const App = () => {
    return (
        <StoreProvider>
            <Authentication>
                <BrowserRouter>
                    <motion.main
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={styles.main}
                    >
                        <Menu />
                        <Switch>
                            <Route path="/releazer/albums">
                                <Albums />
                            </Route>
                            <Route path="/releazer/tracks">
                                <Tracks />
                            </Route>
                            <Route path="/">Home</Route>
                        </Switch>
                    </motion.main>
                </BrowserRouter>
            </Authentication>
        </StoreProvider>
    );
};
