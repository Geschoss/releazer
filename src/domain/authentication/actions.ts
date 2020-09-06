import { Dispatch } from 'react';
import { empty } from 'ramda';

import { readCookie, saveCookie } from 'utils/browserApi';
import { checkToken } from './api/checkToken';
import { authError, authLoading, authNotAuth, authSuccess } from './reducer';
import { auth } from './api/auth';

export const TOKEN_COOKIE_NAME = 'authentication_token';

export const checkTokenAction = async (dispatch: Dispatch<any>) => {
    const token = readCookie(TOKEN_COOKIE_NAME);

    if (empty(token)) {
        try {
            //TODO довести до ума
            await checkToken(token);

            dispatch(authSuccess(token));
        } catch {
            dispatch(authNotAuth());
        }
    } else {
        dispatch(authNotAuth());
    }
};

export const authAction = async (
    dispatch: Dispatch<any>,
    payload: { login: string; password: string }
) => {
    try {
        dispatch(authLoading());

        const token = await auth(payload);

        saveCookie(TOKEN_COOKIE_NAME, token);

        dispatch(authSuccess(token));
    } catch (error) {
        dispatch(authError(error));
    }
};
