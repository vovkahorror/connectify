import React, {ComponentType, Suspense} from 'react';
import './App.scss';
import {Navbar} from './components/Navbar/Navbar';
import {HashRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import {AppStateType, store} from './redux/redux-store';
import {Preloader} from './components/common/Preloader/Preloader';
import {withSuspense} from './hoc/withSuspense';
import {Alert} from 'antd';
import ThemeProvider from './theme/ThemeProvider';
import {UseThemeResult} from './theme/useTheme';
import {withContext} from './hoc/withContext';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Chat = React.lazy(() => import('./components/Chat/Chat'));
const Login = React.lazy(() => import('./components/Login/Login'));
const Register = React.lazy(() => import('./components/Register/Register'));
const News = React.lazy(() => import('./components/News/News'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const NotFound = React.lazy(() => import('./components/NotFound/NotFound'));

class App extends React.Component<AppPropsType, AppStateType> {
    caughtAllUnhandledRejection = (event: PromiseRejectionEvent) => {
        return <Alert message={event.promise.catch(error => error.message || 'Some error occurred')} type={'error'}/>;
    };

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.caughtAllUnhandledRejection);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.caughtAllUnhandledRejection);
    }

    render() {
        const {theme} = this.props;

        if (!this.props.isInitialized) {
            return <Preloader/>;
        }

        return (
            <div className={`app-wrapper ${theme}`}>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper__content'}>
                    <Switch>
                        <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
                        <Route path={'/profile/:userID?'} render={withSuspense(ProfileContainer)}/>
                        <Route path={'/users'} render={withSuspense(UsersContainer)}/>
                        <Route path={'/dialogs/:userID?'} render={withSuspense(DialogsContainer)}/>
                        <Route path={'/chat'} render={withSuspense(Chat)}/>
                        <Route path={'/login'} render={withSuspense(Login)}/>
                        <Route path={'/register'} render={withSuspense(Register)}/>
                        <Route path={'/news'} render={withSuspense(News)}/>
                        <Route path={'/settings'} render={withSuspense(Settings)}/>
                        <Route path={'*'} render={withSuspense(NotFound)}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isInitialized: state.app.isInitialized,
});

const AppContainer = compose<ComponentType>(withContext, withRouter, connect(mapStateToProps, {initializeApp}))(App);

const SocialNetworkApp = () => {
    return (
        <Suspense fallback={<Preloader/>}>
            <HashRouter>
                <Provider store={store}>
                    <ThemeProvider>
                        <AppContainer/>
                    </ThemeProvider>
                </Provider>
            </HashRouter>
        </Suspense>
    );
};


type MapStateType = {
    isInitialized: boolean;
}

type MapDispatchType = {
    initializeApp: () => void;
}

type AppPropsType = MapStateType & MapDispatchType & UseThemeResult;

export default SocialNetworkApp;