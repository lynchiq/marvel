import {BrowserRouter as Router} from 'react-router-dom'
import {Routes} from "./pages/routes";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes/>
      <Footer/>
    </Router>
  );
}

export default App;
