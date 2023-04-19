import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Bookmarks from './pages/Bookmarks';
import Lists from './pages/Lists';
import Profile from './pages/Profile';
import More from './pages/More';

const Routes = () => (
    <Switch>
        {/* <Redirect path="/" to="/home" exact={true} /> */}
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/explore" component={Explore}></Route>
        <Route exact path="/notifications" component={Notifications}></Route>
        <Route exact path="/messages" component={Messages}></Route>
        <Route exact path="/bookmarks" component={Bookmarks}></Route>
        <Route exact path="/lists" component={Lists}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path="/more" component={More}></Route>
        {/* <Route exact path="/login"
            component={
                () => {
                    let token = localStorage.getItem('token');

                    if (token != null) {
                        api.post('/aplicacao2/checktoken', {
                            token: token,
                        })
                        .then()
                        .catch();
            
                        return <Redirect  to="/main" exact={true} />;
                    }
                    else {
                        return <Login />;
                    }
                }
            }
        /> */}
    </Switch>

);

export default Routes;