import { statusIs } from '../../utils/type/statusIs';
import {
    ReleaseStoreType,
    ReleaseStoreLoading,
    ReleaseStoreLoaded,
} from '../../typings/store';

export const isReleaseLoading = statusIs<ReleaseStoreType, ReleaseStoreLoading>(
    'Loading'
);
export const isReleaseLoaded = statusIs<ReleaseStoreType, ReleaseStoreLoaded>(
    'Loaded'
);
