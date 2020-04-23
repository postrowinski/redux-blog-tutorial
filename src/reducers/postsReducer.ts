import { Post, Action } from '../intercafes/interfaces';
import { TYPE } from '../intercafes/types';

export default (posts: Post[] = [], action: Action<Post[]>) => {
    switch(action.type) {
        case TYPE.FETCH_POSTS: {
            return action.payload;
        }
        default: {
            return posts;
        }
    }
}