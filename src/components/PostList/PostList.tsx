import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../../actions/index';
import { Post as IPost, User as IUser } from '../../intercafes/interfaces';
import { Post } from '../Post/Post';

interface Props {
    posts: IPost[];
    fetchPostsAndUsers?: () => IPost[];
}

const PostListBody: React.FC<Props> = (props: Props): JSX.Element => {
    useEffect(() => {
        props.fetchPostsAndUsers();
    }, []);

    const renderPosts = (): JSX.Element => {
        return (
            <ul className='post__list'>
                {props.posts.map((post: IPost) => {
                    return (
                        <Post post={post} key={post.id} />
                    );
                })}
            </ul>
        )
    }

    return (
        <>
            {renderPosts()}
        </>
    );
}

const mapStateToProps = (state: Props): Props => {
    return { 
        posts: state.posts
    };
}

export const PostList = connect(mapStateToProps, { fetchPostsAndUsers })(PostListBody);