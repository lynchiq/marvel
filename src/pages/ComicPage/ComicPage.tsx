import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import Comic from '../../components/Comic';
import { Section } from '../../styles/global';
import { RootState } from '../../store/modules/rootReducer';
import { selectComicById } from '../../store/modules/comics/selectors';

const ComicPage = () => {
  const { comicId }: any = useParams();

  const comic = useSelector((state: RootState) => selectComicById(state, +comicId));

  if (!comic) {
    return (
      <Container>
        <Section>Comic not found!</Section>
      </Container>
    );
  }

  return (
    <Container>
      <Section>
        <Comic
          id={comic.id}
          title={comic.title}
          description={comic.description}
          thumbnail={comic.thumbnail}
          creators={comic.creators}
          characters={comic.characters}
        />
      </Section>
    </Container>
  );
};

export default ComicPage;
