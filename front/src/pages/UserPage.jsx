import React, {useMemo, useReducer, useState} from 'react';
import CreateUser from '../components/users/CreateUser';
import UserList from '../components/users/UserList';
import produce from 'immer';

export const UserDispatch = React.createContext(null);

function countActiveUsers(users){
    console.log('활성 사용자 수를 세는중...');
    return users.filter( user => user.active).length;

}

const initialState = {
    inputs: {
      username: '',
      email: ''
    },

    users: [
      {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com',
        active: true
      },
      {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active: false
      },
      {
        id: 3,
        username: 'liz',
        email: 'liz@example.com',
        active: false
      }
    ]
};

function reducer(state, action){
    switch(action.type){
        case 'CREATE_USER':
            // return{
            //     inputs: initialState.inputs,
            //     users: state.users.concat(action.user)
            // };
            return produce(state, draft =>{
                draft.users.push(action.user);
            });
        case 'TOGGLE_USER':
            // return{
            //     ...state,
            //     users: state.users.map(
            //         user=>
            //             user.id === action.id ? {...user, active: !user.active} : user
            //     )
            // };
            return produce(state, draft =>{
                const user = draft.users.find( user => user.id === action.id);
                user.active = !user.active;
            });
        case 'REMOVE_USER':
            // return{
            //     ...state,
            //     users: state.users.filter(
            //         user=>
            //             user.id !== action.id
            //     )
            // };
            return produce(state, draft =>{
                const index = draft.users.findIndex(user => user.id === action.id);
                draft.users.splice(index,1);
            });
        default:
            return state;
    }
}

function UserPage(){
    console.log("userPage 렌더:");
    

    const [state, dispatch] = useReducer(reducer, initialState);
    const { users } = state;
    const count = useMemo(() => countActiveUsers(users), [users]);
 
    return(
        <UserDispatch.Provider value={dispatch} >
            <CreateUser/>
            <UserList users={users} />
            <div>활성 사용자 수: {count}</div>
        </UserDispatch.Provider>
    );
}
export default UserPage