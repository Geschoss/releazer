import { useSelector } from 'react-redux';
import { AuthenticationStore, StoreType } from '../../../typings/store';


export const useSelectAuthentication = () => {
    return useSelector<StoreType, AuthenticationStore>(({ authentication }) => authentication)
}