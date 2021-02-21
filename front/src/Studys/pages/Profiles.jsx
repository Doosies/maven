import React from 'react';
import { Link, Route } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';

function Profiles(){
    return(
        <div>
            <h3> 유저 목록: </h3>
            <ul>
                <li>
                    <Link to="/Profiles/velopert"> velopert</Link>
                </li>
                <li>
                    <Link to="/Profiles/gildong"> gildong</Link>
                </li>
            </ul>

            <Route path="/Profiles" exact
                render={()=> <div>유저를 선택!</div>}
            />
            <Route path="/Profiles/:username" component={Profile}/>
            <WithRouterSample/>
        </div>
    );
}
export default React.memo(Profiles)