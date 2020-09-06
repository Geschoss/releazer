import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Login } from './Form/Login';

import {
    isAuthenticatedError,
    isAuthenticating,
    isEntering,
    isNotAuthentication,
} from 'domain/authentication/utils';
import { useSelectAuthentication } from 'domain/store/selectors/authentication';
import { authAction, checkTokenAction } from 'domain/authentication/actions';

export const Authentication: React.FC = ({ children }) => {
    const dispatch = useDispatch();
    const authentication = useSelectAuthentication();

    useEffect(() => {
        checkTokenAction(dispatch);
    }, []);

    const submit = useCallback((state) => {
        authAction(dispatch, state);
    }, []);

    if (isEntering(authentication)) {
        return null;
    }

    if (isNotAuthentication(authentication)) {
        return <Login submit={submit} />;
    }

    if (isAuthenticating(authentication)) {
        return <Login loading submit={submit} />;
    }

    if (isAuthenticatedError(authentication)) {
        return <Login submit={submit} error={authentication.error} />;
    }

    return <>{children}</>;
};
