import * as React from 'react'
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { User } from '../../intercafes/interfaces';

interface State {
    users?: User[];
}

interface Props extends State {
    userId: number;
    user?: User;
}

const UserHeaderBody: React.FC<Props> = (props: Props): JSX.Element => {
    if (_.isNil(props.user)) {
        return <></>
    }

    return (
        <span style={{fontSize: 18, marginTop: 10, display: 'inline-block'}}>Autror: {props.user.username}</span>
    )
}

const mapStateToProps = (state: State, ownProps: Props) => {
    return {
        user: state.users.find((user: User) => user.id === ownProps.userId)
    }
}

export const UserHeader = connect(mapStateToProps)(UserHeaderBody);