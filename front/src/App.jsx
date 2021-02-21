
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import MainPage from './Studys/pages/MainPage';
import Todo from './Studys/pages/Todo';
import LightControll from './Studys/pages/LightControll';
import Study from './Studys/pages/Study';
import UserPage from './Studys/pages/UserPage';
import ConnectApi from './Studys/pages/ConnectApi';
import Profile from './Studys/pages/Profile';
import About from './Studys/pages/About';
import Profiles from './Studys/pages/Profiles';
import HistorySample from './Studys/pages/HistorySample';
// import { UsersProvider } from './components/APi/UsersProvider';

export default function App(){
    return(
        <Switch>
            <Route path="/button" component={MainPage}/>
            <Route path="/todoList" component={Todo} />
            <Route path="/light" component={LightControll}/>
            <Route path="/study" component={Study}/>
            <Route path="/ConnectAPI" component={ConnectApi}/>

            <Route path="/Profiles" component={Profiles}/>
            <Route path="/About" component={About}/>
            <Route path="/history" component={HistorySample}/>

            <Route path="/" component={UserPage} exact/>
            <Route
          // path 를 따로 정의하지 않으면 모든 상황에 렌더링됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
        </Switch>
    );
}