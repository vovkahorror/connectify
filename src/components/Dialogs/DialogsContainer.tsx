import {DialogsPageType, requestDialogs, sendMessage} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import React, {ComponentType} from 'react';

class DialogsContainer extends React.Component<DialogsContainerPropsType> {
    componentDidMount() {
        this.props.requestDialogs();
    }

    render() {
        return <Dialogs {...this.props} />;
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    };
};

type MapStateToPropsType = {
    dialogsPage: DialogsPageType;
}

type MapDispatchToPropsType = {
    requestDialogs: () => void;
    sendMessage: (userID: number, newMessageBody: string) => void;
}

type DialogsContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

export default compose<ComponentType>(connect(mapStateToProps, {
    requestDialogs,
    sendMessage,
}), withAuthRedirect)(DialogsContainer);