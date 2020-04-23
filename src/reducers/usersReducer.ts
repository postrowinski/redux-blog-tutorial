import { User, Action } from '../intercafes/interfaces';
import { TYPE } from '../intercafes/types';

export default (users: User[] = [], action: Action<User>) => {
    switch(action.type) {
        case TYPE.FETCH_USER: {
            return [...users, action.payload];
        }
        default: {
            return users;
        }
    }
}