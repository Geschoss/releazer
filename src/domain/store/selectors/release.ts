import { useSelector } from 'react-redux';
import { ReleaseStoreType, StoreType } from '../../../typings/store';


export const useSelectRelease = () => {
    return useSelector<StoreType, ReleaseStoreType>(({ release }) => release)
}
