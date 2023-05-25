import React, {ComponentType} from 'react';
import {
    getStatus,
    getUserProfile,
    ProfileAPIType,
    ProfilePageType,
    savePhoto, saveProfile,
    updateStatus,
} from '../../redux/profile-reducer';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {Preloader} from '../common/Preloader/Preloader';

type PathParamsType = {
    userID: string;
}
type MapStateToPropsType = {
    profile: ProfileAPIType | null;
    status: string;
    authorizedUserID: number | null;
    isAuth: boolean;
    isFetching: boolean;
}
type MapDispatchToPropsType = {
    getUserProfile: (userID: number) => void;
    getStatus: (userID: number) => void;
    updateStatus: (status: string) => void;
    savePhoto: (file: File) => void;
    saveProfile: (formData: ProfileAPIType) => Promise<boolean>;
}
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType;
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType;

class ProfileContainer extends React.Component<ProfileContainerPropsType, ProfilePageType> {
    refreshProfile() {
        let userID = +this.props.match.params.userID;
        if (!userID) {
            userID = this.props.authorizedUserID as number;
        }
        this.props.getUserProfile(userID);
        this.props.getStatus(userID);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>) {
        if (this.props.match.params.userID !== prevProps.match.params.userID) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Profile isOwner={!this.props.match.params.userID}
                         userID={+this.props.match.params.userID || this.props.authorizedUserID as number} {...this.props}/>
            </>
        );
    };
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserID: state.auth.id,
        isAuth: state.auth.isAuth,
        isFetching: state.app.isFetching,
    };
};

export default compose<ComponentType>(connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
}), withRouter, withAuthRedirect)(ProfileContainer);