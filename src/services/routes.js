import {Switch, Route} from 'react-router-dom'
import {HeroPage, CharactersPage, HomePage, SearchPage, FavoritesPage, ComicPage} from "../pages";

export const Routes = () => {
  return (
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/characters' exact component={CharactersPage} />
        <Route path='/characters/:id' component={HeroPage} />
        <Route path='/favorites' component={FavoritesPage} />
        <Route path='/search' component={SearchPage} />
        <Route path='/comics/:id' component={ComicPage} />
      </Switch>
  )
}