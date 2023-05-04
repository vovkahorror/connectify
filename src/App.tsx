import React, {ComponentType} from 'react';
import './normalize.css';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import {AppStateType, store} from './redux/redux-store';
import {Preloader} from './components/common/Preloader/Preloader';
import {withSuspense} from './hoc/withSuspense';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));

class App extends React.Component<AppPropsType, AppStateType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>;
        }

        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper__content'}>
                    <Route path={'/profile/:userID?'} render={withSuspense(ProfileContainer)}/>
                    <Route path={'/dialogs'} render={withSuspense(DialogsContainer)}/>
                    <Route path={'/users'} render={withSuspense(UsersContainer)}/>
                    <Route path={'/login'} render={withSuspense(Login)}/>
                    <Route path={'/news'} render={withSuspense(News)}/>
                    <Route path={'/music'} render={withSuspense(Music)}/>
                    <Route path={'/settings'} render={withSuspense(Settings)}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isInitialized: state.app.isInitialized,
});

const AppContainer = compose<ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App);

const SocialNetworkApp = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    );
};


type MapStateType = {
    isInitialized: boolean;
}

type MapDispatchType = {
    initializeApp: () => void
}

type AppPropsType = MapStateType & MapDispatchType;

export default SocialNetworkApp;