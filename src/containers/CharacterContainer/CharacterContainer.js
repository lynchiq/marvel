import {useRouteMatch} from "react-router-dom";
import {characters as data} from "../../data";
import Character from "../../components/Character";

const CharacterContainer = () => {
  let match = useRouteMatch("/characters/:id");

  let character = data.find(c => {
    return String(c.id) === match.params.id
  })

  return <Character {...character}/>
}

export default CharacterContainer