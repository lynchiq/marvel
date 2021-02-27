import {Switch, Route} from 'react-router-dom'
import {HeroPage, Characters, Home, SearchPage, FavoritesPage} from "./index";

export const Routes = () => {
  return (
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/characters' exact component={Characters} />
        <Route path='/characters/:id' component={HeroPage} />
        <Route path='/favorites' component={FavoritesPage} />
        <Route path='/search' component={SearchPage} />
      </Switch>
  )
}