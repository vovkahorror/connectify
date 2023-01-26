import React, {ComponentType} from 'react';
import {getUserProfile, ProfileAPIType, ProfilePageType} from '../../redux/profile-reducer';
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
}
type MapDispatchType = {
    getUserProfile: (userID: number) => void;
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
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    };
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        profile: state.profilePage.profile,
    };
};

export default compose<ComponentType>(connect(mapStateToProps, {getUserProfile}), withRouter, withAuthRedirect)(ProfileContainer);