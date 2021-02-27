import {
  CharacterCardImg,
  CharacterCardName,
  CharacterCardWrapper,
  CharacterContentBox,
  CharacterFavorite
} from "./CharacterCard.styles";

const CharacterCard = ({id, name, img, favorite, toggleFavorite}) => {
  return (
    <CharacterCardWrapper>
      <CharacterFavorite favorite={favorite} onClick={toggleFavorite}/>
      <CharacterCardImg src={img} alt={name}/>
      <CharacterContentBox to={`/characters/${id}`}>
        <CharacterCardName>{name}</CharacterCardName>
      </CharacterContentBox>
    </CharacterCardWrapper>
  )
}

export default CharacterCard