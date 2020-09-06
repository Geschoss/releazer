import {
    EnteringType,
    AuthenticatingType,
    AuthenticationStore,
    NotAuthenticationType,
    AuthenticatingErrorType,
    AuthenticatedType,
} from 'typings/store';
import { statusIs } from 'utils/type/statusIs';

export const isNotAuthentication = statusIs<
    AuthenticationStore,
    NotAuthenticationType
    >('NotAuthenticated');

export const isEntering = statusIs<AuthenticationStore, EnteringType>(
    'Entering'
);

export const isAuthenticating = statusIs<
    AuthenticationStore,
    AuthenticatingType
    >('Authenticating');

export const isAuthenticated = statusIs<AuthenticationStore, AuthenticatedType>(
    'Authenticated'
);

export const isAuthenticatedError = statusIs<
    AuthenticationStore,
    AuthenticatingErrorType
    >('AuthenticatedError');
