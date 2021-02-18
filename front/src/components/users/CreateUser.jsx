import React, { useContext, useRef } from 'react';
import useInputs from '../../hooks/useInputs';
import { UserDispatch } from '../../pages/UserPage';

function CreateUser(){
    console.log("CreateUser 렌더");
    const[{username, email}, onChange, reset] = useInputs({
        username: '',
        email: ''
    });
    const dispatch = useContext(UserDispatch);
    const nextID = useRef(4);
    
    const onCreate = () =>{
        dispatch({
            type: 'CREATE_USER',
            user:{
                id: nextID.current,
                username,
                email
            }
        });
        reset();
        nextID.current += 1;
    };
    return(
        <div>
            <input name="username"
            placeholder="계정명"
            onChange={onChange}
            value={username}/>

            <input name="email"
            placeholder="이메일"
            onChange={onChange}
            value={email}/>

            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default React.memo(CreateUser);