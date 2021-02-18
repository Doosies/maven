import axios from 'axios';
// import { setUseProxies } from 'immer';
import React, { useEffect, useReducer, useState } from 'react';
import User from '../components/APi/User';
// import useAsync from '../hooks/useAsync';
import {useAsync} from 'react-async';

//useAsync 에서는 Promis의 결과를 바로 data에 담기때문에,
//요청을 한 이후 reponseㅇ서 data 추출하여 반환하는 함수 따로
async function getUsers(){
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    );
    return response.data;
}

function ConnectApi(){
    const [userId, setUserId] = useState(null);
    // const [state, refetch] = useAsync(getUsers, [], true);
    const { data:users, error, isLoading, run} = useAsync({
        deferFn: getUsers,
    })

    // const {loading, data:users, error} = state;//state.data를 users키워드로 조회

    if(isLoading) return <div>Loading...</div>;
    if(error) return <div> 에러 발생 </div>;
    if( !users) return <button onClick={run}>불러오기</button>;

    return(
        <>
            <ul>
                {users.map(user =>(
                    <li key={user.id}
                        onClick={()=>setUserId(user.id)}
                        style={{ cursor: 'pointer' }}
                    >
                            {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={run}>다시 불러오기</button>
            {userId && <User id={userId}/>}
        </>
    );
}
export default ConnectApi