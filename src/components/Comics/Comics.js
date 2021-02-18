import {comics as data} from '../../data'
import Card from "../../common/components/Card/Card";
import CardList from "../../common/components/CardList/CardList";

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