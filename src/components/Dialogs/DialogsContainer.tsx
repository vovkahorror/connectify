import {DialogsPageType, requestDialogs, requestMessages, sendMessage} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import React, {ComponentType} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {PathParamsType} from '../Profile/ProfileContainer';
import {Preloader} from '../common/Preloader/Preloader';

class DialogsContainer extends React.Component<DialogsContainerPropsType> {
    componentDidMount() {
        this.props.requestDialogs();
    }

    render() {
        const userID = +this.props.match.params.userID;

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Dialogs userID={userID} {...this.props} />
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        authUserID: state.auth.id,
        authUserPhoto: state.auth.photo,
        isFetching: state.app.isFetching,
    };
};

type MapStateToPropsType = {
    dialogsPage: DialogsPageType;
    authUserID: number | null;
    authUserPhoto?: string | null;
    isFetching: boolean;
}

type MapDispatchToPropsType = {
    requestDialogs: () => Promise<void>;
    requestMessages: (userID: number) => Promise<void>;
    sendMessage: (userID: number, newMessageBody: string) => Promise<void>;
}

type DialogsContainerPropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchToPropsType;

export default compose<ComponentType>(connect(mapStateToProps, {
    requestDialogs,
    requestMessages,
    sendMessage,
}), withRouter, withAuthRedirect)(DialogsContainer);