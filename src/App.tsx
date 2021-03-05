import {BrowserRouter as Router} from 'react-router-dom'
import {Routes} from "./services/routes"
import {Header} from "./components/Header/Header"
import Main from "./components/Main/Main";
import {Page} from "./styles/global";

const App = () => {
  return (
    <Router>
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
