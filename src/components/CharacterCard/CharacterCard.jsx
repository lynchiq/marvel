import {
  CharacterCardImg,
  CharacterCardName,
  CharacterCardWrapper,
  CharacterContentBox,
  CharacterFavorite
} from "./CharacterCard.styles";
import {Link} from "react-router-dom";
import Character from "../Character";

const CharacterCard = ({id, name, img, favorite}) => {
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