import React from "react";
import {ProfileAPIType, ProfilePageType, setUserProfile} from "../../redux/profile-reducer";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type ProfileContainerPropsType = {
    profile: ProfileAPIType | null;
    setUserProfile: (profile: ProfileAPIType) => void;
}

class ProfileContainer extends React.Component<ProfileContainerPropsType, ProfilePageType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    };
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
    };
};

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);