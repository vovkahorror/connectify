import React, {ComponentType} from 'react';
import './normalize.css';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import {AppStateType} from './redux/redux-store';
import {Preloader} from './components/common/Preloader/Preloader';

type MapStateType = {
    isInitialized: boolean;
}

type MapDispatchType = {
    initializeApp: () => void
}

type AppPropsType = MapStateType & MapDispatchType;

class App extends React.Component<AppPropsType, AppStateType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        const ProfileRender = () => <ProfileContainer/>;
        const DialogsRender = () => <DialogsContainer/>;
        const UsersRender = () => <UsersContainer/>;
        const LoginRender = () => <Login/>;

        if (!this.props.isInitialized) {
            return <Preloader/>;
        }

        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper__content'}>
                    <Route path={'/profile/:userID?'} render={ProfileRender}/>
                    <Route path={'/dialogs'} render={DialogsRender}/>
                    <Route path={'/users'} render={UsersRender}/>
                    <Route path={'/login'} render={LoginRender}/>
                    <Route path={'/news'} render={News}/>
                    <Route path={'/music'} render={Music}/>
                    <Route path={'/settings'} render={Settings}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isInitialized: state.app.isInitialized,
});

export default compose<ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App);
