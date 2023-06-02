import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    follow,
    requestUsers,
    setCurrentPage, setNameSearch,
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
    nameSearch: string;
    isFetching: boolean;
    followingInProgress: Array<number>;
}

type MapDispatchType = {
    setCurrentPage: (currentPage: number) => void;
    setNameSearch: (nameSearch: string) => void;
    requestUsers: (pageNumber: number, pageSize: number, nameSearch: string) => void;
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
}

type UsersContainerPropsType = MapStateType & MapDispatchType;

class UsersContainer extends React.Component<UsersContainerPropsType, UsersType> {
    getUsers() {
        const {currentPage, pageSize, nameSearch} = this.props;
        this.props.requestUsers(currentPage, pageSize, nameSearch);
    }

    componentDidMount() {
        this.getUsers();
    }

    componentDidUpdate(prevProps: Readonly<UsersContainerPropsType>) {
        if (this.props.nameSearch !== prevProps.nameSearch) {
            this.getUsers();
        }
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize, nameSearch, setCurrentPage, requestUsers} = this.props;
        setCurrentPage(pageNumber);
        requestUsers(pageNumber, pageSize, nameSearch);
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
                    nameSearch={this.props.nameSearch}
                    followingInProgress={this.props.followingInProgress}
                    setNameSearch={this.props.setNameSearch}
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
        nameSearch: state.usersPage.nameSearch,
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    };
};

export default compose<ComponentType>(connect(mapStateToProps, {
    setCurrentPage,
    setNameSearch,
    requestUsers,
    follow,
    unfollow,
}), withAuthRedirect)(UsersContainer);