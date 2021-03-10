import { createAction } from '@reduxjs/toolkit';
import { HeroType } from '../../../types/types';

export const setFavoriteHero = createAction<HeroType, 'SET_FAVORITE_HERO'>(
  'SET_FAVORITE_HERO',
);

export const unsetFavoriteHero = createAction<number, 'UNSET_FAVORITE_HERO'>(
  'UNSET_FAVORITE_HERO',
);
