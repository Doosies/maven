import React from 'react';
import {createGlobalStyle} from 'styled-components';

import TodoHead from '../components/TodoList/TodoHead';
import TodoList from '../components/TodoList/TodoList';
import TodoTemplate from '../components/TodoList/TodoTemplate';
import TodoCreate from '../components/TodoList/TodoCreate';
import { TodoProvider } from '../components/TodoList/TodoProvider';

const GlobalStyle = createGlobalStyle`
    body{
        background: #e9ecef;
        overflow-y:hidden;
    }
`;

function Todo() {
    return (
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
    );
  }

export default Todo