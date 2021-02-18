import {characters as data} from "../../data";
import Card from "../../common/Card/Card";
import CardList from "../../common/CardList/CardList";

const Characters = () => {
  let characters = data.map(character => {
    return <Card name={character.name} thumbnail={character.thumbnail.path + '.' + character.thumbnail.extension}/>
  })

  return (
    <CardList>
      {characters}
    </CardList>
  )
}

export default Characters