import { Box, Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useMemo } from 'react';
import { Pagination } from '@material-ui/lab';
import { Section } from '../../styles/global';
import {
  getHeroes,
  setHeroesCurrentPage,
} from '../../store/modules/heroes/actions';
import { RootState } from '../../store/modules/rootReducer';
import { Heading } from '../../styles/typography';
import HeroesList from '../../components/HeroesList/HeroesList';
import {
  selectAllHeroes,
  selectCurrentHeroesTotal,
  selectHeroesCurrentPage,
} from '../../store/modules/heroes/selectors';

const HeroesPage: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.heroes.loading);
  const heroes = useSelector((state: RootState) => selectAllHeroes(state));
  const heroesTotalCount = useSelector((state: RootState) => selectCurrentHeroesTotal(state));
  const currentPage = useSelector((state: RootState) => selectHeroesCurrentPage(state));
  const perPage = 20;

  const pageCount = useMemo(() => Math.ceil(heroesTotalCount / perPage), [
    heroesTotalCount,
    perPage,
  ]);

  const calculateOffset = (pageNumber: number) => (pageNumber - 1) * perPage;

  const goToPage = (event: any, pageNumber: number) => {
    dispatch(setHeroesCurrentPage(pageNumber));
    dispatch(getHeroes.request(calculateOffset(pageNumber)));
  };

  useEffect(() => {
    dispatch(getHeroes.request(calculateOffset(currentPage)));
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading>Superheroes</Heading>
          <Pagination
            count={pageCount}
            page={currentPage}
            onChange={goToPage}
            color="secondary"
            className="pagination"
          />
        </Box>
        {isLoading ? 'Loading...' : <HeroesList heroes={heroes} />}
      </Container>
    </Section>
  );
};

export default HeroesPage;
