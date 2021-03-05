import {Switch, Route} from 'react-router-dom'
import HeroesPage from "../pages/HeroesPage/HeroesPage";

export const Routes = () => {
  return (
      <Switch>
        <Route path='/' exact component={HeroesPage}/>
      </Switch>
  )
}