import { Grid } from '@material-ui/core';
import React from 'react';
import HeroCard from '../HeroCard';
import { HeroType } from '../../types/types';

type Props = {
  heroes: HeroType[];
};

const HeroesList = ({ heroes }: Props) => (
  <Grid container spacing={2}>
    {heroes.map((hero) => (
      <Grid key={hero.id} item lg={3} md={4} sm={6}>
        <HeroCard
          id={hero.id}
          name={hero.name}
          description={hero.description}
          thumbnail={hero.thumbnail}
        />
      </Grid>
    ))}
  </Grid>
);

export default HeroesList;
