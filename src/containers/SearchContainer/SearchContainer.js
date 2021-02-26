import {useSelector} from "react-redux";
import CharacterCard from "../../components/CharacterCard";
import Grid from "../../common/Grid";

const SearchContainer = () => {

  const {items, isLoading} = useSelector(state => state.search)

  const heroes = items.map(hero => {
    return <CharacterCard key={hero.id} id={hero.id} name={hero.name}
                   img={hero.thumbnail.path + '.' + hero.thumbnail.extension} favorite={true}/>
  })

  return isLoading ? <div>Loading...</div> : (
    <Grid>
      {heroes.length ? heroes : <div>Nothing found</div>}
    </Grid>
  )
}

export default SearchContainer