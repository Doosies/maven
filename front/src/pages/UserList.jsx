import React, { useContext } from 'react';
import { UserDispatch } from './UserPage';

//NOTE - 유저를 편하게 출력하기 위한 변수.
function User({ user }){
  const dispatch = useContext(UserDispatch);
  
  return(
      <div>
        <b style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black',
        }} 
        onClick={()=>{
          dispatch({
            type: 'TOGGLE_USER', id:user.id
          })
        }}
        >
          {user.username}
        </b>
        <span>{user.email} </span>
        <button onClick={()=>{
          dispatch({type: 'REMOVE_USER', id: user.id});
        }}>삭제</button>
    </div>
  );
}

function UserList({users}){
    return(
        <div>
          {/* 알고리즘 - 모든 유저의 정보를 출력. */}
          {users.map( user => 
          <User user={user} key={user.id} /> )}
        </div>
    );
}
export default React.memo(UserList,
  (prevProps, nextProps) => prevProps.users === nextProps.users);