import {BrowserRouter as Router} from 'react-router-dom'
import {Routes} from "./services/routes"
import {Header} from "./components/Header/Header"
import {GlobalStyle} from "./styles/global"
import styled from "styled-components"
import Main from "./components/Main/Main";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
  main {
    flex-grow: 1;
  }
`

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Page>
        <Header/>
        <Main>
          <Routes/>
        </Main>
      </Page>
    </Router>
  );
}

export default App;
