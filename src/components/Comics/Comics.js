import {comics as data} from '../../data'
import Card from "../../common/Card/Card";
import CardList from "../../common/CardList/CardList";

const Comics = () => {

  let comics = data.map(comics => {
    return <Card name={comics.title} thumbnail={comics.thumbnail.path + '.' + comics.thumbnail.extension}/>
  })

  return (
    <CardList>
      {comics}
    </CardList>
  )
}

export default Comics