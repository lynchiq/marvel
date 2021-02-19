import {
  CharacterImg,
  CharacterImgWrapper,
  CharacterInfo,
  CharacterInfoWrapper,
  CharacterWrapper
} from "./Character.styles";

const Character = ({name, description, comics = [], thumbnail}) => {

  let comicsList = comics.items.map(() => {
    return (
      <div>
        hello
      </div>
    )
  })

  return (
    <>
      <CharacterWrapper>
        <CharacterImgWrapper>
          <CharacterImg src={thumbnail.path + '.' + thumbnail.extension} alt=""/>
        </CharacterImgWrapper>
        <CharacterInfoWrapper>
          <CharacterInfo>Name: {name}</CharacterInfo>
          <CharacterInfo>Description: {description}</CharacterInfo>
        </CharacterInfoWrapper>
      </CharacterWrapper>
      <div>
        {comicsList}
      </div>
    </>
  )
}

export default Character