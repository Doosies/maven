
import React, {useRef, useState, useMemo, useEffect, useCallback} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import MainPage from './pages/MainPage';
import Todo from './pages/Todo';
import StudyPage from './pages/UserList';
import LightControll from './pages/LightControll';

import CreateUser from './components/users/CreateUser';

function countActiveUsers(users){
    console.log('활성 사용자 수를 세는중...');
    return users.filter( user => user.active).length;

}
export default function App(){

    //상태 입력한 값들의 상태 관리
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
    });

    const {username, email} = inputs;           


    const onChange= useCallback( e =>{

        //NOTE 입력값이 바뀌면 콜백
        const {name, value} = e.target;         
        setInputs(inputs=> ({ 
            ...inputs,
            [name]:value,
        }));

    }, []);
    //상태 - user상태
    const [users, setUsers] = useState([        
        {
          id: 1,
          username: 'velopert',
          email: 'public.velopert@gmail.com',
          active:true,
        },
        { 
          id: 2,
          username: 'tester',
          email: 'tester@example.com',
          active:false,
        },
        {
          id: 3, 
          username: 'liz',
          email: 'liz@example.com',
          active:false,
        }
    ]);

    //현재 유저의 위치를 나타내는 Ref훅
    const nextId = useRef(4);       

   //버튼을 눌렀을 때 호출되는 함수.
    const onCreate = useCallback(()=>{          
        //알고리즘 id로 현재 위치를 줌.
        // username과 email은 입력값에 있는것을 넣어줌
        // 그 후 input란을 비움.
        const user={
            id: nextId.current,
            username,
            email,
        };
        // setUsers(users.concat(user));
        // 함수형 업데이트를 해줌.
        setUsers(users=> users.concat(user));

        setInputs({
            username:'',
            email:'',
        });

        nextId.current += 1;
        // console.log(nextId.current);
    },[ username, email]);

    const onRemove = useCallback( (id)=>{
        //NOTE -  user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦.
        //  = user.id가 id인것을 제거함
        // setUsers(users.filter(user=>user.id !== id));
        //함수형 업데이트를 해줌
        setUsers(users=>users.filter(user=>user.id !== id));
    },[]);
    
    const onToggle = useCallback(id=>{
        setUsers( users=>
            users.map(user=>
                user.id === id ? {...user, active: !user.active} : user
            )
        );
    },[]);
    // const count = countActiveUsers(users);
    const count = useMemo(()=> countActiveUsers(users), [users]);

    return(
        <BrowserRouter>
            <Route path="/button" component={MainPage}/>
            <Route path="/todoList" component={Todo} />
            <Route path="/light" component={LightControll}/>
            <Route path="/" exact render={()=> 
                <>
                    <CreateUser
                        username={username}
                        email={email}
                        onChange={onChange}
                        onCreate={onCreate}
                    />
                    <StudyPage users={users} onRemove={onRemove} onToggle={onToggle}/>
                    <div>황성 사용자 수: {count}</div>
                </>
            } />
        </BrowserRouter>
        
    );
}