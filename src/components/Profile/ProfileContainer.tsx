import React, {ComponentType} from 'react';
import {getStatus, getUserProfile, ProfileAPIType, ProfilePageType, updateStatus} from '../../redux/profile-reducer';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type PathParamsType = {
    userID: string;
}
type MapStateType = {
    profile: ProfileAPIType | null;
    status: string;
}
type MapDispatchType = {
    getUserProfile: (userID: number) => void;
    getStatus: (userID: number) => void;
    updateStatus: (status: string) => void;
}
type OwnPropsType = MapStateType & MapDispatchType;
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType;

class ProfileContainer extends React.Component<ProfileContainerPropsType, ProfilePageType> {
    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = '26489';
        }
        this.props.getUserProfile(+userID);
        this.props.getStatus(+userID);
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    };
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    };
};

export default compose<ComponentType>(connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
}), withRouter, withAuthRedirect)(ProfileContainer);