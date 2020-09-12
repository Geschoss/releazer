import { Dispatch, AnyAction } from 'redux';
import { fetchReleases } from './api/fetchReleases';
import { releasesLoaded, releasesError } from './reducer';

export const fetchReleaseAction = (dispatch: Dispatch<AnyAction>) => {
    fetchReleases()
        .then((releases) => dispatch(releasesLoaded(releases)))
        .catch((e) => dispatch(releasesError(e)));
};
