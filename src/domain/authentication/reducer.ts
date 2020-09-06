import { createAction, createReducer } from 'redux-act';
import { AuthenticationStore } from '../../typings/store';

export const authSuccess = createAction<string>('Authentication Success');
export const authLoading = createAction('Authentication Loading');
export const authError = createAction<Error>('Authentication Error');
export const authNotAuth = createAction('NotAuthenticated');

export const authentication = createReducer<AuthenticationStore>(
    (on) => {
        on(authNotAuth, () => ({ status: 'NotAuthenticated' }));

        on(authLoading, () => ({ status: 'Authenticating' }));

        on(authError, (_, error) => ({ error, status: 'AuthenticatedError' }));

        on(authSuccess, (state, token) => ({ token, status: 'Authenticated' }));
    },
    { status: 'Entering' }
);
