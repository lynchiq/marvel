import {Switch, Route} from 'react-router-dom'
import {HeroPage, CharactersPage, Home, SearchPage, FavoritesPage, ComicPage} from "./index";

export const Routes = () => {
  return (
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/characters' exact component={CharactersPage} />
        <Route path='/characters/:id' component={HeroPage} />
        <Route path='/favorites' component={FavoritesPage} />
        <Route path='/search' component={SearchPage} />
        <Route path='/comics/:id' component={ComicPage} />
      </Switch>
  )
}