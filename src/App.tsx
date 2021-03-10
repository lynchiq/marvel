import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './services/routes';
import { Header } from './components/Header/Header';
import { Page, Main } from './styles/global';

const App = () => (
  <Router>
    <Page>
      <Header />
      <Main>
        <Routes />
      </Main>
    </Page>
  </Router>
);

export default App;
