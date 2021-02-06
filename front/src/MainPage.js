import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import CustomButton from './components/Button';

// const Circle = ()=><div>hi</div>;
const AppBlock = styled.div`
    width:512px;
    margin: 0 auto;
    margin-top: 4rem;
    border: 1px solid black;
    padding: 1rem;
`;


function MainPage() {
    return (
        <ThemeProvider
          theme={{
            color: {
              blue: '#228be6',
              gray: '#495057',
              pink: '#f06595'
            }
          }}
        >
          <AppBlock>
            <CustomButton>BUTTON</CustomButton>
            <CustomButton color="gray">BUTTON</CustomButton>
            <CustomButton color="pink">BUTTON</CustomButton>
          </AppBlock>
        </ThemeProvider>
    );

}

export default MainPage;