import { createAction, createReducer } from 'redux-act';
import { ReleaseStoreType } from '../../typings/store';
import { ReleaseDto } from 'typings/dto';

export const releasesLoaded = createAction<ReleaseDto[]>(
    'Releases Successful loaded'
);
export const releasesLoading = createAction('Releases Loading');
export const releasesError = createAction<Error>('Releases Error');

export const release = createReducer<ReleaseStoreType>(
    (on) => {
        on(releasesLoading, () => ({ status: 'Loading' }));

        on(releasesError, (_, error) => ({ error, status: 'Error' }));

        on(releasesLoaded, (_, releases) => ({ releases, status: 'Loaded' }));
    },
    { status: 'Loading' }
);
