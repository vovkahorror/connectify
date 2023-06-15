import {
    deleteMessage,
    DialogsPageType,
    requestDialogs,
    requestMessages,
    sendMessage,
    setCurrentPage,
} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import React, {ComponentType} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {PathParamsType} from '../Profile/ProfileContainer';
import {Preloader} from '../common/Preloader/Preloader';
import {reset} from 'redux-form';

class DialogsContainer extends React.Component<DialogsContainerPropsType> {
    componentDidMount() {
        this.props.requestDialogs();
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
    };

    render() {
        const userID = +this.props.match.params.userID;

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Dialogs userID={userID} onPageChanged={this.onPageChanged} {...this.props} />
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
    requestMessages: (userID: number, page: number, pageSize: number) => Promise<void>;
    sendMessage: (userID: number, newMessageBody: string) => Promise<void>;
    deleteMessage: (messageID: string) => Promise<void>;
    setCurrentPage: (pageNumber: number) => void;
    reset: (formName: string) => void;
}

type DialogsContainerPropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchToPropsType;

export default compose<ComponentType>(connect(mapStateToProps, {
    requestDialogs,
    requestMessages,
    sendMessage,
    deleteMessage,
    setCurrentPage,
    reset,
}), withRouter, withAuthRedirect)(DialogsContainer);