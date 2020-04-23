import * as React from 'react';
import { connect } from 'react-redux';
import { Post as IPost } from '../../intercafes/interfaces';
import { Avatar, Card } from 'antd';
import { UserHeader } from '../UserHeader/UserHeader';

const { Meta } = Card;

interface Props {
    post: IPost;
}

const PostBody: React.FC<Props> = ({ post }: Props) => {
    return (
        <li className='post__item'>
            <Card>
                <Meta
                    avatar={<Avatar icon='user' />}
                    title={post.title}
                    description={post.body}
                />
                <UserHeader userId={post.userId} />
            </Card>
        </li>
    )
} 

export const Post = connect()(PostBody);