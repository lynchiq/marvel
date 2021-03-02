import {
  CharacterCardImg,
  CharacterCardName,
  CharacterCardWrapper,
  CharacterContentBox,
  CharacterFavorite,
  CharacterUnfavorite
} from "./CharacterCard.styles";
import {useDispatch} from "react-redux";
import {addToFavorites, removeFromFavorites} from "../../store/modules/characters/slice";

const CharacterCard = ({id, name, thumbnail, favorite}) => {
  let dispatch = useDispatch()

  let fav = () => {
    dispatch(addToFavorites(id))
  }

  let unfav = () => {
    dispatch(removeFromFavorites(id))
  }

  return (
    <CharacterCardWrapper>
      {
        favorite ? <CharacterFavorite onClick={unfav}/> : <CharacterUnfavorite onClick={fav}/>
      }
      <CharacterCardImg src={[thumbnail.path, thumbnail.extension].join('.')} alt={name}/>
      <CharacterContentBox to={`/characters/${id}`}>
        <CharacterCardName>{name}</CharacterCardName>
      </CharacterContentBox>
    </CharacterCardWrapper>
  )
}

export default CharacterCard