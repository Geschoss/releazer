export type AuthenticationStatus =
    | 'Entering'
    | 'Authenticated'
    | 'Authenticating'
    | 'NotAuthenticated'
    | 'AuthenticatedError';

type AuthenticationBase<T extends AuthenticationStatus> = {
    status: T;
};

export type EnteringType = AuthenticationBase<'Entering'>;
export type AuthenticatingType = AuthenticationBase<'Authenticating'>;
export type NotAuthenticationType = AuthenticationBase<'NotAuthenticated'>;
export type AuthenticatingErrorType = AuthenticationBase<
    'AuthenticatedError'
> & {
    error: Error;
};
export type AuthenticatedType = AuthenticationBase<'Authenticated'> & {
    token: string;
};

export type AuthenticationStore =
    | EnteringType
    | AuthenticatedType
    | AuthenticatingType
    | NotAuthenticationType
    | AuthenticatingErrorType;
