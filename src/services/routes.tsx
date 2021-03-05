import {Switch, Route} from 'react-router-dom'
import HeroesPage from "../pages/HeroesPage/HeroesPage";
import HeroPage from "../pages/HeroPage/HeroPage";

export const Routes = () => {
  return (
      <Switch>
        <Route path='/' exact component={HeroesPage}/>
        <Route path='/heroes/:id' component={HeroPage}/>
      </Switch>
  )
}