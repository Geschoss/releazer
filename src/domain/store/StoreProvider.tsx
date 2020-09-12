import React from 'react';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { authentication } from '../authentication/reducer';
import { release } from '../release/reducer';


const store = createStore(
    combineReducers({ release, authentication })
)

export const StoreProvider: React.FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
}
