import { AuthenticationStore } from './authentication';
import { ReleaseStoreType } from './release';

export type StoreType = {
    authentication: AuthenticationStore;
    release: ReleaseStoreType;
};
