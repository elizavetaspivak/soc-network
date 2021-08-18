import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {HashRouter, Redirect, Route, withRouter} from 'react-router-dom'
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {HeaderContainer} from './components/Header/HeaderContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './Login/Login';
import React from 'react';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/appReduser';
import {AppStateType, store} from './redux/redux-store';
import {Preloader} from './components/common/Preloader/Preloader';
import {WithSuspense} from './hoc/WithSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends React.Component<any, any> {
    catchAllUnhandlesErrors = (promiseRejectionEvent: PromiseRejectionEvent) => {
        alert(promiseRejectionEvent)
    }
    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandlesErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandlesErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exact path="/"
                           render={() => <Redirect to={'/profile'}/>}/>
                    <Route path="/dialogs"
                           render={WithSuspense(DialogsContainer)}/>
                    <Route path="/profile/:userId?"
                           render={WithSuspense(ProfileContainer)}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/users"
                           render={() => <UsersContainer/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                    <Route path='/404' render={() => <div>404 NOT FOUND</div>}/>
                    <Redirect from={'*'} to={'/404'} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App);

export let SamuraiJSApp = () => {
    return <Provider store={store}>
        <HashRouter>
            <AppContainer/>
        </HashRouter>
    </Provider>
}