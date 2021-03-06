import { combineReducers } from '@reduxjs/toolkit'
import heroesReducer from './heroes/reducer'
import favoriteHeroesReducer from "./favorite/reducer";
import comicsReducer from "./comics/reducer";


const rootReducer = combineReducers({
  heroes: heroesReducer,
  favoriteHeroes: favoriteHeroesReducer,
  comics: comicsReducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer