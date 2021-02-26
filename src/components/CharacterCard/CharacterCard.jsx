import {
  CharacterCardImg,
  CharacterCardName,
  CharacterCardWrapper,
  CharacterContentBox,
  CharacterFavorite
} from "./CharacterCard.styles";

const CharacterCard = ({id, name, img, toggleFavorite}) => {
  return (
    <CharacterCardWrapper>
      <CharacterFavorite/>
      <CharacterCardImg src={img} alt={name}/>
      <CharacterContentBox to={`/characters/${id}`}>
        <CharacterCardName>{name}</CharacterCardName>
      </CharacterContentBox>
    </CharacterCardWrapper>
  )
}

export default CharacterCard