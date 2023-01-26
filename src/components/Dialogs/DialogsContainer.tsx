import styles from './Dialogs.module.css';
import {DialogsPageType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

type mapStateToPropsType = {
    dialogsPage: DialogsPageType;
}
type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void;
    sendMessage: () => void;
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body));
        },
        sendMessage: () => {
            dispatch(sendMessageAC());
        },
    };
};

const AuthRedirectComponent = withAuthRedirect(Dialogs);

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);