import React, { useState } from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Button from '../components/ButtonTest/Button';
import Dialog from '../components/ButtonTest/Dialog';

// const Circle = ()=><div>hi</div>;
const AppBlock = styled.div`
    width:512px;
    margin: 0 auto;
    margin-top: 4rem;
    border: 1px solid black;
    padding: 1rem;
`;

const ButtonGroup = styled.div `
  & + & {
    margin-top: 1rem;
  }
`;


function MainPage() {
  const [dialog, setDialog] = useState(false);
  const onClick = ()=>{
    setDialog(true);
  }
  const onConfirm = ()=>{
    console.log("확인");
    setDialog(false);
  }
  const onCancel = ()=>{
    console.log("취소");
    setDialog(false);
  }

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
            <ButtonGroup>
              <Button size="large">BUTTON</Button>
              <Button>BUTTON</Button>
              <Button size="small">BUTTON</Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button color="gray" size="large">BUTTON</Button>
              <Button color="gray">BUTTON</Button>
              <Button color="gray" size="small">BUTTON</Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button color="pink" size="large">BUTTON</Button>
              <Button color="pink">BUTTON</Button>
              <Button color="pink" size="small">BUTTON</Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button c size="large" outline>BUTTON</Button>
              <Button color="gray" outline>BUTTON</Button>
              <Button color="pink" size="small" outline>BUTTON</Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button colos="blue" size="large" fullWidth>
                BUTTON
              </Button>
              <Button color="pink" size="large" fullWidth>
                BUTTON
              </Button>
              <Button color="gray" size="large" onClick={onClick} fullWidth>
                삭제하기
              </Button>
            </ButtonGroup>
          </AppBlock>

          <Dialog title="정말로 삭제 하시겠습니까?"
                  onConfirm={onConfirm}
                  onCancel={onCancel}
                  visible={dialog}

          >
            데이터를 정말로 삭제 하시겠습니까?
          </Dialog>
  
        </ThemeProvider>
    );

}

export default MainPage;