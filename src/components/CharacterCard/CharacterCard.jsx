import {CharacterCardImg, CharacterCardName, CharacterCardWrapper, CharacterContentBox} from "./CharacterCard.styles";
import {Link} from "react-router-dom";

const CharacterCard = ({id, name, img}) => {
  return (
    <Link to={`/characters/${id}`}>
      <CharacterCardWrapper>
        <CharacterCardImg src={img} alt={name}/>
        <CharacterContentBox>
          <CharacterCardName>{name}</CharacterCardName>
        </CharacterContentBox>
      </CharacterCardWrapper>
    </Link>
  )
}

export default CharacterCard