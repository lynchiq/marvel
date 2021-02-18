import {BrowserRouter as Router} from 'react-router-dom'
import {Routes} from "./pages/routes";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import {GlobalStyle} from "./styles/global";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header/>
      <Routes/>
      <Footer/>
    </Router>
  );
}

export default App;
