import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Menu } from 'components/Menu/Menu';
import { Albums } from 'pages/albums';
import { Tracks } from 'pages/tracks';
import { Header } from 'components/Header/Header';

import { StoreProvider } from 'domain/store';
import { Authentication } from 'components/Authentication/Authentication';

import styles from './App.module.css';

export const App = () => {
    return (
        <StoreProvider>
            <Authentication>
                <BrowserRouter>
                    <Header />
                    <motion.main
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={styles.main}
                    >
                        <Menu />
                        <Switch>
                            <Route path="/albums">
                                <Albums />
                            </Route>
                            <Route path="/tracks">
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
