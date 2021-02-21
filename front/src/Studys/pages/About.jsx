import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import qs from 'qs';

function About({location}){
    const query = qs.parse(location.search,{
        ignoreQueryPrefix: true
    });
    const detail = query.detail === 'true';
    return(
        <div>
            <h1> About 페이지!</h1>
            <Link to="/">홈</Link>
            {detail && <p>추가적인 정보가 어쩌고 저쩌고..</p>}
        </div>
    );
}
export default About