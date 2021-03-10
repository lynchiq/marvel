import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { ComicInfo } from './Comic.styles';
import { H1, H2, Paragraph } from '../../styles/typography';
import Thumbnail from '../../common/Thumbnail';
import { ComicType } from '../../types/types';
import stripHtml from '../../utils/stripHtml';

const Comic = ({
  title,
  description,
  thumbnail,
  creators,
  characters,
}: ComicType) => (
  <Grid container direction="row" justify="space-between">
    <Grid item xs={6}>
      <H1>{title}</H1>
      <Paragraph>{stripHtml(description)}</Paragraph>
      <Grid container direction="row" justify="space-between">
        <Box>
          <H2>Creators</H2>
          {creators.items
            && creators.items.map((creator) => (
              <ComicInfo key={creator.name}>
                {creator.role}
                :
                {creator.name}
              </ComicInfo>
            ))}
        </Box>
        <Box>
          <H2>Characters</H2>
          {characters.items
            && characters.items.map((hero) => <ComicInfo key={hero.name}>{hero.name}</ComicInfo>)}
        </Box>
      </Grid>
    </Grid>
    <Grid item xs={4}>
      <Thumbnail thumbnail={thumbnail} />
    </Grid>
  </Grid>
);

export default Comic;
