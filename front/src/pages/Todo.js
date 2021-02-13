import React from 'react';
import {createGlobalStyle} from 'styled-components';
import TodoHead from '../components/TodoHead';
import TodoList from '../components/TodoList';
import TodoTemplate from '../components/TodoTemplate';

const GlobalStyle = createGlobalStyle`
    body{
        background: #e9ecef;
    }
`;

function Todo(){
    return(
        <>
            <GlobalStyle/>
            <TodoTemplate>
                <TodoHead/>
                <TodoList/>
            </TodoTemplate>
        </>
    );
}

export default Todo