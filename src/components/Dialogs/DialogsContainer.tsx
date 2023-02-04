import styles from './Dialogs.module.css';
import {DialogsPageType, sendMessageAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {ComponentType} from 'react';

type mapStateToPropsType = {
    dialogsPage: DialogsPageType;
}
type MapDispatchToPropsType = {
    sendMessage: (newMessageBody: string) => void;
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody));
        },
    };
};

export default compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);