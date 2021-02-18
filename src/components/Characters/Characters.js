import {characters as data} from "../../data";
import Card from "../../common/components/Card/Card";
import CardList from "../../common/components/CardList/CardList";

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