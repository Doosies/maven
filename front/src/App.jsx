
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import MainPage from './pages/MainPage';
import Todo from './pages/Todo';
import LightControll from './pages/LightControll';
import Study from './pages/Study';
import UserPage from './pages/UserPage';
import ConnectApi from './pages/ConnectApi';

export default function App(){
    return(
        <BrowserRouter>
            <Route path="/button" component={MainPage}/>
            <Route path="/todoList" component={Todo} />
            <Route path="/light" component={LightControll}/>
            <Route path="/study" component={Study}/>
            <Route path="/ConnectAPI" component={ConnectApi}/>
            <Route path="/" component={UserPage} exact/>
        </BrowserRouter>
    );
}