import React, { useRef, useState } from 'react';

//NOTE - 유저를 편하게 출력하기 위한 변수.
function User({ user, onRemove, onToggle }){
  return(
      <div>
        <b style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black',
        }} onClick={()=>onToggle(user.id)}>
          {user.username}
        </b>
        <span>{user.email} </span>
        <button onClick={()=> onRemove(user.id)}>삭제</button>
    </div>
  );
}

function StudyPage({users, onRemove, onToggle}){
    
    return(
        <div>
          {/* 알고리즘 - 모든 유저의 정보를 출력. */}
          {users.map( user => 
          <User 
            user={user} 
            key={user.id} 
            onRemove={onRemove}
            onToggle={onToggle}
          /> )}
        </div>
    );
}
export default StudyPage