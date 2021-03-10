import { Switch, Route } from 'react-router-dom';
import HeroesPage from '../pages/HeroesPage/HeroesPage';
import HeroPage from '../pages/HeroPage/HeroPage';
import HomePage from '../pages/HomePage/HomePage';
import FavoritesPage from '../pages/FavoritesPage/FavoritesPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import ComicsPage from '../pages/ComicsPage/ComicsPage';
import ComicPage from '../pages/ComicPage/ComicPage';

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/heroes" exact component={HeroesPage} />
    <Route path="/heroes/:id" exact component={HeroPage} />
    <Route path="/favorites" component={FavoritesPage} />
    <Route path="/search" component={SearchPage} />
    <Route path="/heroes/:id/comics" exact component={ComicsPage} />
    <Route
      path="/heroes/:heroId/comics/:comicId"
      exact
      component={ComicPage}
    />
  </Switch>
);
