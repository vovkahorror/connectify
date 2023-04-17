import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    follow,
    requestUsers,
    setCurrentPage,
    unfollow,
    UserDataType,
    UsersType,
} from '../../redux/users-reducer';
import React, {ComponentType} from 'react';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
} from '../../redux/users-selectors';

type MapStateType = {
    users: UserDataType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: Array<number>;
}

type MapDispatchType = {
    setCurrentPage: (currentPage: number) => void;
    requestUsers: (pageNumber: number, pageSize: number) => void;
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
}

type UsersContainerPropsType = MapStateType & MapDispatchType;

class UsersContainer extends React.Component<UsersContainerPropsType, UsersType> {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    followingInProgress={this.props.followingInProgress}
                    onPageChanged={this.onPageChanged}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    };
};

export default compose<ComponentType>(connect(mapStateToProps, {
    setCurrentPage,
    requestUsers,
    follow,
    unfollow,
}), withAuthRedirect)(UsersContainer);