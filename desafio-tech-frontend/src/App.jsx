import styled from "styled-components";
import { GlobalStyle } from './components/GlobalStyle';

const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items:center;
    background-color: #282c34;
`

const Title = styled.h1`
  font-size: 3rem;
  color: white;
  font-family: sans-serif;
`

function App(){
  return(

    <Wrapper>
      <Title>
        Olá, mundo!
      </Title>
    </Wrapper>
  );
}

export default App;