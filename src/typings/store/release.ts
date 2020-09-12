import { ReleaseDto } from '../../typings/dto';

export type ReleaseStoreStatys = 'Loading' | 'Loaded' | 'Error';

type ReleaseStoreBase<T extends ReleaseStoreStatys> = {
    status: T;
};

export type ReleaseStoreLoading = ReleaseStoreBase<'Loading'>;
export type ReleaseStoreError = ReleaseStoreBase<'Error'> & {
    error: Error;
};

export type ReleaseStoreLoaded = ReleaseStoreBase<'Loaded'> & {
    releases: ReleaseDto[];
};

export type ReleaseStoreType =
    | ReleaseStoreLoaded
    | ReleaseStoreLoading
    | ReleaseStoreError;
