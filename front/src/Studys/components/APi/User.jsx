import React, {useEffect, useState} from 'react';
// import useAsync from '../../hooks/useAsync';
import { useAsync } from 'react-async';
import axios from 'axios';
import { getUser, useUsersDispatch, useUsersState } from './UsersProvider';

// async function getUser({id}) {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/users/${id}`
//     );
//     return response.data;
//   }

function User({ id }){
    // const [state] = useAsync(() => getUser(id), [id]);
    // const { loading, data: user, error } = state;
    // const { data:user, error, isLoading } = useAsync({
    //     promiseFn: getUser,
    //     id,
    //     watch:id
    // });
    const state = useUsersState();
    const dispatch = useUsersDispatch();

    const { data:user, error, isLoading } = state.user;
    // const fetch = () => {
    //     getUser(dispatch);
    // }
    useEffect( () =>{
        getUser(dispatch, id);
    },[dispatch, id]);

    if (isLoading) return <div>로딩중..</div>;
    if (error) return <div>user 정보 불러오기 에러가 발생했습니다</div>;
    if (!user) return null;
  
    return (
        <div>
          <h2>{user.username}</h2>
          <p>
            <b>Email:</b> {user.email}
          </p>
        </div>
    );
}

export default User