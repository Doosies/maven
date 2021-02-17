import React from 'react';
import {createGlobalStyle} from 'styled-components';

import TodoHead from '../components/TodoList/TodoHead';
import TodoList from '../components/TodoList/TodoList';
import TodoTemplate from '../components/TodoList/TodoTemplate';
import TodoCreate from '../components/TodoList/TodoCreate';

const GlobalStyle = createGlobalStyle`
    body{
        background: #e9ecef;
        overflow-y:hidden;
    }
`;

function Todo(){
    return(
        <>
            <GlobalStyle/>
            <TodoTemplate>
                <TodoHead/>
                <TodoList/>
                <TodoCreate/>
            </TodoTemplate>
        </>
    );
}

export default Todo