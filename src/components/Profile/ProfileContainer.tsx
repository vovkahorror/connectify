import React from "react";
import {getUserProfile, ProfileAPIType, ProfilePageType} from "../../redux/profile-reducer";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userID: string;
}
type MapStateType = {
    profile: ProfileAPIType | null;
    isAuth: boolean;
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
        if (!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        }

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    };
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    };
};

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);