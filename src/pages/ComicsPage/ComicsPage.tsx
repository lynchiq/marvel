import { Box, Container, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ComicCard from '../../components/ComicCard';
import Button from '../../common/Button';
import { Heading } from '../../styles/typography';
import { getComics, getMoreComics } from '../../store/modules/comics/actions';
import { RootState } from '../../store/modules/rootReducer';
import {
  selectAllComics,
  selectComicsLoading,
} from '../../store/modules/comics/selectors';

const ComicsPage = () => {
  const dispatch = useDispatch();
  const { id }: any = useParams();

  useEffect(() => {
    dispatch(getComics.request(id));
  }, [dispatch, id]);

  const comics = useSelector((state: RootState) => selectAllComics(state));
  const isLoading = useSelector((state: RootState) => selectComicsLoading(state));

  const loadMore = () => {
    const payload = {
      id,
      offset: comics.length + 8,
    };
    dispatch(getMoreComics.request(payload));
  };

  return (
    <>
      <Container>
        <Box display="flex" justifyContent="center">
          <Heading>Comics</Heading>
        </Box>
        <Grid container justify="center">
          {comics.map((comic) => (
            <Grid item md={2} sm={4} key={comic.id}>
              <ComicCard
                id={comic.id}
                title={comic.title}
                thumbnail={comic.thumbnail}
              />
            </Grid>
          ))}
        </Grid>
        <Box
          display="flex"
          justifyContent="center"
          marginTop="2"
          marginBottom="2"
        >
          <Button
            text="load more"
            onClick={loadMore}
            disabled={isLoading}
            isLoading={isLoading}
          />
        </Box>
      </Container>
    </>
  );
};

export default ComicsPage;
